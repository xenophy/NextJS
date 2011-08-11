/* ANSI-C code produced by gperf version 3.0.4 */
/* Command-line: gperf -m 10 lib/aliases_syssolaris.gperf  */
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

#line 1 "lib/aliases_syssolaris.gperf"
struct alias { int name; unsigned int encoding_index; };

#define TOTAL_KEYWORDS 370
#define MIN_WORD_LENGTH 2
#define MAX_WORD_LENGTH 45
#define MIN_HASH_VALUE 11
#define MAX_HASH_VALUE 1142
/* maximum key range = 1132, duplicates = 0 */

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
      1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143,
      1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143,
      1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143,
      1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143,
      1143, 1143, 1143, 1143, 1143,    4,  108, 1143,   46,    3,
        11,    7,   78,   10,    4,  211,   17,   19,  116, 1143,
      1143, 1143, 1143, 1143, 1143,   61,  251,    5,   90,   22,
       307,  126,    8,    3,    8,  252,   66,  184,    4,    3,
       132, 1143,  116,   81,   54,   50,  215,  127,  367,    8,
         4, 1143, 1143, 1143, 1143,   33, 1143, 1143, 1143, 1143,
      1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143,
      1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143,
      1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143
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
    char stringpool_str11[sizeof("CN")];
    char stringpool_str14[sizeof("HZ")];
    char stringpool_str15[sizeof("646")];
    char stringpool_str28[sizeof("866")];
    char stringpool_str30[sizeof("CP1131")];
    char stringpool_str31[sizeof("CP1361")];
    char stringpool_str38[sizeof("CP1133")];
    char stringpool_str39[sizeof("CP866")];
    char stringpool_str41[sizeof("CP1251")];
    char stringpool_str42[sizeof("862")];
    char stringpool_str43[sizeof("CP1256")];
    char stringpool_str44[sizeof("CP936")];
    char stringpool_str45[sizeof("EUCCN")];
    char stringpool_str46[sizeof("C99")];
    char stringpool_str49[sizeof("CP1253")];
    char stringpool_str50[sizeof("EUC-CN")];
    char stringpool_str53[sizeof("CP862")];
    char stringpool_str55[sizeof("CP1255")];
    char stringpool_str57[sizeof("CP1252")];
    char stringpool_str58[sizeof("CP932")];
    char stringpool_str63[sizeof("UHC")];
    char stringpool_str66[sizeof("5601")];
    char stringpool_str68[sizeof("CP819")];
    char stringpool_str69[sizeof("CP1258")];
    char stringpool_str71[sizeof("L1")];
    char stringpool_str72[sizeof("L6")];
    char stringpool_str73[sizeof("CP51932")];
    char stringpool_str75[sizeof("L3")];
    char stringpool_str78[sizeof("L5")];
    char stringpool_str79[sizeof("L2")];
    char stringpool_str80[sizeof("ASCII")];
    char stringpool_str85[sizeof("L8")];
    char stringpool_str88[sizeof("ISO8859-1")];
    char stringpool_str90[sizeof("ISO8859-6")];
    char stringpool_str92[sizeof("ISO8859-11")];
    char stringpool_str93[sizeof("ISO-8859-1")];
    char stringpool_str94[sizeof("ISO8859-16")];
    char stringpool_str95[sizeof("ISO-8859-6")];
    char stringpool_str96[sizeof("ISO8859-3")];
    char stringpool_str97[sizeof("ISO-8859-11")];
    char stringpool_str99[sizeof("ISO-8859-16")];
    char stringpool_str100[sizeof("ISO8859-13")];
    char stringpool_str101[sizeof("ISO-8859-3")];
    char stringpool_str102[sizeof("ISO8859-5")];
    char stringpool_str104[sizeof("ISO8859-2")];
    char stringpool_str105[sizeof("ISO-8859-13")];
    char stringpool_str106[sizeof("ISO8859-15")];
    char stringpool_str107[sizeof("ISO-8859-5")];
    char stringpool_str109[sizeof("ISO-8859-2")];
    char stringpool_str111[sizeof("ISO-8859-15")];
    char stringpool_str112[sizeof("850")];
    char stringpool_str116[sizeof("ISO8859-8")];
    char stringpool_str117[sizeof("ISO-2022-CN")];
    char stringpool_str118[sizeof("ISO646-CN")];
    char stringpool_str120[sizeof("ISO8859-9")];
    char stringpool_str121[sizeof("ISO-8859-8")];
    char stringpool_str122[sizeof("ISO_8859-1")];
    char stringpool_str124[sizeof("ISO_8859-6")];
    char stringpool_str125[sizeof("ISO-8859-9")];
    char stringpool_str126[sizeof("ISO_8859-11")];
    char stringpool_str127[sizeof("CP1250")];
    char stringpool_str128[sizeof("ISO_8859-16")];
    char stringpool_str129[sizeof("CP850")];
    char stringpool_str130[sizeof("ISO_8859-3")];
    char stringpool_str131[sizeof("CP950")];
    char stringpool_str132[sizeof("ISO_8859-16:2001")];
    char stringpool_str133[sizeof("US")];
    char stringpool_str134[sizeof("ISO_8859-13")];
    char stringpool_str135[sizeof("R8")];
    char stringpool_str136[sizeof("ISO_8859-5")];
    char stringpool_str138[sizeof("ISO_8859-2")];
    char stringpool_str139[sizeof("LATIN1")];
    char stringpool_str140[sizeof("ISO_8859-15")];
    char stringpool_str141[sizeof("LATIN6")];
    char stringpool_str142[sizeof("JP")];
    char stringpool_str145[sizeof("CP949")];
    char stringpool_str146[sizeof("L4")];
    char stringpool_str147[sizeof("LATIN3")];
    char stringpool_str149[sizeof("ISO-IR-6")];
    char stringpool_str150[sizeof("ISO_8859-8")];
    char stringpool_str152[sizeof("ISO_8859-15:1998")];
    char stringpool_str153[sizeof("LATIN5")];
    char stringpool_str154[sizeof("ISO_8859-9")];
    char stringpool_str155[sizeof("LATIN2")];
    char stringpool_str158[sizeof("ISO-IR-166")];
    char stringpool_str161[sizeof("L10")];
    char stringpool_str162[sizeof("UCS-2")];
    char stringpool_str165[sizeof("ISO-IR-126")];
    char stringpool_str166[sizeof("CHINESE")];
    char stringpool_str167[sizeof("LATIN8")];
    char stringpool_str168[sizeof("CSASCII")];
    char stringpool_str170[sizeof("ISO-IR-165")];
    char stringpool_str171[sizeof("ISO-2022-CN-EXT")];
    char stringpool_str173[sizeof("ISO-IR-226")];
    char stringpool_str175[sizeof("GB2312")];
    char stringpool_str176[sizeof("LATIN-9")];
    char stringpool_str178[sizeof("ISO8859-10")];
    char stringpool_str179[sizeof("CP154")];
    char stringpool_str180[sizeof("ISO-CELTIC")];
    char stringpool_str182[sizeof("ISO_8859-10:1992")];
    char stringpool_str183[sizeof("ISO-8859-10")];
    char stringpool_str184[sizeof("ELOT_928")];
    char stringpool_str185[sizeof("JIS_C6226-1983")];
    char stringpool_str186[sizeof("ISO-IR-58")];
    char stringpool_str187[sizeof("ISO-IR-138")];
    char stringpool_str188[sizeof("ANSI-1251")];
    char stringpool_str191[sizeof("CP1254")];
    char stringpool_str194[sizeof("ISO-IR-159")];
    char stringpool_str195[sizeof("CSISO2022CN")];
    char stringpool_str196[sizeof("CNS11643")];
    char stringpool_str197[sizeof("MAC")];
    char stringpool_str198[sizeof("ISO-IR-101")];
    char stringpool_str201[sizeof("UNICODE-1-1")];
    char stringpool_str202[sizeof("CSUNICODE11")];
    char stringpool_str203[sizeof("ISO-IR-199")];
    char stringpool_str212[sizeof("ISO_8859-10")];
    char stringpool_str213[sizeof("CSUNICODE")];
    char stringpool_str214[sizeof("ISO-IR-203")];
    char stringpool_str218[sizeof("US-ASCII")];
    char stringpool_str220[sizeof("ISO_8859-14:1998")];
    char stringpool_str222[sizeof("IBM866")];
    char stringpool_str223[sizeof("MS936")];
    char stringpool_str225[sizeof("ISO-10646-UCS-2")];
    char stringpool_str226[sizeof("JIS_C6220-1969-RO")];
    char stringpool_str229[sizeof("LATIN10")];
    char stringpool_str230[sizeof("ISO-IR-109")];
    char stringpool_str233[sizeof("JIS0208")];
    char stringpool_str236[sizeof("IBM862")];
    char stringpool_str237[sizeof("MS932")];
    char stringpool_str238[sizeof("ISO8859-4")];
    char stringpool_str241[sizeof("ISO-IR-110")];
    char stringpool_str242[sizeof("ISO8859-14")];
    char stringpool_str243[sizeof("ISO-8859-4")];
    char stringpool_str247[sizeof("ISO-8859-14")];
    char stringpool_str248[sizeof("TIS620")];
    char stringpool_str249[sizeof("ISO-2022-JP-1")];
    char stringpool_str250[sizeof("SJIS")];
    char stringpool_str251[sizeof("IBM819")];
    char stringpool_str252[sizeof("MS51932")];
    char stringpool_str253[sizeof("TIS-620")];
    char stringpool_str257[sizeof("ISO-2022-JP-2")];
    char stringpool_str258[sizeof("ISO-IR-148")];
    char stringpool_str259[sizeof("MS-EE")];
    char stringpool_str261[sizeof("ISO_8859-3:1988")];
    char stringpool_str262[sizeof("ISO-IR-149")];
    char stringpool_str263[sizeof("UCS-2LE")];
    char stringpool_str264[sizeof("ISO_8859-5:1988")];
    char stringpool_str271[sizeof("ISO_8859-8:1988")];
    char stringpool_str272[sizeof("ISO_8859-4")];
    char stringpool_str275[sizeof("ISO_8859-9:1989")];
    char stringpool_str276[sizeof("ISO_8859-14")];
    char stringpool_str277[sizeof("CYRILLIC")];
    char stringpool_str279[sizeof("L7")];
    char stringpool_str281[sizeof("TCVN")];
    char stringpool_str282[sizeof("CSISO159JISX02121990")];
    char stringpool_str283[sizeof("RK1048")];
    char stringpool_str284[sizeof("ISO-IR-100")];
    char stringpool_str289[sizeof("LATIN4")];
    char stringpool_str290[sizeof("CSISO14JISC6220RO")];
    char stringpool_str292[sizeof("ISO-10646-UCS-4")];
    char stringpool_str296[sizeof("UCS-4")];
    char stringpool_str297[sizeof("CSISOLATIN1")];
    char stringpool_str298[sizeof("GB18030")];
    char stringpool_str299[sizeof("CSISOLATIN6")];
    char stringpool_str300[sizeof("TIS620-0")];
    char stringpool_str301[sizeof("ISO-IR-14")];
    char stringpool_str302[sizeof("CHAR")];
    char stringpool_str303[sizeof("CSUCS4")];
    char stringpool_str304[sizeof("EUCJP")];
    char stringpool_str305[sizeof("CSISOLATIN3")];
    char stringpool_str306[sizeof("PT154")];
    char stringpool_str308[sizeof("CSISOLATINCYRILLIC")];
    char stringpool_str309[sizeof("EUC-JP")];
    char stringpool_str311[sizeof("CSISOLATIN5")];
    char stringpool_str312[sizeof("IBM850")];
    char stringpool_str313[sizeof("CSISOLATIN2")];
    char stringpool_str314[sizeof("GB_2312-80")];
    char stringpool_str315[sizeof("SJIS-WIN")];
    char stringpool_str316[sizeof("VISCII")];
    char stringpool_str317[sizeof("ISO646-US")];
    char stringpool_str318[sizeof("EUCJP-WIN")];
    char stringpool_str319[sizeof("ECMA-118")];
    char stringpool_str325[sizeof("MACTHAI")];
    char stringpool_str326[sizeof("CSVISCII")];
    char stringpool_str328[sizeof("ISO-2022-JP-MS")];
    char stringpool_str330[sizeof("UCS-4LE")];
    char stringpool_str332[sizeof("ISO_8859-4:1988")];
    char stringpool_str334[sizeof("CSISO2022JP2")];
    char stringpool_str338[sizeof("GB_1988-80")];
    char stringpool_str340[sizeof("EUCTW")];
    char stringpool_str343[sizeof("SJIS-OPEN")];
    char stringpool_str345[sizeof("EUC-TW")];
    char stringpool_str346[sizeof("EUCJP-OPEN")];
    char stringpool_str347[sizeof("MS-ANSI")];
    char stringpool_str349[sizeof("JAVA")];
    char stringpool_str355[sizeof("TIS620.2533-1")];
    char stringpool_str357[sizeof("TIS620.2533")];
    char stringpool_str359[sizeof("MACINTOSH")];
    char stringpool_str362[sizeof("CSISOLATINARABIC")];
    char stringpool_str364[sizeof("KSC_5601")];
    char stringpool_str365[sizeof("IBM-CP1133")];
    char stringpool_str371[sizeof("TIS620.2529-1")];
    char stringpool_str376[sizeof("ISO-2022-JP")];
    char stringpool_str377[sizeof("ISO646-JP")];
    char stringpool_str378[sizeof("UTF-16")];
    char stringpool_str380[sizeof("ISO-IR-144")];
    char stringpool_str382[sizeof("KOI8-U")];
    char stringpool_str384[sizeof("ARMSCII-8")];
    char stringpool_str385[sizeof("UNICODELITTLE")];
    char stringpool_str390[sizeof("KOI8-T")];
    char stringpool_str392[sizeof("ARABIC")];
    char stringpool_str394[sizeof("CP874")];
    char stringpool_str395[sizeof("ISO-IR-179")];
    char stringpool_str396[sizeof("UTF-32")];
    char stringpool_str397[sizeof("CSEUCTW")];
    char stringpool_str398[sizeof("TIS620.2533-0")];
    char stringpool_str400[sizeof("UTF-8")];
    char stringpool_str401[sizeof("BIG5")];
    char stringpool_str405[sizeof("ROMAN8")];
    char stringpool_str406[sizeof("BIG-5")];
    char stringpool_str408[sizeof("X0212")];
    char stringpool_str411[sizeof("CSBIG5")];
    char stringpool_str414[sizeof("CSUNICODE11UTF7")];
    char stringpool_str415[sizeof("UNICODE-1-1-UTF-7")];
    char stringpool_str416[sizeof("CN-BIG5")];
    char stringpool_str421[sizeof("MULELAO-1")];
    char stringpool_str423[sizeof("HP-ROMAN8")];
    char stringpool_str424[sizeof("KZ-1048")];
    char stringpool_str426[sizeof("KS_C_5601-1989")];
    char stringpool_str427[sizeof("CSMACINTOSH")];
    char stringpool_str428[sizeof("CYRILLIC-ASIAN")];
    char stringpool_str429[sizeof("UCS-2-INTERNAL")];
    char stringpool_str430[sizeof("CSKZ1048")];
    char stringpool_str431[sizeof("CSISOLATINHEBREW")];
    char stringpool_str433[sizeof("CSGB2312")];
    char stringpool_str435[sizeof("X0201")];
    char stringpool_str441[sizeof("ECMA-114")];
    char stringpool_str442[sizeof("VISCII1.1-1")];
    char stringpool_str443[sizeof("CP367")];
    char stringpool_str445[sizeof("PTCP154")];
    char stringpool_str446[sizeof("HZ-GB-2312")];
    char stringpool_str447[sizeof("CSISOLATIN4")];
    char stringpool_str448[sizeof("UCS-2BE")];
    char stringpool_str451[sizeof("ISO_8859-1:1987")];
    char stringpool_str452[sizeof("ISO_8859-6:1987")];
    char stringpool_str454[sizeof("CSISO2022JP")];
    char stringpool_str455[sizeof("ISO_8859-7:2003")];
    char stringpool_str456[sizeof("MS-CYRL")];
    char stringpool_str457[sizeof("CP1257")];
    char stringpool_str458[sizeof("EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE")];
    char stringpool_str459[sizeof("ISO_8859-2:1987")];
    char stringpool_str460[sizeof("WCHAR_T")];
    char stringpool_str462[sizeof("GREEK8")];
    char stringpool_str463[sizeof("X0208")];
    char stringpool_str465[sizeof("KOREAN")];
    char stringpool_str470[sizeof("CSWINDOWS31J")];
    char stringpool_str473[sizeof("WINDOWS-31J")];
    char stringpool_str475[sizeof("WINDOWS-1251")];
    char stringpool_str476[sizeof("WINDOWS-1256")];
    char stringpool_str477[sizeof("MACCYRILLIC")];
    char stringpool_str479[sizeof("WINDOWS-1253")];
    char stringpool_str480[sizeof("CSIBM866")];
    char stringpool_str481[sizeof("WINDOWS-936")];
    char stringpool_str482[sizeof("WINDOWS-1255")];
    char stringpool_str483[sizeof("WINDOWS-1252")];
    char stringpool_str486[sizeof("UTF-16LE")];
    char stringpool_str489[sizeof("WINDOWS-1258")];
    char stringpool_str492[sizeof("WINDOWS-51932")];
    char stringpool_str495[sizeof("WINDOWS-932")];
    char stringpool_str496[sizeof("UCS-4-INTERNAL")];
    char stringpool_str497[sizeof("UTF-32LE")];
    char stringpool_str499[sizeof("KOI8-RU")];
    char stringpool_str503[sizeof("CSPC862LATINHEBREW")];
    char stringpool_str504[sizeof("ISO8859-7")];
    char stringpool_str506[sizeof("CSPTCP154")];
    char stringpool_str509[sizeof("ISO-8859-7")];
    char stringpool_str511[sizeof("MACCROATIAN")];
    char stringpool_str514[sizeof("KOI8-R")];
    char stringpool_str515[sizeof("UCS-4BE")];
    char stringpool_str516[sizeof("EUCKR")];
    char stringpool_str518[sizeof("WINDOWS-1250")];
    char stringpool_str519[sizeof("CSKOI8R")];
    char stringpool_str520[sizeof("EUCJPMS")];
    char stringpool_str521[sizeof("EUC-KR")];
    char stringpool_str522[sizeof("SJIS-MS")];
    char stringpool_str525[sizeof("EUCJP-MS")];
    char stringpool_str528[sizeof("TCVN5712-1")];
    char stringpool_str530[sizeof("EUC-JP-MS")];
    char stringpool_str532[sizeof("TCVN-5712")];
    char stringpool_str533[sizeof("GEORGIAN-ACADEMY")];
    char stringpool_str538[sizeof("ISO_8859-7")];
    char stringpool_str540[sizeof("MACICELAND")];
    char stringpool_str550[sizeof("WINDOWS-1254")];
    char stringpool_str551[sizeof("ASMO-708")];
    char stringpool_str555[sizeof("LATIN7")];
    char stringpool_str556[sizeof("MS_KANJI")];
    char stringpool_str557[sizeof("CSHPROMAN8")];
    char stringpool_str569[sizeof("MACROMAN")];
    char stringpool_str573[sizeof("CSEUCKR")];
    char stringpool_str574[sizeof("ISO-IR-57")];
    char stringpool_str575[sizeof("CSISO58GB231280")];
    char stringpool_str577[sizeof("MACCENTRALEUROPE")];
    char stringpool_str578[sizeof("ISO-IR-157")];
    char stringpool_str579[sizeof("ISO-IR-127")];
    char stringpool_str580[sizeof("JIS_X0212")];
    char stringpool_str581[sizeof("ISO-IR-87")];
    char stringpool_str584[sizeof("JOHAB")];
    char stringpool_str586[sizeof("ISO_646.IRV:1991")];
    char stringpool_str588[sizeof("ISO-2022-KR")];
    char stringpool_str605[sizeof("JISX0201-1976")];
    char stringpool_str607[sizeof("JIS_X0201")];
    char stringpool_str618[sizeof("KS_C_5601-1987")];
    char stringpool_str620[sizeof("CN-GB-ISOIR165")];
    char stringpool_str626[sizeof("IBM367")];
    char stringpool_str627[sizeof("JIS_X0212-1990")];
    char stringpool_str631[sizeof("SHIFT-JIS")];
    char stringpool_str633[sizeof("GBK")];
    char stringpool_str635[sizeof("JIS_X0208")];
    char stringpool_str637[sizeof("JIS_X0208-1983")];
    char stringpool_str639[sizeof("PCK")];
    char stringpool_str641[sizeof("CSSHIFTJIS")];
    char stringpool_str642[sizeof("CN-GB")];
    char stringpool_str652[sizeof("CSKSC56011987")];
    char stringpool_str653[sizeof("TCVN5712-1:1993")];
    char stringpool_str654[sizeof("CSPC850MULTILINGUAL")];
    char stringpool_str657[sizeof("HEBREW")];
    char stringpool_str659[sizeof("ISO_8859-7:1987")];
    char stringpool_str660[sizeof("SHIFT_JIS")];
    char stringpool_str666[sizeof("CSISO2022KR")];
    char stringpool_str671[sizeof("UTF-16BE")];
    char stringpool_str673[sizeof("CSISOLATINGREEK")];
    char stringpool_str676[sizeof("JIS_X0208-1990")];
    char stringpool_str678[sizeof("STRK1048-2002")];
    char stringpool_str679[sizeof("GREEK")];
    char stringpool_str682[sizeof("UTF-32BE")];
    char stringpool_str683[sizeof("WINDOWS-1257")];
    char stringpool_str689[sizeof("UNICODEBIG")];
    char stringpool_str692[sizeof("MACROMANIA")];
    char stringpool_str700[sizeof("MACARABIC")];
    char stringpool_str708[sizeof("MS-HEBR")];
    char stringpool_str729[sizeof("MACUKRAINE")];
    char stringpool_str733[sizeof("JIS_X0212.1990-0")];
    char stringpool_str742[sizeof("CSISO57GB1988")];
    char stringpool_str748[sizeof("GEORGIAN-PS")];
    char stringpool_str763[sizeof("ANSI_X3.4-1986")];
    char stringpool_str771[sizeof("MACTURKISH")];
    char stringpool_str776[sizeof("ANSI_X3.4-1968")];
    char stringpool_str786[sizeof("UCS-2-SWAPPED")];
    char stringpool_str788[sizeof("UTF-7")];
    char stringpool_str809[sizeof("CSHALFWIDTHKATAKANA")];
    char stringpool_str811[sizeof("CSISO87JISX0208")];
    char stringpool_str831[sizeof("WINDOWS-874")];
    char stringpool_str851[sizeof("SHIFT_JIS-MS")];
    char stringpool_str853[sizeof("UCS-4-SWAPPED")];
    char stringpool_str854[sizeof("NEXTSTEP")];
    char stringpool_str871[sizeof("MACHEBREW")];
    char stringpool_str904[sizeof("BIG5HKSCS")];
    char stringpool_str909[sizeof("BIG5-HKSCS")];
    char stringpool_str919[sizeof("MS-TURK")];
    char stringpool_str935[sizeof("MS-ARAB")];
    char stringpool_str952[sizeof("BIG5-HKSCS:2001")];
    char stringpool_str953[sizeof("BIGFIVE")];
    char stringpool_str958[sizeof("BIG-FIVE")];
    char stringpool_str968[sizeof("BIG5-HKSCS:1999")];
    char stringpool_str986[sizeof("MS-GREEK")];
    char stringpool_str987[sizeof("MACGREEK")];
    char stringpool_str997[sizeof("KO_KR.JOHAP92")];
    char stringpool_str1027[sizeof("BIG5-HKSCS:2004")];
    char stringpool_str1060[sizeof("WINBALTRIM")];
    char stringpool_str1142[sizeof("CSEUCPKDFMTJAPANESE")];
  };
