/* ANSI-C code produced by gperf version 3.0.4 */
/* Command-line: gperf -m 10 lib/aliases_syshpux.gperf  */
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

#line 1 "lib/aliases_syshpux.gperf"
struct alias { int name; unsigned int encoding_index; };

#define TOTAL_KEYWORDS 373
#define MIN_WORD_LENGTH 2
#define MAX_WORD_LENGTH 45
#define MIN_HASH_VALUE 17
#define MAX_HASH_VALUE 1379
/* maximum key range = 1363, duplicates = 0 */

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
      1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380,
      1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380,
      1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380,
      1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380,
      1380, 1380, 1380, 1380, 1380,    4,   83, 1380,   74,    5,
        15,   16,   57,   11,    4,  195,   18,   25,  200, 1380,
      1380, 1380, 1380, 1380, 1380,   53,  351,    5,  254,   21,
       191,   88,   50,    4,   64,  177,   17,  165,   10,    4,
        98, 1380,  130,    6,  163,  260,  194,   38,  323,    8,
         5, 1380, 1380, 1380, 1380,   31, 1380, 1380, 1380, 1380,
      1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380,
      1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380,
      1380, 1380, 1380, 1380, 1380, 1380, 1380, 1380
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
    char stringpool_str17[sizeof("CN")];
    char stringpool_str23[sizeof("L6")];
    char stringpool_str24[sizeof("L1")];
    char stringpool_str26[sizeof("SJIS")];
    char stringpool_str29[sizeof("866")];
    char stringpool_str30[sizeof("L5")];
    char stringpool_str34[sizeof("L2")];
    char stringpool_str35[sizeof("L3")];
    char stringpool_str37[sizeof("L8")];
    char stringpool_str40[sizeof("CP866")];
    char stringpool_str46[sizeof("CP1361")];
    char stringpool_str47[sizeof("CP1131")];
    char stringpool_str50[sizeof("CP1256")];
    char stringpool_str51[sizeof("862")];
    char stringpool_str52[sizeof("CP1251")];
    char stringpool_str56[sizeof("EUCCN")];
    char stringpool_str57[sizeof("HZ")];
    char stringpool_str58[sizeof("C99")];
    char stringpool_str59[sizeof("CP936")];
    char stringpool_str61[sizeof("EUC-CN")];
    char stringpool_str62[sizeof("CP862")];
    char stringpool_str64[sizeof("CP1255")];
    char stringpool_str69[sizeof("CP1133")];
    char stringpool_str72[sizeof("CP1252")];
    char stringpool_str74[sizeof("CP1253")];
    char stringpool_str75[sizeof("ASCII")];
    char stringpool_str76[sizeof("L4")];
    char stringpool_str78[sizeof("CP1258")];
    char stringpool_str81[sizeof("CP932")];
    char stringpool_str83[sizeof("CP819")];
    char stringpool_str88[sizeof("CSASCII")];
    char stringpool_str90[sizeof("SJIS-WIN")];
    char stringpool_str95[sizeof("CHINESE")];
    char stringpool_str96[sizeof("ISO88596")];
    char stringpool_str97[sizeof("HP15CN")];
    char stringpool_str98[sizeof("ISO88591")];
    char stringpool_str99[sizeof("CP51932")];
    char stringpool_str101[sizeof("ISO8859-6")];
    char stringpool_str103[sizeof("ISO8859-1")];
    char stringpool_str106[sizeof("ISO-8859-6")];
    char stringpool_str107[sizeof("ISO8859-16")];
    char stringpool_str108[sizeof("ISO-8859-1")];
    char stringpool_str109[sizeof("ISO8859-11")];
    char stringpool_str110[sizeof("ISO88595")];
    char stringpool_str111[sizeof("ISO646-CN")];
    char stringpool_str112[sizeof("ISO-8859-16")];
    char stringpool_str114[sizeof("ISO-8859-11")];
    char stringpool_str115[sizeof("ISO8859-5")];
    char stringpool_str116[sizeof("ISO885915")];
    char stringpool_str118[sizeof("ISO88592")];
    char stringpool_str120[sizeof("ISO-8859-5")];
    char stringpool_str121[sizeof("ISO8859-15")];
    char stringpool_str123[sizeof("ISO8859-2")];
    char stringpool_str124[sizeof("ISO88598")];
    char stringpool_str125[sizeof("ISO8859-3")];
    char stringpool_str126[sizeof("ISO-8859-15")];
    char stringpool_str128[sizeof("ISO-8859-2")];
    char stringpool_str129[sizeof("ISO8859-8")];
    char stringpool_str130[sizeof("ISO-8859-3")];
    char stringpool_str131[sizeof("ISO8859-13")];
    char stringpool_str133[sizeof("ISO_8859-6")];
    char stringpool_str134[sizeof("ISO-8859-8")];
    char stringpool_str135[sizeof("ISO_8859-1")];
    char stringpool_str136[sizeof("ISO-8859-13")];
    char stringpool_str138[sizeof("ISO88599")];
    char stringpool_str139[sizeof("ISO_8859-16")];
    char stringpool_str140[sizeof("CP154")];
    char stringpool_str141[sizeof("ISO_8859-11")];
    char stringpool_str142[sizeof("CP949")];
    char stringpool_str143[sizeof("ISO8859-9")];
    char stringpool_str145[sizeof("ISO_8859-16:2001")];
    char stringpool_str147[sizeof("ISO_8859-5")];
    char stringpool_str148[sizeof("ISO-8859-9")];
    char stringpool_str150[sizeof("R8")];
    char stringpool_str153[sizeof("ISO_8859-15")];
    char stringpool_str155[sizeof("ISO_8859-2")];
    char stringpool_str156[sizeof("CP1254")];
    char stringpool_str157[sizeof("ISO_8859-3")];
    char stringpool_str160[sizeof("GB2312")];
    char stringpool_str161[sizeof("ISO_8859-8")];
    char stringpool_str163[sizeof("ISO_8859-13")];
    char stringpool_str164[sizeof("JP")];
    char stringpool_str165[sizeof("ISO_8859-15:1998")];
    char stringpool_str166[sizeof("ISO-IR-6")];
    char stringpool_str168[sizeof("L10")];
    char stringpool_str169[sizeof("850")];
    char stringpool_str171[sizeof("ISO-2022-CN")];
    char stringpool_str172[sizeof("SJIS-OPEN")];
    char stringpool_str174[sizeof("CSISO2022CN")];
    char stringpool_str175[sizeof("ISO_8859-9")];
    char stringpool_str177[sizeof("ISO-IR-166")];
    char stringpool_str178[sizeof("MAC")];
    char stringpool_str181[sizeof("CSISO14JISC6220RO")];
    char stringpool_str183[sizeof("JIS_C6226-1983")];
    char stringpool_str187[sizeof("CP850")];
    char stringpool_str188[sizeof("ISO-IR-126")];
    char stringpool_str190[sizeof("CP1250")];
    char stringpool_str191[sizeof("ISO-IR-165")];
    char stringpool_str194[sizeof("CP950")];
    char stringpool_str195[sizeof("CYRILLIC")];
    char stringpool_str198[sizeof("ISO-IR-226")];
    char stringpool_str204[sizeof("SJIS-MS")];
    char stringpool_str205[sizeof("IBM866")];
    char stringpool_str206[sizeof("ISO-IR-58")];
    char stringpool_str207[sizeof("ISO8859-4")];
    char stringpool_str208[sizeof("LATIN6")];
    char stringpool_str210[sizeof("LATIN1")];
    char stringpool_str211[sizeof("ISO_8859-14:1998")];
    char stringpool_str212[sizeof("ISO-8859-4")];
    char stringpool_str213[sizeof("ISO8859-14")];
    char stringpool_str214[sizeof("L7")];
    char stringpool_str217[sizeof("ISO-IR-138")];
    char stringpool_str218[sizeof("ISO-8859-14")];
    char stringpool_str219[sizeof("MS936")];
    char stringpool_str222[sizeof("LATIN5")];
    char stringpool_str223[sizeof("VISCII")];
    char stringpool_str225[sizeof("ISO_8859-10:1992")];
    char stringpool_str226[sizeof("ISO-IR-159")];
    char stringpool_str227[sizeof("IBM862")];
    char stringpool_str228[sizeof("CSISO159JISX02121990")];
    char stringpool_str230[sizeof("LATIN2")];
    char stringpool_str232[sizeof("LATIN3")];
    char stringpool_str233[sizeof("PT154")];
    char stringpool_str234[sizeof("CSVISCII")];
    char stringpool_str236[sizeof("LATIN8")];
    char stringpool_str237[sizeof("MS-EE")];
    char stringpool_str239[sizeof("ISO_8859-4")];
    char stringpool_str240[sizeof("ISO-IR-199")];
    char stringpool_str241[sizeof("MS932")];
    char stringpool_str242[sizeof("ISO-CELTIC")];
    char stringpool_str244[sizeof("JIS_C6220-1969-RO")];
    char stringpool_str245[sizeof("ISO_8859-14")];
    char stringpool_str247[sizeof("ISO8859-10")];
    char stringpool_str248[sizeof("IBM819")];
    char stringpool_str249[sizeof("ISO-IR-101")];
    char stringpool_str252[sizeof("ISO-8859-10")];
    char stringpool_str253[sizeof("MS-ANSI")];
    char stringpool_str255[sizeof("LATIN-9")];
    char stringpool_str258[sizeof("ISO-IR-148")];
    char stringpool_str259[sizeof("MS51932")];
    char stringpool_str263[sizeof("EUCJP-WIN")];
    char stringpool_str268[sizeof("US")];
    char stringpool_str269[sizeof("CYRILLIC-ASIAN")];
    char stringpool_str270[sizeof("EUCTW")];
    char stringpool_str272[sizeof("ISO-IR-149")];
    char stringpool_str273[sizeof("UHC")];
    char stringpool_str275[sizeof("EUC-TW")];
    char stringpool_str276[sizeof("JIS0208")];
    char stringpool_str278[sizeof("ISO-IR-14")];
    char stringpool_str279[sizeof("ISO_8859-10")];
    char stringpool_str281[sizeof("ISO-IR-203")];
    char stringpool_str285[sizeof("CSISOLATIN6")];
    char stringpool_str286[sizeof("ARMSCII-8")];
    char stringpool_str287[sizeof("CSISOLATIN1")];
    char stringpool_str289[sizeof("ISO-IR-109")];
    char stringpool_str291[sizeof("EUCJP")];
    char stringpool_str294[sizeof("CSISOLATINCYRILLIC")];
    char stringpool_str296[sizeof("EUC-JP")];
    char stringpool_str297[sizeof("ECMA-118")];
    char stringpool_str299[sizeof("CSISOLATIN5")];
    char stringpool_str300[sizeof("MULELAO-1")];
    char stringpool_str303[sizeof("ELOT_928")];
    char stringpool_str305[sizeof("UCS-2")];
    char stringpool_str307[sizeof("CSISOLATIN2")];
    char stringpool_str308[sizeof("RK1048")];
    char stringpool_str309[sizeof("CSISOLATIN3")];
    char stringpool_str314[sizeof("LATIN4")];
    char stringpool_str315[sizeof("ISO-2022-JP-1")];
    char stringpool_str317[sizeof("ISO-2022-JP-MS")];
    char stringpool_str318[sizeof("ISO-IR-110")];
    char stringpool_str320[sizeof("KSC_5601")];
    char stringpool_str322[sizeof("CHAR")];
    char stringpool_str325[sizeof("ISO-2022-JP-2")];
    char stringpool_str327[sizeof("CSISO2022JP2")];
    char stringpool_str328[sizeof("ISO-2022-CN-EXT")];
    char stringpool_str331[sizeof("VISCII1.1-1")];
    char stringpool_str336[sizeof("ISO-IR-144")];
    char stringpool_str337[sizeof("CP874")];
    char stringpool_str338[sizeof("PTCP154")];
    char stringpool_str340[sizeof("CSISOLATINARABIC")];
    char stringpool_str342[sizeof("TIS620")];
    char stringpool_str344[sizeof("IBM-CP1133")];
    char stringpool_str345[sizeof("EUCJP-OPEN")];
    char stringpool_str346[sizeof("ISO646-JP")];
    char stringpool_str347[sizeof("TIS-620")];
    char stringpool_str348[sizeof("US-ASCII")];
    char stringpool_str349[sizeof("GREEK8")];
    char stringpool_str350[sizeof("GB_2312-80")];
    char stringpool_str351[sizeof("UCS-2LE")];
    char stringpool_str352[sizeof("IBM850")];
    char stringpool_str353[sizeof("MS-CYRL")];
    char stringpool_str354[sizeof("LATIN10")];
    char stringpool_str356[sizeof("GB18030")];
    char stringpool_str358[sizeof("ISO646-US")];
    char stringpool_str359[sizeof("ISO_8859-5:1988")];
    char stringpool_str360[sizeof("KZ-1048")];
    char stringpool_str364[sizeof("ISO_8859-3:1988")];
    char stringpool_str365[sizeof("GB_1988-80")];
    char stringpool_str366[sizeof("ISO_8859-8:1988")];
    char stringpool_str367[sizeof("CSKZ1048")];
    char stringpool_str368[sizeof("JAVA")];
    char stringpool_str370[sizeof("CSISOLATINHEBREW")];
    char stringpool_str372[sizeof("EUCJPMS")];
    char stringpool_str375[sizeof("ECMA-114")];
    char stringpool_str376[sizeof("MACCYRILLIC")];
    char stringpool_str377[sizeof("EUCJP-MS")];
    char stringpool_str378[sizeof("X0212")];
    char stringpool_str380[sizeof("ISO_8859-9:1989")];
    char stringpool_str381[sizeof("TCVN")];
    char stringpool_str382[sizeof("EUC-JP-MS")];
    char stringpool_str386[sizeof("KS_C_5601-1989")];
    char stringpool_str387[sizeof("ISO-IR-100")];
    char stringpool_str389[sizeof("UCS-4")];
    char stringpool_str391[sizeof("CSISOLATIN4")];
    char stringpool_str393[sizeof("UCS-4LE")];
    char stringpool_str396[sizeof("CSUCS4")];
    char stringpool_str400[sizeof("ROMAN8")];
    char stringpool_str401[sizeof("WINDOWS-1256")];
    char stringpool_str402[sizeof("WINDOWS-1251")];
    char stringpool_str405[sizeof("ISO_8859-4:1988")];
    char stringpool_str406[sizeof("ISO-2022-JP")];
    char stringpool_str407[sizeof("KOREAN")];
    char stringpool_str408[sizeof("WINDOWS-1255")];
    char stringpool_str409[sizeof("CSISO2022JP")];
    char stringpool_str410[sizeof("ISO-IR-179")];
    char stringpool_str412[sizeof("WINDOWS-1252")];
    char stringpool_str413[sizeof("WINDOWS-1253")];
    char stringpool_str414[sizeof("WINDOWS-936")];
    char stringpool_str415[sizeof("WINDOWS-1258")];
    char stringpool_str420[sizeof("CP367")];
    char stringpool_str421[sizeof("TIS620.2533-1")];
    char stringpool_str422[sizeof("TIS620-0")];
    char stringpool_str423[sizeof("WINDOWS-51932")];
    char stringpool_str427[sizeof("X0201")];
    char stringpool_str429[sizeof("TIS620.2529-1")];
    char stringpool_str432[sizeof("CP1257")];
    char stringpool_str436[sizeof("WINDOWS-932")];
    char stringpool_str438[sizeof("CSPC862LATINHEBREW")];
    char stringpool_str445[sizeof("GBK")];
    char stringpool_str450[sizeof("ISO-10646-UCS-2")];
    char stringpool_str451[sizeof("MACTHAI")];
    char stringpool_str453[sizeof("X0208")];
    char stringpool_str454[sizeof("WINDOWS-1254")];
    char stringpool_str456[sizeof("CSWINDOWS31J")];
    char stringpool_str457[sizeof("SHIFT-JIS")];
    char stringpool_str461[sizeof("HP-ROMAN8")];
    char stringpool_str463[sizeof("GEORGIAN-ACADEMY")];
    char stringpool_str465[sizeof("BIG5")];
    char stringpool_str466[sizeof("MACINTOSH")];
    char stringpool_str468[sizeof("EUCKR")];
    char stringpool_str469[sizeof("KOI8-R")];
    char stringpool_str470[sizeof("BIG-5")];
    char stringpool_str471[sizeof("WINDOWS-1250")];
    char stringpool_str473[sizeof("EUC-KR")];
    char stringpool_str474[sizeof("UTF-16")];
    char stringpool_str475[sizeof("CSKOI8R")];
    char stringpool_str476[sizeof("CSBIG5")];
    char stringpool_str477[sizeof("ARABIC")];
    char stringpool_str478[sizeof("ISO88597")];
    char stringpool_str481[sizeof("CN-BIG5")];
    char stringpool_str483[sizeof("ISO8859-7")];
    char stringpool_str484[sizeof("SHIFT_JIS")];
    char stringpool_str488[sizeof("ISO-8859-7")];
    char stringpool_str489[sizeof("GREEK")];
    char stringpool_str490[sizeof("TIS620.2533-0")];
    char stringpool_str491[sizeof("UTF8")];
    char stringpool_str492[sizeof("ISO-10646-UCS-4")];
    char stringpool_str496[sizeof("UTF-8")];
    char stringpool_str502[sizeof("GEORGIAN-PS")];
    char stringpool_str507[sizeof("UTF-32")];
    char stringpool_str508[sizeof("CSPTCP154")];
    char stringpool_str509[sizeof("CSSHIFTJIS")];
    char stringpool_str514[sizeof("WINDOWS-31J")];
    char stringpool_str515[sizeof("ISO_8859-7")];
    char stringpool_str516[sizeof("MS_KANJI")];
    char stringpool_str518[sizeof("CSGB2312")];
    char stringpool_str525[sizeof("CSKSC56011987")];
    char stringpool_str526[sizeof("CSMACINTOSH")];
    char stringpool_str529[sizeof("ISO_8859-6:1987")];
    char stringpool_str530[sizeof("ISO_8859-1:1987")];
    char stringpool_str531[sizeof("UTF-16LE")];
    char stringpool_str535[sizeof("KOI8-T")];
    char stringpool_str536[sizeof("ISO_646.IRV:1991")];
    char stringpool_str537[sizeof("CSEUCTW")];
    char stringpool_str539[sizeof("ASMO-708")];
    char stringpool_str540[sizeof("ISO_8859-2:1987")];
    char stringpool_str541[sizeof("ISO_8859-7:2003")];
    char stringpool_str546[sizeof("CSISOLATINGREEK")];
    char stringpool_str550[sizeof("MACROMAN")];
    char stringpool_str553[sizeof("UTF-32LE")];
    char stringpool_str556[sizeof("KS_C_5601-1987")];
    char stringpool_str557[sizeof("JIS_X0212")];
    char stringpool_str560[sizeof("ISO-IR-57")];
    char stringpool_str561[sizeof("CSHPROMAN8")];
    char stringpool_str563[sizeof("CSIBM866")];
    char stringpool_str566[sizeof("ISO-IR-157")];
    char stringpool_str567[sizeof("ISO-IR-87")];
    char stringpool_str570[sizeof("ISO-IR-127")];
    char stringpool_str573[sizeof("HZ-GB-2312")];
    char stringpool_str582[sizeof("UNICODE-1-1")];
    char stringpool_str583[sizeof("ISO-2022-KR")];
    char stringpool_str585[sizeof("IBM367")];
    char stringpool_str586[sizeof("CSISO2022KR")];
    char stringpool_str588[sizeof("STRK1048-2002")];
    char stringpool_str589[sizeof("CSUNICODE11")];
    char stringpool_str590[sizeof("LATIN7")];
    char stringpool_str592[sizeof("WINDOWS-1257")];
    char stringpool_str593[sizeof("CSUNICODE")];
    char stringpool_str600[sizeof("ANSI_X3.4-1986")];
    char stringpool_str606[sizeof("JIS_X0201")];
    char stringpool_str607[sizeof("CSISO58GB231280")];
    char stringpool_str612[sizeof("JISX0201-1976")];
    char stringpool_str613[sizeof("MACCROATIAN")];
    char stringpool_str614[sizeof("ANSI_X3.4-1968")];
    char stringpool_str617[sizeof("TCVN5712-1")];
    char stringpool_str621[sizeof("TCVN-5712")];
    char stringpool_str625[sizeof("CN-GB-ISOIR165")];
    char stringpool_str627[sizeof("MACCENTRALEUROPE")];
    char stringpool_str630[sizeof("JIS_X0212-1990")];
    char stringpool_str632[sizeof("JIS_X0208")];
    char stringpool_str634[sizeof("HEBREW")];
    char stringpool_str635[sizeof("WCHAR_T")];
    char stringpool_str644[sizeof("JIS_X0208-1983")];
    char stringpool_str648[sizeof("UCS-2-INTERNAL")];
    char stringpool_str652[sizeof("MACROMANIA")];
    char stringpool_str656[sizeof("SHIFT_JIS-MS")];
    char stringpool_str662[sizeof("CSISO87JISX0208")];
    char stringpool_str685[sizeof("UCS-2BE")];
    char stringpool_str690[sizeof("UCS-4-INTERNAL")];
    char stringpool_str692[sizeof("WINDOWS-874")];
    char stringpool_str702[sizeof("JIS_X0208-1990")];
    char stringpool_str709[sizeof("BIG5HKSCS")];
    char stringpool_str711[sizeof("JIS_X0212.1990-0")];
    char stringpool_str714[sizeof("BIG5-HKSCS")];
    char stringpool_str720[sizeof("ISO_8859-7:1987")];
    char stringpool_str725[sizeof("CSISO57GB1988")];
    char stringpool_str727[sizeof("UCS-4BE")];
    char stringpool_str729[sizeof("KOI8-U")];
    char stringpool_str735[sizeof("CSEUCKR")];
    char stringpool_str778[sizeof("UNICODE-1-1-UTF-7")];
    char stringpool_str780[sizeof("MACARABIC")];
    char stringpool_str783[sizeof("CSUNICODE11UTF7")];
    char stringpool_str791[sizeof("MS-GREEK")];
    char stringpool_str792[sizeof("MACGREEK")];
    char stringpool_str798[sizeof("MACICELAND")];
    char stringpool_str804[sizeof("CN-GB")];
    char stringpool_str828[sizeof("MACHEBREW")];
    char stringpool_str833[sizeof("TCVN5712-1:1993")];
    char stringpool_str849[sizeof("UCS-2-SWAPPED")];
    char stringpool_str850[sizeof("UTF-7")];
    char stringpool_str852[sizeof("CSPC850MULTILINGUAL")];
    char stringpool_str856[sizeof("MACUKRAINE")];
    char stringpool_str858[sizeof("MS-HEBR")];
    char stringpool_str860[sizeof("KOI8-RU")];
    char stringpool_str865[sizeof("UTF-16BE")];
    char stringpool_str874[sizeof("JOHAB")];
    char stringpool_str877[sizeof("BIGFIVE")];
    char stringpool_str882[sizeof("BIG-FIVE")];
    char stringpool_str887[sizeof("UTF-32BE")];
    char stringpool_str890[sizeof("NEXTSTEP")];
    char stringpool_str891[sizeof("UCS-4-SWAPPED")];
    char stringpool_str897[sizeof("CSHALFWIDTHKATAKANA")];
    char stringpool_str918[sizeof("BIG5-HKSCS:2001")];
    char stringpool_str929[sizeof("UNICODELITTLE")];
    char stringpool_str938[sizeof("BIG5-HKSCS:1999")];
    char stringpool_str970[sizeof("BIG5-HKSCS:2004")];
    char stringpool_str1020[sizeof("MACTURKISH")];
    char stringpool_str1083[sizeof("MS-TURK")];
    char stringpool_str1089[sizeof("UNICODEBIG")];
    char stringpool_str1106[sizeof("WINBALTRIM")];
    char stringpool_str1111[sizeof("EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE")];
    char stringpool_str1114[sizeof("MS-ARAB")];
    char stringpool_str1379[sizeof("CSEUCPKDFMTJAPANESE")];
  };
