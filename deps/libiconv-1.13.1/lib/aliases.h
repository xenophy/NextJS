/* ANSI-C code produced by gperf version 3.0.4 */
/* Command-line: gperf -m 10 lib/aliases.gperf  */
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

#line 1 "lib/aliases.gperf"
struct alias { int name; unsigned int encoding_index; };

#define TOTAL_KEYWORDS 363
#define MIN_WORD_LENGTH 2
#define MAX_WORD_LENGTH 45
#define MIN_HASH_VALUE 10
#define MAX_HASH_VALUE 1227
/* maximum key range = 1218, duplicates = 0 */

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
      1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228,
      1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228,
      1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228,
      1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228,
      1228, 1228, 1228, 1228, 1228,   10,   87, 1228,   58,    0,
         5,    4,   37,    2,    1,  121,   11,   14,  314, 1228,
      1228, 1228, 1228, 1228, 1228,   43,  183,    0,  196,  109,
       113,  170,   82,    0,   61,  140,   36,  145,   12,    0,
        72, 1228,   80,    6,  100,  191,  218,   29,  345,   28,
         2, 1228, 1228, 1228, 1228,   39, 1228, 1228, 1228, 1228,
      1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228,
      1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228,
      1228, 1228, 1228, 1228, 1228, 1228, 1228, 1228
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
    char stringpool_str10[sizeof("CP1131")];
    char stringpool_str11[sizeof("CP1361")];
    char stringpool_str13[sizeof("CP1251")];
    char stringpool_str14[sizeof("CN")];
    char stringpool_str15[sizeof("CP1256")];
    char stringpool_str16[sizeof("866")];
    char stringpool_str17[sizeof("CP1255")];
    char stringpool_str18[sizeof("CP1133")];
    char stringpool_str19[sizeof("CP866")];
    char stringpool_str21[sizeof("CP1253")];
    char stringpool_str22[sizeof("SJIS")];
    char stringpool_str23[sizeof("CP1252")];
    char stringpool_str24[sizeof("862")];
    char stringpool_str25[sizeof("CP936")];
    char stringpool_str27[sizeof("CP862")];
    char stringpool_str31[sizeof("C99")];
    char stringpool_str33[sizeof("CP932")];
    char stringpool_str35[sizeof("CP1258")];
    char stringpool_str37[sizeof("CP51932")];
    char stringpool_str38[sizeof("L1")];
    char stringpool_str39[sizeof("L6")];
    char stringpool_str40[sizeof("L5")];
    char stringpool_str42[sizeof("L3")];
    char stringpool_str43[sizeof("L2")];
    char stringpool_str44[sizeof("CP819")];
    char stringpool_str48[sizeof("ASCII")];
    char stringpool_str49[sizeof("L8")];
    char stringpool_str56[sizeof("CSASCII")];
    char stringpool_str57[sizeof("ISO8859-1")];
    char stringpool_str58[sizeof("ISO8859-11")];
    char stringpool_str59[sizeof("ISO8859-6")];
    char stringpool_str60[sizeof("ISO8859-16")];
    char stringpool_str61[sizeof("ISO8859-5")];
    char stringpool_str62[sizeof("ISO8859-15")];
    char stringpool_str65[sizeof("ISO8859-3")];
    char stringpool_str66[sizeof("ISO8859-13")];
    char stringpool_str67[sizeof("ISO8859-2")];
    char stringpool_str68[sizeof("ISO-8859-1")];
    char stringpool_str69[sizeof("ISO-8859-11")];
    char stringpool_str70[sizeof("ISO-8859-6")];
    char stringpool_str71[sizeof("ISO-8859-16")];
    char stringpool_str72[sizeof("ISO-8859-5")];
    char stringpool_str73[sizeof("ISO-8859-15")];
    char stringpool_str75[sizeof("L4")];
    char stringpool_str76[sizeof("ISO-8859-3")];
    char stringpool_str77[sizeof("ISO-8859-13")];
    char stringpool_str78[sizeof("ISO-8859-2")];
    char stringpool_str79[sizeof("ISO8859-8")];
    char stringpool_str81[sizeof("CP154")];
    char stringpool_str82[sizeof("ISO646-CN")];
    char stringpool_str83[sizeof("SJIS-WIN")];
    char stringpool_str84[sizeof("CP949")];
    char stringpool_str85[sizeof("ISO8859-9")];
    char stringpool_str86[sizeof("HZ")];
    char stringpool_str87[sizeof("CP1254")];
    char stringpool_str90[sizeof("ISO-8859-8")];
    char stringpool_str93[sizeof("R8")];
    char stringpool_str96[sizeof("ISO-8859-9")];
    char stringpool_str97[sizeof("ISO_8859-1")];
    char stringpool_str98[sizeof("ISO_8859-11")];
    char stringpool_str99[sizeof("ISO_8859-6")];
    char stringpool_str100[sizeof("ISO_8859-16")];
    char stringpool_str101[sizeof("ISO_8859-5")];
    char stringpool_str102[sizeof("ISO_8859-15")];
    char stringpool_str104[sizeof("ISO_8859-16:2001")];
    char stringpool_str105[sizeof("ISO_8859-3")];
    char stringpool_str106[sizeof("ISO_8859-13")];
    char stringpool_str107[sizeof("ISO_8859-2")];
    char stringpool_str110[sizeof("ISO-IR-6")];
    char stringpool_str113[sizeof("ISO-IR-166")];
    char stringpool_str114[sizeof("CSISO2022CN")];
    char stringpool_str115[sizeof("ISO-IR-165")];
    char stringpool_str116[sizeof("ISO_8859-15:1998")];
    char stringpool_str117[sizeof("ISO-IR-126")];
    char stringpool_str119[sizeof("ISO_8859-8")];
    char stringpool_str122[sizeof("ISO-IR-226")];
    char stringpool_str125[sizeof("ISO_8859-9")];
    char stringpool_str127[sizeof("CSISO14JISC6220RO")];
    char stringpool_str128[sizeof("ISO-2022-CN")];
    char stringpool_str129[sizeof("CP1250")];
    char stringpool_str130[sizeof("850")];
    char stringpool_str131[sizeof("ISO8859-4")];
    char stringpool_str132[sizeof("ISO8859-14")];
    char stringpool_str133[sizeof("ISO-IR-58")];
    char stringpool_str134[sizeof("CP850")];
    char stringpool_str135[sizeof("JP")];
    char stringpool_str136[sizeof("ISO-IR-138")];
    char stringpool_str137[sizeof("CP950")];
    char stringpool_str138[sizeof("EUCCN")];
    char stringpool_str140[sizeof("ISO-IR-159")];
    char stringpool_str142[sizeof("ISO-8859-4")];
    char stringpool_str143[sizeof("ISO-8859-14")];
    char stringpool_str146[sizeof("JIS_C6226-1983")];
    char stringpool_str148[sizeof("MAC")];
    char stringpool_str149[sizeof("EUC-CN")];
    char stringpool_str151[sizeof("ISO_8859-14:1998")];
    char stringpool_str152[sizeof("ISO-IR-199")];
    char stringpool_str153[sizeof("PT154")];
    char stringpool_str154[sizeof("LATIN1")];
    char stringpool_str155[sizeof("L10")];
    char stringpool_str156[sizeof("LATIN6")];
    char stringpool_str158[sizeof("LATIN5")];
    char stringpool_str159[sizeof("L7")];
    char stringpool_str160[sizeof("CYRILLIC")];
    char stringpool_str162[sizeof("LATIN3")];
    char stringpool_str164[sizeof("LATIN2")];
    char stringpool_str165[sizeof("IBM866")];
    char stringpool_str166[sizeof("ISO_8859-10:1992")];
    char stringpool_str167[sizeof("CSISO159JISX02121990")];
    char stringpool_str168[sizeof("ISO-IR-101")];
    char stringpool_str169[sizeof("ISO-IR-148")];
    char stringpool_str170[sizeof("MS936")];
    char stringpool_str171[sizeof("ISO_8859-4")];
    char stringpool_str172[sizeof("ISO_8859-14")];
    char stringpool_str173[sizeof("IBM862")];
    char stringpool_str174[sizeof("ISO8859-10")];
    char stringpool_str175[sizeof("ISO-IR-149")];
    char stringpool_str176[sizeof("LATIN8")];
    char stringpool_str178[sizeof("MS932")];
    char stringpool_str181[sizeof("ISO-IR-203")];
    char stringpool_str182[sizeof("MS51932")];
    char stringpool_str183[sizeof("ISO-IR-14")];
    char stringpool_str185[sizeof("ISO-8859-10")];
    char stringpool_str186[sizeof("SJIS-MS")];
    char stringpool_str190[sizeof("IBM819")];
    char stringpool_str193[sizeof("LATIN-9")];
    char stringpool_str194[sizeof("UHC")];
    char stringpool_str195[sizeof("GB2312")];
    char stringpool_str196[sizeof("ISO-IR-109")];
    char stringpool_str199[sizeof("US")];
    char stringpool_str202[sizeof("JIS_C6220-1969-RO")];
    char stringpool_str203[sizeof("RK1048")];
    char stringpool_str207[sizeof("CHAR")];
    char stringpool_str208[sizeof("CSISOLATIN1")];
    char stringpool_str210[sizeof("CSISOLATIN6")];
    char stringpool_str211[sizeof("CP874")];
    char stringpool_str212[sizeof("CSISOLATIN5")];
    char stringpool_str214[sizeof("ISO_8859-10")];
    char stringpool_str215[sizeof("CSISOLATINCYRILLIC")];
    char stringpool_str216[sizeof("CSISOLATIN3")];
    char stringpool_str217[sizeof("JIS0208")];
    char stringpool_str218[sizeof("CSISOLATIN2")];
    char stringpool_str220[sizeof("ISO-2022-CN-EXT")];
    char stringpool_str221[sizeof("ISO-IR-144")];
    char stringpool_str222[sizeof("UCS-2")];
    char stringpool_str223[sizeof("MS-ANSI")];
    char stringpool_str226[sizeof("ISO-IR-110")];
    char stringpool_str227[sizeof("PTCP154")];
    char stringpool_str228[sizeof("LATIN4")];
    char stringpool_str229[sizeof("CSISO2022JP2")];
    char stringpool_str230[sizeof("VISCII")];
    char stringpool_str232[sizeof("CSVISCII")];
    char stringpool_str234[sizeof("TIS620")];
    char stringpool_str235[sizeof("ARMSCII-8")];
    char stringpool_str236[sizeof("SJIS-OPEN")];
    char stringpool_str237[sizeof("CYRILLIC-ASIAN")];
    char stringpool_str239[sizeof("ISO-2022-JP-1")];
    char stringpool_str244[sizeof("ISO-2022-JP-2")];
    char stringpool_str245[sizeof("TIS-620")];
    char stringpool_str246[sizeof("ISO-2022-JP-MS")];
    char stringpool_str248[sizeof("KSC_5601")];
    char stringpool_str249[sizeof("IBM-CP1133")];
    char stringpool_str252[sizeof("CP367")];
    char stringpool_str255[sizeof("CP1257")];
    char stringpool_str256[sizeof("CSISOLATINARABIC")];
    char stringpool_str258[sizeof("US-ASCII")];
    char stringpool_str259[sizeof("ISO-IR-179")];
    char stringpool_str261[sizeof("ISO646-US")];
    char stringpool_str263[sizeof("ISO646-JP")];
    char stringpool_str265[sizeof("ISO-CELTIC")];
    char stringpool_str267[sizeof("CSKZ1048")];
    char stringpool_str271[sizeof("LATIN10")];
    char stringpool_str272[sizeof("EUCTW")];
    char stringpool_str274[sizeof("KZ-1048")];
    char stringpool_str275[sizeof("ARABIC")];
    char stringpool_str277[sizeof("CSUCS4")];
    char stringpool_str280[sizeof("IBM850")];
    char stringpool_str282[sizeof("CSISOLATIN4")];
    char stringpool_str283[sizeof("EUC-TW")];
    char stringpool_str284[sizeof("ISO-IR-100")];
    char stringpool_str285[sizeof("TIS620.2533-1")];
    char stringpool_str286[sizeof("UCS-4")];
    char stringpool_str295[sizeof("CSISO2022JP")];
    char stringpool_str296[sizeof("TIS620.2529-1")];
    char stringpool_str297[sizeof("ELOT_928")];
    char stringpool_str299[sizeof("ISO8859-7")];
    char stringpool_str301[sizeof("WINDOWS-1251")];
    char stringpool_str302[sizeof("WINDOWS-1256")];
    char stringpool_str303[sizeof("WINDOWS-1255")];
    char stringpool_str304[sizeof("TIS620-0")];
    char stringpool_str305[sizeof("WINDOWS-1253")];
    char stringpool_str306[sizeof("WINDOWS-1252")];
    char stringpool_str308[sizeof("ROMAN8")];
    char stringpool_str309[sizeof("ISO-2022-JP")];
    char stringpool_str310[sizeof("ISO-8859-7")];
    char stringpool_str311[sizeof("SHIFT-JIS")];
    char stringpool_str312[sizeof("WINDOWS-1258")];
    char stringpool_str313[sizeof("WINDOWS-936")];
    char stringpool_str314[sizeof("EUCJP-WIN")];
    char stringpool_str315[sizeof("CSPC862LATINHEBREW")];
    char stringpool_str316[sizeof("WINDOWS-51932")];
    char stringpool_str317[sizeof("KS_C_5601-1989")];
    char stringpool_str318[sizeof("CSKOI8R")];
    char stringpool_str319[sizeof("EUCJP")];
    char stringpool_str321[sizeof("WINDOWS-932")];
    char stringpool_str322[sizeof("UTF-16")];
    char stringpool_str324[sizeof("CSISOLATINHEBREW")];
    char stringpool_str327[sizeof("KOI8-R")];
    char stringpool_str328[sizeof("ISO-10646-UCS-2")];
    char stringpool_str329[sizeof("CSPTCP154")];
    char stringpool_str330[sizeof("EUC-JP")];
    char stringpool_str332[sizeof("VISCII1.1-1")];
    char stringpool_str334[sizeof("UTF-32")];
    char stringpool_str336[sizeof("MACCYRILLIC")];
    char stringpool_str337[sizeof("ECMA-118")];
    char stringpool_str338[sizeof("WINDOWS-1254")];
    char stringpool_str339[sizeof("ISO_8859-7")];
    char stringpool_str340[sizeof("SHIFT_JIS")];
    char stringpool_str341[sizeof("UTF-8")];
    char stringpool_str342[sizeof("MS-CYRL")];
    char stringpool_str343[sizeof("TIS620.2533-0")];
    char stringpool_str346[sizeof("TCVN")];
    char stringpool_str349[sizeof("CSWINDOWS31J")];
    char stringpool_str350[sizeof("CSIBM866")];
    char stringpool_str352[sizeof("CHINESE")];
    char stringpool_str353[sizeof("ISO-IR-57")];
    char stringpool_str354[sizeof("ISO-IR-157")];
    char stringpool_str355[sizeof("CSKSC56011987")];
    char stringpool_str357[sizeof("ISO-IR-127")];
    char stringpool_str359[sizeof("WINDOWS-1250")];
    char stringpool_str360[sizeof("ISO-10646-UCS-4")];
    char stringpool_str361[sizeof("BIG5")];
    char stringpool_str362[sizeof("ISO-IR-87")];
    char stringpool_str363[sizeof("CSBIG5")];
    char stringpool_str365[sizeof("X0212")];
    char stringpool_str366[sizeof("GB18030")];
    char stringpool_str367[sizeof("KOI8-T")];
    char stringpool_str369[sizeof("JAVA")];
    char stringpool_str370[sizeof("GB_2312-80")];
    char stringpool_str372[sizeof("BIG-5")];
    char stringpool_str374[sizeof("CN-BIG5")];
    char stringpool_str377[sizeof("MACTHAI")];
    char stringpool_str380[sizeof("CSGB2312")];
    char stringpool_str384[sizeof("CSSHIFTJIS")];
    char stringpool_str388[sizeof("MULELAO-1")];
    char stringpool_str389[sizeof("ECMA-114")];
    char stringpool_str390[sizeof("CSISO2022KR")];
    char stringpool_str392[sizeof("GB_1988-80")];
    char stringpool_str396[sizeof("LATIN7")];
    char stringpool_str398[sizeof("IBM367")];
    char stringpool_str402[sizeof("KOREAN")];
    char stringpool_str403[sizeof("HP-ROMAN8")];
    char stringpool_str404[sizeof("ISO-2022-KR")];
    char stringpool_str406[sizeof("EUCJPMS")];
    char stringpool_str407[sizeof("ASMO-708")];
    char stringpool_str413[sizeof("X0201")];
    char stringpool_str414[sizeof("EUCKR")];
    char stringpool_str417[sizeof("EUCJP-MS")];
    char stringpool_str419[sizeof("WINDOWS-31J")];
    char stringpool_str422[sizeof("WINDOWS-1257")];
    char stringpool_str423[sizeof("STRK1048-2002")];
    char stringpool_str424[sizeof("KS_C_5601-1987")];
    char stringpool_str425[sizeof("EUC-KR")];
    char stringpool_str428[sizeof("EUC-JP-MS")];
    char stringpool_str429[sizeof("ISO_8859-5:1988")];
    char stringpool_str431[sizeof("ISO_8859-3:1988")];
    char stringpool_str435[sizeof("X0208")];
    char stringpool_str436[sizeof("MACINTOSH")];
    char stringpool_str438[sizeof("ISO_8859-8:1988")];
    char stringpool_str444[sizeof("ISO_8859-9:1989")];
    char stringpool_str445[sizeof("MACROMAN")];
    char stringpool_str446[sizeof("MACCROATIAN")];
    char stringpool_str448[sizeof("MS_KANJI")];
    char stringpool_str453[sizeof("GBK")];
    char stringpool_str454[sizeof("CSISO58GB231280")];
    char stringpool_str464[sizeof("ISO_8859-4:1988")];
    char stringpool_str465[sizeof("CSEUCTW")];
    char stringpool_str466[sizeof("CSHPROMAN8")];
    char stringpool_str467[sizeof("EUCJP-OPEN")];
    char stringpool_str473[sizeof("UCS-2LE")];
    char stringpool_str475[sizeof("CN-GB-ISOIR165")];
    char stringpool_str478[sizeof("TCVN5712-1")];
    char stringpool_str479[sizeof("ISO_646.IRV:1991")];
    char stringpool_str480[sizeof("WCHAR_T")];
    char stringpool_str481[sizeof("CSMACINTOSH")];
    char stringpool_str482[sizeof("TCVN-5712")];
    char stringpool_str484[sizeof("HZ-GB-2312")];
    char stringpool_str487[sizeof("MS-EE")];
    char stringpool_str498[sizeof("SHIFT_JIS-MS")];
    char stringpool_str499[sizeof("WINDOWS-874")];
    char stringpool_str503[sizeof("MACARABIC")];
    char stringpool_str505[sizeof("UCS-4LE")];
    char stringpool_str518[sizeof("HEBREW")];
    char stringpool_str519[sizeof("CSUNICODE11")];
    char stringpool_str520[sizeof("CSISO57GB1988")];
    char stringpool_str521[sizeof("MACROMANIA")];
    char stringpool_str522[sizeof("CSISOLATINGREEK")];
    char stringpool_str527[sizeof("UNICODE-1-1")];
    char stringpool_str533[sizeof("JIS_X0212")];
    char stringpool_str537[sizeof("ISO_8859-1:1987")];
    char stringpool_str538[sizeof("ISO_8859-6:1987")];
    char stringpool_str541[sizeof("ISO_8859-7:2003")];
    char stringpool_str542[sizeof("ISO_8859-2:1987")];
    char stringpool_str549[sizeof("KOI8-U")];
    char stringpool_str551[sizeof("CN-GB")];
    char stringpool_str556[sizeof("GREEK8")];
    char stringpool_str557[sizeof("JOHAB")];
    char stringpool_str561[sizeof("UTF-7")];
    char stringpool_str571[sizeof("JISX0201-1976")];
    char stringpool_str572[sizeof("GEORGIAN-ACADEMY")];
    char stringpool_str573[sizeof("UCS-2-INTERNAL")];
    char stringpool_str576[sizeof("CSISO87JISX0208")];
    char stringpool_str577[sizeof("UTF-16LE")];
    char stringpool_str580[sizeof("GEORGIAN-PS")];
    char stringpool_str581[sizeof("JIS_X0201")];
    char stringpool_str585[sizeof("UTF-32LE")];
    char stringpool_str586[sizeof("ANSI_X3.4-1986")];
    char stringpool_str596[sizeof("ANSI_X3.4-1968")];
    char stringpool_str601[sizeof("JIS_X0212-1990")];
    char stringpool_str603[sizeof("JIS_X0208")];
    char stringpool_str604[sizeof("BIG5HKSCS")];
    char stringpool_str605[sizeof("UCS-4-INTERNAL")];
    char stringpool_str607[sizeof("CSEUCKR")];
    char stringpool_str611[sizeof("JIS_X0208-1983")];
    char stringpool_str615[sizeof("BIG5-HKSCS")];
    char stringpool_str620[sizeof("UCS-2BE")];
    char stringpool_str626[sizeof("CSUNICODE")];
    char stringpool_str630[sizeof("KOI8-RU")];
    char stringpool_str644[sizeof("CSUNICODE11UTF7")];
    char stringpool_str652[sizeof("UCS-4BE")];
    char stringpool_str653[sizeof("UCS-2-SWAPPED")];
    char stringpool_str654[sizeof("UNICODE-1-1-UTF-7")];
    char stringpool_str658[sizeof("ISO_8859-7:1987")];
    char stringpool_str665[sizeof("JIS_X0208-1990")];
    char stringpool_str670[sizeof("CSPC850MULTILINGUAL")];
    char stringpool_str673[sizeof("GREEK")];
    char stringpool_str680[sizeof("JIS_X0212.1990-0")];
    char stringpool_str685[sizeof("UCS-4-SWAPPED")];
    char stringpool_str694[sizeof("MS-ARAB")];
    char stringpool_str696[sizeof("MS-HEBR")];
    char stringpool_str724[sizeof("UTF-16BE")];
    char stringpool_str732[sizeof("UTF-32BE")];
    char stringpool_str743[sizeof("CSHALFWIDTHKATAKANA")];
    char stringpool_str747[sizeof("MACICELAND")];
    char stringpool_str759[sizeof("MACCENTRALEUROPE")];
    char stringpool_str775[sizeof("MACHEBREW")];
    char stringpool_str783[sizeof("WINBALTRIM")];
    char stringpool_str801[sizeof("TCVN5712-1:1993")];
    char stringpool_str813[sizeof("MS-TURK")];
    char stringpool_str824[sizeof("NEXTSTEP")];
    char stringpool_str836[sizeof("MACTURKISH")];
    char stringpool_str839[sizeof("MACUKRAINE")];
    char stringpool_str854[sizeof("UNICODELITTLE")];
    char stringpool_str901[sizeof("MACGREEK")];
    char stringpool_str909[sizeof("BIGFIVE")];
    char stringpool_str911[sizeof("MS-GREEK")];
    char stringpool_str920[sizeof("BIG-FIVE")];
    char stringpool_str928[sizeof("BIG5-HKSCS:2001")];
    char stringpool_str942[sizeof("BIG5-HKSCS:1999")];
    char stringpool_str965[sizeof("BIG5-HKSCS:2004")];
    char stringpool_str1029[sizeof("UNICODEBIG")];
    char stringpool_str1194[sizeof("CSEUCPKDFMTJAPANESE")];
    char stringpool_str1227[sizeof("EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE")];
  };