static const struct stringpool_t stringpool_contents =
  {
    "CN",
    "HZ",
    "646",
    "866",
    "CP1131",
    "CP1361",
    "CP1133",
    "CP866",
    "CP1251",
    "862",
    "CP1256",
    "CP936",
    "EUCCN",
    "C99",
    "CP1253",
    "EUC-CN",
    "CP862",
    "CP1255",
    "CP1252",
    "CP932",
    "UHC",
    "5601",
    "CP819",
    "CP1258",
    "L1",
    "L6",
    "CP51932",
    "L3",
    "L5",
    "L2",
    "ASCII",
    "L8",
    "ISO8859-1",
    "ISO8859-6",
    "ISO8859-11",
    "ISO-8859-1",
    "ISO8859-16",
    "ISO-8859-6",
    "ISO8859-3",
    "ISO-8859-11",
    "ISO-8859-16",
    "ISO8859-13",
    "ISO-8859-3",
    "ISO8859-5",
    "ISO8859-2",
    "ISO-8859-13",
    "ISO8859-15",
    "ISO-8859-5",
    "ISO-8859-2",
    "ISO-8859-15",
    "850",
    "ISO8859-8",
    "ISO-2022-CN",
    "ISO646-CN",
    "ISO8859-9",
    "ISO-8859-8",
    "ISO_8859-1",
    "ISO_8859-6",
    "ISO-8859-9",
    "ISO_8859-11",
    "CP1250",
    "ISO_8859-16",
    "CP850",
    "ISO_8859-3",
    "CP950",
    "ISO_8859-16:2001",
    "US",
    "ISO_8859-13",
    "R8",
    "ISO_8859-5",
    "ISO_8859-2",
    "LATIN1",
    "ISO_8859-15",
    "LATIN6",
    "JP",
    "CP949",
    "L4",
    "LATIN3",
    "ISO-IR-6",
    "ISO_8859-8",
    "ISO_8859-15:1998",
    "LATIN5",
    "ISO_8859-9",
    "LATIN2",
    "ISO-IR-166",
    "L10",
    "UCS-2",
    "ISO-IR-126",
    "CHINESE",
    "LATIN8",
    "CSASCII",
    "ISO-IR-165",
    "ISO-2022-CN-EXT",
    "ISO-IR-226",
    "GB2312",
    "LATIN-9",
    "ISO8859-10",
    "CP154",
    "ISO-CELTIC",
    "ISO_8859-10:1992",
    "ISO-8859-10",
    "ELOT_928",
    "JIS_C6226-1983",
    "ISO-IR-58",
    "ISO-IR-138",
    "ANSI-1251",
    "CP1254",
    "ISO-IR-159",
    "CSISO2022CN",
    "CNS11643",
    "MAC",
    "ISO-IR-101",
    "UNICODE-1-1",
    "CSUNICODE11",
    "ISO-IR-199",
    "ISO_8859-10",
    "CSUNICODE",
    "ISO-IR-203",
    "US-ASCII",
    "ISO_8859-14:1998",
    "IBM866",
    "MS936",
    "ISO-10646-UCS-2",
    "JIS_C6220-1969-RO",
    "LATIN10",
    "ISO-IR-109",
    "JIS0208",
    "IBM862",
    "MS932",
    "ISO8859-4",
    "ISO-IR-110",
    "ISO8859-14",
    "ISO-8859-4",
    "ISO-8859-14",
    "TIS620",
    "ISO-2022-JP-1",
    "SJIS",
    "IBM819",
    "MS51932",
    "TIS-620",
    "ISO-2022-JP-2",
    "ISO-IR-148",
    "MS-EE",
    "ISO_8859-3:1988",
    "ISO-IR-149",
    "UCS-2LE",
    "ISO_8859-5:1988",
    "ISO_8859-8:1988",
    "ISO_8859-4",
    "ISO_8859-9:1989",
    "ISO_8859-14",
    "CYRILLIC",
    "L7",
    "TCVN",
    "CSISO159JISX02121990",
    "RK1048",
    "ISO-IR-100",
    "LATIN4",
    "CSISO14JISC6220RO",
    "ISO-10646-UCS-4",
    "UCS-4",
    "CSISOLATIN1",
    "GB18030",
    "CSISOLATIN6",
    "TIS620-0",
    "ISO-IR-14",
    "CHAR",
    "CSUCS4",
    "EUCJP",
    "CSISOLATIN3",
    "PT154",
    "CSISOLATINCYRILLIC",
    "EUC-JP",
    "CSISOLATIN5",
    "IBM850",
    "CSISOLATIN2",
    "GB_2312-80",
    "SJIS-WIN",
    "VISCII",
    "ISO646-US",
    "EUCJP-WIN",
    "ECMA-118",
    "MACTHAI",
    "CSVISCII",
    "ISO-2022-JP-MS",
    "UCS-4LE",
    "ISO_8859-4:1988",
    "CSISO2022JP2",
    "GB_1988-80",
    "EUCTW",
    "SJIS-OPEN",
    "EUC-TW",
    "EUCJP-OPEN",
    "MS-ANSI",
    "JAVA",
    "TIS620.2533-1",
    "TIS620.2533",
    "MACINTOSH",
    "CSISOLATINARABIC",
    "KSC_5601",
    "IBM-CP1133",
    "TIS620.2529-1",
    "ISO-2022-JP",
    "ISO646-JP",
    "UTF-16",
    "ISO-IR-144",
    "KOI8-U",
    "ARMSCII-8",
    "UNICODELITTLE",
    "KOI8-T",
    "ARABIC",
    "CP874",
    "ISO-IR-179",
    "UTF-32",
    "CSEUCTW",
    "TIS620.2533-0",
    "UTF-8",
    "BIG5",
    "ROMAN8",
    "BIG-5",
    "X0212",
    "CSBIG5",
    "CSUNICODE11UTF7",
    "UNICODE-1-1-UTF-7",
    "CN-BIG5",
    "MULELAO-1",
    "HP-ROMAN8",
    "KZ-1048",
    "KS_C_5601-1989",
    "CSMACINTOSH",
    "CYRILLIC-ASIAN",
    "UCS-2-INTERNAL",
    "CSKZ1048",
    "CSISOLATINHEBREW",
    "CSGB2312",
    "X0201",
    "ECMA-114",
    "VISCII1.1-1",
    "CP367",
    "PTCP154",
    "HZ-GB-2312",
    "CSISOLATIN4",
    "UCS-2BE",
    "ISO_8859-1:1987",
    "ISO_8859-6:1987",
    "CSISO2022JP",
    "ISO_8859-7:2003",
    "MS-CYRL",
    "CP1257",
    "EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE",
    "ISO_8859-2:1987",
    "WCHAR_T",
    "GREEK8",
    "X0208",
    "KOREAN",
    "CSWINDOWS31J",
    "WINDOWS-31J",
    "WINDOWS-1251",
    "WINDOWS-1256",
    "MACCYRILLIC",
    "WINDOWS-1253",
    "CSIBM866",
    "WINDOWS-936",
    "WINDOWS-1255",
    "WINDOWS-1252",
    "UTF-16LE",
    "WINDOWS-1258",
    "WINDOWS-51932",
    "WINDOWS-932",
    "UCS-4-INTERNAL",
    "UTF-32LE",
    "KOI8-RU",
    "CSPC862LATINHEBREW",
    "ISO8859-7",
    "CSPTCP154",
    "ISO-8859-7",
    "MACCROATIAN",
    "KOI8-R",
    "UCS-4BE",
    "EUCKR",
    "WINDOWS-1250",
    "CSKOI8R",
    "EUCJPMS",
    "EUC-KR",
    "SJIS-MS",
    "EUCJP-MS",
    "TCVN5712-1",
    "EUC-JP-MS",
    "TCVN-5712",
    "GEORGIAN-ACADEMY",
    "ISO_8859-7",
    "MACICELAND",
    "WINDOWS-1254",
    "ASMO-708",
    "LATIN7",
    "MS_KANJI",
    "CSHPROMAN8",
    "MACROMAN",
    "CSEUCKR",
    "ISO-IR-57",
    "CSISO58GB231280",
    "MACCENTRALEUROPE",
    "ISO-IR-157",
    "ISO-IR-127",
    "JIS_X0212",
    "ISO-IR-87",
    "JOHAB",
    "ISO_646.IRV:1991",
    "ISO-2022-KR",
    "JISX0201-1976",
    "JIS_X0201",
    "KS_C_5601-1987",
    "CN-GB-ISOIR165",
    "IBM367",
    "JIS_X0212-1990",
    "SHIFT-JIS",
    "GBK",
    "JIS_X0208",
    "JIS_X0208-1983",
    "PCK",
    "CSSHIFTJIS",
    "CN-GB",
    "CSKSC56011987",
    "TCVN5712-1:1993",
    "CSPC850MULTILINGUAL",
    "HEBREW",
    "ISO_8859-7:1987",
    "SHIFT_JIS",
    "CSISO2022KR",
    "UTF-16BE",
    "CSISOLATINGREEK",
    "JIS_X0208-1990",
    "STRK1048-2002",
    "GREEK",
    "UTF-32BE",
    "WINDOWS-1257",
    "UNICODEBIG",
    "MACROMANIA",
    "MACARABIC",
    "MS-HEBR",
    "MACUKRAINE",
    "JIS_X0212.1990-0",
    "CSISO57GB1988",
    "GEORGIAN-PS",
    "ANSI_X3.4-1986",
    "MACTURKISH",
    "ANSI_X3.4-1968",
    "UCS-2-SWAPPED",
    "UTF-7",
    "CSHALFWIDTHKATAKANA",
    "CSISO87JISX0208",
    "WINDOWS-874",
    "SHIFT_JIS-MS",
    "UCS-4-SWAPPED",
    "NEXTSTEP",
    "MACHEBREW",
    "BIG5HKSCS",
    "BIG5-HKSCS",
    "MS-TURK",
    "MS-ARAB",
    "BIG5-HKSCS:2001",
    "BIGFIVE",
    "BIG-FIVE",
    "BIG5-HKSCS:1999",
    "MS-GREEK",
    "MACGREEK",
    "KO_KR.JOHAP92",
    "BIG5-HKSCS:2004",
    "WINBALTRIM",
    "CSEUCPKDFMTJAPANESE"
  };
