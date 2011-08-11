/*
 * Copyright (C) 1999-2004 Free Software Foundation, Inc.
 * This file is part of the GNU LIBICONV Library.
 *
 * The GNU LIBICONV Library is free software; you can redistribute it
 * and/or modify it under the terms of the GNU Library General Public
 * License as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * The GNU LIBICONV Library is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 * You should have received a copy of the GNU Library General Public
 * License along with the GNU LIBICONV Library; see the file COPYING.LIB.
 * If not, write to the Free Software Foundation, Inc., 59 Temple Place -
 * Suite 330, Boston, MA 02111-1307, USA.
 */

/*
 * iso2022_jpms
 */

#define ESC 0x1b

/*
 * The state can be one of the following values.
 */
#define STATE_ASCII         0
#define STATE_JISX0201KANA  1
#define STATE_JISX0208      2
#define STATE_UDC           3

static int
iso2022_jpms_mbtowc (conv_t conv, ucs4_t *pwc, const unsigned char *s, int n)
{
  state_t state = conv->istate;
  int count = 0;
  unsigned char c;
  for (;;) {
    c = *s;
    if (c == ESC) {
      if (n < count+3)
        goto none;
      if (s[1] == '(') {
        if (s[2] == 'B' || s[2] == 'J') {
          state = STATE_ASCII;
          s += 3; count += 3;
          if (n < count+1)
            goto none;
          continue;
        }
        if (s[2] == 'I') {
          state = STATE_JISX0201KANA;
          s += 3; count += 3;
          if (n < count+1)
            goto none;
          continue;
        }
        return RET_ILSEQ;
      }
      if (s[1] == '$') {
        if (s[2] == '@' || s[2] == 'B') {
          /* We don't distinguish JIS X 0208-1978 and JIS X 0208-1983. */
          state = STATE_JISX0208;
          s += 3; count += 3;
          if (n < count+1)
            goto none;
          continue;
        }
        else if (s[2] == '(') {
          if (n <count+4)
            goto none;
          if (s[3] == '?') {
            state = STATE_UDC;
            s += 4; count += 4;
            if (n < count+1)
              goto none;
            continue;
          }
        }
        return RET_ILSEQ;
      }
      return RET_ILSEQ;
    }
    break;
  }

  switch (state) {
    int ret;
    unsigned char c1, c2;
    case STATE_ASCII:
      if (c < 0x80) {
        ret = ascii_mbtowc(conv,pwc,s,1);
        if (ret == RET_ILSEQ)
          return RET_ILSEQ;
        if (ret != 1) abort();
        conv->istate = state;
        return count+1;
      } /*else
         *return RET_ILSEQ;*/
    case STATE_JISX0201KANA:
      if (c > 0x20)
        c |= 0x80;
      ret = jisx0201_mbtowc(conv,pwc,&c,1);
      if (ret == RET_ILSEQ)
        return RET_ILSEQ;
      if (ret != 1) abort();
      conv->istate = state;
      return count+1;
    case STATE_JISX0208:
      if (n < count+2)
        goto none;
      if (s[0] == 0x21 || s[0] == 0x22 || s[0] == 0x2d
               || (0x79 <= s[0] && s[0] <= 0x7c))
      {
        /* iso2022_jpms Rows 1,2,13,89-92 */
        c1 = s[0];
        c2 = s[1];
        if (0x21 <= c2 && c2 <= 0x7e) {
          unsigned char t1 = (c1 - 0x21) >> 1;
          unsigned char t2 = (((c1 - 0x21) & 1) ? 0x5e : 0) + (c2 - 0x21);
          unsigned char buf[2];
          buf[0] = (t1 < 0x1f ? t1+0x81 : t1+0xc1);
          buf[1] = (t2 < 0x3f ? t2+0x40 : t2+0x41);
          ret = cp932ext_mbtowc(conv,pwc,buf,2);
          if (ret == RET_ILSEQ)
            return RET_ILSEQ;
          if (ret != 2) abort();
          conv->istate = state;
          return count+2;
        } else
          return RET_ILSEQ;
      }
      else if (0x21 <= s[0] && s[0] <= 0x7e) {
        /* JIS X 0208 Rows 3-12,14-94 */
        if (0x21 <= s[1] && s[1] <= 0x7e) {
          ret = jisx0208_mbtowc(conv,pwc,s,2);
          if (ret == RET_ILSEQ)
            return RET_ILSEQ;
          if (ret != 2) abort();
          conv->istate = state;
          return count+2;
        } else
          return RET_ILSEQ;
      } else
        return RET_ILSEQ;
    case STATE_UDC:
      if (n < count+2)
        goto none;
      if (0x21 <= s[0] && s[0] <= 0x34) {
        if (0x21 <= s[1] && s[1] <= 0x7e) {
          *pwc = (s[0] - 0x21) * 94 + (s[1] - 0x21) + 0xe000;
          conv->istate = state;
          return count+2;
        } else
          return RET_ILSEQ;
      } else
        return RET_ILSEQ;
    default: abort();
  }

none:
  conv->istate = state;
  return RET_TOOFEW(count);
}