static const struct stringpool_t stringpool_contents =
  {
    "CN",
    "L6",
    "L1",
    "SJIS",
    "866",
    "L5",
    "L2",
    "L3",
    "L8",
    "CP866",
    "CP1361",
    "CP1131",
    "CP1256",
    "862",
    "CP1251",
    "EUCCN",
    "HZ",
    "C99",
    "CP936",
    "EUC-CN",
    "CP862",
    "CP1255",
    "CP1133",
    "CP1252",
    "CP1253",
    "ASCII",
    "L4",
    "CP1258",
    "CP932",
    "CP819",
    "CSASCII",
    "SJIS-WIN",
    "CHINESE",
    "ISO88596",
    "HP15CN",
    "ISO88591",
    "CP51932",
    "ISO8859-6",
    "ISO8859-1",
    "ISO-8859-6",
    "ISO8859-16",
    "ISO-8859-1",
    "ISO8859-11",
    "ISO88595",
    "ISO646-CN",
    "ISO-8859-16",
    "ISO-8859-11",
    "ISO8859-5",
    "ISO885915",
    "ISO88592",
    "ISO-8859-5",
    "ISO8859-15",
    "ISO8859-2",
    "ISO88598",
    "ISO8859-3",
    "ISO-8859-15",
    "ISO-8859-2",
    "ISO8859-8",
    "ISO-8859-3",
    "ISO8859-13",
    "ISO_8859-6",
    "ISO-8859-8",
    "ISO_8859-1",
    "ISO-8859-13",
    "ISO88599",
    "ISO_8859-16",
    "CP154",
    "ISO_8859-11",
    "CP949",
    "ISO8859-9",
    "ISO_8859-16:2001",
    "ISO_8859-5",
    "ISO-8859-9",
    "R8",
    "ISO_8859-15",
    "ISO_8859-2",
    "CP1254",
    "ISO_8859-3",
    "GB2312",
    "ISO_8859-8",
    "ISO_8859-13",
    "JP",
    "ISO_8859-15:1998",
    "ISO-IR-6",
    "L10",
    "850",
    "ISO-2022-CN",
    "SJIS-OPEN",
    "CSISO2022CN",
    "ISO_8859-9",
    "ISO-IR-166",
    "MAC",
    "CSISO14JISC6220RO",
    "JIS_C6226-1983",
    "CP850",
    "ISO-IR-126",
    "CP1250",
    "ISO-IR-165",
    "CP950",
    "CYRILLIC",
    "ISO-IR-226",
    "SJIS-MS",
    "IBM866",
    "ISO-IR-58",
    "ISO8859-4",
    "LATIN6",
    "LATIN1",
    "ISO_8859-14:1998",
    "ISO-8859-4",
    "ISO8859-14",
    "L7",
    "ISO-IR-138",
    "ISO-8859-14",
    "MS936",
    "LATIN5",
    "VISCII",
    "ISO_8859-10:1992",
    "ISO-IR-159",
    "IBM862",
    "CSISO159JISX02121990",
    "LATIN2",
    "LATIN3",
    "PT154",
    "CSVISCII",
    "LATIN8",
    "MS-EE",
    "ISO_8859-4",
    "ISO-IR-199",
    "MS932",
    "ISO-CELTIC",
    "JIS_C6220-1969-RO",
    "ISO_8859-14",
    "ISO8859-10",
    "IBM819",
    "ISO-IR-101",
    "ISO-8859-10",
    "MS-ANSI",
    "LATIN-9",
    "ISO-IR-148",
    "MS51932",
    "EUCJP-WIN",
    "US",
    "CYRILLIC-ASIAN",
    "EUCTW",
    "ISO-IR-149",
    "UHC",
    "EUC-TW",
    "JIS0208",
    "ISO-IR-14",
    "ISO_8859-10",
    "ISO-IR-203",
    "CSISOLATIN6",
    "ARMSCII-8",
    "CSISOLATIN1",
    "ISO-IR-109",
    "EUCJP",
    "CSISOLATINCYRILLIC",
    "EUC-JP",
    "ECMA-118",
    "CSISOLATIN5",
    "MULELAO-1",
    "ELOT_928",
    "UCS-2",
    "CSISOLATIN2",
    "RK1048",
    "CSISOLATIN3",
    "LATIN4",
    "ISO-2022-JP-1",
    "ISO-2022-JP-MS",
    "ISO-IR-110",
    "KSC_5601",
    "CHAR",
    "ISO-2022-JP-2",
    "CSISO2022JP2",
    "ISO-2022-CN-EXT",
    "VISCII1.1-1",
    "ISO-IR-144",
    "CP874",
    "PTCP154",
    "CSISOLATINARABIC",
    "TIS620",
    "IBM-CP1133",
    "EUCJP-OPEN",
    "ISO646-JP",
    "TIS-620",
    "US-ASCII",
    "GREEK8",
    "GB_2312-80",
    "UCS-2LE",
    "IBM850",
    "MS-CYRL",
    "LATIN10",
    "GB18030",
    "ISO646-US",
    "ISO_8859-5:1988",
    "KZ-1048",
    "ISO_8859-3:1988",
    "GB_1988-80",
    "ISO_8859-8:1988",
    "CSKZ1048",
    "JAVA",
    "CSISOLATINHEBREW",
    "EUCJPMS",
    "ECMA-114",
    "MACCYRILLIC",
    "EUCJP-MS",
    "X0212",
    "ISO_8859-9:1989",
    "TCVN",
    "EUC-JP-MS",
    "KS_C_5601-1989",
    "ISO-IR-100",
    "UCS-4",
    "CSISOLATIN4",
    "UCS-4LE",
    "CSUCS4",
    "ROMAN8",
    "WINDOWS-1256",
    "WINDOWS-1251",
    "ISO_8859-4:1988",
    "ISO-2022-JP",
    "KOREAN",
    "WINDOWS-1255",
    "CSISO2022JP",
    "ISO-IR-179",
    "WINDOWS-1252",
    "WINDOWS-1253",
    "WINDOWS-936",
    "WINDOWS-1258",
    "CP367",
    "TIS620.2533-1",
    "TIS620-0",
    "WINDOWS-51932",
    "X0201",
    "TIS620.2529-1",
    "CP1257",
    "WINDOWS-932",
    "CSPC862LATINHEBREW",
    "GBK",
    "ISO-10646-UCS-2",
    "MACTHAI",
    "X0208",
    "WINDOWS-1254",
    "CSWINDOWS31J",
    "SHIFT-JIS",
    "HP-ROMAN8",
    "GEORGIAN-ACADEMY",
    "BIG5",
    "MACINTOSH",
    "EUCKR",
    "KOI8-R",
    "BIG-5",
    "WINDOWS-1250",
    "EUC-KR",
    "UTF-16",
    "CSKOI8R",
    "CSBIG5",
    "ARABIC",
    "ISO88597",
    "CN-BIG5",
    "ISO8859-7",
    "SHIFT_JIS",
    "ISO-8859-7",
    "GREEK",
    "TIS620.2533-0",
    "UTF8",
    "ISO-10646-UCS-4",
    "UTF-8",
    "GEORGIAN-PS",
    "UTF-32",
    "CSPTCP154",
    "CSSHIFTJIS",
    "WINDOWS-31J",
    "ISO_8859-7",
    "MS_KANJI",
    "CSGB2312",
    "CSKSC56011987",
    "CSMACINTOSH",
    "ISO_8859-6:1987",
    "ISO_8859-1:1987",
    "UTF-16LE",
    "KOI8-T",
    "ISO_646.IRV:1991",
    "CSEUCTW",
    "ASMO-708",
    "ISO_8859-2:1987",
    "ISO_8859-7:2003",
    "CSISOLATINGREEK",
    "MACROMAN",
    "UTF-32LE",
    "KS_C_5601-1987",
    "JIS_X0212",
    "ISO-IR-57",
    "CSHPROMAN8",
    "CSIBM866",
    "ISO-IR-157",
    "ISO-IR-87",
    "ISO-IR-127",
    "HZ-GB-2312",
    "UNICODE-1-1",
    "ISO-2022-KR",
    "IBM367",
    "CSISO2022KR",
    "STRK1048-2002",
    "CSUNICODE11",
    "LATIN7",
    "WINDOWS-1257",
    "CSUNICODE",
    "ANSI_X3.4-1986",
    "JIS_X0201",
    "CSISO58GB231280",
    "JISX0201-1976",
    "MACCROATIAN",
    "ANSI_X3.4-1968",
    "TCVN5712-1",
    "TCVN-5712",
    "CN-GB-ISOIR165",
    "MACCENTRALEUROPE",
    "JIS_X0212-1990",
    "JIS_X0208",
    "HEBREW",
    "WCHAR_T",
    "JIS_X0208-1983",
    "UCS-2-INTERNAL",
    "MACROMANIA",
    "SHIFT_JIS-MS",
    "CSISO87JISX0208",
    "UCS-2BE",
    "UCS-4-INTERNAL",
    "WINDOWS-874",
    "JIS_X0208-1990",
    "BIG5HKSCS",
    "JIS_X0212.1990-0",
    "BIG5-HKSCS",
    "ISO_8859-7:1987",
    "CSISO57GB1988",
    "UCS-4BE",
    "KOI8-U",
    "CSEUCKR",
    "UNICODE-1-1-UTF-7",
    "MACARABIC",
    "CSUNICODE11UTF7",
    "MS-GREEK",
    "MACGREEK",
    "MACICELAND",
    "CN-GB",
    "MACHEBREW",
    "TCVN5712-1:1993",
    "UCS-2-SWAPPED",
    "UTF-7",
    "CSPC850MULTILINGUAL",
    "MACUKRAINE",
    "MS-HEBR",
    "KOI8-RU",
    "UTF-16BE",
    "JOHAB",
    "BIGFIVE",
    "BIG-FIVE",
    "UTF-32BE",
    "NEXTSTEP",
    "UCS-4-SWAPPED",
    "CSHALFWIDTHKATAKANA",
    "BIG5-HKSCS:2001",
    "UNICODELITTLE",
    "BIG5-HKSCS:1999",
    "BIG5-HKSCS:2004",
    "MACTURKISH",
    "MS-TURK",
    "UNICODEBIG",
    "WINBALTRIM",
    "EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE",
    "MS-ARAB",
    "CSEUCPKDFMTJAPANESE"
  };