static const struct stringpool_t stringpool_contents =
  {
    "CP1131",
    "CP1361",
    "CP1251",
    "CN",
    "CP1256",
    "866",
    "CP1255",
    "CP1133",
    "CP866",
    "CP1253",
    "SJIS",
    "CP1252",
    "862",
    "CP936",
    "CP862",
    "C99",
    "CP932",
    "CP1258",
    "CP51932",
    "L1",
    "L6",
    "L5",
    "L3",
    "L2",
    "CP819",
    "ASCII",
    "L8",
    "CSASCII",
    "ISO8859-1",
    "ISO8859-11",
    "ISO8859-6",
    "ISO8859-16",
    "ISO8859-5",
    "ISO8859-15",
    "ISO8859-3",
    "ISO8859-13",
    "ISO8859-2",
    "ISO-8859-1",
    "ISO-8859-11",
    "ISO-8859-6",
    "ISO-8859-16",
    "ISO-8859-5",
    "ISO-8859-15",
    "L4",
    "ISO-8859-3",
    "ISO-8859-13",
    "ISO-8859-2",
    "ISO8859-8",
    "CP154",
    "ISO646-CN",
    "SJIS-WIN",
    "CP949",
    "ISO8859-9",
    "HZ",
    "CP1254",
    "ISO-8859-8",
    "R8",
    "ISO-8859-9",
    "ISO_8859-1",
    "ISO_8859-11",
    "ISO_8859-6",
    "ISO_8859-16",
    "ISO_8859-5",
    "ISO_8859-15",
    "ISO_8859-16:2001",
    "ISO_8859-3",
    "ISO_8859-13",
    "ISO_8859-2",
    "ISO-IR-6",
    "ISO-IR-166",
    "CSISO2022CN",
    "ISO-IR-165",
    "ISO_8859-15:1998",
    "ISO-IR-126",
    "ISO_8859-8",
    "ISO-IR-226",
    "ISO_8859-9",
    "CSISO14JISC6220RO",
    "ISO-2022-CN",
    "CP1250",
    "850",
    "ISO8859-4",
    "ISO8859-14",
    "ISO-IR-58",
    "CP850",
    "JP",
    "ISO-IR-138",
    "CP950",
    "EUCCN",
    "ISO-IR-159",
    "ISO-8859-4",
    "ISO-8859-14",
    "JIS_C6226-1983",
    "MAC",
    "EUC-CN",
    "ISO_8859-14:1998",
    "ISO-IR-199",
    "PT154",
    "LATIN1",
    "L10",
    "LATIN6",
    "LATIN5",
    "L7",
    "CYRILLIC",
    "LATIN3",
    "LATIN2",
    "IBM866",
    "ISO_8859-10:1992",
    "CSISO159JISX02121990",
    "ISO-IR-101",
    "ISO-IR-148",
    "MS936",
    "ISO_8859-4",
    "ISO_8859-14",
    "IBM862",
    "ISO8859-10",
    "ISO-IR-149",
    "LATIN8",
    "MS932",
    "ISO-IR-203",
    "MS51932",
    "ISO-IR-14",
    "ISO-8859-10",
    "SJIS-MS",
    "IBM819",
    "LATIN-9",
    "UHC",
    "GB2312",
    "ISO-IR-109",
    "US",
    "JIS_C6220-1969-RO",
    "RK1048",
    "CHAR",
    "CSISOLATIN1",
    "CSISOLATIN6",
    "CP874",
    "CSISOLATIN5",
    "ISO_8859-10",
    "CSISOLATINCYRILLIC",
    "CSISOLATIN3",
    "JIS0208",
    "CSISOLATIN2",
    "ISO-2022-CN-EXT",
    "ISO-IR-144",
    "UCS-2",
    "MS-ANSI",
    "ISO-IR-110",
    "PTCP154",
    "LATIN4",
    "CSISO2022JP2",
    "VISCII",
    "CSVISCII",
    "TIS620",
    "ARMSCII-8",
    "SJIS-OPEN",
    "CYRILLIC-ASIAN",
    "ISO-2022-JP-1",
    "ISO-2022-JP-2",
    "TIS-620",
    "ISO-2022-JP-MS",
    "KSC_5601",
    "IBM-CP1133",
    "CP367",
    "CP1257",
    "CSISOLATINARABIC",
    "US-ASCII",
    "ISO-IR-179",
    "ISO646-US",
    "ISO646-JP",
    "ISO-CELTIC",
    "CSKZ1048",
    "LATIN10",
    "EUCTW",
    "KZ-1048",
    "ARABIC",
    "CSUCS4",
    "IBM850",
    "CSISOLATIN4",
    "EUC-TW",
    "ISO-IR-100",
    "TIS620.2533-1",
    "UCS-4",
    "CSISO2022JP",
    "TIS620.2529-1",
    "ELOT_928",
    "ISO8859-7",
    "WINDOWS-1251",
    "WINDOWS-1256",
    "WINDOWS-1255",
    "TIS620-0",
    "WINDOWS-1253",
    "WINDOWS-1252",
    "ROMAN8",
    "ISO-2022-JP",
    "ISO-8859-7",
    "SHIFT-JIS",
    "WINDOWS-1258",
    "WINDOWS-936",
    "EUCJP-WIN",
    "CSPC862LATINHEBREW",
    "WINDOWS-51932",
    "KS_C_5601-1989",
    "CSKOI8R",
    "EUCJP",
    "WINDOWS-932",
    "UTF-16",
    "CSISOLATINHEBREW",
    "KOI8-R",
    "ISO-10646-UCS-2",
    "CSPTCP154",
    "EUC-JP",
    "VISCII1.1-1",
    "UTF-32",
    "MACCYRILLIC",
    "ECMA-118",
    "WINDOWS-1254",
    "ISO_8859-7",
    "SHIFT_JIS",
    "UTF-8",
    "MS-CYRL",
    "TIS620.2533-0",
    "TCVN",
    "CSWINDOWS31J",
    "CSIBM866",
    "CHINESE",
    "ISO-IR-57",
    "ISO-IR-157",
    "CSKSC56011987",
    "ISO-IR-127",
    "WINDOWS-1250",
    "ISO-10646-UCS-4",
    "BIG5",
    "ISO-IR-87",
    "CSBIG5",
    "X0212",
    "GB18030",
    "KOI8-T",
    "JAVA",
    "GB_2312-80",
    "BIG-5",
    "CN-BIG5",
    "MACTHAI",
    "CSGB2312",
    "CSSHIFTJIS",
    "MULELAO-1",
    "ECMA-114",
    "CSISO2022KR",
    "GB_1988-80",
    "LATIN7",
    "IBM367",
    "KOREAN",
    "HP-ROMAN8",
    "ISO-2022-KR",
    "EUCJPMS",
    "ASMO-708",
    "X0201",
    "EUCKR",
    "EUCJP-MS",
    "WINDOWS-31J",
    "WINDOWS-1257",
    "STRK1048-2002",
    "KS_C_5601-1987",
    "EUC-KR",
    "EUC-JP-MS",
    "ISO_8859-5:1988",
    "ISO_8859-3:1988",
    "X0208",
    "MACINTOSH",
    "ISO_8859-8:1988",
    "ISO_8859-9:1989",
    "MACROMAN",
    "MACCROATIAN",
    "MS_KANJI",
    "GBK",
    "CSISO58GB231280",
    "ISO_8859-4:1988",
    "CSEUCTW",
    "CSHPROMAN8",
    "EUCJP-OPEN",
    "UCS-2LE",
    "CN-GB-ISOIR165",
    "TCVN5712-1",
    "ISO_646.IRV:1991",
    "WCHAR_T",
    "CSMACINTOSH",
    "TCVN-5712",
    "HZ-GB-2312",
    "MS-EE",
    "SHIFT_JIS-MS",
    "WINDOWS-874",
    "MACARABIC",
    "UCS-4LE",
    "HEBREW",
    "CSUNICODE11",
    "CSISO57GB1988",
    "MACROMANIA",
    "CSISOLATINGREEK",
    "UNICODE-1-1",
    "JIS_X0212",
    "ISO_8859-1:1987",
    "ISO_8859-6:1987",
    "ISO_8859-7:2003",
    "ISO_8859-2:1987",
    "KOI8-U",
    "CN-GB",
    "GREEK8",
    "JOHAB",
    "UTF-7",
    "JISX0201-1976",
    "GEORGIAN-ACADEMY",
    "UCS-2-INTERNAL",
    "CSISO87JISX0208",
    "UTF-16LE",
    "GEORGIAN-PS",
    "JIS_X0201",
    "UTF-32LE",
    "ANSI_X3.4-1986",
    "ANSI_X3.4-1968",
    "JIS_X0212-1990",
    "JIS_X0208",
    "BIG5HKSCS",
    "UCS-4-INTERNAL",
    "CSEUCKR",
    "JIS_X0208-1983",
    "BIG5-HKSCS",
    "UCS-2BE",
    "CSUNICODE",
    "KOI8-RU",
    "CSUNICODE11UTF7",
    "UCS-4BE",
    "UCS-2-SWAPPED",
    "UNICODE-1-1-UTF-7",
    "ISO_8859-7:1987",
    "JIS_X0208-1990",
    "CSPC850MULTILINGUAL",
    "GREEK",
    "JIS_X0212.1990-0",
    "UCS-4-SWAPPED",
    "MS-ARAB",
    "MS-HEBR",
    "UTF-16BE",
    "UTF-32BE",
    "CSHALFWIDTHKATAKANA",
    "MACICELAND",
    "MACCENTRALEUROPE",
    "MACHEBREW",
    "WINBALTRIM",
    "TCVN5712-1:1993",
    "MS-TURK",
    "NEXTSTEP",
    "MACTURKISH",
    "MACUKRAINE",
    "UNICODELITTLE",
    "MACGREEK",
    "BIGFIVE",
    "MS-GREEK",
    "BIG-FIVE",
    "BIG5-HKSCS:2001",
    "BIG5-HKSCS:1999",
    "BIG5-HKSCS:2004",
    "UNICODEBIG",
    "CSEUCPKDFMTJAPANESE",
    "EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE"
  };
