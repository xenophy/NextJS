/* ANSI-C code produced by gperf version 3.0.4 */
/* Command-line: gperf -m 10 lib/aliases_sysosf1.gperf  */
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

#line 1 "lib/aliases_sysosf1.gperf"
struct alias { int name; unsigned int encoding_index; };

#define TOTAL_KEYWORDS 368
#define MIN_WORD_LENGTH 2
#define MAX_WORD_LENGTH 45
#define MIN_HASH_VALUE 8
#define MAX_HASH_VALUE 1228
/* maximum key range = 1221, duplicates = 0 */

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
      1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229,
      1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229,
      1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229,
      1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229,
      1229, 1229, 1229, 1229, 1229,    6,  168, 1229,   56,    3,
        11,   10,   26,    7,    4,  163,   13,   27,  159, 1229,
      1229, 1229, 1229, 1229, 1229,  121,  240,    4,  135,  145,
       117,  139,   78,    3,   27,  212,    3,  160,    4,    3,
        93, 1229,  117,   62,   20,  174,  228,   22,  371,    5,
        44, 1229, 1229, 1229, 1229,   23, 1229, 1229, 1229, 1229,
      1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229,
      1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229,
      1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229
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
    char stringpool_str8[sizeof("L1")];
    char stringpool_str9[sizeof("L6")];
    char stringpool_str10[sizeof("CN")];
    char stringpool_str12[sizeof("L5")];
    char stringpool_str15[sizeof("L3")];
    char stringpool_str16[sizeof("L2")];
    char stringpool_str18[sizeof("L8")];
    char stringpool_str24[sizeof("866")];
    char stringpool_str31[sizeof("L4")];
    char stringpool_str32[sizeof("CP1131")];
    char stringpool_str33[sizeof("CP1361")];
    char stringpool_str34[sizeof("CP866")];
    char stringpool_str37[sizeof("CP1251")];
    char stringpool_str38[sizeof("862")];
    char stringpool_str39[sizeof("CP1256")];
    char stringpool_str42[sizeof("LATIN1")];
    char stringpool_str44[sizeof("LATIN6")];
    char stringpool_str45[sizeof("CP1255")];
    char stringpool_str46[sizeof("CP1133")];
    char stringpool_str48[sizeof("CP862")];
    char stringpool_str50[sizeof("LATIN5")];
    char stringpool_str51[sizeof("CP1253")];
    char stringpool_str53[sizeof("CP1252")];
    char stringpool_str54[sizeof("CP936")];
    char stringpool_str56[sizeof("LATIN3")];
    char stringpool_str57[sizeof("CP1258")];
    char stringpool_str58[sizeof("LATIN2")];
    char stringpool_str61[sizeof("C99")];
    char stringpool_str62[sizeof("LATIN8")];
    char stringpool_str67[sizeof("ISO646-CN")];
    char stringpool_str68[sizeof("CP932")];
    char stringpool_str71[sizeof("CP154")];
    char stringpool_str79[sizeof("CP819")];
    char stringpool_str80[sizeof("CP51932")];
    char stringpool_str83[sizeof("CP1254")];
    char stringpool_str87[sizeof("ISO8859-1")];
    char stringpool_str88[sizeof("LATIN4")];
    char stringpool_str89[sizeof("ISO8859-6")];
    char stringpool_str91[sizeof("ISO8859-11")];
    char stringpool_str93[sizeof("ISO8859-16")];
    char stringpool_str94[sizeof("ISO-8859-1")];
    char stringpool_str95[sizeof("ISO8859-5")];
    char stringpool_str96[sizeof("ISO-8859-6")];
    char stringpool_str97[sizeof("LATIN-9")];
    char stringpool_str98[sizeof("ISO-8859-11")];
    char stringpool_str99[sizeof("ISO8859-15")];
    char stringpool_str100[sizeof("ISO-8859-16")];
    char stringpool_str101[sizeof("ISO8859-3")];
    char stringpool_str102[sizeof("ISO-8859-5")];
    char stringpool_str103[sizeof("ISO8859-2")];
    char stringpool_str105[sizeof("ISO8859-13")];
    char stringpool_str106[sizeof("ISO-8859-15")];
    char stringpool_str107[sizeof("ISO8859-8")];
    char stringpool_str108[sizeof("ISO-8859-3")];
    char stringpool_str110[sizeof("ISO-8859-2")];
    char stringpool_str111[sizeof("ISO_8859-1")];
    char stringpool_str112[sizeof("ISO-8859-13")];
    char stringpool_str113[sizeof("ISO_8859-6")];
    char stringpool_str114[sizeof("ISO-8859-8")];
    char stringpool_str115[sizeof("ISO_8859-11")];
    char stringpool_str116[sizeof("CP949")];
    char stringpool_str117[sizeof("ISO_8859-16")];
    char stringpool_str118[sizeof("L10")];
    char stringpool_str119[sizeof("ISO_8859-5")];
    char stringpool_str121[sizeof("ISO_8859-16:2001")];
    char stringpool_str122[sizeof("JP")];
    char stringpool_str123[sizeof("ISO_8859-15")];
    char stringpool_str124[sizeof("HZ")];
    char stringpool_str125[sizeof("ISO_8859-3")];
    char stringpool_str127[sizeof("ISO_8859-2")];
    char stringpool_str128[sizeof("850")];
    char stringpool_str129[sizeof("ISO_8859-13")];
    char stringpool_str130[sizeof("ISO-2022-CN")];
    char stringpool_str131[sizeof("ISO_8859-8")];
    char stringpool_str132[sizeof("R8")];
    char stringpool_str133[sizeof("ISO8859-4")];
    char stringpool_str134[sizeof("ISO_8859-15:1998")];
    char stringpool_str135[sizeof("ISO8859-9")];
    char stringpool_str137[sizeof("ISO8859-14")];
    char stringpool_str139[sizeof("ASCII")];
    char stringpool_str140[sizeof("ISO-8859-4")];
    char stringpool_str141[sizeof("CP850")];
    char stringpool_str142[sizeof("ISO-8859-9")];
    char stringpool_str143[sizeof("CP1250")];
    char stringpool_str144[sizeof("ISO-8859-14")];
    char stringpool_str149[sizeof("CYRILLIC")];
    char stringpool_str150[sizeof("ISO-2022-CN-EXT")];
    char stringpool_str152[sizeof("LATIN10")];
    char stringpool_str153[sizeof("ISO_8859-14:1998")];
    char stringpool_str154[sizeof("ISO-IR-6")];
    char stringpool_str155[sizeof("CP950")];
    char stringpool_str157[sizeof("ISO_8859-4")];
    char stringpool_str159[sizeof("ISO_8859-9")];
    char stringpool_str160[sizeof("PT154")];
    char stringpool_str161[sizeof("ISO_8859-14")];
    char stringpool_str163[sizeof("ISO-IR-166")];
    char stringpool_str166[sizeof("EUCCN")];
    char stringpool_str168[sizeof("L7")];
    char stringpool_str169[sizeof("ISO-IR-165")];
    char stringpool_str170[sizeof("ISO-IR-126")];
    char stringpool_str171[sizeof("MAC")];
    char stringpool_str173[sizeof("EUC-CN")];
    char stringpool_str174[sizeof("SJIS-WIN")];
    char stringpool_str177[sizeof("TACTIS")];
    char stringpool_str178[sizeof("ISO-IR-226")];
    char stringpool_str179[sizeof("JIS_C6226-1983")];
    char stringpool_str180[sizeof("ISO-IR-58")];
    char stringpool_str181[sizeof("ISO_8859-10:1992")];
    char stringpool_str184[sizeof("CSISO2022CN")];
    char stringpool_str185[sizeof("UHC")];
    char stringpool_str187[sizeof("ISO-IR-138")];
    char stringpool_str191[sizeof("GB2312")];
    char stringpool_str193[sizeof("SJIS")];
    char stringpool_str194[sizeof("IBM866")];
    char stringpool_str197[sizeof("ISO8859-10")];
    char stringpool_str202[sizeof("ISO-IR-14")];
    char stringpool_str203[sizeof("ISO-IR-148")];
    char stringpool_str204[sizeof("ISO-8859-10")];
    char stringpool_str205[sizeof("ISO-CELTIC")];
    char stringpool_str207[sizeof("CSASCII")];
    char stringpool_str208[sizeof("IBM862")];
    char stringpool_str210[sizeof("MS936")];
    char stringpool_str212[sizeof("ISO-IR-159")];
    char stringpool_str213[sizeof("ISO-IR-101")];
    char stringpool_str215[sizeof("TIS620")];
    char stringpool_str217[sizeof("CSISO14JISC6220RO")];
    char stringpool_str218[sizeof("EUCTW")];
    char stringpool_str221[sizeof("ISO_8859-10")];
    char stringpool_str222[sizeof("TIS-620")];
    char stringpool_str224[sizeof("MS932")];
    char stringpool_str225[sizeof("EUC-TW")];
    char stringpool_str227[sizeof("JIS_C6220-1969-RO")];
    char stringpool_str229[sizeof("ISO-IR-144")];
    char stringpool_str231[sizeof("ISO-IR-149")];
    char stringpool_str232[sizeof("ISO-IR-199")];
    char stringpool_str234[sizeof("RK1048")];
    char stringpool_str235[sizeof("ISO-IR-203")];
    char stringpool_str236[sizeof("MS51932")];
    char stringpool_str237[sizeof("CP874")];
    char stringpool_str238[sizeof("US")];
    char stringpool_str239[sizeof("IBM819")];
    char stringpool_str240[sizeof("CSISOLATIN1")];
    char stringpool_str242[sizeof("CSISOLATIN6")];
    char stringpool_str243[sizeof("ISO-2022-JP-1")];
    char stringpool_str245[sizeof("JIS0208")];
    char stringpool_str248[sizeof("CSISOLATIN5")];
    char stringpool_str249[sizeof("CSISOLATINCYRILLIC")];
    char stringpool_str251[sizeof("ISO-2022-JP-2")];
    char stringpool_str254[sizeof("CSISOLATIN3")];
    char stringpool_str256[sizeof("CSISOLATIN2")];
    char stringpool_str259[sizeof("PTCP154")];
    char stringpool_str260[sizeof("TCVN")];
    char stringpool_str261[sizeof("ISO-IR-109")];
    char stringpool_str263[sizeof("ELOT_928")];
    char stringpool_str266[sizeof("ISO-IR-110")];
    char stringpool_str268[sizeof("ISO646-JP")];
    char stringpool_str269[sizeof("UCS-2")];
    char stringpool_str277[sizeof("CSISO159JISX02121990")];
    char stringpool_str279[sizeof("TIS620-0")];
    char stringpool_str280[sizeof("KOI8-T")];
    char stringpool_str285[sizeof("CSPTCP154")];
    char stringpool_str286[sizeof("CSISOLATIN4")];
    char stringpool_str289[sizeof("ISO_8859-5:1988")];
    char stringpool_str290[sizeof("WINDOWS-1251")];
    char stringpool_str291[sizeof("WINDOWS-1256")];
    char stringpool_str292[sizeof("ISO_8859-3:1988")];
    char stringpool_str294[sizeof("WINDOWS-1255")];
    char stringpool_str295[sizeof("ISO_8859-8:1988")];
    char stringpool_str296[sizeof("KSC5601")];
    char stringpool_str297[sizeof("WINDOWS-1253")];
    char stringpool_str298[sizeof("WINDOWS-1252")];
    char stringpool_str299[sizeof("UCS-4")];
    char stringpool_str300[sizeof("WINDOWS-1258")];
    char stringpool_str301[sizeof("IBM850")];
    char stringpool_str302[sizeof("CSUCS4")];
    char stringpool_str303[sizeof("ISO-2022-JP-MS")];
    char stringpool_str304[sizeof("CSISO2022JP2")];
    char stringpool_str305[sizeof("MS-CYRL")];
    char stringpool_str307[sizeof("CSWINDOWS31J")];
    char stringpool_str308[sizeof("ISO_8859-4:1988")];
    char stringpool_str309[sizeof("VISCII")];
    char stringpool_str310[sizeof("WINDOWS-936")];
    char stringpool_str311[sizeof("ISO-10646-UCS-2")];
    char stringpool_str312[sizeof("IBM-CP1133")];
    char stringpool_str313[sizeof("WINDOWS-1254")];
    char stringpool_str314[sizeof("UTF-16")];
    char stringpool_str315[sizeof("WINDOWS-51932")];
    char stringpool_str316[sizeof("CSPC862LATINHEBREW")];
    char stringpool_str317[sizeof("EUCJP-WIN")];
    char stringpool_str318[sizeof("CSVISCII")];
    char stringpool_str319[sizeof("ISO-IR-100")];
    char stringpool_str320[sizeof("KSC_5601")];
    char stringpool_str321[sizeof("MACCYRILLIC")];
    char stringpool_str323[sizeof("ISO_8859-9:1989")];
    char stringpool_str324[sizeof("WINDOWS-932")];
    char stringpool_str326[sizeof("ISO-10646-UCS-4")];
    char stringpool_str328[sizeof("UTF-8")];
    char stringpool_str331[sizeof("ISO-2022-JP")];
    char stringpool_str332[sizeof("WINDOWS-31J")];
    char stringpool_str335[sizeof("UTF-32")];
    char stringpool_str336[sizeof("KZ-1048")];
    char stringpool_str338[sizeof("GB_2312-80")];
    char stringpool_str339[sizeof("CSISOLATINHEBREW")];
    char stringpool_str340[sizeof("GB18030")];
    char stringpool_str343[sizeof("WINDOWS-1250")];
    char stringpool_str344[sizeof("CYRILLIC-ASIAN")];
    char stringpool_str349[sizeof("CP367")];
    char stringpool_str353[sizeof("ISO646-US")];
    char stringpool_str357[sizeof("CP1257")];
    char stringpool_str359[sizeof("GB_1988-80")];
    char stringpool_str362[sizeof("LATIN7")];
    char stringpool_str363[sizeof("CHAR")];
    char stringpool_str364[sizeof("CSISOLATINARABIC")];
    char stringpool_str366[sizeof("MS-ANSI")];
    char stringpool_str367[sizeof("EUCJP")];
    char stringpool_str368[sizeof("ISO-IR-179")];
    char stringpool_str371[sizeof("SHIFT-JIS")];
    char stringpool_str374[sizeof("EUC-JP")];
    char stringpool_str375[sizeof("TIS620.2533-1")];
    char stringpool_str379[sizeof("CSKZ1048")];
    char stringpool_str382[sizeof("KS_C_5601-1989")];
    char stringpool_str384[sizeof("US-ASCII")];
    char stringpool_str385[sizeof("CSISO2022JP")];
    char stringpool_str388[sizeof("SHIFT_JIS")];
    char stringpool_str391[sizeof("SJIS-OPEN")];
    char stringpool_str393[sizeof("TIS620.2529-1")];
    char stringpool_str394[sizeof("ARMSCII-8")];
    char stringpool_str396[sizeof("MACTHAI")];
    char stringpool_str397[sizeof("BIG5")];
    char stringpool_str398[sizeof("CSEUCTW")];
    char stringpool_str400[sizeof("DECHANZI")];
    char stringpool_str404[sizeof("BIG-5")];
    char stringpool_str406[sizeof("CSBIG5")];
    char stringpool_str407[sizeof("ISO8859-7")];
    char stringpool_str408[sizeof("WCHAR_T")];
    char stringpool_str412[sizeof("X0212")];
    char stringpool_str413[sizeof("CN-BIG5")];
    char stringpool_str414[sizeof("ISO-8859-7")];
    char stringpool_str421[sizeof("MACINTOSH")];
    char stringpool_str424[sizeof("SJIS-MS")];
    char stringpool_str428[sizeof("TIS620.2533-0")];
    char stringpool_str431[sizeof("ISO_8859-7")];
    char stringpool_str434[sizeof("ROMAN8")];
    char stringpool_str435[sizeof("ISO_8859-1:1987")];
    char stringpool_str436[sizeof("ISO_8859-6:1987")];
    char stringpool_str437[sizeof("CSGB2312")];
    char stringpool_str440[sizeof("CSIBM866")];
    char stringpool_str442[sizeof("ISO_8859-7:2003")];
    char stringpool_str443[sizeof("ISO_8859-2:1987")];
    char stringpool_str448[sizeof("CSSHIFTJIS")];
    char stringpool_str449[sizeof("X0201")];
    char stringpool_str450[sizeof("WINDOWS-1257")];
    char stringpool_str456[sizeof("MULELAO-1")];
    char stringpool_str458[sizeof("TCVN5712-1")];
    char stringpool_str462[sizeof("TCVN-5712")];
    char stringpool_str469[sizeof("X0208")];
    char stringpool_str472[sizeof("ECMA-118")];
    char stringpool_str474[sizeof("KOI8-R")];
    char stringpool_str476[sizeof("CSKOI8R")];
    char stringpool_str480[sizeof("ISO-IR-57")];
    char stringpool_str484[sizeof("ISO-IR-157")];
    char stringpool_str486[sizeof("ISO-IR-87")];
    char stringpool_str488[sizeof("ISO-IR-127")];
    char stringpool_str492[sizeof("CSUNICODE11")];
    char stringpool_str493[sizeof("WINDOWS-874")];
    char stringpool_str496[sizeof("UNICODE-1-1")];
    char stringpool_str497[sizeof("VISCII1.1-1")];
    char stringpool_str498[sizeof("ECMA-114")];
    char stringpool_str499[sizeof("ARABIC")];
    char stringpool_str501[sizeof("JAVA")];
    char stringpool_str509[sizeof("IBM367")];
    char stringpool_str515[sizeof("CHINESE")];
    char stringpool_str518[sizeof("KS_C_5601-1987")];
    char stringpool_str524[sizeof("HP-ROMAN8")];
    char stringpool_str525[sizeof("HZ-GB-2312")];
    char stringpool_str534[sizeof("EUCJP-OPEN")];
    char stringpool_str543[sizeof("ASMO-708")];
    char stringpool_str548[sizeof("CSMACINTOSH")];
    char stringpool_str553[sizeof("UCS-2LE")];
    char stringpool_str556[sizeof("CSPC850MULTILINGUAL")];
    char stringpool_str557[sizeof("SHIFT_JIS-MS")];
    char stringpool_str558[sizeof("CSKSC56011987")];
    char stringpool_str560[sizeof("EUCJPMS")];
    char stringpool_str561[sizeof("MS_KANJI")];
    char stringpool_str563[sizeof("CSISO58GB231280")];
    char stringpool_str564[sizeof("ISO-2022-KR")];
    char stringpool_str565[sizeof("UCS-2-INTERNAL")];
    char stringpool_str566[sizeof("GBK")];
    char stringpool_str567[sizeof("EUCJP-MS")];
    char stringpool_str568[sizeof("UCS-4LE")];
    char stringpool_str572[sizeof("MACCROATIAN")];
    char stringpool_str574[sizeof("EUC-JP-MS")];
    char stringpool_str580[sizeof("UCS-4-INTERNAL")];
    char stringpool_str581[sizeof("MACROMAN")];
    char stringpool_str584[sizeof("JIS_X0212")];
    char stringpool_str586[sizeof("STRK1048-2002")];
    char stringpool_str588[sizeof("KOI8-U")];
    char stringpool_str589[sizeof("CSISOLATINGREEK")];
    char stringpool_str590[sizeof("SDECKANJI")];
    char stringpool_str595[sizeof("ISO_8859-7:1987")];
    char stringpool_str598[sizeof("ISO_646.IRV:1991")];
    char stringpool_str600[sizeof("EUCKR")];
    char stringpool_str604[sizeof("CN-GB-ISOIR165")];
    char stringpool_str605[sizeof("UTF-16LE")];
    char stringpool_str606[sizeof("MS-EE")];
    char stringpool_str607[sizeof("EUC-KR")];
    char stringpool_str609[sizeof("KOREAN")];
    char stringpool_str616[sizeof("CSHPROMAN8")];
    char stringpool_str618[sizeof("CSISO2022KR")];
    char stringpool_str619[sizeof("UTF-32LE")];
    char stringpool_str621[sizeof("JIS_X0201")];
    char stringpool_str626[sizeof("CSUNICODE")];
    char stringpool_str628[sizeof("UTF-7")];
    char stringpool_str629[sizeof("TCVN5712-1:1993")];
    char stringpool_str630[sizeof("HEBREW")];
    char stringpool_str634[sizeof("CN-GB")];
    char stringpool_str639[sizeof("JISX0201-1976")];
    char stringpool_str641[sizeof("JIS_X0208")];
    char stringpool_str643[sizeof("JIS_X0212-1990")];
    char stringpool_str652[sizeof("JIS_X0208-1983")];
    char stringpool_str656[sizeof("CSUNICODE11UTF7")];
    char stringpool_str662[sizeof("UNICODE-1-1-UTF-7")];
    char stringpool_str668[sizeof("UNICODELITTLE")];
    char stringpool_str673[sizeof("GREEK8")];
    char stringpool_str677[sizeof("CSISO57GB1988")];
    char stringpool_str678[sizeof("GEORGIAN-ACADEMY")];
    char stringpool_str698[sizeof("JIS_X0208-1990")];
    char stringpool_str706[sizeof("KOI8-RU")];
    char stringpool_str711[sizeof("JOHAB")];
    char stringpool_str721[sizeof("CSHALFWIDTHKATAKANA")];
    char stringpool_str724[sizeof("MACICELAND")];
    char stringpool_str739[sizeof("CSISO87JISX0208")];
    char stringpool_str754[sizeof("DECKOREAN")];
    char stringpool_str760[sizeof("GEORGIAN-PS")];
    char stringpool_str780[sizeof("CSEUCKR")];
    char stringpool_str783[sizeof("MACARABIC")];
    char stringpool_str790[sizeof("UCS-2BE")];
    char stringpool_str798[sizeof("UCS-2-SWAPPED")];
    char stringpool_str805[sizeof("UCS-4BE")];
    char stringpool_str807[sizeof("JIS_X0212.1990-0")];
    char stringpool_str811[sizeof("ANSI_X3.4-1986")];
    char stringpool_str813[sizeof("UCS-4-SWAPPED")];
    char stringpool_str816[sizeof("NEXTSTEP")];
    char stringpool_str820[sizeof("ANSI_X3.4-1968")];
    char stringpool_str824[sizeof("MACROMANIA")];
    char stringpool_str842[sizeof("UTF-16BE")];
    char stringpool_str856[sizeof("UTF-32BE")];
    char stringpool_str858[sizeof("GREEK")];
    char stringpool_str860[sizeof("WINBALTRIM")];
    char stringpool_str870[sizeof("MS-HEBR")];
    char stringpool_str875[sizeof("BIG5HKSCS")];
    char stringpool_str882[sizeof("BIG5-HKSCS")];
    char stringpool_str884[sizeof("MACCENTRALEUROPE")];
    char stringpool_str908[sizeof("MS-TURK")];
    char stringpool_str918[sizeof("MACTURKISH")];
    char stringpool_str942[sizeof("MACHEBREW")];
    char stringpool_str987[sizeof("BIG5-HKSCS:2001")];
    char stringpool_str995[sizeof("UNICODEBIG")];
    char stringpool_str1010[sizeof("BIG5-HKSCS:2004")];
    char stringpool_str1011[sizeof("BIG5-HKSCS:1999")];
    char stringpool_str1012[sizeof("MS-ARAB")];
    char stringpool_str1024[sizeof("BIGFIVE")];
    char stringpool_str1031[sizeof("BIG-FIVE")];
    char stringpool_str1095[sizeof("MACUKRAINE")];
    char stringpool_str1120[sizeof("EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE")];
    char stringpool_str1142[sizeof("MACGREEK")];
    char stringpool_str1144[sizeof("MS-GREEK")];
    char stringpool_str1228[sizeof("CSEUCPKDFMTJAPANESE")];
  };
