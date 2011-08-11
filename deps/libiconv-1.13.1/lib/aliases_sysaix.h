/* ANSI-C code produced by gperf version 3.0.4 */
/* Command-line: gperf -m 10 lib/aliases_sysaix.gperf  */
/* Computed positions: -k'1,3-11,$' */

#if !((' ' == 32) && ('!' == 33) && ('"' == 34) && ('#' == 35) \
      && ('%' == 37) && ('&' == 38) && ('\'' == 39) && ('(' == 40) \
      && (')' == 41) && ('*' == 42) && ('+' == 43) && (',' == 44) \
      && ('-' == 45) && ('.' == 46) && ('/' == 47) && ('0' == 48) \
      && ('1' == 49) && ('2' == 50) && ('3' == 51) && ('4' == 52) \
      && ('5' == 53) && ('6' == 54) && ('7' == 55) && ('8' == 56) \
      && ('9' == 57) && (':' == 58) && (';' == 59) && ('<' == 60) \
      && ('=' == 61) && ('>' == 62) && ('?' == 63) && ('A' == 65) \
      && ('B' == 66) && ('C' == 67) && ('D' == 68) && ('E' == 69) \
      && ('F' == 70) && ('G' == 71) && ('H' == 72) && ('I' == 73) \
      && ('J' == 74) && ('K' == 75) && ('L' == 76) && ('M' == 77) \
      && ('N' == 78) && ('O' == 79) && ('P' == 80) && ('Q' == 81) \
      && ('R' == 82) && ('S' == 83) && ('T' == 84) && ('U' == 85) \
      && ('V' == 86) && ('W' == 87) && ('X' == 88) && ('Y' == 89) \
      && ('Z' == 90) && ('[' == 91) && ('\\' == 92) && (']' == 93) \
      && ('^' == 94) && ('_' == 95) && ('a' == 97) && ('b' == 98) \
      && ('c' == 99) && ('d' == 100) && ('e' == 101) && ('f' == 102) \
      && ('g' == 103) && ('h' == 104) && ('i' == 105) && ('j' == 106) \
      && ('k' == 107) && ('l' == 108) && ('m' == 109) && ('n' == 110) \
      && ('o' == 111) && ('p' == 112) && ('q' == 113) && ('r' == 114) \
      && ('s' == 115) && ('t' == 116) && ('u' == 117) && ('v' == 118) \
      && ('w' == 119) && ('x' == 120) && ('y' == 121) && ('z' == 122) \
      && ('{' == 123) && ('|' == 124) && ('}' == 125) && ('~' == 126))
/* The character set is not based on ISO-646.  */
#error "gperf generated tables don't work with this execution character set. Please report a bug to <bug-gnu-gperf@gnu.org>."
#endif

#line 1 "lib/aliases_sysaix.gperf"
struct alias { int name; unsigned int encoding_index; };

#define TOTAL_KEYWORDS 372
#define MIN_WORD_LENGTH 2
#define MAX_WORD_LENGTH 45
#define MIN_HASH_VALUE 11
#define MAX_HASH_VALUE 1148
/* maximum key range = 1138, duplicates = 0 */

#ifdef __GNUC__
__inline
#else
#ifdef __cplusplus
inline
#endif
#endif
static unsigned int
aliases_hash (register const char *str, register unsigned int len)
{
  static const unsigned short asso_values[] =
    {
      1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149,
      1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149,
      1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149,
      1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149,
      1149, 1149, 1149, 1149, 1149,   14,  192, 1149,   17,    4,
        11,    8,  100,    6,    5,  201,    9,   24,   56, 1149,
      1149, 1149, 1149, 1149, 1149,   59,  293,    6,   86,  127,
       171,  144,   35,    8,   25,  188,    5,  109,    9,    4,
       121, 1149,   51,   41,   30,  158,   81,   61,  382,   20,
        11, 1149, 1149, 1149, 1149,  113, 1149, 1149, 1149, 1149,
      1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149,
      1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149,
      1149, 1149, 1149, 1149, 1149, 1149, 1149, 1149
    };
  register int hval = len;

  switch (hval)
    {
      default:
        hval += asso_values[(unsigned char)str[10]];
      /*FALLTHROUGH*/
      case 10:
        hval += asso_values[(unsigned char)str[9]];
      /*FALLTHROUGH*/
      case 9:
        hval += asso_values[(unsigned char)str[8]];
      /*FALLTHROUGH*/
      case 8:
        hval += asso_values[(unsigned char)str[7]];
      /*FALLTHROUGH*/
      case 7:
        hval += asso_values[(unsigned char)str[6]];
      /*FALLTHROUGH*/
      case 6:
        hval += asso_values[(unsigned char)str[5]];
      /*FALLTHROUGH*/
      case 5:
        hval += asso_values[(unsigned char)str[4]];
      /*FALLTHROUGH*/
      case 4:
        hval += asso_values[(unsigned char)str[3]];
      /*FALLTHROUGH*/
      case 3:
        hval += asso_values[(unsigned char)str[2]];
      /*FALLTHROUGH*/
      case 2:
      case 1:
        hval += asso_values[(unsigned char)str[0]];
        break;
    }
  return hval + asso_values[(unsigned char)str[len - 1]];
}