#define stringpool ((const char *) &stringpool_contents)

static const struct alias aliases[] =
  {
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 291 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str11, ei_iso646_cn},
    {-1}, {-1},
#line 351 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str14, ei_hz},
#line 23 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str15, ei_ascii},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1},
#line 209 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str28, ei_cp866},
    {-1},
#line 211 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str30, ei_cp1131},
#line 376 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str31, ei_johab},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 246 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str38, ei_cp1133},
#line 207 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str39, ei_cp866},
    {-1},
#line 175 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str41, ei_cp1251},
#line 205 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str42, ei_cp862},
#line 191 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str43, ei_cp1256},
#line 344 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str44, ei_cp936},
#line 339 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str45, ei_euc_cn},
#line 52 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str46, ei_c99},
    {-1}, {-1},
#line 182 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str49, ei_cp1253},
#line 338 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str50, ei_euc_cn},
    {-1}, {-1},
#line 203 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str53, ei_cp862},
    {-1},
#line 188 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str55, ei_cp1255},
    {-1},
#line 179 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str57, ei_cp1252},
#line 323 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str58, ei_cp932},
    {-1}, {-1}, {-1}, {-1},
#line 374 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str63, ei_cp949},
    {-1}, {-1},
#line 372 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str66, ei_euc_kr},
    {-1},