static const struct stringpool_t stringpool_contents =
  {
    "L1",
    "L6",
    "CN",
    "L5",
    "L3",
    "L2",
    "L8",
    "866",
    "L4",
    "CP1131",
    "CP1361",
    "CP866",
    "CP1251",
    "862",
    "CP1256",
    "LATIN1",
    "LATIN6",
    "CP1255",
    "CP1133",
    "CP862",
    "LATIN5",
    "CP1253",
    "CP1252",
    "CP936",
    "LATIN3",
    "CP1258",
    "LATIN2",
    "C99",
    "LATIN8",
    "ISO646-CN",
    "CP932",
    "CP154",
    "CP819",
    "CP51932",
    "CP1254",
    "ISO8859-1",
    "LATIN4",
    "ISO8859-6",
    "ISO8859-11",
    "ISO8859-16",
    "ISO-8859-1",
    "ISO8859-5",
    "ISO-8859-6",
    "LATIN-9",
    "ISO-8859-11",
    "ISO8859-15",
    "ISO-8859-16",
    "ISO8859-3",
    "ISO-8859-5",
    "ISO8859-2",
    "ISO8859-13",
    "ISO-8859-15",
    "ISO8859-8",
    "ISO-8859-3",
    "ISO-8859-2",
    "ISO_8859-1",
    "ISO-8859-13",
    "ISO_8859-6",
    "ISO-8859-8",
    "ISO_8859-11",
    "CP949",
    "ISO_8859-16",
    "L10",
    "ISO_8859-5",
    "ISO_8859-16:2001",
    "JP",
    "ISO_8859-15",
    "HZ",
    "ISO_8859-3",
    "ISO_8859-2",
    "850",
    "ISO_8859-13",
    "ISO-2022-CN",
    "ISO_8859-8",
    "R8",
    "ISO8859-4",
    "ISO_8859-15:1998",
    "ISO8859-9",
    "ISO8859-14",
    "ASCII",
    "ISO-8859-4",
    "CP850",
    "ISO-8859-9",
    "CP1250",
    "ISO-8859-14",
    "CYRILLIC",
    "ISO-2022-CN-EXT",
    "LATIN10",
    "ISO_8859-14:1998",
    "ISO-IR-6",
    "CP950",
    "ISO_8859-4",
    "ISO_8859-9",
    "PT154",
    "ISO_8859-14",
    "ISO-IR-166",
    "EUCCN",
    "L7",
    "ISO-IR-165",
    "ISO-IR-126",
    "MAC",
    "EUC-CN",
    "SJIS-WIN",
    "TACTIS",
    "ISO-IR-226",
    "JIS_C6226-1983",
    "ISO-IR-58",
    "ISO_8859-10:1992",
    "CSISO2022CN",
    "UHC",
    "ISO-IR-138",
    "GB2312",
    "SJIS",
    "IBM866",
    "ISO8859-10",
    "ISO-IR-14",
    "ISO-IR-148",
    "ISO-8859-10",
    "ISO-CELTIC",
    "CSASCII",
    "IBM862",
    "MS936",
    "ISO-IR-159",
    "ISO-IR-101",
    "TIS620",
    "CSISO14JISC6220RO",
    "EUCTW",
    "ISO_8859-10",
    "TIS-620",
    "MS932",
    "EUC-TW",
    "JIS_C6220-1969-RO",
    "ISO-IR-144",
    "ISO-IR-149",
    "ISO-IR-199",
    "RK1048",
    "ISO-IR-203",
    "MS51932",
    "CP874",
    "US",
    "IBM819",
    "CSISOLATIN1",
    "CSISOLATIN6",
    "ISO-2022-JP-1",
    "JIS0208",
    "CSISOLATIN5",
    "CSISOLATINCYRILLIC",
    "ISO-2022-JP-2",
    "CSISOLATIN3",
    "CSISOLATIN2",
    "PTCP154",
    "TCVN",
    "ISO-IR-109",
    "ELOT_928",
    "ISO-IR-110",
    "ISO646-JP",
    "UCS-2",
    "CSISO159JISX02121990",
    "TIS620-0",
    "KOI8-T",
    "CSPTCP154",
    "CSISOLATIN4",
    "ISO_8859-5:1988",
    "WINDOWS-1251",
    "WINDOWS-1256",
    "ISO_8859-3:1988",
    "WINDOWS-1255",
    "ISO_8859-8:1988",
    "KSC5601",
    "WINDOWS-1253",
    "WINDOWS-1252",
    "UCS-4",
    "WINDOWS-1258",
    "IBM850",
    "CSUCS4",
    "ISO-2022-JP-MS",
    "CSISO2022JP2",
    "MS-CYRL",
    "CSWINDOWS31J",
    "ISO_8859-4:1988",
    "VISCII",
    "WINDOWS-936",
    "ISO-10646-UCS-2",
    "IBM-CP1133",
    "WINDOWS-1254",
    "UTF-16",
    "WINDOWS-51932",
    "CSPC862LATINHEBREW",
    "EUCJP-WIN",
    "CSVISCII",
    "ISO-IR-100",
    "KSC_5601",
    "MACCYRILLIC",
    "ISO_8859-9:1989",
    "WINDOWS-932",
    "ISO-10646-UCS-4",
    "UTF-8",
    "ISO-2022-JP",
    "WINDOWS-31J",
    "UTF-32",
    "KZ-1048",
    "GB_2312-80",
    "CSISOLATINHEBREW",
    "GB18030",
    "WINDOWS-1250",
    "CYRILLIC-ASIAN",
    "CP367",
    "ISO646-US",
    "CP1257",
    "GB_1988-80",
    "LATIN7",
    "CHAR",
    "CSISOLATINARABIC",
    "MS-ANSI",
    "EUCJP",
    "ISO-IR-179",
    "SHIFT-JIS",
    "EUC-JP",
    "TIS620.2533-1",
    "CSKZ1048",
    "KS_C_5601-1989",
    "US-ASCII",
    "CSISO2022JP",
    "SHIFT_JIS",
    "SJIS-OPEN",
    "TIS620.2529-1",
    "ARMSCII-8",
    "MACTHAI",
    "BIG5",
    "CSEUCTW",
    "DECHANZI",
    "BIG-5",
    "CSBIG5",
    "ISO8859-7",
    "WCHAR_T",
    "X0212",
    "CN-BIG5",
    "ISO-8859-7",
    "MACINTOSH",
    "SJIS-MS",
    "TIS620.2533-0",
    "ISO_8859-7",
    "ROMAN8",
    "ISO_8859-1:1987",
    "ISO_8859-6:1987",
    "CSGB2312",
    "CSIBM866",
    "ISO_8859-7:2003",
    "ISO_8859-2:1987",
    "CSSHIFTJIS",
    "X0201",
    "WINDOWS-1257",
    "MULELAO-1",
    "TCVN5712-1",
    "TCVN-5712",
    "X0208",
    "ECMA-118",
    "KOI8-R",
    "CSKOI8R",
    "ISO-IR-57",
    "ISO-IR-157",
    "ISO-IR-87",
    "ISO-IR-127",
    "CSUNICODE11",
    "WINDOWS-874",
    "UNICODE-1-1",
    "VISCII1.1-1",
    "ECMA-114",
    "ARABIC",
    "JAVA",
    "IBM367",
    "CHINESE",
    "KS_C_5601-1987",
    "HP-ROMAN8",
    "HZ-GB-2312",
    "EUCJP-OPEN",
    "ASMO-708",
    "CSMACINTOSH",
    "UCS-2LE",
    "CSPC850MULTILINGUAL",
    "SHIFT_JIS-MS",
    "CSKSC56011987",
    "EUCJPMS",
    "MS_KANJI",
    "CSISO58GB231280",
    "ISO-2022-KR",
    "UCS-2-INTERNAL",
    "GBK",
    "EUCJP-MS",
    "UCS-4LE",
    "MACCROATIAN",
    "EUC-JP-MS",
    "UCS-4-INTERNAL",
    "MACROMAN",
    "JIS_X0212",
    "STRK1048-2002",
    "KOI8-U",
    "CSISOLATINGREEK",
    "SDECKANJI",
    "ISO_8859-7:1987",
    "ISO_646.IRV:1991",
    "EUCKR",
    "CN-GB-ISOIR165",
    "UTF-16LE",
    "MS-EE",
    "EUC-KR",
    "KOREAN",
    "CSHPROMAN8",
    "CSISO2022KR",
    "UTF-32LE",
    "JIS_X0201",
    "CSUNICODE",
    "UTF-7",
    "TCVN5712-1:1993",
    "HEBREW",
    "CN-GB",
    "JISX0201-1976",
    "JIS_X0208",
    "JIS_X0212-1990",
    "JIS_X0208-1983",
    "CSUNICODE11UTF7",
    "UNICODE-1-1-UTF-7",
    "UNICODELITTLE",
    "GREEK8",
    "CSISO57GB1988",
    "GEORGIAN-ACADEMY",
    "JIS_X0208-1990",
    "KOI8-RU",
    "JOHAB",
    "CSHALFWIDTHKATAKANA",
    "MACICELAND",
    "CSISO87JISX0208",
    "DECKOREAN",
    "GEORGIAN-PS",
    "CSEUCKR",
    "MACARABIC",
    "UCS-2BE",
    "UCS-2-SWAPPED",
    "UCS-4BE",
    "JIS_X0212.1990-0",
    "ANSI_X3.4-1986",
    "UCS-4-SWAPPED",
    "NEXTSTEP",
    "ANSI_X3.4-1968",
    "MACROMANIA",
    "UTF-16BE",
    "UTF-32BE",
    "GREEK",
    "WINBALTRIM",
    "MS-HEBR",
    "BIG5HKSCS",
    "BIG5-HKSCS",
    "MACCENTRALEUROPE",
    "MS-TURK",
    "MACTURKISH",
    "MACHEBREW",
    "BIG5-HKSCS:2001",
    "UNICODEBIG",
    "BIG5-HKSCS:2004",
    "BIG5-HKSCS:1999",
    "MS-ARAB",
    "BIGFIVE",
    "BIG-FIVE",
    "MACUKRAINE",
    "EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE",
    "MACGREEK",
    "MS-GREEK",
    "CSEUCPKDFMTJAPANESE"
  };