struct stringpool_t
  {
    char stringpool_str11[sizeof("L1")];
    char stringpool_str12[sizeof("L6")];
    char stringpool_str13[sizeof("L5")];
    char stringpool_str15[sizeof("L3")];
    char stringpool_str16[sizeof("L8")];
    char stringpool_str17[sizeof("CN")];
    char stringpool_str18[sizeof("L2")];
    char stringpool_str22[sizeof("866")];
    char stringpool_str34[sizeof("862")];
    char stringpool_str35[sizeof("CP866")];
    char stringpool_str36[sizeof("CP1131")];
    char stringpool_str37[sizeof("CP1361")];
    char stringpool_str41[sizeof("CP1251")];
    char stringpool_str42[sizeof("L10")];
    char stringpool_str43[sizeof("CP1256")];
    char stringpool_str44[sizeof("CP1133")];
    char stringpool_str45[sizeof("CP1255")];
    char stringpool_str46[sizeof("850")];
    char stringpool_str47[sizeof("CP862")];
    char stringpool_str48[sizeof("HZ")];
    char stringpool_str49[sizeof("CP1253")];
    char stringpool_str51[sizeof("CP1258")];
    char stringpool_str53[sizeof("CP936")];
    char stringpool_str55[sizeof("CP1252")];
    char stringpool_str57[sizeof("C99")];
    char stringpool_str60[sizeof("CP850")];
    char stringpool_str62[sizeof("R8")];
    char stringpool_str65[sizeof("CP932")];
    char stringpool_str66[sizeof("LATIN1")];
    char stringpool_str67[sizeof("CP1250")];
    char stringpool_str68[sizeof("LATIN6")];
    char stringpool_str70[sizeof("LATIN5")];
    char stringpool_str72[sizeof("CP819")];
    char stringpool_str74[sizeof("LATIN3")];
    char stringpool_str75[sizeof("CP950")];
    char stringpool_str76[sizeof("LATIN8")];
    char stringpool_str77[sizeof("CP51932")];
    char stringpool_str80[sizeof("LATIN2")];
    char stringpool_str91[sizeof("ISO8859-1")];
    char stringpool_str93[sizeof("ISO8859-6")];
    char stringpool_str94[sizeof("ASCII")];
    char stringpool_str95[sizeof("ISO8859-5")];
    char stringpool_str96[sizeof("ISO8859-11")];
    char stringpool_str97[sizeof("LATIN10")];
    char stringpool_str98[sizeof("ISO8859-16")];
    char stringpool_str99[sizeof("ISO8859-3")];
    char stringpool_str100[sizeof("ISO8859-15")];
    char stringpool_str101[sizeof("ISO8859-8")];
    char stringpool_str103[sizeof("CYRILLIC")];
    char stringpool_str104[sizeof("ISO8859-13")];
    char stringpool_str105[sizeof("ISO8859-2")];
    char stringpool_str106[sizeof("ISO-8859-1")];
    char stringpool_str107[sizeof("L4")];
    char stringpool_str108[sizeof("ISO-8859-6")];
    char stringpool_str110[sizeof("ISO-8859-5")];
    char stringpool_str111[sizeof("ISO-8859-11")];
    char stringpool_str113[sizeof("ISO-8859-16")];
    char stringpool_str114[sizeof("ISO-8859-3")];
    char stringpool_str115[sizeof("ISO-8859-15")];
    char stringpool_str116[sizeof("ISO-8859-8")];
    char stringpool_str117[sizeof("ISO-IR-6")];
    char stringpool_str119[sizeof("ISO-8859-13")];
    char stringpool_str120[sizeof("ISO-8859-2")];
    char stringpool_str121[sizeof("LATIN-9")];
    char stringpool_str122[sizeof("ISO8859-10")];
    char stringpool_str124[sizeof("MAC")];
    char stringpool_str125[sizeof("ISO-2022-CN")];
    char stringpool_str127[sizeof("TIS620")];
    char stringpool_str128[sizeof("ISO-IR-166")];
    char stringpool_str130[sizeof("ISO-IR-165")];
    char stringpool_str131[sizeof("ISO8859-9")];
    char stringpool_str132[sizeof("ISO-IR-58")];
    char stringpool_str133[sizeof("TCVN")];
    char stringpool_str134[sizeof("ISO-IR-126")];
    char stringpool_str135[sizeof("SJIS")];
    char stringpool_str136[sizeof("JIS0208")];
    char stringpool_str137[sizeof("ISO-8859-10")];
    char stringpool_str138[sizeof("ISO-IR-101")];
    char stringpool_str139[sizeof("ISO-IR-138")];
    char stringpool_str141[sizeof("ISO-IR-226")];
    char stringpool_str142[sizeof("TIS-620")];
    char stringpool_str143[sizeof("CSASCII")];
    char stringpool_str144[sizeof("CSISO2022CN")];
    char stringpool_str146[sizeof("ISO-8859-9")];
    char stringpool_str147[sizeof("IBM866")];
    char stringpool_str148[sizeof("JP")];
    char stringpool_str150[sizeof("ISO-2022-CN-EXT")];
    char stringpool_str151[sizeof("ISO-IR-110")];
    char stringpool_str153[sizeof("ISO-IR-203")];
    char stringpool_str156[sizeof("MS936")];
    char stringpool_str158[sizeof("VISCII")];
    char stringpool_str159[sizeof("IBM862")];
    char stringpool_str160[sizeof("TIS620-0")];
    char stringpool_str162[sizeof("EUCCN")];
    char stringpool_str163[sizeof("IBM-1131")];
    char stringpool_str164[sizeof("ISO-IR-100")];
    char stringpool_str167[sizeof("ISO-IR-159")];
    char stringpool_str168[sizeof("MS932")];
    char stringpool_str169[sizeof("ISO646-CN")];
    char stringpool_str171[sizeof("CHAR")];
    char stringpool_str172[sizeof("IBM850")];
    char stringpool_str173[sizeof("UHC")];
    char stringpool_str174[sizeof("CSVISCII")];
    char stringpool_str177[sizeof("EUC-CN")];
    char stringpool_str178[sizeof("ISO-IR-109")];
    char stringpool_str180[sizeof("MS51932")];
    char stringpool_str181[sizeof("IBM-921")];
    char stringpool_str182[sizeof("IBM-1252")];
    char stringpool_str183[sizeof("CP949")];
    char stringpool_str184[sizeof("IBM819")];
    char stringpool_str185[sizeof("ISO-IR-199")];
    char stringpool_str187[sizeof("IBM-850")];
    char stringpool_str189[sizeof("CSISOLATIN1")];
    char stringpool_str191[sizeof("CSISOLATIN6")];
    char stringpool_str192[sizeof("IBM-932")];
    char stringpool_str193[sizeof("CSISOLATIN5")];
    char stringpool_str195[sizeof("GB2312")];
    char stringpool_str196[sizeof("RK1048")];
    char stringpool_str197[sizeof("CSISOLATIN3")];
    char stringpool_str199[sizeof("SJIS-WIN")];
    char stringpool_str200[sizeof("CSISOLATINCYRILLIC")];
    char stringpool_str201[sizeof("US")];
    char stringpool_str203[sizeof("CSISOLATIN2")];
    char stringpool_str204[sizeof("CSISO159JISX02121990")];
    char stringpool_str205[sizeof("ISO_8859-1")];
    char stringpool_str207[sizeof("ISO_8859-6")];
    char stringpool_str208[sizeof("L7")];
    char stringpool_str209[sizeof("ISO_8859-5")];
    char stringpool_str210[sizeof("ISO_8859-11")];
    char stringpool_str212[sizeof("ISO_8859-16")];
    char stringpool_str213[sizeof("ISO_8859-3")];
    char stringpool_str214[sizeof("ISO_8859-15")];
    char stringpool_str215[sizeof("ISO_8859-8")];
    char stringpool_str216[sizeof("ISO_8859-16:2001")];
    char stringpool_str217[sizeof("MS-CYRL")];
    char stringpool_str218[sizeof("ISO_8859-13")];
    char stringpool_str219[sizeof("ISO_8859-2")];
    char stringpool_str221[sizeof("CP154")];
    char stringpool_str222[sizeof("ISO_8859-15:1998")];
    char stringpool_str223[sizeof("GB18030")];
    char stringpool_str224[sizeof("ISO-CELTIC")];
    char stringpool_str226[sizeof("CYRILLIC-ASIAN")];
    char stringpool_str228[sizeof("JAVA")];
    char stringpool_str231[sizeof("ISO-IR-148")];
    char stringpool_str233[sizeof("CP1254")];
    char stringpool_str235[sizeof("ISO_8859-10:1992")];
    char stringpool_str236[sizeof("ISO_8859-10")];
    char stringpool_str240[sizeof("UCS-2")];
    char stringpool_str241[sizeof("MACCYRILLIC")];
    char stringpool_str245[sizeof("ISO_8859-9")];
    char stringpool_str251[sizeof("CSISOLATINARABIC")];
    char stringpool_str252[sizeof("ROMAN8")];
    char stringpool_str253[sizeof("ISO-2022-JP-1")];
    char stringpool_str255[sizeof("MS-ANSI")];
    char stringpool_str257[sizeof("JIS_C6226-1983")];
    char stringpool_str258[sizeof("LATIN4")];
    char stringpool_str260[sizeof("ISO-2022-JP-2")];
    char stringpool_str261[sizeof("ISO-IR-149")];
    char stringpool_str262[sizeof("MACTHAI")];
    char stringpool_str264[sizeof("CSISO14JISC6220RO")];
    char stringpool_str268[sizeof("JIS_C6220-1969-RO")];
    char stringpool_str272[sizeof("ARMSCII-8")];
    char stringpool_str273[sizeof("ISO_8859-5:1988")];
    char stringpool_str275[sizeof("ISO_8859-3:1988")];
    char stringpool_str276[sizeof("ISO_8859-8:1988")];
    char stringpool_str278[sizeof("CSISO2022JP2")];
    char stringpool_str282[sizeof("CSISOLATINHEBREW")];
    char stringpool_str283[sizeof("ISO8859-4")];
    char stringpool_str285[sizeof("KOI8-T")];
    char stringpool_str286[sizeof("MACINTOSH")];
    char stringpool_str288[sizeof("ISO8859-14")];
    char stringpool_str290[sizeof("EUCTW")];
    char stringpool_str291[sizeof("ISO-2022-JP-MS")];
    char stringpool_str298[sizeof("ISO-8859-4")];
    char stringpool_str300[sizeof("IBM-CP1133")];
    char stringpool_str302[sizeof("SJIS-MS")];
    char stringpool_str303[sizeof("ISO-8859-14")];
    char stringpool_str305[sizeof("EUC-TW")];
    char stringpool_str306[sizeof("ISO_8859-9:1989")];
    char stringpool_str308[sizeof("HP-ROMAN8")];
    char stringpool_str310[sizeof("US-ASCII")];
    char stringpool_str312[sizeof("ISO-IR-14")];
    char stringpool_str313[sizeof("WINDOWS-1251")];
    char stringpool_str314[sizeof("WINDOWS-1256")];
    char stringpool_str315[sizeof("WINDOWS-1255")];
    char stringpool_str316[sizeof("ISO_8859-14:1998")];
    char stringpool_str317[sizeof("WINDOWS-1253")];
    char stringpool_str318[sizeof("WINDOWS-1258")];
    char stringpool_str320[sizeof("WINDOWS-1252")];
    char stringpool_str324[sizeof("CSKOI8R")];
    char stringpool_str325[sizeof("CSWINDOWS31J")];
    char stringpool_str326[sizeof("WINDOWS-1250")];
    char stringpool_str327[sizeof("KOI8-R")];
    char stringpool_str329[sizeof("WINDOWS-936")];
    char stringpool_str334[sizeof("WINDOWS-51932")];
    char stringpool_str335[sizeof("ELOT_928")];
    char stringpool_str336[sizeof("PT154")];
    char stringpool_str339[sizeof("CSPC862LATINHEBREW")];
    char stringpool_str340[sizeof("MULELAO-1")];
    char stringpool_str341[sizeof("WINDOWS-932")];
    char stringpool_str343[sizeof("ECMA-118")];
    char stringpool_str346[sizeof("TIS620.2533-1")];
    char stringpool_str348[sizeof("KZ-1048")];
    char stringpool_str349[sizeof("WINDOWS-31J")];
    char stringpool_str351[sizeof("KSC_5601")];
    char stringpool_str352[sizeof("CSKZ1048")];
    char stringpool_str353[sizeof("CSMACINTOSH")];
    char stringpool_str355[sizeof("ISO-10646-UCS-2")];
    char stringpool_str358[sizeof("GB_2312-80")];
    char stringpool_str359[sizeof("TIS620.2533-0")];
    char stringpool_str361[sizeof("MACCROATIAN")];
    char stringpool_str362[sizeof("ISO-IR-179")];
    char stringpool_str363[sizeof("UTF-16")];
    char stringpool_str364[sizeof("MACROMAN")];
    char stringpool_str365[sizeof("TIS620.2529-1")];
    char stringpool_str366[sizeof("UTF-8")];
    char stringpool_str367[sizeof("ISO_8859-4:1988")];
    char stringpool_str368[sizeof("ISO-2022-JP")];
    char stringpool_str370[sizeof("GB_1988-80")];
    char stringpool_str374[sizeof("TCVN5712-1")];
    char stringpool_str376[sizeof("TCVN-5712")];
    char stringpool_str377[sizeof("VISCII1.1-1")];
    char stringpool_str379[sizeof("UTF-32")];
    char stringpool_str381[sizeof("CSISOLATIN4")];
    char stringpool_str383[sizeof("SJIS-OPEN")];
    char stringpool_str385[sizeof("ISO646-US")];
    char stringpool_str386[sizeof("WCHAR_T")];
    char stringpool_str387[sizeof("CSISO2022JP")];
    char stringpool_str388[sizeof("SHIFT-JIS")];
    char stringpool_str389[sizeof("EUCJP-WIN")];
    char stringpool_str391[sizeof("ISO-2022-KR")];
    char stringpool_str397[sizeof("ISO_8859-4")];
    char stringpool_str402[sizeof("ISO_8859-14")];
    char stringpool_str405[sizeof("EUCJP")];
    char stringpool_str409[sizeof("WINDOWS-1254")];
    char stringpool_str410[sizeof("CSISO2022KR")];
    char stringpool_str412[sizeof("ISO646-JP")];
    char stringpool_str413[sizeof("ISO-IR-144")];
    char stringpool_str416[sizeof("CSSHIFTJIS")];
    char stringpool_str417[sizeof("CSUCS4")];
    char stringpool_str418[sizeof("UCS-4")];
    char stringpool_str420[sizeof("EUC-JP")];
    char stringpool_str421[sizeof("CP874")];
    char stringpool_str422[sizeof("CSHPROMAN8")];
    char stringpool_str423[sizeof("X0201")];
    char stringpool_str424[sizeof("X0212")];
    char stringpool_str426[sizeof("CP367")];
    char stringpool_str427[sizeof("CSUNICODE11")];
    char stringpool_str428[sizeof("EUCKR")];
    char stringpool_str430[sizeof("ASMO-708")];
    char stringpool_str433[sizeof("X0208")];
    char stringpool_str435[sizeof("CP1257")];
    char stringpool_str437[sizeof("ARABIC")];
    char stringpool_str439[sizeof("TCVN5712-1:1993")];
    char stringpool_str440[sizeof("UNICODE-1-1")];
    char stringpool_str443[sizeof("EUC-KR")];
    char stringpool_str444[sizeof("ISO-10646-UCS-4")];
    char stringpool_str448[sizeof("CSIBM866")];
    char stringpool_str449[sizeof("KOREAN")];
    char stringpool_str452[sizeof("CHINESE")];
    char stringpool_str453[sizeof("BIG5")];
    char stringpool_str455[sizeof("IBM-EUCCN")];
    char stringpool_str456[sizeof("CSEUCTW")];
    char stringpool_str460[sizeof("LATIN7")];
    char stringpool_str463[sizeof("ISO_8859-1:1987")];
    char stringpool_str464[sizeof("ISO_8859-6:1987")];
    char stringpool_str465[sizeof("PTCP154")];
    char stringpool_str467[sizeof("ISO_8859-7:2003")];
    char stringpool_str468[sizeof("BIG-5")];
    char stringpool_str469[sizeof("CSBIG5")];
    char stringpool_str470[sizeof("ISO_8859-2:1987")];
    char stringpool_str476[sizeof("STRK1048-2002")];
    char stringpool_str477[sizeof("EUCJPMS")];
    char stringpool_str482[sizeof("UCS-2-INTERNAL")];
    char stringpool_str483[sizeof("MACROMANIA")];
    char stringpool_str484[sizeof("CN-BIG5")];
    char stringpool_str485[sizeof("ISO8859-7")];
    char stringpool_str487[sizeof("SHIFT_JIS")];
    char stringpool_str490[sizeof("UCS-2LE")];
    char stringpool_str491[sizeof("CSPC850MULTILINGUAL")];
    char stringpool_str492[sizeof("EUCJP-MS")];
    char stringpool_str496[sizeof("CSGB2312")];
    char stringpool_str500[sizeof("ISO-8859-7")];
    char stringpool_str503[sizeof("CSPTCP154")];
    char stringpool_str507[sizeof("EUC-JP-MS")];
    char stringpool_str508[sizeof("KS_C_5601-1989")];
    char stringpool_str509[sizeof("MS-EE")];
    char stringpool_str510[sizeof("WINDOWS-1257")];
    char stringpool_str511[sizeof("MACICELAND")];
    char stringpool_str515[sizeof("CSKSC56011987")];
    char stringpool_str516[sizeof("ISO-IR-57")];
    char stringpool_str517[sizeof("CSISOLATINGREEK")];
    char stringpool_str519[sizeof("ISO-IR-87")];
    char stringpool_str521[sizeof("ISO-IR-157")];
    char stringpool_str523[sizeof("GBK")];
    char stringpool_str525[sizeof("ECMA-114")];
    char stringpool_str526[sizeof("ISO-IR-127")];
    char stringpool_str527[sizeof("MS_KANJI")];
    char stringpool_str534[sizeof("GEORGIAN-ACADEMY")];
    char stringpool_str538[sizeof("IBM367")];
    char stringpool_str540[sizeof("CSUNICODE")];
    char stringpool_str541[sizeof("KOI8-U")];
    char stringpool_str555[sizeof("HZ-GB-2312")];
    char stringpool_str557[sizeof("JISX0201-1976")];
    char stringpool_str562[sizeof("CSISO58GB231280")];
    char stringpool_str571[sizeof("UCS-4-INTERNAL")];
    char stringpool_str573[sizeof("EUCJP-OPEN")];
    char stringpool_str574[sizeof("CSHALFWIDTHKATAKANA")];
    char stringpool_str579[sizeof("UCS-4LE")];
    char stringpool_str583[sizeof("IBM-EUCTW")];
    char stringpool_str587[sizeof("ISO_646.IRV:1991")];
    char stringpool_str593[sizeof("KOI8-RU")];
    char stringpool_str594[sizeof("CSEUCKR")];
    char stringpool_str599[sizeof("ISO_8859-7")];
    char stringpool_str602[sizeof("UNICODELITTLE")];
    char stringpool_str603[sizeof("CN-GB-ISOIR165")];
    char stringpool_str606[sizeof("MACARABIC")];
    char stringpool_str610[sizeof("GREEK8")];
    char stringpool_str613[sizeof("SHIFT_JIS-MS")];
    char stringpool_str619[sizeof("UTF-16LE")];
    char stringpool_str623[sizeof("JIS_X0201")];
    char stringpool_str624[sizeof("JIS_X0212")];
    char stringpool_str628[sizeof("CSUNICODE11UTF7")];
    char stringpool_str629[sizeof("UTF-32LE")];
    char stringpool_str633[sizeof("JIS_X0208")];
    char stringpool_str634[sizeof("HEBREW")];
    char stringpool_str643[sizeof("UNICODE-1-1-UTF-7")];
    char stringpool_str647[sizeof("GEORGIAN-PS")];
    char stringpool_str653[sizeof("JIS_X0212-1990")];
    char stringpool_str655[sizeof("JIS_X0208-1983")];
    char stringpool_str660[sizeof("ISO_8859-7:1987")];
    char stringpool_str664[sizeof("JIS_X0208-1990")];
    char stringpool_str671[sizeof("MACTURKISH")];
    char stringpool_str672[sizeof("MACCENTRALEUROPE")];
    char stringpool_str685[sizeof("KS_C_5601-1987")];
    char stringpool_str687[sizeof("MS-HEBR")];
    char stringpool_str697[sizeof("WINDOWS-874")];
    char stringpool_str698[sizeof("IBM-EUCJP")];
    char stringpool_str710[sizeof("JOHAB")];
    char stringpool_str721[sizeof("IBM-EUCKR")];
    char stringpool_str740[sizeof("UCS-2-SWAPPED")];
    char stringpool_str744[sizeof("WINBALTRIM")];
    char stringpool_str745[sizeof("MS-TURK")];
    char stringpool_str749[sizeof("CSISO87JISX0208")];
    char stringpool_str750[sizeof("UTF-7")];
    char stringpool_str753[sizeof("CSISO57GB1988")];
    char stringpool_str755[sizeof("CN-GB")];
    char stringpool_str778[sizeof("UCS-2BE")];
    char stringpool_str779[sizeof("GREEK")];
    char stringpool_str804[sizeof("BIG5HKSCS")];
    char stringpool_str819[sizeof("BIG5-HKSCS")];
    char stringpool_str829[sizeof("UCS-4-SWAPPED")];
    char stringpool_str833[sizeof("JIS_X0212.1990-0")];
    char stringpool_str843[sizeof("BIG5-HKSCS:2001")];
    char stringpool_str852[sizeof("MACUKRAINE")];
    char stringpool_str863[sizeof("BIG5-HKSCS:1999")];
    char stringpool_str867[sizeof("UCS-4BE")];
    char stringpool_str869[sizeof("NEXTSTEP")];
    char stringpool_str879[sizeof("MACHEBREW")];
    char stringpool_str885[sizeof("MS-ARAB")];
    char stringpool_str907[sizeof("UTF-16BE")];
    char stringpool_str917[sizeof("UTF-32BE")];
    char stringpool_str939[sizeof("BIG5-HKSCS:2004")];
    char stringpool_str940[sizeof("ANSI_X3.4-1986")];
    char stringpool_str944[sizeof("ANSI_X3.4-1968")];
    char stringpool_str948[sizeof("MACGREEK")];
    char stringpool_str956[sizeof("MS-GREEK")];
    char stringpool_str958[sizeof("BIGFIVE")];
    char stringpool_str973[sizeof("BIG-FIVE")];
    char stringpool_str988[sizeof("UNICODEBIG")];
    char stringpool_str1044[sizeof("EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE")];
    char stringpool_str1148[sizeof("CSEUCPKDFMTJAPANESE")];
  };