#define stringpool ((const char *) &stringpool_contents)

static const struct alias aliases[] =
  {
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 209 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str10, ei_cp1131},
#line 370 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str11, ei_johab},
    {-1},
#line 174 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str13, ei_cp1251},
#line 288 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str14, ei_iso646_cn},
#line 189 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str15, ei_cp1256},
#line 207 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str16, ei_cp866},
#line 186 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str17, ei_cp1255},
#line 244 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str18, ei_cp1133},
#line 205 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str19, ei_cp866},
    {-1},
#line 180 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str21, ei_cp1253},
#line 316 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str22, ei_sjis},
#line 177 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str23, ei_cp1252},
#line 203 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str24, ei_cp862},
#line 340 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str25, ei_cp936},
    {-1},
#line 201 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str27, ei_cp862},
    {-1}, {-1}, {-1},
#line 51 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str31, ei_c99},
    {-1},
#line 319 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str33, ei_cp932},
    {-1},
#line 195 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str35, ei_cp1258},
    {-1},
#line 311 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str37, ei_cp51932},
#line 60 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str38, ei_iso8859_1},
#line 134 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str39, ei_iso8859_10},
#line 126 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str40, ei_iso8859_9},
    {-1},
#line 76 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str42, ei_iso8859_3},
#line 68 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str43, ei_iso8859_2},
#line 57 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str44, ei_iso8859_1},
    {-1}, {-1}, {-1},