#define stringpool ((const char *) &stringpool_contents)

static const struct alias aliases[] =
  {
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 297 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str17, ei_iso646_cn},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 142 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str23, ei_iso8859_10},
#line 61 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str24, ei_iso8859_1},
    {-1},
#line 325 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str26, ei_sjis},
    {-1}, {-1},
#line 216 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str29, ei_cp866},
#line 133 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str30, ei_iso8859_9},
    {-1}, {-1}, {-1},
#line 70 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str34, ei_iso8859_2},
#line 79 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str35, ei_iso8859_3},
    {-1},
#line 159 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str37, ei_iso8859_14},
    {-1}, {-1},
#line 214 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str40, ei_cp866},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 380 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str46, ei_johab},
#line 218 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str47, ei_cp1131},
    {-1}, {-1},
#line 198 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str50, ei_cp1256},
#line 212 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str51, ei_cp862},
#line 183 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str52, ei_cp1251},
    {-1}, {-1}, {-1},
#line 344 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str56, ei_euc_cn},
#line 357 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str57, ei_hz},
#line 52 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str58, ei_c99},
#line 350 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str59, ei_cp936},
    {-1},
#line 343 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str61, ei_euc_cn},
#line 210 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str62, ei_cp862},
    {-1},
#line 195 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str64, ei_cp1255},
    {-1}, {-1}, {-1}, {-1},