static const struct stringpool_t stringpool_contents =
  {
    "L1",
    "L6",
    "L5",
    "L3",
    "L8",
    "CN",
    "L2",
    "866",
    "862",
    "CP866",
    "CP1131",
    "CP1361",
    "CP1251",
    "L10",
    "CP1256",
    "CP1133",
    "CP1255",
    "850",
    "CP862",
    "HZ",
    "CP1253",
    "CP1258",
    "CP936",
    "CP1252",
    "C99",
    "CP850",
    "R8",
    "CP932",
    "LATIN1",
    "CP1250",
    "LATIN6",
    "LATIN5",
    "CP819",
    "LATIN3",
    "CP950",
    "LATIN8",
    "CP51932",
    "LATIN2",
    "ISO8859-1",
    "ISO8859-6",
    "ASCII",
    "ISO8859-5",
    "ISO8859-11",
    "LATIN10",
    "ISO8859-16",
    "ISO8859-3",
    "ISO8859-15",
    "ISO8859-8",
    "CYRILLIC",
    "ISO8859-13",
    "ISO8859-2",
    "ISO-8859-1",
    "L4",
    "ISO-8859-6",
    "ISO-8859-5",
    "ISO-8859-11",
    "ISO-8859-16",
    "ISO-8859-3",
    "ISO-8859-15",
    "ISO-8859-8",
    "ISO-IR-6",
    "ISO-8859-13",
    "ISO-8859-2",
    "LATIN-9",
    "ISO8859-10",
    "MAC",
    "ISO-2022-CN",
    "TIS620",
    "ISO-IR-166",
    "ISO-IR-165",
    "ISO8859-9",
    "ISO-IR-58",
    "TCVN",
    "ISO-IR-126",
    "SJIS",
    "JIS0208",
    "ISO-8859-10",
    "ISO-IR-101",
    "ISO-IR-138",
    "ISO-IR-226",
    "TIS-620",
    "CSASCII",
    "CSISO2022CN",
    "ISO-8859-9",
    "IBM866",
    "JP",
    "ISO-2022-CN-EXT",
    "ISO-IR-110",
    "ISO-IR-203",
    "MS936",
    "VISCII",
    "IBM862",
    "TIS620-0",
    "EUCCN",
    "IBM-1131",
    "ISO-IR-100",
    "ISO-IR-159",
    "MS932",
    "ISO646-CN",
    "CHAR",
    "IBM850",
    "UHC",
    "CSVISCII",
    "EUC-CN",
    "ISO-IR-109",
    "MS51932",
    "IBM-921",
    "IBM-1252",
    "CP949",
    "IBM819",
    "ISO-IR-199",
    "IBM-850",
    "CSISOLATIN1",
    "CSISOLATIN6",
    "IBM-932",
    "CSISOLATIN5",
    "GB2312",
    "RK1048",
    "CSISOLATIN3",
    "SJIS-WIN",
    "CSISOLATINCYRILLIC",
    "US",
    "CSISOLATIN2",
    "CSISO159JISX02121990",
    "ISO_8859-1",
    "ISO_8859-6",
    "L7",
    "ISO_8859-5",
    "ISO_8859-11",
    "ISO_8859-16",
    "ISO_8859-3",
    "ISO_8859-15",
    "ISO_8859-8",
    "ISO_8859-16:2001",
    "MS-CYRL",
    "ISO_8859-13",
    "ISO_8859-2",
    "CP154",
    "ISO_8859-15:1998",
    "GB18030",
    "ISO-CELTIC",
    "CYRILLIC-ASIAN",
    "JAVA",
    "ISO-IR-148",
    "CP1254",
    "ISO_8859-10:1992",
    "ISO_8859-10",
    "UCS-2",
    "MACCYRILLIC",
    "ISO_8859-9",
    "CSISOLATINARABIC",
    "ROMAN8",
    "ISO-2022-JP-1",
    "MS-ANSI",
    "JIS_C6226-1983",
    "LATIN4",
    "ISO-2022-JP-2",
    "ISO-IR-149",
    "MACTHAI",
    "CSISO14JISC6220RO",
    "JIS_C6220-1969-RO",
    "ARMSCII-8",
    "ISO_8859-5:1988",
    "ISO_8859-3:1988",
    "ISO_8859-8:1988",
    "CSISO2022JP2",
    "CSISOLATINHEBREW",
    "ISO8859-4",
    "KOI8-T",
    "MACINTOSH",
    "ISO8859-14",
    "EUCTW",
    "ISO-2022-JP-MS",
    "ISO-8859-4",
    "IBM-CP1133",
    "SJIS-MS",
    "ISO-8859-14",
    "EUC-TW",
    "ISO_8859-9:1989",
    "HP-ROMAN8",
    "US-ASCII",
    "ISO-IR-14",
    "WINDOWS-1251",
    "WINDOWS-1256",
    "WINDOWS-1255",
    "ISO_8859-14:1998",
    "WINDOWS-1253",
    "WINDOWS-1258",
    "WINDOWS-1252",
    "CSKOI8R",
    "CSWINDOWS31J",
    "WINDOWS-1250",
    "KOI8-R",
    "WINDOWS-936",
    "WINDOWS-51932",
    "ELOT_928",
    "PT154",
    "CSPC862LATINHEBREW",
    "MULELAO-1",
    "WINDOWS-932",
    "ECMA-118",
    "TIS620.2533-1",
    "KZ-1048",
    "WINDOWS-31J",
    "KSC_5601",
    "CSKZ1048",
    "CSMACINTOSH",
    "ISO-10646-UCS-2",
    "GB_2312-80",
    "TIS620.2533-0",
    "MACCROATIAN",
    "ISO-IR-179",
    "UTF-16",
    "MACROMAN",
    "TIS620.2529-1",
    "UTF-8",
    "ISO_8859-4:1988",
    "ISO-2022-JP",
    "GB_1988-80",
    "TCVN5712-1",
    "TCVN-5712",
    "VISCII1.1-1",
    "UTF-32",
    "CSISOLATIN4",
    "SJIS-OPEN",
    "ISO646-US",
    "WCHAR_T",
    "CSISO2022JP",
    "SHIFT-JIS",
    "EUCJP-WIN",
    "ISO-2022-KR",
    "ISO_8859-4",
    "ISO_8859-14",
    "EUCJP",
    "WINDOWS-1254",
    "CSISO2022KR",
    "ISO646-JP",
    "ISO-IR-144",
    "CSSHIFTJIS",
    "CSUCS4",
    "UCS-4",
    "EUC-JP",
    "CP874",
    "CSHPROMAN8",
    "X0201",
    "X0212",
    "CP367",
    "CSUNICODE11",
    "EUCKR",
    "ASMO-708",
    "X0208",
    "CP1257",
    "ARABIC",
    "TCVN5712-1:1993",
    "UNICODE-1-1",
    "EUC-KR",
    "ISO-10646-UCS-4",
    "CSIBM866",
    "KOREAN",
    "CHINESE",
    "BIG5",
    "IBM-EUCCN",
    "CSEUCTW",
    "LATIN7",
    "ISO_8859-1:1987",
    "ISO_8859-6:1987",
    "PTCP154",
    "ISO_8859-7:2003",
    "BIG-5",
    "CSBIG5",
    "ISO_8859-2:1987",
    "STRK1048-2002",
    "EUCJPMS",
    "UCS-2-INTERNAL",
    "MACROMANIA",
    "CN-BIG5",
    "ISO8859-7",
    "SHIFT_JIS",
    "UCS-2LE",
    "CSPC850MULTILINGUAL",
    "EUCJP-MS",
    "CSGB2312",
    "ISO-8859-7",
    "CSPTCP154",
    "EUC-JP-MS",
    "KS_C_5601-1989",
    "MS-EE",
    "WINDOWS-1257",
    "MACICELAND",
    "CSKSC56011987",
    "ISO-IR-57",
    "CSISOLATINGREEK",
    "ISO-IR-87",
    "ISO-IR-157",
    "GBK",
    "ECMA-114",
    "ISO-IR-127",
    "MS_KANJI",
    "GEORGIAN-ACADEMY",
    "IBM367",
    "CSUNICODE",
    "KOI8-U",
    "HZ-GB-2312",
    "JISX0201-1976",
    "CSISO58GB231280",
    "UCS-4-INTERNAL",
    "EUCJP-OPEN",
    "CSHALFWIDTHKATAKANA",
    "UCS-4LE",
    "IBM-EUCTW",
    "ISO_646.IRV:1991",
    "KOI8-RU",
    "CSEUCKR",
    "ISO_8859-7",
    "UNICODELITTLE",
    "CN-GB-ISOIR165",
    "MACARABIC",
    "GREEK8",
    "SHIFT_JIS-MS",
    "UTF-16LE",
    "JIS_X0201",
    "JIS_X0212",
    "CSUNICODE11UTF7",
    "UTF-32LE",
    "JIS_X0208",
    "HEBREW",
    "UNICODE-1-1-UTF-7",
    "GEORGIAN-PS",
    "JIS_X0212-1990",
    "JIS_X0208-1983",
    "ISO_8859-7:1987",
    "JIS_X0208-1990",
    "MACTURKISH",
    "MACCENTRALEUROPE",
    "KS_C_5601-1987",
    "MS-HEBR",
    "WINDOWS-874",
    "IBM-EUCJP",
    "JOHAB",
    "IBM-EUCKR",
    "UCS-2-SWAPPED",
    "WINBALTRIM",
    "MS-TURK",
    "CSISO87JISX0208",
    "UTF-7",
    "CSISO57GB1988",
    "CN-GB",
    "UCS-2BE",
    "GREEK",
    "BIG5HKSCS",
    "BIG5-HKSCS",
    "UCS-4-SWAPPED",
    "JIS_X0212.1990-0",
    "BIG5-HKSCS:2001",
    "MACUKRAINE",
    "BIG5-HKSCS:1999",
    "UCS-4BE",
    "NEXTSTEP",
    "MACHEBREW",
    "MS-ARAB",
    "UTF-16BE",
    "UTF-32BE",
    "BIG5-HKSCS:2004",
    "ANSI_X3.4-1986",
    "ANSI_X3.4-1968",
    "MACGREEK",
    "MS-GREEK",
    "BIGFIVE",
    "BIG-FIVE",
    "UNICODEBIG",
    "EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE",
    "CSEUCPKDFMTJAPANESE"
  };