#line 58 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str68, ei_iso8859_1},
#line 197 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str69, ei_cp1258},
    {-1},
#line 61 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str71, ei_iso8859_1},
#line 135 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str72, ei_iso8859_10},
#line 314 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str73, ei_cp51932},
    {-1},
#line 77 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str75, ei_iso8859_3},
    {-1}, {-1},
#line 127 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str78, ei_iso8859_9},
#line 69 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str79, ei_iso8859_2},
#line 13 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str80, ei_ascii},
    {-1}, {-1}, {-1}, {-1},
#line 152 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str85, ei_iso8859_14},
    {-1}, {-1},
#line 63 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str88, ei_iso8859_1},
    {-1},
#line 103 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str90, ei_iso8859_6},
    {-1},
#line 140 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str92, ei_iso8859_11},
#line 54 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str93, ei_iso8859_1},
#line 167 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str94, ei_iso8859_16},
#line 95 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str95, ei_iso8859_6},
#line 79 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str96, ei_iso8859_3},
#line 138 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str97, ei_iso8859_11},
    {-1},
#line 161 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str99, ei_iso8859_16},
#line 146 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str100, ei_iso8859_13},
#line 72 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str101, ei_iso8859_3},
#line 94 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str102, ei_iso8859_5},
    {-1},