#define stringpool ((const char *) &stringpool_contents)

static const struct alias aliases[] =
  {
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 60 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str8, ei_iso8859_1},
#line 134 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str9, ei_iso8859_10},
#line 289 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str10, ei_iso646_cn},
    {-1},
#line 126 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str12, ei_iso8859_9},
    {-1}, {-1},
#line 76 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str15, ei_iso8859_3},
#line 68 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str16, ei_iso8859_2},
    {-1},
#line 151 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str18, ei_iso8859_14},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 207 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str24, ei_cp866},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 84 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str31, ei_iso8859_4},
#line 209 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str32, ei_cp1131},
#line 375 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str33, ei_johab},
#line 205 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str34, ei_cp866},
    {-1}, {-1},
#line 174 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str37, ei_cp1251},
#line 203 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str38, ei_cp862},
#line 189 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str39, ei_cp1256},
    {-1}, {-1},
#line 59 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str42, ei_iso8859_1},
    {-1},
#line 133 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str44, ei_iso8859_10},
#line 186 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str45, ei_cp1255},
#line 244 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str46, ei_cp1133},
    {-1},
#line 201 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str48, ei_cp862},
    {-1},
#line 125 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str50, ei_iso8859_9},
#line 180 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str51, ei_cp1253},
    {-1},