#define stringpool ((const char *) &stringpool_contents)

static const struct alias aliases[] =
  {
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 60 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str11, ei_iso8859_1},
#line 134 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str12, ei_iso8859_10},
#line 126 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str13, ei_iso8859_9},
    {-1},
#line 76 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str15, ei_iso8859_3},
#line 152 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str16, ei_iso8859_14},
#line 292 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str17, ei_iso646_cn},
#line 68 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str18, ei_iso8859_2},
    {-1}, {-1}, {-1},
#line 210 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str22, ei_cp866},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 206 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str34, ei_cp862},
#line 208 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str35, ei_cp866},
#line 212 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str36, ei_cp1131},
#line 379 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str37, ei_johab},
    {-1}, {-1}, {-1},
#line 175 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str41, ei_cp1251},
#line 166 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str42, ei_iso8859_16},
#line 191 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str43, ei_cp1256},
#line 248 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str44, ei_cp1133},
#line 188 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str45, ei_cp1255},
#line 201 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str46, ei_cp850},
#line 204 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str47, ei_cp862},
#line 354 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str48, ei_hz},
#line 182 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str49, ei_cp1253},
    {-1},
#line 197 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str51, ei_cp1258},
    {-1},
#line 347 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str53, ei_cp936},
    {-1},
#line 178 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str55, ei_cp1252},
    {-1},