#line 253 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str69, ei_cp1133},
    {-1}, {-1},
#line 186 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str72, ei_cp1252},
    {-1},
#line 189 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str74, ei_cp1253},
#line 13 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str75, ei_ascii},
#line 87 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str76, ei_iso8859_4},
    {-1},
#line 204 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str78, ei_cp1258},
    {-1}, {-1},
#line 328 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str81, ei_cp932},
    {-1},
#line 58 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str83, ei_iso8859_1},
    {-1}, {-1}, {-1}, {-1},
#line 22 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str88, ei_ascii},
    {-1},
#line 332 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str90, ei_cp932},
    {-1}, {-1}, {-1}, {-1},
#line 302 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str95, ei_gb2312},
#line 107 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str96, ei_iso8859_6},
#line 348 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str97, ei_euc_cn},
#line 64 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str98, ei_iso8859_1},
#line 320 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str99, ei_cp51932},
    {-1},
#line 106 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str101, ei_iso8859_6},
    {-1},
#line 63 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str103, ei_iso8859_1},
    {-1}, {-1},
#line 98 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str106, ei_iso8859_6},
#line 175 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str107, ei_iso8859_16},
#line 54 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str108, ei_iso8859_1},
#line 147 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str109, ei_iso8859_11},
#line 97 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str110, ei_iso8859_5},
#line 295 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str111, ei_iso646_cn},
#line 169 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str112, ei_iso8859_16},
    {-1},