static int
iso2022_jpms_wctomb (conv_t conv, unsigned char *r, ucs4_t wc, int n)
{
  state_t state = conv->ostate;
  unsigned char buf[2];
  int ret;

  switch (wc) {
    case 0x2014: wc = 0x2015; break;
  }

  switch (wc) {
    /* JIS X 0201 Roman to ASCII */
    case 0x00a5: wc = 0x005c; break;
    case 0x203e: wc = 0x007e; break;
    /* JIS to Microsoft */
    case 0x2014: wc = 0x2015; break;
  }

  /* Try ASCII. */
  ret = ascii_wctomb(conv,buf,wc,1);
  if (ret != RET_ILUNI) {
    if (ret != 1) abort();
    if (buf[0] < 0x80) {
      int count = (state == STATE_ASCII ? 1 : 4);
      if (n < count)
        return RET_TOOSMALL;
      if (state != STATE_ASCII) {
        r[0] = ESC;
        r[1] = '(';
        r[2] = 'B';
        r += 3;
        state = STATE_ASCII;
      }
      r[0] = buf[0];
      conv->ostate = state;
      return count;
    }
  }

  /* Try JIS X 0208-1990 in place of JIS X 0208-1978 and JIS X 0208-1983. */
  ret = jisx0208_wctomb(conv,buf,wc,2);
  if (ret != RET_ILUNI) {
    if (ret != 2) abort();
    if (buf[0] < 0x80 && buf[1] < 0x80) {
      int count = 2;
      if (n < count)
        return RET_TOOSMALL;
      if (state != STATE_JISX0208) {
        count = 5;
        if (n < count)
          return RET_TOOSMALL;
        r[0] = ESC;
        r[1] = '$';
        r[2] = 'B';
        r += 3;
        state = STATE_JISX0208;
      }
      r[0] = buf[0];
      r[1] = buf[1];
      conv->ostate = state;
      return count;
    }
  }

  /* Try cp932ext */
  ret = cp932ext_wctomb(conv,buf,wc,2);
  if (ret != RET_ILUNI) {
    unsigned char s1, s2;
    int count = 2;
    if (ret != 2) abort();
    if (n < count)
      return RET_TOOSMALL;
    if (state != STATE_JISX0208) {
      count = 5;
      if (n < count)
        return RET_TOOSMALL;
      r[0] = ESC;
      r[1] = '$';
      r[2] = 'B';
      r += 3;
      state = STATE_JISX0208;
    }
    s1 = buf[0];
    s2 = buf[1];
    if (s1 < 0xf0) {
      unsigned char t1 = (s1 < 0xe0 ? s1-0x81 : s1-0xc1);
      unsigned char t2 = (s2 < 0x80 ? s2-0x40 : s2-0x41);
      r[0] = 2*t1 + (t2 < 0x5e ? 0 : 1) + 0x21;
      r[1] = (t2 < 0x5e ? t2 : t2-0x5e) + 0x21;
      conv->ostate = state;
      return count;
    }
    else if (s1 >= 0xfa) {
      unsigned short linear = 188 * s1 + (s2 < 0x7f ? s2-0x40 : s2-0x41);
      if (0xb7b4 <= linear)
        linear -= 0xb7b4 - 0xae0c;
      else if (0xb7ad <= linear)
        linear -= 0xb7ad - 0xaf81;
      else
        linear -= 0xb798 - 0xaf76;
      r[0] = (linear - 0x819e) / 94;
      r[1] = linear % 94 + 0x21;
      conv->ostate = state;
      return count;
    }
    else
      return RET_ILUNI;
  }

  /* Try JIS X 0201-1976 Kana. */
  ret = jisx0201_wctomb(conv,buf,wc,1);
  if (ret != RET_ILUNI) {
    if (ret != 1) abort();
    if (buf[0] > 0x80) {
      int count = (state == STATE_JISX0201KANA ? 1 : 4);
      if (n < count)
        return RET_TOOSMALL;
      if (state != STATE_JISX0201KANA) {
        r[0] = ESC;
        r[1] = '(';
        r[2] = 'I';
        r += 3;
        state = STATE_JISX0201KANA;
      }
      r[0] = buf[0] & 0x7f;
      conv->ostate = state;
      return count;
    }
  }

  /* User-defined range */
  if (wc >= 0xe000 && wc < 0xe758) {
    unsigned char c1, c2;
    int count = (state == STATE_UDC  ? 2 : 6);
    c1 = (unsigned char)((wc - 0xe000) / 94 + 0x21);
    c2 = (unsigned char)((wc - 0xe000) % 94 + 0x21);
    if (n < count)
      return RET_TOOSMALL;
    if (state != STATE_UDC) {
      r[0] = ESC;
      r[1] = '$';
      r[2] = '(';
      r[3] = '?';
      r += 4;
      state = STATE_UDC;
    }
    r[0] = c1;
    r[1] = c2;
    conv->ostate = state;
    return count;
  }

  return RET_ILUNI;
}

static int
iso2022_jpms_reset (conv_t conv, unsigned char *r, int n)
{
  state_t state = conv->ostate;
  if (state != STATE_ASCII) {
    if (n < 3)
      return RET_TOOSMALL;
    r[0] = ESC;
    r[1] = '(';
    r[2] = 'B';
    /* conv->ostate = 0; will be done by the caller */
    return 3;
  } else
    return 0;
}

#undef STATE_UDC
#undef STATE_JISX0208
#undef STATE_JISX0201KANA
#undef STATE_ASCII