#line 51 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str57, ei_c99},
    {-1}, {-1},
#line 199 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str60, ei_cp850},
    {-1},
#line 231 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str62, ei_hp_roman8},
    {-1}, {-1},
#line 324 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str65, ei_cp932},
#line 59 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str66, ei_iso8859_1},
#line 172 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str67, ei_cp1250},
#line 133 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str68, ei_iso8859_10},
    {-1},
#line 125 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str70, ei_iso8859_9},
    {-1},
#line 57 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str72, ei_iso8859_1},
    {-1},
#line 75 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str74, ei_iso8859_3},
#line 366 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str75, ei_cp950},
#line 151 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str76, ei_iso8859_14},
#line 316 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str77, ei_cp51932},
    {-1}, {-1},
#line 67 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str80, ei_iso8859_2},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 62 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str91, ei_iso8859_1},
    {-1},
#line 102 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str93, ei_iso8859_6},
#line 13 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str94, ei_ascii},
#line 93 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str95, ei_iso8859_5},
#line 139 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str96, ei_iso8859_11},
#line 165 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str97, ei_iso8859_16},
#line 167 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str98, ei_iso8859_16},
#line 78 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str99, ei_iso8859_3},
#line 160 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str100, ei_iso8859_15},
#line 120 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str101, ei_iso8859_8},
    {-1},