#line 145 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str114, ei_iso8859_11},
#line 96 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str115, ei_iso8859_5},
#line 168 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str116, ei_iso8859_15},
    {-1},
#line 73 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str118, ei_iso8859_2},
    {-1},
#line 90 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str120, ei_iso8859_5},
#line 167 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str121, ei_iso8859_15},
    {-1},
#line 72 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str123, ei_iso8859_2},
#line 127 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str124, ei_iso8859_8},
#line 81 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str125, ei_iso8859_3},
#line 162 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str126, ei_iso8859_15},
    {-1},
#line 65 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str128, ei_iso8859_2},
#line 126 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str129, ei_iso8859_8},
#line 74 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str130, ei_iso8859_3},
#line 153 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str131, ei_iso8859_13},
    {-1},
#line 99 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str133, ei_iso8859_6},
#line 120 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str134, ei_iso8859_8},
#line 55 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str135, ei_iso8859_1},
#line 148 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str136, ei_iso8859_13},
    {-1},
#line 136 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str138, ei_iso8859_9},
#line 170 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str139, ei_iso8859_16},
#line 245 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str140, ei_pt154},
#line 146 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str141, ei_iso8859_11},
#line 377 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str142, ei_cp949},
#line 135 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str143, ei_iso8859_9},
    {-1},