#line 13 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str48, ei_ascii},
#line 151 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str49, ei_iso8859_14},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 22 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str56, ei_ascii},
#line 62 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str57, ei_iso8859_1},
#line 139 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str58, ei_iso8859_11},
#line 102 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str59, ei_iso8859_6},
#line 166 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str60, ei_iso8859_16},
#line 93 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str61, ei_iso8859_5},
#line 159 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str62, ei_iso8859_15},
    {-1}, {-1},
#line 78 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str65, ei_iso8859_3},
#line 145 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str66, ei_iso8859_13},
#line 70 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str67, ei_iso8859_2},
#line 53 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str68, ei_iso8859_1},
#line 137 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str69, ei_iso8859_11},
#line 94 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str70, ei_iso8859_6},
#line 160 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str71, ei_iso8859_16},
#line 87 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str72, ei_iso8859_5},
#line 154 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str73, ei_iso8859_15},
    {-1},
#line 84 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str75, ei_iso8859_4},
#line 71 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str76, ei_iso8859_3},
#line 140 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str77, ei_iso8859_13},
#line 63 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str78, ei_iso8859_2},
#line 120 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str79, ei_iso8859_8},
    {-1},
#line 236 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str81, ei_pt154},
#line 286 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str82, ei_iso646_cn},
#line 323 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str83, ei_cp932},
#line 367 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str84, ei_cp949},
#line 128 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str85, ei_iso8859_9},
#line 347 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str86, ei_hz},
#line 183 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str87, ei_cp1254},
    {-1}, {-1},