#line 177 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str53, ei_cp1252},
#line 343 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str54, ei_cp936},
    {-1},
#line 75 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str56, ei_iso8859_3},
#line 195 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str57, ei_cp1258},
#line 67 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str58, ei_iso8859_2},
    {-1}, {-1},
#line 51 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str61, ei_c99},
#line 150 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str62, ei_iso8859_14},
    {-1}, {-1}, {-1}, {-1},
#line 287 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str67, ei_iso646_cn},
#line 321 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str68, ei_cp932},
    {-1}, {-1},
#line 236 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str71, ei_pt154},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 57 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str79, ei_iso8859_1},
#line 313 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str80, ei_cp51932},
    {-1}, {-1},
#line 183 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str83, ei_cp1254},
    {-1}, {-1}, {-1},
#line 62 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str87, ei_iso8859_1},
#line 83 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str88, ei_iso8859_4},
#line 102 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str89, ei_iso8859_6},
    {-1},
#line 139 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str91, ei_iso8859_11},
    {-1},
#line 166 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str93, ei_iso8859_16},
#line 53 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str94, ei_iso8859_1},
#line 93 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str95, ei_iso8859_5},
#line 94 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str96, ei_iso8859_6},
#line 158 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str97, ei_iso8859_15},
#line 137 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str98, ei_iso8859_11},
#line 159 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str99, ei_iso8859_15},
#line 160 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str100, ei_iso8859_16},
#line 78 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str101, ei_iso8859_3},
#line 87 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str102, ei_iso8859_5},
#line 70 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str103, ei_iso8859_2},
    {-1},