#line 91 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str103, ei_iso8859_5},
#line 145 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str104, ei_iso8859_13},
#line 70 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str105, ei_iso8859_2},
#line 53 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str106, ei_iso8859_1},
#line 84 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str107, ei_iso8859_4},
#line 94 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str108, ei_iso8859_6},
    {-1},
#line 87 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str110, ei_iso8859_5},
#line 137 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str111, ei_iso8859_11},
    {-1},
#line 161 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str113, ei_iso8859_16},
#line 71 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str114, ei_iso8859_3},
#line 155 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str115, ei_iso8859_15},
#line 114 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str116, ei_iso8859_8},
#line 16 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str117, ei_ascii},
    {-1},
#line 140 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str119, ei_iso8859_13},
#line 63 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str120, ei_iso8859_2},
#line 159 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str121, ei_iso8859_15},
#line 136 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str122, ei_iso8859_10},
    {-1},
#line 216 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str124, ei_mac_roman},
#line 351 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str125, ei_iso2022_cn},
    {-1},
#line 251 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str127, ei_tis620},
#line 256 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str128, ei_tis620},
    {-1},
#line 298 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str130, ei_isoir165},
#line 128 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str131, ei_iso8859_9},
#line 295 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str132, ei_gb2312},
#line 262 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str133, ei_tcvn},
#line 107 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str134, ei_iso8859_7},
#line 321 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str135, ei_sjis},
#line 278 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str136, ei_jisx0208},
#line 129 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str137, ei_iso8859_10},
#line 66 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str138, ei_iso8859_2},
#line 117 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str139, ei_iso8859_8},
    {-1},
#line 164 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str141, ei_iso8859_16},
#line 250 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str142, ei_tis620},
#line 22 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str143, ei_ascii},
#line 352 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str144, ei_iso2022_cn},
    {-1},
#line 121 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str146, ei_iso8859_9},
#line 209 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str147, ei_cp866},
#line 269 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str148, ei_iso646_jp},
    {-1},
#line 353 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str150, ei_iso2022_cn_ext},
#line 82 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str151, ei_iso8859_4},
    {-1},
#line 158 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str153, ei_iso8859_15},
    {-1}, {-1},
#line 348 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str156, ei_cp936},
    {-1},
#line 259 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str158, ei_viscii},
#line 205 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str159, ei_cp862},
#line 252 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str160, ei_tis620},
    {-1},
#line 341 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str162, ei_euc_cn},
#line 213 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str163, ei_cp1131},
#line 56 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str164, ei_iso8859_1},
    {-1}, {-1},
#line 287 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str167, ei_jisx0212},
#line 330 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str168, ei_cp932},
#line 290 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str169, ei_iso646_cn},
    {-1},
#line 382 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str171, ei_local_char},
#line 200 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str172, ei_cp850},
#line 377 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str173, ei_cp949},
#line 261 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str174, ei_viscii},
    {-1}, {-1},
#line 340 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str177, ei_euc_cn},
#line 74 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str178, ei_iso8859_3},
    {-1},
#line 318 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str180, ei_cp51932},
#line 146 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str181, ei_iso8859_13},
#line 181 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str182, ei_cp1252},
#line 376 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str183, ei_cp949},
#line 58 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str184, ei_iso8859_1},
#line 150 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str185, ei_iso8859_14},
    {-1},
#line 203 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str187, ei_cp850},
    {-1},
#line 61 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str189, ei_iso8859_1},
    {-1},
#line 135 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str191, ei_iso8859_10},
#line 333 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str192, ei_cp932},
#line 127 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str193, ei_iso8859_9},
    {-1},
#line 342 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str195, ei_euc_cn},
#line 243 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str196, ei_rk1048},
#line 77 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str197, ei_iso8859_3},
    {-1},
#line 328 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str199, ei_cp932},
#line 92 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str200, ei_iso8859_5},
#line 21 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str201, ei_ascii},
    {-1},
#line 69 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str203, ei_iso8859_2},
#line 288 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str204, ei_jisx0212},
#line 54 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str205, ei_iso8859_1},
    {-1},