#line 114 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str90, ei_iso8859_8},
    {-1}, {-1},
#line 227 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str93, ei_hp_roman8},
    {-1}, {-1},
#line 121 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str96, ei_iso8859_9},
#line 54 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str97, ei_iso8859_1},
#line 138 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str98, ei_iso8859_11},
#line 95 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str99, ei_iso8859_6},
#line 161 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str100, ei_iso8859_16},
#line 88 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str101, ei_iso8859_5},
#line 155 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str102, ei_iso8859_15},
    {-1},
#line 162 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str104, ei_iso8859_16},
#line 72 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str105, ei_iso8859_3},
#line 141 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str106, ei_iso8859_13},
#line 64 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str107, ei_iso8859_2},
    {-1}, {-1},
#line 16 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str110, ei_ascii},
    {-1}, {-1},
#line 252 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str113, ei_tis620},
#line 345 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str114, ei_iso2022_cn},
#line 294 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str115, ei_isoir165},
#line 156 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str116, ei_iso8859_15},
#line 107 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str117, ei_iso8859_7},
    {-1},
#line 115 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str119, ei_iso8859_8},
    {-1}, {-1},
#line 163 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str122, ei_iso8859_16},
    {-1}, {-1},
#line 122 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str125, ei_iso8859_9},
    {-1},