#line 171 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str145, ei_iso8859_16},
    {-1},
#line 91 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str147, ei_iso8859_5},
#line 128 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str148, ei_iso8859_9},
    {-1},
#line 236 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str150, ei_hp_roman8},
    {-1}, {-1},
#line 163 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str153, ei_iso8859_15},
    {-1},
#line 66 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str155, ei_iso8859_2},
#line 192 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str156, ei_cp1254},
#line 75 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str157, ei_iso8859_3},
    {-1}, {-1},
#line 345 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str160, ei_euc_cn},
#line 121 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str161, ei_iso8859_8},
    {-1},
#line 149 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str163, ei_iso8859_13},
#line 274 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str164, ei_iso646_jp},
#line 164 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str165, ei_iso8859_15},
#line 16 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str166, ei_ascii},
    {-1},
#line 174 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str168, ei_iso8859_16},
#line 208 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str169, ei_cp850},
    {-1},
#line 354 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str171, ei_iso2022_cn},
#line 331 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str172, ei_cp932},
    {-1},
#line 355 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str174, ei_iso2022_cn},
#line 129 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str175, ei_iso8859_9},
    {-1},
#line 261 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str177, ei_tis620},
#line 221 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str178, ei_mac_roman},
    {-1}, {-1},
#line 275 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str181, ei_iso646_jp},
    {-1},
#line 286 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str183, ei_jisx0208},
    {-1}, {-1}, {-1},
#line 206 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str187, ei_cp850},
#line 112 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str188, ei_iso8859_7},
    {-1},
#line 180 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str190, ei_cp1250},
#line 303 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str191, ei_isoir165},
    {-1}, {-1},
#line 368 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str194, ei_cp950},
#line 94 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str195, ei_iso8859_5},
    {-1}, {-1},
#line 172 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str198, ei_iso8859_16},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 336 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str204, ei_cp932},
#line 215 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str205, ei_cp866},
#line 300 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str206, ei_gb2312},
#line 89 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str207, ei_iso8859_4},
#line 141 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str208, ei_iso8859_10},
    {-1},
#line 60 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str210, ei_iso8859_1},
#line 156 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str211, ei_iso8859_14},
#line 82 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str212, ei_iso8859_4},
#line 161 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str213, ei_iso8859_14},
#line 152 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str214, ei_iso8859_13},
    {-1}, {-1},
#line 123 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str217, ei_iso8859_8},
#line 154 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str218, ei_iso8859_14},
#line 351 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str219, ei_cp936},
    {-1}, {-1},
#line 132 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str222, ei_iso8859_9},
#line 264 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str223, ei_viscii},
    {-1},
#line 139 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str225, ei_iso8859_10},
#line 292 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str226, ei_jisx0212},
#line 211 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str227, ei_cp862},
#line 293 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str228, ei_jisx0212},
    {-1},
#line 69 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str230, ei_iso8859_2},
    {-1},
#line 78 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str232, ei_iso8859_3},
#line 243 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str233, ei_pt154},
#line 266 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str234, ei_viscii},
    {-1},
#line 158 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str236, ei_iso8859_14},
#line 182 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str237, ei_cp1250},
    {-1},
#line 83 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str239, ei_iso8859_4},
#line 157 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str240, ei_iso8859_14},
#line 334 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str241, ei_cp932},
#line 160 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str242, ei_iso8859_14},
    {-1},
#line 271 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str244, ei_iso646_jp},
#line 155 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str245, ei_iso8859_14},
    {-1},
#line 144 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str247, ei_iso8859_10},
#line 59 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str248, ei_iso8859_1},
#line 68 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str249, ei_iso8859_2},
    {-1}, {-1},
#line 137 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str252, ei_iso8859_10},
#line 188 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str253, ei_cp1252},
    {-1},
#line 166 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str255, ei_iso8859_15},
    {-1}, {-1},