#line 95 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str207, ei_iso8859_6},
#line 144 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str208, ei_iso8859_13},
#line 88 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str209, ei_iso8859_5},
#line 138 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str210, ei_iso8859_11},
    {-1},
#line 162 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str212, ei_iso8859_16},
#line 72 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str213, ei_iso8859_3},
#line 156 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str214, ei_iso8859_15},
#line 115 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str215, ei_iso8859_8},
#line 163 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str216, ei_iso8859_16},
#line 177 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str217, ei_cp1251},
#line 141 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str218, ei_iso8859_13},
#line 64 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str219, ei_iso8859_2},
    {-1},
#line 240 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str221, ei_pt154},
#line 157 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str222, ei_iso8859_15},
#line 350 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str223, ei_gb18030},
#line 153 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str224, ei_iso8859_14},
    {-1},
#line 241 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str226, ei_pt154},
    {-1},
#line 52 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str228, ei_java},
    {-1}, {-1},
#line 124 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str231, ei_iso8859_9},
    {-1},
#line 185 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str233, ei_cp1254},
    {-1},
#line 131 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str235, ei_iso8859_10},
#line 130 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str236, ei_iso8859_10},
    {-1}, {-1}, {-1},
#line 24 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str240, ei_ucs2},
#line 222 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str241, ei_mac_cyrillic},
    {-1}, {-1}, {-1},
#line 122 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str245, ei_iso8859_9},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 101 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str251, ei_iso8859_6},
#line 230 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str252, ei_hp_roman8},
#line 337 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str253, ei_iso2022_jp1},
    {-1},
#line 180 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str255, ei_cp1252},
    {-1},
#line 281 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str257, ei_jisx0208},
#line 83 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str258, ei_iso8859_4},
    {-1},
#line 338 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str260, ei_iso2022_jp2},
#line 303 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str261, ei_ksc5601},
#line 228 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str262, ei_mac_thai},
    {-1},
#line 270 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str264, ei_iso646_jp},
    {-1}, {-1}, {-1},
#line 266 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str268, ei_iso646_jp},
    {-1}, {-1}, {-1},
#line 234 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str272, ei_armscii_8},
#line 89 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str273, ei_iso8859_5},
    {-1},
#line 73 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str275, ei_iso8859_3},
#line 116 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str276, ei_iso8859_8},
    {-1},
#line 339 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str278, ei_iso2022_jp2},
    {-1}, {-1}, {-1},
#line 119 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str282, ei_iso8859_8},
#line 86 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str283, ei_iso8859_4},
    {-1},
#line 237 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str285, ei_koi8_t},
#line 215 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str286, ei_mac_roman},
    {-1},
#line 154 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str288, ei_iso8859_14},
    {-1},
#line 357 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str290, ei_euc_tw},
#line 336 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str291, ei_iso2022_jpms},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 79 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str298, ei_iso8859_4},
    {-1},
#line 249 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str300, ei_cp1133},
    {-1},
#line 332 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str302, ei_cp932},
#line 147 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str303, ei_iso8859_14},
    {-1},
#line 356 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str305, ei_euc_tw},
#line 123 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str306, ei_iso8859_9},
    {-1},
#line 229 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str308, ei_hp_roman8},
    {-1},
#line 12 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str310, ei_ascii},
    {-1},
#line 268 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str312, ei_iso646_jp},
#line 176 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str313, ei_cp1251},
#line 192 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str314, ei_cp1256},
#line 189 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str315, ei_cp1255},
#line 149 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str316, ei_iso8859_14},
#line 183 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str317, ei_cp1253},
#line 198 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str318, ei_cp1258},
    {-1},
#line 179 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str320, ei_cp1252},
    {-1}, {-1}, {-1},
#line 169 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str324, ei_koi8_r},
#line 326 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str325, ei_cp932},
#line 173 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str326, ei_cp1250},
#line 168 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str327, ei_koi8_r},
    {-1},
#line 349 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str329, ei_cp936},
    {-1}, {-1}, {-1}, {-1},
#line 317 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str334, ei_cp51932},
#line 109 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str335, ei_iso8859_7},
#line 238 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str336, ei_pt154},
    {-1}, {-1},
#line 207 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str339, ei_cp862},
#line 247 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str340, ei_mulelao},
#line 329 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str341, ei_cp932},
    {-1},
#line 108 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str343, ei_iso8859_7},
    {-1}, {-1},
#line 255 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str346, ei_tis620},
    {-1},
#line 245 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str348, ei_rk1048},
#line 325 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str349, ei_cp932},
    {-1},
#line 300 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str351, ei_ksc5601},
#line 246 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str352, ei_rk1048},
#line 217 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str353, ei_mac_roman},
    {-1},
#line 25 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str355, ei_ucs2},
    {-1}, {-1},
#line 294 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str358, ei_gb2312},
#line 254 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str359, ei_tis620},
    {-1},
#line 220 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str361, ei_mac_croatian},
#line 142 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str362, ei_iso8859_13},
#line 38 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str363, ei_utf16},
#line 214 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str364, ei_mac_roman},
#line 253 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str365, ei_tis620},
#line 23 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str366, ei_utf8},
#line 81 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str367, ei_iso8859_4},
#line 334 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str368, ei_iso2022_jp},
    {-1},
#line 289 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str370, ei_iso646_cn},
    {-1}, {-1}, {-1},
#line 264 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str374, ei_tcvn},
    {-1},
#line 263 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str376, ei_tcvn},
#line 260 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str377, ei_viscii},
    {-1},
#line 41 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str379, ei_utf32},
    {-1},
#line 85 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str381, ei_iso8859_4},
    {-1},
#line 327 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str383, ei_cp932},
    {-1},
#line 14 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str385, ei_ascii},
#line 383 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str386, ei_local_wchar_t},
#line 335 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str387, ei_iso2022_jp},
#line 320 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str388, ei_sjis},
#line 314 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str389, ei_eucjp_ms},
    {-1},
#line 380 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str391, ei_iso2022_kr},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 80 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str397, ei_iso8859_4},
    {-1}, {-1}, {-1}, {-1},
#line 148 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str402, ei_iso8859_14},
    {-1}, {-1},
#line 307 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str405, ei_euc_jp},
    {-1}, {-1}, {-1},
#line 186 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str409, ei_cp1254},
#line 381 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str410, ei_iso2022_kr},
    {-1},
#line 267 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str412, ei_iso646_jp},
#line 90 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str413, ei_iso8859_5},
    {-1}, {-1},
#line 323 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str416, ei_sjis},
#line 35 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str417, ei_ucs4},
#line 33 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str418, ei_ucs4},
    {-1},
#line 306 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str420, ei_euc_jp},
#line 257 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str421, ei_cp874},
#line 232 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str422, ei_hp_roman8},
#line 273 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str423, ei_jisx0201},
#line 286 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str424, ei_jisx0212},
    {-1},
#line 19 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str426, ei_ascii},
#line 30 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str427, ei_ucs2be},
#line 373 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str428, ei_euc_kr},
    {-1},
#line 99 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str430, ei_iso8859_6},
    {-1}, {-1},
#line 279 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str433, ei_jisx0208},
    {-1},
#line 194 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str435, ei_cp1257},
    {-1},
#line 100 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str437, ei_iso8859_6},
    {-1},
#line 265 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str439, ei_tcvn},
#line 29 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str440, ei_ucs2be},
    {-1}, {-1},
#line 372 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str443, ei_euc_kr},
#line 34 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str444, ei_ucs4},
    {-1}, {-1}, {-1},