#line 266 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str127, ei_iso646_jp},
#line 344 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str128, ei_iso2022_cn},
#line 171 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str129, ei_cp1250},
#line 199 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str130, ei_cp850},
#line 86 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str131, ei_iso8859_4},
#line 153 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str132, ei_iso8859_14},
#line 291 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str133, ei_gb2312},
#line 197 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str134, ei_cp850},
#line 265 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str135, ei_iso646_jp},
#line 117 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str136, ei_iso8859_8},
#line 358 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str137, ei_cp950},
#line 335 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str138, ei_euc_cn},
    {-1},
#line 283 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str140, ei_jisx0212},
    {-1},
#line 79 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str142, ei_iso8859_4},
#line 146 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str143, ei_iso8859_14},
    {-1}, {-1},
#line 277 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str146, ei_jisx0208},
    {-1},
#line 212 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str148, ei_mac_roman},
#line 334 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str149, ei_euc_cn},
    {-1},
#line 148 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str151, ei_iso8859_14},
#line 149 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str152, ei_iso8859_14},
#line 234 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str153, ei_pt154},
#line 59 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str154, ei_iso8859_1},
#line 165 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str155, ei_iso8859_16},
#line 133 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str156, ei_iso8859_10},
    {-1},
#line 125 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str158, ei_iso8859_9},
#line 144 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str159, ei_iso8859_13},
#line 91 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str160, ei_iso8859_5},
    {-1},
#line 75 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str162, ei_iso8859_3},
    {-1},
#line 67 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str164, ei_iso8859_2},
#line 206 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str165, ei_cp866},
#line 131 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str166, ei_iso8859_10},
#line 284 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str167, ei_jisx0212},
#line 66 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str168, ei_iso8859_2},
#line 124 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str169, ei_iso8859_9},
#line 341 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str170, ei_cp936},
#line 80 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str171, ei_iso8859_4},
#line 147 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str172, ei_iso8859_14},
#line 202 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str173, ei_cp862},
#line 136 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str174, ei_iso8859_10},
#line 299 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str175, ei_ksc5601},
#line 150 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str176, ei_iso8859_14},
    {-1},
#line 325 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str178, ei_cp932},
    {-1}, {-1},
#line 157 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str181, ei_iso8859_15},
#line 313 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str182, ei_cp51932},
#line 264 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str183, ei_iso646_jp},
    {-1},