#line 131 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str258, ei_iso8859_9},
#line 322 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str259, ei_cp51932},
    {-1}, {-1}, {-1},
#line 318 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str263, ei_eucjp_ms},
    {-1}, {-1}, {-1}, {-1},
#line 21 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str268, ei_ascii},
#line 246 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str269, ei_pt154},
#line 360 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str270, ei_euc_tw},
    {-1},
#line 308 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str272, ei_ksc5601},
#line 378 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str273, ei_cp949},
    {-1},
#line 359 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str275, ei_euc_tw},
#line 283 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str276, ei_jisx0208},
    {-1},
#line 273 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str278, ei_iso646_jp},
#line 138 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str279, ei_iso8859_10},
    {-1},
#line 165 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str281, ei_iso8859_15},
    {-1}, {-1}, {-1},
#line 143 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str285, ei_iso8859_10},
#line 239 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str286, ei_armscii_8},
#line 62 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str287, ei_iso8859_1},
    {-1},
#line 77 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str289, ei_iso8859_3},
    {-1},
#line 312 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str291, ei_euc_jp},
    {-1}, {-1},
#line 95 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str294, ei_iso8859_5},
    {-1},
#line 311 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str296, ei_euc_jp},
#line 113 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str297, ei_iso8859_7},
    {-1},
#line 134 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str299, ei_iso8859_9},
#line 252 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str300, ei_mulelao},
    {-1}, {-1},
#line 114 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str303, ei_iso8859_7},
    {-1},
#line 25 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str305, ei_ucs2},
    {-1},
#line 71 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str307, ei_iso8859_2},
#line 248 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str308, ei_rk1048},
#line 80 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str309, ei_iso8859_3},
    {-1}, {-1}, {-1}, {-1},
#line 86 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str314, ei_iso8859_4},
#line 340 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str315, ei_iso2022_jp1},
    {-1},
#line 339 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str317, ei_iso2022_jpms},
#line 85 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str318, ei_iso8859_4},
    {-1},
#line 305 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str320, ei_ksc5601},
    {-1},
#line 383 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str322, ei_local_char},
    {-1}, {-1},
#line 341 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str325, ei_iso2022_jp2},
    {-1},
#line 342 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str327, ei_iso2022_jp2},
#line 356 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str328, ei_iso2022_cn_ext},
    {-1}, {-1},
#line 265 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str331, ei_viscii},
    {-1}, {-1}, {-1}, {-1},
#line 93 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str336, ei_iso8859_5},
#line 262 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str337, ei_cp874},
#line 244 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str338, ei_pt154},
    {-1},
#line 105 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str340, ei_iso8859_6},
    {-1},
#line 256 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str342, ei_tis620},
    {-1},
#line 254 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str344, ei_cp1133},
#line 316 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str345, ei_eucjp_ms},
#line 272 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str346, ei_iso646_jp},
#line 255 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str347, ei_tis620},
#line 12 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str348, ei_ascii},
#line 115 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str349, ei_iso8859_7},
#line 299 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str350, ei_gb2312},
#line 32 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str351, ei_ucs2le},
#line 207 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str352, ei_cp850},
#line 185 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str353, ei_cp1251},
#line 173 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str354, ei_iso8859_16},
    {-1},
#line 353 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str356, ei_gb18030},
    {-1},
#line 14 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str358, ei_ascii},
#line 92 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str359, ei_iso8859_5},
#line 250 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str360, ei_rk1048},
    {-1}, {-1}, {-1},
#line 76 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str364, ei_iso8859_3},
#line 294 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str365, ei_iso646_cn},
#line 122 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str366, ei_iso8859_8},
#line 251 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str367, ei_rk1048},
#line 53 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str368, ei_java},
    {-1},
#line 125 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str370, ei_iso8859_8},
    {-1},
#line 319 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str372, ei_eucjp_ms},
    {-1}, {-1},
#line 102 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str375, ei_iso8859_6},
#line 227 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str376, ei_mac_cyrillic},
#line 315 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str377, ei_eucjp_ms},
#line 291 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str378, ei_jisx0212},
    {-1},
#line 130 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str380, ei_iso8859_9},
#line 267 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str381, ei_tcvn},
#line 317 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str382, ei_eucjp_ms},
    {-1}, {-1}, {-1},
#line 307 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str386, ei_ksc5601},
#line 57 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str387, ei_iso8859_1},
    {-1},
#line 34 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str389, ei_ucs4},
    {-1},
#line 88 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str391, ei_iso8859_4},
    {-1},
#line 38 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str393, ei_ucs4le},
    {-1}, {-1},
#line 36 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str396, ei_ucs4},
    {-1}, {-1}, {-1},
#line 235 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str400, ei_hp_roman8},
#line 199 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str401, ei_cp1256},
#line 184 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str402, ei_cp1251},
    {-1}, {-1},
#line 84 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str405, ei_iso8859_4},
#line 337 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str406, ei_iso2022_jp},
#line 310 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str407, ei_ksc5601},
#line 196 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str408, ei_cp1255},
#line 338 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str409, ei_iso2022_jp},
#line 150 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str410, ei_iso8859_13},
    {-1},
#line 187 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str412, ei_cp1252},
#line 190 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str413, ei_cp1253},
#line 352 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str414, ei_cp936},
#line 205 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str415, ei_cp1258},
    {-1}, {-1}, {-1}, {-1},
#line 19 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str420, ei_ascii},
#line 260 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str421, ei_tis620},
#line 257 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str422, ei_tis620},
#line 321 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str423, ei_cp51932},
    {-1}, {-1}, {-1},
#line 278 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str427, ei_jisx0201},
    {-1},
#line 258 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str429, ei_tis620},
    {-1}, {-1},
#line 201 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str432, ei_cp1257},
    {-1}, {-1}, {-1},
#line 333 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str436, ei_cp932},
    {-1},
#line 213 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str438, ei_cp862},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 349 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str445, ei_ces_gbk},
    {-1}, {-1}, {-1}, {-1},
#line 26 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str450, ei_ucs2},
#line 233 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str451, ei_mac_thai},
    {-1},
#line 284 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str453, ei_jisx0208},
#line 193 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str454, ei_cp1254},
    {-1},
#line 330 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str456, ei_cp932},
#line 324 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str457, ei_sjis},
    {-1}, {-1}, {-1},
#line 234 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str461, ei_hp_roman8},
    {-1},
#line 240 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str463, ei_georgian_academy},
    {-1},
#line 362 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str465, ei_ces_big5},
#line 220 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str466, ei_mac_roman},
    {-1},
#line 375 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str468, ei_euc_kr},
#line 176 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str469, ei_koi8_r},
#line 363 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str470, ei_ces_big5},
#line 181 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str471, ei_cp1250},
    {-1},
#line 374 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str473, ei_euc_kr},
#line 39 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str474, ei_utf16},
#line 177 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str475, ei_koi8_r},
#line 367 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str476, ei_ces_big5},
#line 104 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str477, ei_iso8859_6},
#line 119 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str478, ei_iso8859_7},
    {-1}, {-1},
#line 366 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str481, ei_ces_big5},
    {-1},