#line 211 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str448, ei_cp866},
#line 305 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str449, ei_ksc5601},
    {-1}, {-1},
#line 297 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str452, ei_gb2312},
#line 360 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str453, ei_ces_big5},
    {-1},
#line 345 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str455, ei_euc_cn},
#line 358 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str456, ei_euc_tw},
    {-1}, {-1}, {-1},
#line 143 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str460, ei_iso8859_13},
    {-1}, {-1},
#line 55 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str463, ei_iso8859_1},
#line 96 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str464, ei_iso8859_6},
#line 239 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str465, ei_pt154},
    {-1},
#line 106 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str467, ei_iso8859_7},
#line 361 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str468, ei_ces_big5},
#line 365 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str469, ei_ces_big5},
#line 65 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str470, ei_iso8859_2},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 244 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str476, ei_rk1048},
#line 315 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str477, ei_eucjp_ms},
    {-1}, {-1}, {-1}, {-1},
#line 47 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str482, ei_ucs2internal},
#line 221 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str483, ei_mac_romania},
#line 364 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str484, ei_ces_big5},
#line 113 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str485, ei_iso8859_7},
    {-1},
#line 319 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str487, ei_sjis},
    {-1}, {-1},
#line 31 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str490, ei_ucs2le},
#line 202 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str491, ei_cp850},
#line 311 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str492, ei_eucjp_ms},
    {-1}, {-1}, {-1},
#line 344 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str496, ei_euc_cn},
    {-1}, {-1}, {-1},
#line 103 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str500, ei_iso8859_7},
    {-1}, {-1},
#line 242 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str503, ei_pt154},
    {-1}, {-1}, {-1},
#line 313 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str507, ei_eucjp_ms},
#line 302 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str508, ei_ksc5601},
#line 174 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str509, ei_cp1250},
#line 195 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str510, ei_cp1257},
#line 219 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str511, ei_mac_iceland},
    {-1}, {-1}, {-1},
#line 304 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str515, ei_ksc5601},
#line 291 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str516, ei_iso646_cn},
#line 112 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str517, ei_iso8859_7},
    {-1},
#line 280 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str519, ei_jisx0208},
    {-1},
#line 132 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str521, ei_iso8859_10},
    {-1},
#line 346 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str523, ei_ces_gbk},
    {-1},
#line 98 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str525, ei_iso8859_6},
#line 97 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str526, ei_iso8859_6},
#line 322 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str527, ei_sjis},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 235 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str534, ei_georgian_academy},
    {-1}, {-1}, {-1},
#line 20 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str538, ei_ascii},
    {-1},
#line 26 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str540, ei_ucs2},
#line 170 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str541, ei_koi8_u},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1},
#line 355 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str555, ei_hz},
    {-1},
#line 272 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str557, ei_jisx0201},
    {-1}, {-1}, {-1}, {-1},
#line 296 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str562, ei_gb2312},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 49 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str571, ei_ucs4internal},
    {-1},
#line 312 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str573, ei_eucjp_ms},
#line 274 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str574, ei_jisx0201},
    {-1}, {-1}, {-1}, {-1},
#line 37 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str579, ei_ucs4le},
    {-1}, {-1}, {-1},
#line 359 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str583, ei_euc_tw},
    {-1}, {-1}, {-1},
#line 15 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str587, ei_ascii},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 171 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str593, ei_koi8_ru},
#line 374 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str594, ei_euc_kr},
    {-1}, {-1}, {-1}, {-1},
#line 104 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str599, ei_iso8859_7},
    {-1}, {-1},
#line 32 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str602, ei_ucs2le},
#line 299 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str603, ei_isoir165},
    {-1}, {-1},
#line 227 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str606, ei_mac_arabic},
    {-1}, {-1}, {-1},
#line 110 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str610, ei_iso8859_7},
    {-1}, {-1},
#line 331 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str613, ei_cp932},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 40 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str619, ei_utf16le},
    {-1}, {-1}, {-1},
#line 271 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str623, ei_jisx0201},
#line 283 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str624, ei_jisx0212},
    {-1}, {-1}, {-1},
#line 46 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str628, ei_utf7},
#line 43 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str629, ei_utf32le},
    {-1}, {-1}, {-1},
#line 275 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str633, ei_jisx0208},
#line 118 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str634, ei_iso8859_8},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 45 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str643, ei_utf7},
    {-1}, {-1}, {-1},
#line 236 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str647, ei_georgian_ps},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 285 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str653, ei_jisx0212},
    {-1},
#line 276 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str655, ei_jisx0208},
    {-1}, {-1}, {-1}, {-1},
#line 105 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str660, ei_iso8859_7},
    {-1}, {-1}, {-1},
#line 277 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str664, ei_jisx0208},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 225 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str671, ei_mac_turkish},
#line 218 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str672, ei_mac_centraleurope},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1},
#line 301 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str685, ei_ksc5601},
    {-1},
#line 190 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str687, ei_cp1255},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 258 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str697, ei_cp874},
#line 310 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str698, ei_euc_jp},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 378 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str710, ei_johab},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 375 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str721, ei_euc_kr},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 48 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str740, ei_ucs2swapped},
    {-1}, {-1}, {-1},
#line 196 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str744, ei_cp1257},
#line 187 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str745, ei_cp1254},
    {-1}, {-1}, {-1},
#line 282 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str749, ei_jisx0208},
#line 44 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str750, ei_utf7},
    {-1}, {-1},
#line 293 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str753, ei_iso646_cn},
    {-1},
#line 343 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str755, ei_euc_cn},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1},
#line 27 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str778, ei_ucs2be},
#line 111 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str779, ei_iso8859_7},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 370 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str804, ei_big5hkscs2004},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 369 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str819, ei_big5hkscs2004},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 50 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str829, ei_ucs4swapped},
    {-1}, {-1}, {-1},
#line 284 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str833, ei_jisx0212},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 368 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str843, ei_big5hkscs2001},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 223 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str852, ei_mac_ukraine},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 367 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str863, ei_big5hkscs1999},
    {-1}, {-1}, {-1},
#line 36 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str867, ei_ucs4be},
    {-1},
#line 233 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str869, ei_nextstep},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 226 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str879, ei_mac_hebrew},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 193 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str885, ei_cp1256},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1},
#line 39 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str907, ei_utf16be},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 42 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str917, ei_utf32be},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1},
#line 371 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str939, ei_big5hkscs2004},
#line 18 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str940, ei_ascii},
    {-1}, {-1}, {-1},
#line 17 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str944, ei_ascii},
    {-1}, {-1}, {-1},
#line 224 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str948, ei_mac_greek},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 184 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str956, ei_cp1253},
    {-1},
#line 363 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str958, ei_ces_big5},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 362 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str973, ei_ces_big5},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 28 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str988, ei_ucs2be},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 308 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1044, ei_euc_jp},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1},
#line 309 "lib/aliases_sysaix.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1148, ei_euc_jp}
  };

#ifdef __GNUC__
__inline
#if defined __GNUC_STDC_INLINE__ || defined __GNUC_GNU_INLINE__
__attribute__ ((__gnu_inline__))
#endif
#endif
const struct alias *
aliases_lookup (register const char *str, register unsigned int len)
{
  if (len <= MAX_WORD_LENGTH && len >= MIN_WORD_LENGTH)
    {
      register int key = aliases_hash (str, len);

      if (key <= MAX_HASH_VALUE && key >= 0)
        {
          register int o = aliases[key].name;
          if (o >= 0)
            {
              register const char *s = o + stringpool;

              if (*str == *s && !strcmp (str + 1, s + 1))
                return &aliases[key];
            }
        }
    }
  return 0;
}