#line 71 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str104, ei_iso8859_2},
#line 141 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str105, ei_iso8859_13},
#line 160 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str106, ei_iso8859_15},
#line 88 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str107, ei_iso8859_5},
    {-1},
#line 64 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str109, ei_iso8859_2},
    {-1},
#line 155 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str111, ei_iso8859_15},
#line 201 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str112, ei_cp850},
    {-1}, {-1}, {-1},
#line 121 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str116, ei_iso8859_8},
#line 348 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str117, ei_iso2022_cn},
#line 289 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str118, ei_iso646_cn},
    {-1},
#line 129 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str120, ei_iso8859_9},
#line 115 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str121, ei_iso8859_8},
#line 55 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str122, ei_iso8859_1},
    {-1},
#line 96 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str124, ei_iso8859_6},
#line 122 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str125, ei_iso8859_9},
#line 139 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str126, ei_iso8859_11},
#line 172 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str127, ei_cp1250},
#line 162 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str128, ei_iso8859_16},
#line 199 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str129, ei_cp850},
#line 73 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str130, ei_iso8859_3},
#line 363 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str131, ei_cp950},
#line 163 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str132, ei_iso8859_16},
#line 21 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str133, ei_ascii},
#line 142 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str134, ei_iso8859_13},
#line 229 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str135, ei_hp_roman8},
#line 89 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str136, ei_iso8859_5},
    {-1},