#line 129 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str185, ei_iso8859_10},
#line 327 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str186, ei_cp932},
    {-1}, {-1}, {-1},
#line 58 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str190, ei_iso8859_1},
    {-1}, {-1},
#line 158 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str193, ei_iso8859_15},
#line 368 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str194, ei_cp949},
#line 336 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str195, ei_euc_cn},
#line 74 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str196, ei_iso8859_3},
    {-1}, {-1},
#line 21 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str199, ei_ascii},
    {-1}, {-1},
#line 262 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str202, ei_iso646_jp},
#line 239 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str203, ei_rk1048},
    {-1}, {-1}, {-1},
#line 373 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str207, ei_local_char},
#line 61 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str208, ei_iso8859_1},
    {-1},
#line 135 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str210, ei_iso8859_10},
#line 253 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str211, ei_cp874},
#line 127 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str212, ei_iso8859_9},
    {-1},
#line 130 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str214, ei_iso8859_10},
#line 92 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str215, ei_iso8859_5},
#line 77 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str216, ei_iso8859_3},
#line 274 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str217, ei_jisx0208},
#line 69 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str218, ei_iso8859_2},
    {-1},
#line 346 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str220, ei_iso2022_cn_ext},
#line 90 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str221, ei_iso8859_5},
#line 24 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str222, ei_ucs2},
#line 179 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str223, ei_cp1252},
    {-1}, {-1},
#line 82 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str226, ei_iso8859_4},
#line 235 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str227, ei_pt154},
#line 83 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str228, ei_iso8859_4},
#line 333 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str229, ei_iso2022_jp2},
#line 255 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str230, ei_viscii},
    {-1},
#line 257 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str232, ei_viscii},
    {-1},
#line 247 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str234, ei_tis620},
#line 230 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str235, ei_armscii_8},
#line 322 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str236, ei_cp932},
#line 237 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str237, ei_pt154},
    {-1},
#line 331 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str239, ei_iso2022_jp1},
    {-1}, {-1}, {-1}, {-1},
#line 332 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str244, ei_iso2022_jp2},
#line 246 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str245, ei_tis620},
#line 330 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str246, ei_iso2022_jpms},
    {-1},
#line 296 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str248, ei_ksc5601},
#line 245 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str249, ei_cp1133},
    {-1}, {-1},
#line 19 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str252, ei_ascii},
    {-1}, {-1},
#line 192 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str255, ei_cp1257},
#line 101 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str256, ei_iso8859_6},
    {-1},
#line 12 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str258, ei_ascii},
#line 142 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str259, ei_iso8859_13},
    {-1},
#line 14 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str261, ei_ascii},
    {-1},
#line 263 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str263, ei_iso646_jp},
    {-1},
#line 152 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str265, ei_iso8859_14},
    {-1},
#line 242 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str267, ei_rk1048},
    {-1}, {-1}, {-1},
#line 164 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str271, ei_iso8859_16},
#line 350 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str272, ei_euc_tw},
    {-1},
#line 241 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str274, ei_rk1048},
#line 100 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str275, ei_iso8859_6},
    {-1},
#line 35 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str277, ei_ucs4},
    {-1}, {-1},
#line 198 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str280, ei_cp850},
    {-1},
#line 85 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str282, ei_iso8859_4},
#line 349 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str283, ei_euc_tw},
#line 56 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str284, ei_iso8859_1},
#line 251 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str285, ei_tis620},
#line 33 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str286, ei_ucs4},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 329 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str295, ei_iso2022_jp},
#line 249 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str296, ei_tis620},
#line 109 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str297, ei_iso8859_7},
    {-1},
#line 113 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str299, ei_iso8859_7},
    {-1},
#line 175 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str301, ei_cp1251},
#line 190 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str302, ei_cp1256},
#line 187 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str303, ei_cp1255},
#line 248 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str304, ei_tis620},
#line 181 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str305, ei_cp1253},
#line 178 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str306, ei_cp1252},
    {-1},
#line 226 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str308, ei_hp_roman8},
#line 328 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str309, ei_iso2022_jp},
#line 103 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str310, ei_iso8859_7},
#line 315 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str311, ei_sjis},
#line 196 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str312, ei_cp1258},
#line 342 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str313, ei_cp936},
#line 309 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str314, ei_eucjp_ms},
#line 204 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str315, ei_cp862},
#line 312 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str316, ei_cp51932},
#line 298 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str317, ei_ksc5601},
#line 168 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str318, ei_koi8_r},
#line 303 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str319, ei_euc_jp},
    {-1},
#line 324 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str321, ei_cp932},
#line 38 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str322, ei_utf16},
    {-1},
#line 119 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str324, ei_iso8859_8},
    {-1}, {-1},
#line 167 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str327, ei_koi8_r},
#line 25 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str328, ei_ucs2},
#line 238 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str329, ei_pt154},
#line 302 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str330, ei_euc_jp},
    {-1},
#line 256 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str332, ei_viscii},
    {-1},
#line 41 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str334, ei_utf32},
    {-1},
#line 218 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str336, ei_mac_cyrillic},
#line 108 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str337, ei_iso8859_7},
#line 184 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str338, ei_cp1254},
#line 104 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str339, ei_iso8859_7},
#line 314 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str340, ei_sjis},
#line 23 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str341, ei_utf8},
#line 176 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str342, ei_cp1251},
#line 250 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str343, ei_tis620},
    {-1}, {-1},
#line 258 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str346, ei_tcvn},
    {-1}, {-1},
#line 321 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str349, ei_cp932},
#line 208 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str350, ei_cp866},
    {-1},
#line 293 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str352, ei_gb2312},
#line 287 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str353, ei_iso646_cn},
#line 132 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str354, ei_iso8859_10},
#line 300 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str355, ei_ksc5601},
    {-1},
#line 97 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str357, ei_iso8859_6},
    {-1},
#line 172 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str359, ei_cp1250},
#line 34 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str360, ei_ucs4},
#line 352 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str361, ei_ces_big5},
#line 276 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str362, ei_jisx0208},
#line 357 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str363, ei_ces_big5},
    {-1},
#line 282 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str365, ei_jisx0212},
#line 343 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str366, ei_gb18030},
#line 233 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str367, ei_koi8_t},
    {-1},
#line 52 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str369, ei_java},
#line 290 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str370, ei_gb2312},
    {-1},
#line 353 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str372, ei_ces_big5},
    {-1},
#line 356 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str374, ei_ces_big5},
    {-1}, {-1},
#line 224 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str377, ei_mac_thai},
    {-1}, {-1},
#line 338 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str380, ei_euc_cn},
    {-1}, {-1}, {-1},
#line 318 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str384, ei_sjis},
    {-1}, {-1}, {-1},
#line 243 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str388, ei_mulelao},
#line 98 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str389, ei_iso8859_6},
#line 372 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str390, ei_iso2022_kr},
    {-1},