#line 118 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str483, ei_iso8859_7},
#line 323 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str484, ei_sjis},
    {-1}, {-1}, {-1},
#line 108 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str488, ei_iso8859_7},
#line 116 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str489, ei_iso8859_7},
#line 259 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str490, ei_tis620},
#line 24 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str491, ei_utf8},
#line 35 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str492, ei_ucs4},
    {-1}, {-1}, {-1},
#line 23 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str496, ei_utf8},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 241 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str502, ei_georgian_ps},
    {-1}, {-1}, {-1}, {-1},
#line 42 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str507, ei_utf32},
#line 247 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str508, ei_pt154},
#line 327 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str509, ei_sjis},
    {-1}, {-1}, {-1}, {-1},
#line 329 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str514, ei_cp932},
#line 109 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str515, ei_iso8859_7},
#line 326 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str516, ei_sjis},
    {-1},
#line 347 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str518, ei_euc_cn},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 309 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str525, ei_ksc5601},
#line 222 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str526, ei_mac_roman},
    {-1}, {-1},
#line 100 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str529, ei_iso8859_6},
#line 56 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str530, ei_iso8859_1},
#line 41 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str531, ei_utf16le},
    {-1}, {-1}, {-1},
#line 242 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str535, ei_koi8_t},
#line 15 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str536, ei_ascii},
#line 361 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str537, ei_euc_tw},
    {-1},
#line 103 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str539, ei_iso8859_6},
#line 67 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str540, ei_iso8859_2},
#line 111 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str541, ei_iso8859_7},
    {-1}, {-1}, {-1}, {-1},
#line 117 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str546, ei_iso8859_7},
    {-1}, {-1}, {-1},
#line 219 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str550, ei_mac_roman},
    {-1}, {-1},
#line 44 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str553, ei_utf32le},
    {-1}, {-1},
#line 306 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str556, ei_ksc5601},
#line 288 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str557, ei_jisx0212},
    {-1}, {-1},
#line 296 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str560, ei_iso646_cn},
#line 237 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str561, ei_hp_roman8},
    {-1},
#line 217 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str563, ei_cp866},
    {-1}, {-1},
#line 140 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str566, ei_iso8859_10},
#line 285 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str567, ei_jisx0208},
    {-1}, {-1},
#line 101 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str570, ei_iso8859_6},
    {-1}, {-1},
#line 358 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str573, ei_hz},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 30 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str582, ei_ucs2be},
#line 381 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str583, ei_iso2022_kr},
    {-1},
#line 20 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str585, ei_ascii},
#line 382 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str586, ei_iso2022_kr},
    {-1},
#line 249 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str588, ei_rk1048},
#line 31 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str589, ei_ucs2be},
#line 151 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str590, ei_iso8859_13},
    {-1},
#line 202 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str592, ei_cp1257},
#line 27 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str593, ei_ucs2},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 18 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str600, ei_ascii},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 276 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str606, ei_jisx0201},
#line 301 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str607, ei_gb2312},
    {-1}, {-1}, {-1}, {-1},
#line 277 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str612, ei_jisx0201},
#line 225 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str613, ei_mac_croatian},
#line 17 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str614, ei_ascii},
    {-1}, {-1},
#line 269 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str617, ei_tcvn},
    {-1}, {-1}, {-1},
#line 268 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str621, ei_tcvn},
    {-1}, {-1}, {-1},
#line 304 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str625, ei_isoir165},
    {-1},
#line 223 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str627, ei_mac_centraleurope},
    {-1}, {-1},
#line 290 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str630, ei_jisx0212},
    {-1},
#line 280 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str632, ei_jisx0208},
    {-1},
#line 124 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str634, ei_iso8859_8},
#line 384 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str635, ei_local_wchar_t},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 281 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str644, ei_jisx0208},
    {-1}, {-1}, {-1},
#line 48 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str648, ei_ucs2internal},
    {-1}, {-1}, {-1},
#line 226 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str652, ei_mac_romania},
    {-1}, {-1}, {-1},
#line 335 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str656, ei_cp932},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 287 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str662, ei_jisx0208},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1},
#line 28 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str685, ei_ucs2be},
    {-1}, {-1}, {-1}, {-1},
#line 50 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str690, ei_ucs4internal},
    {-1},
#line 263 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str692, ei_cp874},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 282 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str702, ei_jisx0208},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 372 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str709, ei_big5hkscs2004},
    {-1},
#line 289 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str711, ei_jisx0212},
    {-1}, {-1},
#line 371 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str714, ei_big5hkscs2004},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 110 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str720, ei_iso8859_7},
    {-1}, {-1}, {-1}, {-1},
#line 298 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str725, ei_iso646_cn},
    {-1},
#line 37 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str727, ei_ucs4be},
    {-1},
#line 178 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str729, ei_koi8_u},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 376 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str735, ei_euc_kr},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 46 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str778, ei_utf7},
    {-1},
#line 232 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str780, ei_mac_arabic},
    {-1}, {-1},
#line 47 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str783, ei_utf7},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 191 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str791, ei_cp1253},
#line 229 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str792, ei_mac_greek},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 224 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str798, ei_mac_iceland},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 346 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str804, ei_euc_cn},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 231 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str828, ei_mac_hebrew},
    {-1}, {-1}, {-1}, {-1},
#line 270 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str833, ei_tcvn},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 49 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str849, ei_ucs2swapped},
#line 45 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str850, ei_utf7},
    {-1},
#line 209 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str852, ei_cp850},
    {-1}, {-1}, {-1},
#line 228 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str856, ei_mac_ukraine},
    {-1},
#line 197 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str858, ei_cp1255},
    {-1},
#line 179 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str860, ei_koi8_ru},
    {-1}, {-1}, {-1}, {-1},
#line 40 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str865, ei_utf16be},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 379 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str874, ei_johab},
    {-1}, {-1},
#line 365 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str877, ei_ces_big5},
    {-1}, {-1}, {-1}, {-1},
#line 364 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str882, ei_ces_big5},
    {-1}, {-1}, {-1}, {-1},
#line 43 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str887, ei_utf32be},
    {-1}, {-1},
#line 238 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str890, ei_nextstep},
#line 51 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str891, ei_ucs4swapped},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 279 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str897, ei_jisx0201},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1},
#line 370 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str918, ei_big5hkscs2001},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1},
#line 33 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str929, ei_ucs2le},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 369 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str938, ei_big5hkscs1999},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1},
#line 373 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str970, ei_big5hkscs2004},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1},
#line 230 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1020, ei_mac_turkish},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 194 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1083, ei_cp1254},
    {-1}, {-1}, {-1}, {-1}, {-1},
#line 29 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1089, ei_ucs2be},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
    {-1}, {-1}, {-1}, {-1}, {-1}, {-1}, {-1},
#line 203 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1106, ei_cp1257},
    {-1}, {-1}, {-1}, {-1},
#line 313 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1111, ei_euc_jp},
    {-1}, {-1},
#line 200 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1114, ei_cp1256},
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
    {-1}, {-1}, {-1},
#line 314 "lib/aliases_syshpux.gperf"
    {(int)(long)&((struct stringpool_t *)0)->stringpool_str1379, ei_euc_jp}
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