#line 65 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str138, ei_iso8859_2},
#line 60 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str139, ei_iso8859_1},
#line 156 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str140, ei_iso8859_15},
#line 134 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str141, ei_iso8859_10},
#line 268 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str142, ei_iso646_jp},
    {-1}, {-1},
#line 373 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str145, ei_cp949},
#line 85 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str146, ei_iso8859_4},
#line 76 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str147, ei_iso8859_3},
    {-1},
#line 16 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str149, ei_ascii},
#line 116 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str150, ei_iso8859_8},
    {-1},
#line 157 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str152, ei_iso8859_15},
#line 126 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str153, ei_iso8859_9},
#line 123 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str154, ei_iso8859_9},
#line 68 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str155, ei_iso8859_2},
    {-1}, {-1},
#line 254 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str158, ei_tis620},
    {-1}, {-1},
#line 166 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str161, ei_iso8859_16},
#line 25 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str162, ei_ucs2},
    {-1}, {-1},
#line 108 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str165, ei_iso8859_7},
#line 296 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str166, ei_gb2312},
#line 151 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str167, ei_iso8859_14},
#line 22 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str168, ei_ascii},
    {-1},
#line 297 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str170, ei_isoir165},
#line 350 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str171, ei_iso2022_cn_ext},
    {-1},
#line 164 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str173, ei_iso8859_16},
    {-1},
#line 340 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str175, ei_euc_cn},
#line 159 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str176, ei_iso8859_15},
    {-1},
#line 137 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str178, ei_iso8859_10},
#line 238 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str179, ei_pt154},
#line 153 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str180, ei_iso8859_14},
    {-1},
#line 132 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str182, ei_iso8859_10},
#line 130 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str183, ei_iso8859_10},
#line 110 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str184, ei_iso8859_7},
#line 280 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str185, ei_jisx0208},
#line 294 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str186, ei_gb2312},
#line 118 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str187, ei_iso8859_8},
#line 178 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str188, ei_cp1251},
    {-1}, {-1},
#line 185 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str191, ei_cp1254},
    {-1}, {-1},
#line 286 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str194, ei_jisx0212},
#line 349 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str195, ei_iso2022_cn},
#line 356 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str196, ei_euc_tw},
#line 214 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str197, ei_mac_roman},
#line 67 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str198, ei_iso8859_2},
    {-1}, {-1},
#line 30 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str201, ei_ucs2be},
#line 31 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str202, ei_ucs2be},
#line 150 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str203, ei_iso8859_14},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 131 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str212, ei_iso8859_10},
#line 27 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str213, ei_ucs2},
#line 158 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str214, ei_iso8859_15},
    {-1}, {-1}, {-1},
#line 12 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str218, ei_ascii},
    {-1},
#line 149 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str220, ei_iso8859_14},
    {-1},
#line 208 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str222, ei_cp866},
#line 345 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str223, ei_cp936},
    {-1},