#line 145 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str105, ei_iso8859_13},
#line 154 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str106, ei_iso8859_15},
#line 120 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str107, ei_iso8859_8},
#line 71 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str108, ei_iso8859_3},
    {-1},
#line 63 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str110, ei_iso8859_2},
#line 54 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str111, ei_iso8859_1},
#line 140 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str112, ei_iso8859_13},
#line 95 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str113, ei_iso8859_6},
#line 114 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str114, ei_iso8859_8},
#line 138 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str115, ei_iso8859_11},
#line 371 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str116, ei_cp949},
#line 161 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str117, ei_iso8859_16},
#line 165 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str118, ei_iso8859_16},
#line 88 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str119, ei_iso8859_5},
    {-1},
#line 162 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str121, ei_iso8859_16},
#line 266 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str122, ei_iso646_jp},
#line 155 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str123, ei_iso8859_15},
#line 350 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str124, ei_hz},
#line 72 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str125, ei_iso8859_3},
    {-1},
#line 64 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str127, ei_iso8859_2},
#line 199 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str128, ei_cp850},
#line 141 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str129, ei_iso8859_13},
#line 347 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str130, ei_iso2022_cn},
#line 115 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str131, ei_iso8859_8},
#line 227 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str132, ei_hp_roman8},
#line 86 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str133, ei_iso8859_4},
#line 156 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str134, ei_iso8859_15},
#line 128 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str135, ei_iso8859_9},
    {-1},