#line 285 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str392, ei_iso646_cn},
    {-1}, {-1}, {-1},
#line 143 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str396, ei_iso8859_13},
    {-1},
#line 20 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str398, ei_ascii},
    {-1}, {-1}, {-1},
#line 301 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str402, ei_ksc5601},
#line 225 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str403, ei_hp_roman8},
#line 371 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str404, ei_iso2022_kr},
    {-1},
#line 310 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str406, ei_eucjp_ms},
#line 99 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str407, ei_iso8859_6},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 269 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str413, ei_jisx0201},
#line 365 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str414, ei_euc_kr},
    {-1}, {-1},
#line 306 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str417, ei_eucjp_ms},
    {-1},
#line 320 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str419, ei_cp932},
    {-1}, {-1},
#line 193 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str422, ei_cp1257},
#line 240 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str423, ei_rk1048},
#line 297 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str424, ei_ksc5601},
#line 364 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str425, ei_euc_kr},
    {-1}, {-1},
#line 308 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str428, ei_eucjp_ms},
#line 89 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str429, ei_iso8859_5},
    {-1},
#line 73 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str431, ei_iso8859_3},
    {-1}, {-1}, {-1},
#line 275 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str435, ei_jisx0208},
#line 211 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str436, ei_mac_roman},
    {-1},
#line 116 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str438, ei_iso8859_8},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 123 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str444, ei_iso8859_9},
#line 210 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str445, ei_mac_roman},
#line 216 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str446, ei_mac_croatian},
    {-1},
#line 317 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str448, ei_sjis},
    {-1}, {-1}, {-1}, {-1},
#line 339 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str453, ei_ces_gbk},
#line 292 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str454, ei_gb2312},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 81 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str464, ei_iso8859_4},
#line 351 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str465, ei_euc_tw},
#line 228 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str466, ei_hp_roman8},
#line 307 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str467, ei_eucjp_ms},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 31 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str473, ei_ucs2le},
    {-1},
#line 295 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str475, ei_isoir165},
    {-1}, {-1},
#line 260 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str478, ei_tcvn},
#line 15 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str479, ei_ascii},
#line 374 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str480, ei_local_wchar_t},
#line 213 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str481, ei_mac_roman},
#line 259 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str482, ei_tcvn},
    {-1},
#line 348 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str484, ei_hz},
    {-1}, {-1},
#line 173 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str487, ei_cp1250},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 326 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str498, ei_cp932},
#line 254 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str499, ei_cp874},
    {-1}, {-1}, {-1},
#line 223 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str503, ei_mac_arabic},
    {-1},
#line 37 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str505, ei_ucs4le},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1},
#line 118 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str518, ei_iso8859_8},
#line 30 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str519, ei_ucs2be},
#line 289 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str520, ei_iso646_cn},
#line 217 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str521, ei_mac_romania},
#line 112 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str522, ei_iso8859_7},
    {-1}, {-1}, {-1}, {-1},
#line 29 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str527, ei_ucs2be},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 279 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str533, ei_jisx0212},
    {-1}, {-1}, {-1},
#line 55 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str537, ei_iso8859_1},
#line 96 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str538, ei_iso8859_6},
    {-1}, {-1},
#line 106 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str541, ei_iso8859_7},
#line 65 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str542, ei_iso8859_2},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 169 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str549, ei_koi8_u},
    {-1},
#line 337 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str551, ei_euc_cn},
    {-1}, {-1}, {-1}, {-1},
#line 110 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str556, ei_iso8859_7},
#line 369 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str557, ei_johab},
    {-1}, {-1}, {-1},
#line 44 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str561, ei_utf7},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 268 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str571, ei_jisx0201},
#line 231 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str572, ei_georgian_academy},
#line 47 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str573, ei_ucs2internal},
    {-1}, {-1},
#line 278 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str576, ei_jisx0208},
#line 40 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str577, ei_utf16le},
    {-1}, {-1},
#line 232 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str580, ei_georgian_ps},
#line 267 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str581, ei_jisx0201},
    {-1}, {-1}, {-1},
#line 43 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str585, ei_utf32le},
#line 18 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str586, ei_ascii},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 17 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str596, ei_ascii},
    {-1}, {-1}, {-1}, {-1},
#line 281 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str601, ei_jisx0212},
    {-1},
#line 271 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str603, ei_jisx0208},
#line 362 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str604, ei_big5hkscs2004},
#line 49 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str605, ei_ucs4internal},
    {-1},
#line 366 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str607, ei_euc_kr},
    {-1}, {-1}, {-1},
#line 272 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str611, ei_jisx0208},
    {-1}, {-1}, {-1},
#line 361 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str615, ei_big5hkscs2004},
    {-1}, {-1}, {-1}, {-1},
#line 27 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str620, ei_ucs2be},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 26 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str626, ei_ucs2},
    {-1}, {-1}, {-1},
#line 170 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str630, ei_koi8_ru},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1},
#line 46 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str644, ei_utf7},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 36 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str652, ei_ucs4be},
#line 48 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str653, ei_ucs2swapped},
#line 45 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str654, ei_utf7},
    {-1}, {-1}, {-1},
#line 105 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str658, ei_iso8859_7},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 273 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str665, ei_jisx0208},
    {-1}, {-1}, {-1}, {-1},
#line 200 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str670, ei_cp850},
    {-1}, {-1},
#line 111 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str673, ei_iso8859_7},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 280 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str680, ei_jisx0212},
    {-1}, {-1}, {-1}, {-1},
#line 50 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str685, ei_ucs4swapped},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 191 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str694, ei_cp1256},
    {-1},
#line 188 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str696, ei_cp1255},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 39 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str724, ei_utf16be},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 42 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str732, ei_utf32be},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 270 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str743, ei_jisx0201},
    {-1}, {-1}, {-1},
#line 215 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str747, ei_mac_iceland},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 214 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str759, ei_mac_centraleurope},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 222 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str775, ei_mac_hebrew},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 194 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str783, ei_cp1257},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 261 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str801, ei_tcvn},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 185 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str813, ei_cp1254},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 229 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str824, ei_nextstep},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 221 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str836, ei_mac_turkish},
    {-1}, {-1},
#line 219 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str839, ei_mac_ukraine},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 32 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str854, ei_ucs2le},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 220 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str901, ei_mac_greek},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 355 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str909, ei_ces_big5},
    {-1},
#line 182 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str911, ei_cp1253},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 354 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str920, ei_ces_big5},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 360 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str928, ei_big5hkscs2001},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1},
#line 359 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str942, ei_big5hkscs1999},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1},
#line 363 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str965, ei_big5hkscs2004},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 28 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1029, ei_ucs2be},
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
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 305 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1194, ei_euc_jp},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 304 "lib/aliases.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1227, ei_euc_jp}
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