#line 26 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str225, ei_ucs2},
#line 265 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str226, ei_iso646_jp},
    {-1}, {-1},
#line 165 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str229, ei_iso8859_16},
#line 75 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str230, ei_iso8859_3},
    {-1}, {-1},
#line 277 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str233, ei_jisx0208},
    {-1}, {-1},
#line 204 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str236, ei_cp862},
#line 329 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str237, ei_cp932},
#line 87 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str238, ei_iso8859_4},
    {-1}, {-1},
#line 83 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str241, ei_iso8859_4},
#line 154 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str242, ei_iso8859_14},
#line 80 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str243, ei_iso8859_4},
    {-1}, {-1}, {-1},
#line 147 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str247, ei_iso8859_14},
#line 249 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str248, ei_tis620},
#line 335 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str249, ei_iso2022_jp1},
#line 319 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str250, ei_sjis},
#line 59 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str251, ei_iso8859_1},
#line 316 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str252, ei_cp51932},
#line 248 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str253, ei_tis620},
    {-1}, {-1}, {-1},
#line 336 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str257, ei_iso2022_jp2},
#line 125 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str258, ei_iso8859_9},
#line 174 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str259, ei_cp1250},
    {-1},
#line 74 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str261, ei_iso8859_3},
#line 302 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str262, ei_ksc5601},
#line 32 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str263, ei_ucs2le},
#line 90 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str264, ei_iso8859_5},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 117 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str271, ei_iso8859_8},
#line 81 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str272, ei_iso8859_4},
    {-1}, {-1},
#line 124 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str275, ei_iso8859_9},
#line 148 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str276, ei_iso8859_14},
#line 92 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str277, ei_iso8859_5},
    {-1},
#line 145 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str279, ei_iso8859_13},
    {-1},
#line 261 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str281, ei_tcvn},
#line 287 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str282, ei_jisx0212},
#line 241 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str283, ei_rk1048},
#line 57 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str284, ei_iso8859_1},
    {-1}, {-1}, {-1}, {-1},
#line 84 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str289, ei_iso8859_4},
#line 269 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str290, ei_iso646_jp},
    {-1},
#line 35 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str292, ei_ucs4},
    {-1}, {-1}, {-1},
#line 34 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str296, ei_ucs4},
#line 62 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str297, ei_iso8859_1},
#line 347 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str298, ei_gb18030},
#line 136 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str299, ei_iso8859_10},
#line 250 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str300, ei_tis620},
#line 267 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str301, ei_iso646_jp},
#line 380 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str302, ei_local_char},
#line 36 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str303, ei_ucs4},
#line 306 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str304, ei_euc_jp},
#line 78 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str305, ei_iso8859_3},
#line 236 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str306, ei_pt154},
    {-1},
#line 93 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str308, ei_iso8859_5},
#line 305 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str309, ei_euc_jp},
    {-1},
#line 128 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str311, ei_iso8859_9},
#line 200 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str312, ei_cp850},
#line 70 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str313, ei_iso8859_2},
#line 293 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str314, ei_gb2312},
#line 327 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str315, ei_cp932},
#line 258 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str316, ei_viscii},
#line 14 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str317, ei_ascii},
#line 312 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str318, ei_eucjp_ms},
#line 109 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str319, ei_iso8859_7},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 226 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str325, ei_mac_thai},
#line 260 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str326, ei_viscii},
    {-1},
#line 334 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str328, ei_iso2022_jpms},
    {-1},
#line 38 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str330, ei_ucs4le},
    {-1},
#line 82 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str332, ei_iso8859_4},
    {-1},
#line 337 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str334, ei_iso2022_jp2},
    {-1}, {-1}, {-1},
#line 288 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str338, ei_iso646_cn},
    {-1},
#line 354 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str340, ei_euc_tw},
    {-1}, {-1},
#line 326 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str343, ei_cp932},
    {-1},
#line 353 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str345, ei_euc_tw},
#line 310 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str346, ei_eucjp_ms},
#line 181 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str347, ei_cp1252},
    {-1},
#line 53 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str349, ei_java},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 253 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str355, ei_tis620},
    {-1},
#line 255 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str357, ei_tis620},
    {-1},
#line 213 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str359, ei_mac_roman},
    {-1}, {-1},
#line 102 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str362, ei_iso8859_6},
    {-1},
#line 299 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str364, ei_ksc5601},
#line 247 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str365, ei_cp1133},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 251 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str371, ei_tis620},
    {-1}, {-1}, {-1}, {-1},
#line 332 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str376, ei_iso2022_jp},
#line 266 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str377, ei_iso646_jp},
#line 39 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str378, ei_utf16},
    {-1},
#line 91 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str380, ei_iso8859_5},
    {-1},
#line 170 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str382, ei_koi8_u},
    {-1},
#line 232 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str384, ei_armscii_8},
#line 33 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str385, ei_ucs2le},
    {-1}, {-1}, {-1}, {-1},
#line 235 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str390, ei_koi8_t},
    {-1},
#line 101 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str392, ei_iso8859_6},
    {-1},
#line 256 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str394, ei_cp874},
#line 143 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str395, ei_iso8859_13},
#line 42 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str396, ei_utf32},
#line 355 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str397, ei_euc_tw},
#line 252 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str398, ei_tis620},
    {-1},
#line 24 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str400, ei_utf8},
#line 357 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str401, ei_ces_big5},
    {-1}, {-1}, {-1},
#line 228 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str405, ei_hp_roman8},
#line 358 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str406, ei_ces_big5},
    {-1},
#line 285 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str408, ei_jisx0212},
    {-1}, {-1},
#line 362 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str411, ei_ces_big5},
    {-1}, {-1},
#line 47 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str414, ei_utf7},
#line 46 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str415, ei_utf7},
#line 361 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str416, ei_ces_big5},
    {-1}, {-1}, {-1}, {-1},
#line 245 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str421, ei_mulelao},
    {-1},
#line 227 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str423, ei_hp_roman8},
#line 243 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str424, ei_rk1048},
    {-1},
#line 301 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str426, ei_ksc5601},
#line 215 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str427, ei_mac_roman},
#line 239 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str428, ei_pt154},
#line 48 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str429, ei_ucs2internal},
#line 244 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str430, ei_rk1048},
#line 120 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str431, ei_iso8859_8},
    {-1},
#line 342 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str433, ei_euc_cn},
    {-1},
#line 272 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str435, ei_jisx0201},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 99 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str441, ei_iso8859_6},
#line 259 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str442, ei_viscii},
#line 19 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str443, ei_ascii},
    {-1},
#line 237 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str445, ei_pt154},
#line 352 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str446, ei_hz},
#line 86 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str447, ei_iso8859_4},
#line 28 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str448, ei_ucs2be},
    {-1}, {-1},
#line 56 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str451, ei_iso8859_1},
#line 97 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str452, ei_iso8859_6},
    {-1},