#line 153 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str137, ei_iso8859_14},
    {-1},
#line 13 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str139, ei_ascii},
#line 79 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str140, ei_iso8859_4},
#line 197 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str141, ei_cp850},
#line 121 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str142, ei_iso8859_9},
#line 171 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str143, ei_cp1250},
#line 146 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str144, ei_iso8859_14},
    {-1}, {-1}, {-1}, {-1},
#line 91 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str149, ei_iso8859_5},
#line 349 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str150, ei_iso2022_cn_ext},
    {-1},
#line 164 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str152, ei_iso8859_16},
#line 148 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str153, ei_iso8859_14},
#line 16 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str154, ei_ascii},
#line 361 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str155, ei_cp950},
    {-1},
#line 80 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str157, ei_iso8859_4},
    {-1},
#line 122 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str159, ei_iso8859_9},
#line 234 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str160, ei_pt154},
#line 147 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str161, ei_iso8859_14},
    {-1},
#line 252 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str163, ei_tis620},
    {-1}, {-1},
#line 337 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str166, ei_euc_cn},
    {-1},
#line 144 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str168, ei_iso8859_13},
#line 295 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str169, ei_isoir165},
#line 107 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str170, ei_iso8859_7},
#line 212 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str171, ei_mac_roman},
    {-1},
#line 336 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str173, ei_euc_cn},
#line 325 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str174, ei_cp932},
    {-1}, {-1},
#line 253 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str177, ei_tis620},
#line 163 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str178, ei_iso8859_16},
#line 278 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str179, ei_jisx0208},
#line 292 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str180, ei_gb2312},
#line 131 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str181, ei_iso8859_10},
    {-1}, {-1},
#line 348 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str184, ei_iso2022_cn},
#line 372 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str185, ei_cp949},
    {-1},
#line 117 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str187, ei_iso8859_8},
    {-1}, {-1}, {-1},
#line 338 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str191, ei_euc_cn},
    {-1},
#line 318 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str193, ei_sjis},
#line 206 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str194, ei_cp866},
    {-1}, {-1},
#line 136 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str197, ei_iso8859_10},
    {-1}, {-1}, {-1}, {-1},
#line 265 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str202, ei_iso646_jp},
#line 124 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str203, ei_iso8859_9},
#line 129 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str204, ei_iso8859_10},
#line 152 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str205, ei_iso8859_14},
    {-1},
#line 22 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str207, ei_ascii},
#line 202 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str208, ei_cp862},
    {-1},
#line 344 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str210, ei_cp936},
    {-1},
#line 284 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str212, ei_jisx0212},
#line 66 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str213, ei_iso8859_2},
    {-1},
#line 247 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str215, ei_tis620},
    {-1},
#line 267 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str217, ei_iso646_jp},
#line 353 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str218, ei_euc_tw},
    {-1}, {-1},
#line 130 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str221, ei_iso8859_10},
#line 246 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str222, ei_tis620},
    {-1},