#line 333 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str454, ei_iso2022_jp},
#line 107 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str455, ei_iso8859_7},
#line 177 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str456, ei_cp1251},
#line 194 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str457, ei_cp1257},
#line 307 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str458, ei_euc_jp},
#line 66 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str459, ei_iso8859_2},
#line 381 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str460, ei_local_wchar_t},
    {-1},
#line 111 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str462, ei_iso8859_7},
#line 278 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str463, ei_jisx0208},
    {-1},
#line 304 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str465, ei_ksc5601},
    {-1}, {-1}, {-1}, {-1},
#line 325 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str470, ei_cp932},
    {-1}, {-1},
#line 324 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str473, ei_cp932},
    {-1},
#line 176 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str475, ei_cp1251},
#line 192 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str476, ei_cp1256},
#line 220 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str477, ei_mac_cyrillic},
    {-1},
#line 183 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str479, ei_cp1253},
#line 210 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str480, ei_cp866},
#line 346 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str481, ei_cp936},
#line 189 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str482, ei_cp1255},
#line 180 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str483, ei_cp1252},
    {-1}, {-1},
#line 41 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str486, ei_utf16le},
    {-1}, {-1},
#line 198 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str489, ei_cp1258},
    {-1}, {-1},
#line 315 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str492, ei_cp51932},
    {-1}, {-1},
#line 328 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str495, ei_cp932},
#line 50 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str496, ei_ucs4internal},
#line 44 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str497, ei_utf32le},
    {-1},
#line 171 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str499, ei_koi8_ru},
    {-1}, {-1}, {-1},
#line 206 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str503, ei_cp862},
#line 114 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str504, ei_iso8859_7},
    {-1},
#line 240 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str506, ei_pt154},
    {-1}, {-1},
#line 104 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str509, ei_iso8859_7},
    {-1},
#line 218 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str511, ei_mac_croatian},
    {-1}, {-1},
#line 168 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str514, ei_koi8_r},
#line 37 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str515, ei_ucs4be},
#line 370 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str516, ei_euc_kr},
    {-1},
#line 173 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str518, ei_cp1250},
#line 169 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str519, ei_koi8_r},
#line 313 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str520, ei_eucjp_ms},
#line 369 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str521, ei_euc_kr},
#line 331 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str522, ei_cp932},
    {-1}, {-1},
#line 309 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str525, ei_eucjp_ms},
    {-1}, {-1},
#line 263 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str528, ei_tcvn},
    {-1},
#line 311 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str530, ei_eucjp_ms},
    {-1},
#line 262 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str532, ei_tcvn},
#line 233 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str533, ei_georgian_academy},
    {-1}, {-1}, {-1}, {-1},
#line 105 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str538, ei_iso8859_7},
    {-1},
#line 217 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str540, ei_mac_iceland},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 186 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str550, ei_cp1254},
#line 100 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str551, ei_iso8859_6},
    {-1}, {-1}, {-1},
#line 144 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str555, ei_iso8859_13},
#line 320 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str556, ei_sjis},
#line 230 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str557, ei_hp_roman8},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 212 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str569, ei_mac_roman},
    {-1}, {-1}, {-1},
#line 371 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str573, ei_euc_kr},
#line 290 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str574, ei_iso646_cn},
#line 295 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str575, ei_gb2312},
    {-1},
#line 216 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str577, ei_mac_centraleurope},
#line 133 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str578, ei_iso8859_10},
#line 98 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str579, ei_iso8859_6},
#line 282 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str580, ei_jisx0212},
#line 279 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str581, ei_jisx0208},
    {-1}, {-1},
#line 375 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str584, ei_johab},
    {-1},
#line 15 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str586, ei_ascii},
    {-1},
#line 378 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str588, ei_iso2022_kr},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 271 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str605, ei_jisx0201},
    {-1},
#line 270 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str607, ei_jisx0201},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 300 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str618, ei_ksc5601},
    {-1},
#line 298 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str620, ei_isoir165},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 20 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str626, ei_ascii},
#line 284 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str627, ei_jisx0212},
    {-1}, {-1}, {-1},
#line 318 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str631, ei_sjis},
    {-1},
#line 343 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str633, ei_ces_gbk},
    {-1},
#line 274 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str635, ei_jisx0208},
    {-1},
#line 275 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str637, ei_jisx0208},
    {-1},
#line 322 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str639, ei_sjis},
    {-1},
#line 321 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str641, ei_sjis},
#line 341 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str642, ei_euc_cn},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 303 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str652, ei_ksc5601},
#line 264 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str653, ei_tcvn},
#line 202 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str654, ei_cp850},
    {-1}, {-1},
#line 119 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str657, ei_iso8859_8},
    {-1},
#line 106 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str659, ei_iso8859_7},
#line 317 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str660, ei_sjis},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 379 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str666, ei_iso2022_kr},
    {-1}, {-1}, {-1}, {-1},
#line 40 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str671, ei_utf16be},
    {-1},
#line 113 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str673, ei_iso8859_7},
    {-1}, {-1},
#line 276 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str676, ei_jisx0208},
    {-1},
#line 242 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str678, ei_rk1048},
#line 112 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str679, ei_iso8859_7},
    {-1}, {-1},
#line 43 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str682, ei_utf32be},
#line 195 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str683, ei_cp1257},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 29 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str689, ei_ucs2be},
    {-1}, {-1},
#line 219 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str692, ei_mac_romania},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 225 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str700, ei_mac_arabic},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 190 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str708, ei_cp1255},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 221 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str729, ei_mac_ukraine},
    {-1}, {-1}, {-1},
#line 283 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str733, ei_jisx0212},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 292 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str742, ei_iso646_cn},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 234 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str748, ei_georgian_ps},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 18 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str763, ei_ascii},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 223 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str771, ei_mac_turkish},
    {-1}, {-1}, {-1}, {-1},
#line 17 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str776, ei_ascii},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 49 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str786, ei_ucs2swapped},
    {-1},
#line 45 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str788, ei_utf7},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 273 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str809, ei_jisx0201},
    {-1},
#line 281 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str811, ei_jisx0208},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 257 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str831, ei_cp874},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 330 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str851, ei_cp932},
    {-1},
#line 51 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str853, ei_ucs4swapped},
#line 231 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str854, ei_nextstep},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 224 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str871, ei_mac_hebrew},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 367 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str904, ei_big5hkscs2004},
    {-1}, {-1}, {-1}, {-1},
#line 366 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str909, ei_big5hkscs2004},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 187 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str919, ei_cp1254},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 193 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str935, ei_cp1256},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 365 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str952, ei_big5hkscs2001},
#line 360 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str953, ei_ces_big5},
    {-1}, {-1}, {-1}, {-1},
#line 359 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str958, ei_ces_big5},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 364 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str968, ei_big5hkscs1999},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 184 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str986, ei_cp1253},
#line 222 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str987, ei_mac_greek},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 377 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str997, ei_johab},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 368 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1027, ei_big5hkscs2004},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 196 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1060, ei_cp1257},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 308 "lib/aliases_syssolaris.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1142, ei_euc_jp}
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