#line 327 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str224, ei_cp932},
#line 352 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str225, ei_euc_tw},
    {-1},
#line 263 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str227, ei_iso646_jp},
    {-1},
#line 90 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str229, ei_iso8859_5},
    {-1},
#line 300 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str231, ei_ksc5601},
#line 149 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str232, ei_iso8859_14},
    {-1},
#line 239 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str234, ei_rk1048},
#line 157 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str235, ei_iso8859_15},
#line 315 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str236, ei_cp51932},
#line 254 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str237, ei_cp874},
#line 21 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str238, ei_ascii},
#line 58 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str239, ei_iso8859_1},
#line 61 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str240, ei_iso8859_1},
    {-1},
#line 135 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str242, ei_iso8859_10},
#line 333 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str243, ei_iso2022_jp1},
    {-1},
#line 275 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str245, ei_jisx0208},
    {-1}, {-1},
#line 127 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str248, ei_iso8859_9},
#line 92 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str249, ei_iso8859_5},
    {-1},
#line 334 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str251, ei_iso2022_jp2},
    {-1}, {-1},
#line 77 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str254, ei_iso8859_3},
    {-1},
#line 69 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str256, ei_iso8859_2},
    {-1}, {-1},
#line 235 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str259, ei_pt154},
#line 259 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str260, ei_tcvn},
#line 74 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str261, ei_iso8859_3},
    {-1},
#line 109 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str263, ei_iso8859_7},
    {-1}, {-1},
#line 82 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str266, ei_iso8859_4},
    {-1},
#line 264 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str268, ei_iso646_jp},
#line 24 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str269, ei_ucs2},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 285 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str277, ei_jisx0212},
    {-1},
#line 248 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str279, ei_tis620},
#line 233 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str280, ei_koi8_t},
    {-1}, {-1}, {-1}, {-1},
#line 238 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str285, ei_pt154},
#line 85 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str286, ei_iso8859_4},
    {-1}, {-1},
#line 89 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str289, ei_iso8859_5},
#line 175 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str290, ei_cp1251},
#line 190 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str291, ei_cp1256},
#line 73 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str292, ei_iso8859_3},
    {-1},
#line 187 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str294, ei_cp1255},
#line 116 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str295, ei_iso8859_8},
#line 373 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str296, ei_cp949},
#line 181 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str297, ei_cp1253},
#line 178 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str298, ei_cp1252},
#line 33 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str299, ei_ucs4},
#line 196 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str300, ei_cp1258},
#line 198 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str301, ei_cp850},
#line 35 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str302, ei_ucs4},
#line 332 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str303, ei_iso2022_jpms},
#line 335 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str304, ei_iso2022_jp2},
#line 176 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str305, ei_cp1251},
    {-1},
#line 323 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str307, ei_cp932},
#line 81 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str308, ei_iso8859_4},
#line 256 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str309, ei_viscii},
#line 345 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str310, ei_cp936},
#line 25 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str311, ei_ucs2},
#line 245 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str312, ei_cp1133},
#line 184 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str313, ei_cp1254},
#line 38 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str314, ei_utf16},
#line 314 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str315, ei_cp51932},
#line 204 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str316, ei_cp862},
#line 311 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str317, ei_eucjp_ms},
#line 258 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str318, ei_viscii},
#line 56 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str319, ei_iso8859_1},
#line 297 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str320, ei_ksc5601},
#line 218 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str321, ei_mac_cyrillic},
    {-1},
#line 123 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str323, ei_iso8859_9},
#line 326 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str324, ei_cp932},
    {-1},
#line 34 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str326, ei_ucs4},
    {-1},
#line 23 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str328, ei_utf8},
    {-1}, {-1},
#line 330 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str331, ei_iso2022_jp},
#line 322 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str332, ei_cp932},
    {-1}, {-1},
#line 41 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str335, ei_utf32},
#line 241 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str336, ei_rk1048},
    {-1},
#line 291 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str338, ei_gb2312},
#line 119 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str339, ei_iso8859_8},
#line 346 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str340, ei_gb18030},
    {-1}, {-1},
#line 172 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str343, ei_cp1250},
#line 237 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str344, ei_pt154},
    {-1}, {-1}, {-1}, {-1},
#line 19 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str349, ei_ascii},
    {-1}, {-1}, {-1},
#line 14 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str353, ei_ascii},
    {-1}, {-1}, {-1},
#line 192 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str357, ei_cp1257},
    {-1},
#line 286 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str359, ei_iso646_cn},
    {-1}, {-1},
#line 143 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str362, ei_iso8859_13},
#line 378 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str363, ei_local_char},
#line 101 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str364, ei_iso8859_6},
    {-1},
#line 179 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str366, ei_cp1252},
#line 304 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str367, ei_euc_jp},
#line 142 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str368, ei_iso8859_13},
    {-1}, {-1},
#line 317 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str371, ei_sjis},
    {-1}, {-1},
#line 303 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str374, ei_euc_jp},
#line 251 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str375, ei_tis620},
    {-1}, {-1}, {-1},
#line 242 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str379, ei_rk1048},
    {-1}, {-1},
#line 299 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str382, ei_ksc5601},
    {-1},
#line 12 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str384, ei_ascii},
#line 331 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str385, ei_iso2022_jp},
    {-1}, {-1},
#line 316 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str388, ei_sjis},
    {-1}, {-1},
#line 324 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str391, ei_cp932},
    {-1},
#line 249 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str393, ei_tis620},
#line 230 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str394, ei_armscii_8},
    {-1},
#line 224 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str396, ei_mac_thai},
#line 355 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str397, ei_ces_big5},
#line 354 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str398, ei_euc_tw},
    {-1},
#line 341 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str400, ei_euc_cn},
    {-1}, {-1}, {-1},
#line 356 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str404, ei_ces_big5},
    {-1},
#line 360 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str406, ei_ces_big5},
#line 113 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str407, ei_iso8859_7},
#line 379 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str408, ei_local_wchar_t},
    {-1}, {-1}, {-1},
#line 283 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str412, ei_jisx0212},
#line 359 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str413, ei_ces_big5},
#line 103 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str414, ei_iso8859_7},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 211 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str421, ei_mac_roman},
    {-1}, {-1},
#line 329 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str424, ei_cp932},
    {-1}, {-1}, {-1},
#line 250 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str428, ei_tis620},
    {-1}, {-1},
#line 104 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str431, ei_iso8859_7},
    {-1}, {-1},
#line 226 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str434, ei_hp_roman8},
#line 55 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str435, ei_iso8859_1},
#line 96 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str436, ei_iso8859_6},
#line 340 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str437, ei_euc_cn},
    {-1}, {-1},
#line 208 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str440, ei_cp866},
    {-1},
#line 106 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str442, ei_iso8859_7},
#line 65 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str443, ei_iso8859_2},
    {-1}, {-1}, {-1}, {-1},
#line 320 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str448, ei_sjis},
#line 270 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str449, ei_jisx0201},
#line 193 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str450, ei_cp1257},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 243 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str456, ei_mulelao},
    {-1},
#line 261 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str458, ei_tcvn},
    {-1}, {-1}, {-1},
#line 260 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str462, ei_tcvn},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 276 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str469, ei_jisx0208},
    {-1}, {-1},
#line 108 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str472, ei_iso8859_7},
    {-1},
#line 167 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str474, ei_koi8_r},
    {-1},
#line 168 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str476, ei_koi8_r},
    {-1}, {-1}, {-1},
#line 288 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str480, ei_iso646_cn},
    {-1}, {-1}, {-1},
#line 132 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str484, ei_iso8859_10},
    {-1},
#line 277 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str486, ei_jisx0208},
    {-1},
#line 97 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str488, ei_iso8859_6},
    {-1}, {-1}, {-1},
#line 30 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str492, ei_ucs2be},
#line 255 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str493, ei_cp874},
    {-1}, {-1},
#line 29 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str496, ei_ucs2be},
#line 257 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str497, ei_viscii},
#line 98 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str498, ei_iso8859_6},
#line 100 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str499, ei_iso8859_6},
    {-1},
#line 52 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str501, ei_java},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 20 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str509, ei_ascii},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 294 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str515, ei_gb2312},
    {-1}, {-1},
#line 298 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str518, ei_ksc5601},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 225 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str524, ei_hp_roman8},
#line 351 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str525, ei_hz},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 309 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str534, ei_eucjp_ms},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 99 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str543, ei_iso8859_6},
    {-1}, {-1}, {-1}, {-1},
#line 213 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str548, ei_mac_roman},
    {-1}, {-1}, {-1}, {-1},
#line 31 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str553, ei_ucs2le},
    {-1}, {-1},
#line 200 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str556, ei_cp850},
#line 328 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str557, ei_cp932},
#line 301 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str558, ei_ksc5601},
    {-1},
#line 312 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str560, ei_eucjp_ms},
#line 319 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str561, ei_sjis},
    {-1},
#line 293 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str563, ei_gb2312},
#line 376 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str564, ei_iso2022_kr},
#line 47 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str565, ei_ucs2internal},
#line 342 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str566, ei_ces_gbk},
#line 308 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str567, ei_eucjp_ms},
#line 37 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str568, ei_ucs4le},
    {-1}, {-1}, {-1},
#line 216 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str572, ei_mac_croatian},
    {-1},
#line 310 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str574, ei_eucjp_ms},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 49 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str580, ei_ucs4internal},
#line 210 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str581, ei_mac_roman},
    {-1}, {-1},
#line 280 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str584, ei_jisx0212},
    {-1},
#line 240 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str586, ei_rk1048},
    {-1},
#line 169 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str588, ei_koi8_u},
#line 112 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str589, ei_iso8859_7},
#line 307 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str590, ei_euc_jp},
    {-1}, {-1}, {-1}, {-1},
#line 105 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str595, ei_iso8859_7},
    {-1}, {-1},
#line 15 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str598, ei_ascii},
    {-1},
#line 368 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str600, ei_euc_kr},
    {-1}, {-1}, {-1},
#line 296 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str604, ei_isoir165},
#line 40 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str605, ei_utf16le},
#line 173 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str606, ei_cp1250},
#line 367 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str607, ei_euc_kr},
    {-1},
#line 302 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str609, ei_ksc5601},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 228 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str616, ei_hp_roman8},
    {-1},
#line 377 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str618, ei_iso2022_kr},
#line 43 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str619, ei_utf32le},
    {-1},
#line 268 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str621, ei_jisx0201},
    {-1}, {-1}, {-1}, {-1},
#line 26 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str626, ei_ucs2},
    {-1},
#line 44 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str628, ei_utf7},
#line 262 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str629, ei_tcvn},
#line 118 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str630, ei_iso8859_8},
    {-1}, {-1}, {-1},
#line 339 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str634, ei_euc_cn},
    {-1}, {-1}, {-1}, {-1},
#line 269 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str639, ei_jisx0201},
    {-1},
#line 272 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str641, ei_jisx0208},
    {-1},
#line 282 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str643, ei_jisx0212},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 273 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str652, ei_jisx0208},
    {-1}, {-1}, {-1},
#line 46 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str656, ei_utf7},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 45 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str662, ei_utf7},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 32 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str668, ei_ucs2le},
    {-1}, {-1}, {-1}, {-1},
#line 110 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str673, ei_iso8859_7},
    {-1}, {-1}, {-1},
#line 290 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str677, ei_iso646_cn},
#line 231 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str678, ei_georgian_academy},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 274 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str698, ei_jisx0208},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 170 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str706, ei_koi8_ru},
    {-1}, {-1}, {-1}, {-1},
#line 374 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str711, ei_johab},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 271 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str721, ei_jisx0201},
    {-1}, {-1},
#line 215 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str724, ei_mac_iceland},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 279 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str739, ei_jisx0208},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 370 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str754, ei_euc_kr},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 232 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str760, ei_georgian_ps},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 369 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str780, ei_euc_kr},
    {-1}, {-1},
#line 223 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str783, ei_mac_arabic},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 27 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str790, ei_ucs2be},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 48 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str798, ei_ucs2swapped},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 36 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str805, ei_ucs4be},
    {-1},
#line 281 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str807, ei_jisx0212},
    {-1}, {-1}, {-1},
#line 18 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str811, ei_ascii},
    {-1},
#line 50 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str813, ei_ucs4swapped},
    {-1}, {-1},
#line 229 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str816, ei_nextstep},
    {-1}, {-1}, {-1},
#line 17 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str820, ei_ascii},
    {-1}, {-1}, {-1},
#line 217 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str824, ei_mac_romania},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 39 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str842, ei_utf16be},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1},
#line 42 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str856, ei_utf32be},
    {-1},
#line 111 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str858, ei_iso8859_7},
    {-1},
#line 194 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str860, ei_cp1257},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 188 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str870, ei_cp1255},
    {-1}, {-1}, {-1}, {-1},
#line 365 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str875, ei_big5hkscs2004},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 364 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str882, ei_big5hkscs2004},
    {-1},
#line 214 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str884, ei_mac_centraleurope},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 185 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str908, ei_cp1254},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 221 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str918, ei_mac_turkish},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 222 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str942, ei_mac_hebrew},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 363 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str987, ei_big5hkscs2001},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 28 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str995, ei_ucs2be},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 366 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1010, ei_big5hkscs2004},
#line 362 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1011, ei_big5hkscs1999},
#line 191 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1012, ei_cp1256},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 358 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1024, ei_ces_big5},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 357 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1031, ei_ces_big5},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 219 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1095, ei_mac_ukraine},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 305 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1120, ei_euc_jp},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1},
#line 220 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1142, ei_mac_greek},
    {-1},
#line 182 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1144, ei_cp1253},
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
#line 306 "lib/aliases_sysosf1.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1228, ei_euc_jp}
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
