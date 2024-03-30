export type Country = {
  name: string;
  currencies: {
    name: string;
    symbol?: string;
  }[];
  languages: string[];
  postalCode?: {
    format: string;
    regex?: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  emoji: string;
  countryCallingCode: string;
  tax?: number;
};
/**

json
Lao kip
Laos
dalasi
Gambia
South African rand
Namibian dollar
Namibia
Mozambican metical
Mozambique
Central African CFA franc
Cameroon
Ukrainian hryvnia
Ukraine
Mauritanian ouguiya
Mauritania
West African CFA franc
Mali
Zimbabwean dollar
Zimbabwe
Azerbaijani manat
Azerbaijan
Euro
Cyprus
Egyptian pound
Egypt
Norwegian krone
Norway
West African CFA franc
Guinea-Bissau
Saudi riyal
Saudi Arabia
Danish krone
Denmark
Indian rupee
India
Afghan afghani
Afghanistan
Romanian leu
Romania
Serbian dinar
Serbia
New Zealand dollar
New Zealand
Iraqi dinar
Iraq
Ghanaian cedi
Ghana
Tunisian dinar
Tunisia
Angolan kwanza
Angola
Euro
Lithuania
New Taiwan dollar
Taiwan
North Korean won
North Korea
United States dollar
Puerto Rico
South Korean won
South Korea
United States dollar
Ecuador
Costa Rican colón
Costa Rica
Papua New Guinean kina
Papua New Guinea
Bulgarian lev
Bulgaria
United States dollar
United States
Euro
Germany
Moroccan dirham
Morocco
Uruguayan peso
Uruguay
Guatemalan quetzal
Guatemala
Bangladeshi taka
Bangladesh
Indonesian rupiah
Indonesia
Bahraini dinar
Bahrain
West African CFA franc
Niger
Euro
Netherlands
Uzbekistani soʻm
Uzbekistan
Kyrgyzstani som
Kyrgyzstan
Syrian pound
Syria
Malawian kwacha
Malawi
Argentine peso
Argentina
Nepalese rupee
Nepal
Polish złoty
Poland
Mongolian tögrög
Mongolia
Australian dollar
Australia
Tanzanian shilling
Tanzania
Yemeni rial
Yemen
Central African CFA franc
Equatorial Guinea
Liberian dollar
Liberia
Venezuelan bolívar soberano
Venezuela
Qatari riyal
Qatar
Central African CFA franc
Gabon
Albanian lek
Albania
Philippine peso
Philippines
Euro
Slovakia
West African CFA franc
Senegal
Burmese kyat
Myanmar
Brazilian real
Brazil
Vietnamese đồng
Vietnam
Icelandic króna
Iceland
Zambian kwacha
Zambia
Belarusian ruble
Belarus
West African CFA franc
Burkina Faso
Tajikistani somoni
Tajikistan
Eritrean nakfa
Eritrea
Central African CFA franc
Republic of the Congo
Guinean franc
Guinea
Mauritian rupee
Mauritius
Lebanese pound
Lebanon
Euro
Latvia
Hong Kong dollar
Hong Kong
Pakistani rupee
Pakistan
Croatian kuna
Croatia
Euro
Italy
Jamaican dollar
Jamaica
Euro
Greece
Sri Lankan rupee
Sri Lanka
Euro
Slovenia
West African CFA franc
Ivory Coast
West African CFA franc
Togo
Canadian dollar
Canada
Nicaraguan córdoba
Nicaragua
Chinese yuan
China
Euro
Belgium
South African rand
Swazi lilangeni
Eswatini
Singapore dollar
Singapore
Bosnia and Herzegovina convertible mark
Bosnia and Herzegovina
Chilean peso
Chile
Cuban peso
Cuban convertible peso
Cuba
Congolese franc
DR Congo
Malaysian ringgit
Malaysia
Euro
Spain
British pound
United Kingdom
Bolivian boliviano
Bolivia
South African rand
Lesotho loti
Lesotho
United States dollar
Cambodian riel
Cambodia
Burundian franc
Burundi
lari
Georgia
Kuwaiti dinar
Kuwait
Armenian dram
Armenia
United States dollar
Timor-Leste
Thai baht
Thailand
Euro
Portugal
Omani rial
Oman
Rwandan franc
Rwanda
Dominican peso
Dominican Republic
Honduran lempira
Honduras
Euro
Finland
Jordanian dinar
Israeli new shekel
Egyptian pound
Palestine
Euro
Estonia
Paraguayan guaraní
Paraguay
Moldovan leu
Moldova
Kazakhstani tenge
Kazakhstan
Ugandan shilling
Uganda
Sudanese pound
Sudan
Japanese yen
Japan
Haitian gourde
Haiti
Botswana pula
Botswana
Euro
Ireland
Turkish lira
Turkey
South Sudanese pound
South Sudan
West African CFA franc
Benin
Peruvian sol
Peru
Hungarian forint
Hungary
Czech koruna
Czechia
South African rand
South Africa
United Arab Emirates dirham
United Arab Emirates
Iranian rial
Iran
Colombian peso
Colombia
Euro
Kosovo
United States dollar
El Salvador
denar
North Macedonia
Central African CFA franc
Central African Republic
Trinidad and Tobago dollar
Trinidad and Tobago
Central African CFA franc
Chad
Russian ruble
Russia
Euro
France
Somali shilling
Somalia
Ethiopian birr
Ethiopia
Swiss franc
Switzerland
Swedish krona
Sweden
Algerian dinar
Algeria
United States dollar
Panamanian balboa
Panama
Turkmenistan manat
Turkmenistan
Mexican peso
Mexico
Libyan dinar
Libya
Jordanian dinar
Jordan
Nigerian naira
Nigeria
Malagasy ariary
Madagascar
Sierra Leonean leone
Sierra Leone
Kenyan shilling
Kenya


 */
//export default
const COUNTRIES: Country[] = [
  {
    name: "Kenya",
    currencies: [{ name: "Kenyan shilling", symbol: "Sh" }],
    languages: ["English", "Swahili"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/ke.png",
      svg: "https://flagcdn.com/ke.svg",
    },
    emoji: "🇰🇪",
    countryCallingCode: "+254",
  },
  {
    name: "Sierra Leone",
    currencies: [{ name: "Sierra Leonean leone", symbol: "Le" }],
    languages: ["English"],
    flags: {
      png: "https://flagcdn.com/w320/sl.png",
      svg: "https://flagcdn.com/sl.svg",
    },
    emoji: "🇸🇱",
    countryCallingCode: "+232",
  },
  {
    name: "Madagascar",
    currencies: [{ name: "Malagasy ariary", symbol: "Ar" }],
    languages: ["French", "Malagasy"],
    postalCode: { format: "###", regex: "^(\\d{3})$" },
    flags: {
      png: "https://flagcdn.com/w320/mg.png",
      svg: "https://flagcdn.com/mg.svg",
    },
    emoji: "🇲🇬",
    countryCallingCode: "+261",
  },
  {
    name: "Nigeria",
    currencies: [{ name: "Nigerian naira", symbol: "₦" }],
    languages: ["English"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/ng.png",
      svg: "https://flagcdn.com/ng.svg",
    },
    emoji: "🇳🇬",
    countryCallingCode: "+234",
    tax: 0.075
  },
  {
    name: "Jordan",
    currencies: [{ name: "Jordanian dinar", symbol: "د.ا" }],
    languages: ["Arabic"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/jo.png",
      svg: "https://flagcdn.com/jo.svg",
    },
    emoji: "🇯🇴",
    countryCallingCode: "+962",
  },
  {
    name: "Libya",
    currencies: [{ name: "Libyan dinar", symbol: "ل.د" }],
    languages: ["Arabic"],
    flags: {
      png: "https://flagcdn.com/w320/ly.png",
      svg: "https://flagcdn.com/ly.svg",
    },
    emoji: "🇱🇾",
    countryCallingCode: "+218",
  },
  {
    name: "Mexico",
    currencies: [{ name: "Mexican peso", symbol: "$" }],
    languages: ["Spanish"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/mx.png",
      svg: "https://flagcdn.com/mx.svg",
    },
    emoji: "🇲🇽",
    countryCallingCode: "+52",
    tax: 0.16,
  },
  {
    name: "Turkmenistan",
    currencies: [{ name: "Turkmenistan manat", symbol: "m" }],
    languages: ["Russian", "Turkmen"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/tm.png",
      svg: "https://flagcdn.com/tm.svg",
    },
    emoji: "🇹🇲",
    countryCallingCode: "+993",
  },
  {
    name: "Panama",
    currencies: [
      { name: "Panamanian balboa", symbol: "B/." },
      { name: "United States dollar", symbol: "$" },
    ],
    languages: ["Spanish"],
    flags: {
      png: "https://flagcdn.com/w320/pa.png",
      svg: "https://flagcdn.com/pa.svg",
    },
    emoji: "🇵🇦",
    countryCallingCode: "+507",
  },
  {
    name: "Algeria",
    currencies: [{ name: "Algerian dinar", symbol: "د.ج" }],
    languages: ["Arabic"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/dz.png",
      svg: "https://flagcdn.com/dz.svg",
    },
    emoji: "🇩🇿",
    countryCallingCode: "+213",
    tax: 0.19,
  },
  {
    name: "Sweden",
    currencies: [{ name: "Swedish krona", symbol: "kr" }],
    languages: ["Swedish"],
    postalCode: { format: "SE-### ##", regex: "^(?:SE)*(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/se.png",
      svg: "https://flagcdn.com/se.svg",
    },
    emoji: "🇸🇪",
    countryCallingCode: "+46",
  },
  {
    name: "Switzerland",
    currencies: [{ name: "Swiss franc", symbol: "Fr." }],
    languages: ["French", "Swiss German", "Italian", "Romansh"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/ch.png",
      svg: "https://flagcdn.com/ch.svg",
    },
    emoji: "🇨🇭",
    countryCallingCode: "+41",
  },
  {
    name: "Ethiopia",
    currencies: [{ name: "Ethiopian birr", symbol: "Br" }],
    languages: ["Amharic"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/et.png",
      svg: "https://flagcdn.com/et.svg",
    },
    emoji: "🇪🇹",
    countryCallingCode: "+251",
    tax: 0.15,
  },
  {
    name: "Somalia",
    currencies: [{ name: "Somali shilling", symbol: "Sh" }],
    languages: ["Arabic", "Somali"],
    postalCode: { format: "@@  #####", regex: "^([A-Z]{2}\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/so.png",
      svg: "https://flagcdn.com/so.svg",
    },
    emoji: "🇸🇴",
    countryCallingCode: "+252",
  },
  {
    name: "France",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["French"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/fr.png",
      svg: "https://flagcdn.com/fr.svg",
    },
    emoji: "🇫🇷",
    countryCallingCode: "+33",
  },
  {
    name: "Russia",
    currencies: [{ name: "Russian ruble", symbol: "₽" }],
    languages: ["Russian"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/ru.png",
      svg: "https://flagcdn.com/ru.svg",
    },
    emoji: "",
    countryCallingCode: "",
    tax: 0.20,
  },
  {
    name: "Chad",
    currencies: [{ name: "Central African CFA franc", symbol: "Fr" }],
    languages: ["Arabic", "French"],
    flags: {
      png: "https://flagcdn.com/w320/td.png",
      svg: "https://flagcdn.com/td.svg",
    },
    emoji: "🇹🇩",
    countryCallingCode: "+235",
  },
  {
    name: "Trinidad and Tobago",
    currencies: [{ name: "Trinidad and Tobago dollar", symbol: "$" }],
    languages: ["English"],
    flags: {
      png: "https://flagcdn.com/w320/tt.png",
      svg: "https://flagcdn.com/tt.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Central African Republic",
    currencies: [{ name: "Central African CFA franc", symbol: "Fr" }],
    languages: ["French", "Sango"],
    flags: {
      png: "https://flagcdn.com/w320/cf.png",
      svg: "https://flagcdn.com/cf.svg",
    },
    emoji: "🇨🇫",
    countryCallingCode: "+236",
  },
  {
    name: "North Macedonia",
    currencies: [{ name: "denar", symbol: "den" }],
    languages: ["Macedonian"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/mk.png",
      svg: "https://flagcdn.com/mk.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "El Salvador",
    currencies: [{ name: "United States dollar", symbol: "$" }],
    languages: ["Spanish"],
    postalCode: { format: "CP ####", regex: "^(?:CP)*(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/sv.png",
      svg: "https://flagcdn.com/sv.svg",
    },
    emoji: "🇸🇻",
    countryCallingCode: "+503",
    tax: 0.13,
  },
  {
    name: "Kosovo",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Albanian", "Serbian"],
    flags: {
      png: "https://flagcdn.com/w320/xk.png",
      svg: "https://flagcdn.com/xk.svg",
    },
    emoji: "",
    countryCallingCode: "+383",
  },
  {
    name: "Colombia",
    currencies: [{ name: "Colombian peso", symbol: "$" }],
    languages: ["Spanish"],
    flags: {
      png: "https://flagcdn.com/w320/co.png",
      svg: "https://flagcdn.com/co.svg",
    },
    emoji: "🇨🇴",
    countryCallingCode: "+57",
    tax: 0.19,
  },
  {
    name: "Iran",
    currencies: [{ name: "Iranian rial", symbol: "﷼" }],
    languages: ["Persian (Farsi)"],
    postalCode: { format: "##########", regex: "^(\\d{10})$" },
    flags: {
      png: "https://flagcdn.com/w320/ir.png",
      svg: "https://flagcdn.com/ir.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "United Arab Emirates",
    currencies: [{ name: "United Arab Emirates dirham", symbol: "د.إ" }],
    languages: ["Arabic"],
    flags: {
      png: "https://flagcdn.com/w320/ae.png",
      svg: "https://flagcdn.com/ae.svg",
    },
    emoji: "🇦🇪",
    countryCallingCode: "+971",
    tax: 0.05,
  },
  {
    name: "South Africa",
    currencies: [{ name: "South African rand", symbol: "R" }],
    languages: [
      "Afrikaans",
      "English",
      "Southern Ndebele",
      "Northern Sotho",
      "Southern Sotho",
      "Swazi",
      "Tswana",
      "Tsonga",
      "Venda",
      "Xhosa",
      "Zulu",
    ],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/za.png",
      svg: "https://flagcdn.com/za.svg",
    },
    emoji: "🇿🇦",
    countryCallingCode: "+27",
  },
  {
    name: "Czechia",
    currencies: [{ name: "Czech koruna", symbol: "Kč" }],
    languages: ["Czech", "Slovak"],
    postalCode: { format: "### ##", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/cz.png",
      svg: "https://flagcdn.com/cz.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Hungary",
    currencies: [{ name: "Hungarian forint", symbol: "Ft" }],
    languages: ["Hungarian"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/hu.png",
      svg: "https://flagcdn.com/hu.svg",
    },
    emoji: "🇭🇺",
    countryCallingCode: "+36",
  },
  {
    name: "Peru",
    currencies: [{ name: "Peruvian sol", symbol: "S/ " }],
    languages: ["Aymara", "Quechua", "Spanish"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/pe.png",
      svg: "https://flagcdn.com/pe.svg",
    },
    emoji: "🇵🇪",
    countryCallingCode: "+51",
    tax: 0.18,
  },
  {
    name: "Benin",
    currencies: [{ name: "West African CFA franc", symbol: "Fr" }],
    languages: ["French"],
    flags: {
      png: "https://flagcdn.com/w320/bj.png",
      svg: "https://flagcdn.com/bj.svg",
    },
    emoji: "🇧🇯",
    countryCallingCode: "+229",
  },
  {
    name: "South Sudan",
    currencies: [{ name: "South Sudanese pound", symbol: "£" }],
    languages: ["English"],
    flags: {
      png: "https://flagcdn.com/w320/ss.png",
      svg: "https://flagcdn.com/ss.svg",
    },
    emoji: "🇸🇸",
    countryCallingCode: "+211",
  },
  {
    name: "Turkey",
    currencies: [{ name: "Turkish lira", symbol: "₺" }],
    languages: ["Turkish"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/tr.png",
      svg: "https://flagcdn.com/tr.svg",
    },
    emoji: "🇹🇷",
    countryCallingCode: "+90",
    tax: 0.19,
  },
  {
    name: "Ireland",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["English", "Irish"],
    flags: {
      png: "https://flagcdn.com/w320/ie.png",
      svg: "https://flagcdn.com/ie.svg",
    },
    emoji: "🇮🇪",
    countryCallingCode: "+353",
  },
  {
    name: "Botswana",
    currencies: [{ name: "Botswana pula", symbol: "P" }],
    languages: ["English", "Tswana"],
    flags: {
      png: "https://flagcdn.com/w320/bw.png",
      svg: "https://flagcdn.com/bw.svg",
    },
    emoji: "🇧🇼",
    countryCallingCode: "+267",
    tax: 0.14,
  },
  {
    name: "Haiti",
    currencies: [{ name: "Haitian gourde", symbol: "G" }],
    languages: ["French", "Haitian Creole"],
    postalCode: { format: "HT####", regex: "^(?:HT)*(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/ht.png",
      svg: "https://flagcdn.com/ht.svg",
    },
    emoji: "🇭🇹",
    countryCallingCode: "+509",
  },
  {
    name: "Japan",
    currencies: [{ name: "Japanese yen", symbol: "¥" }],
    languages: ["Japanese"],
    postalCode: { format: "###-####", regex: "^(\\d{7})$" },
    flags: {
      png: "https://flagcdn.com/w320/jp.png",
      svg: "https://flagcdn.com/jp.svg",
    },
    emoji: "🇯🇵",
    countryCallingCode: "+81",
    tax: 0.10,
  },
  {
    name: "Sudan",
    currencies: [{ name: "Sudanese pound" }],
    languages: ["Arabic", "English"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/sd.png",
      svg: "https://flagcdn.com/sd.svg",
    },
    emoji: "🇸🇩",
    countryCallingCode: "+249",
  },
  {
    name: "Uganda",
    currencies: [{ name: "Ugandan shilling", symbol: "Sh" }],
    languages: ["English", "Swahili"],
    flags: {
      png: "https://flagcdn.com/w320/ug.png",
      svg: "https://flagcdn.com/ug.svg",
    },
    emoji: "🇺🇬",
    countryCallingCode: "+256",
    tax: 0.18,
  },
  {
    name: "Kazakhstan",
    currencies: [{ name: "Kazakhstani tenge", symbol: "₸" }],
    languages: ["Kazakh", "Russian"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/kz.png",
      svg: "https://flagcdn.com/kz.svg",
    },
    emoji: "🇰🇿",
    countryCallingCode: "+7",
    tax: 0.12,
  },
  {
    name: "Moldova",
    currencies: [{ name: "Moldovan leu", symbol: "L" }],
    languages: ["Moldavian"],
    postalCode: { format: "MD-####", regex: "^(?:MD)*(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/md.png",
      svg: "https://flagcdn.com/md.svg",
    },
    emoji: "🇲🇩",
    countryCallingCode: "+373",
  },
  {
    name: "Paraguay",
    currencies: [{ name: "Paraguayan guaraní", symbol: "₲" }],
    languages: ["Guaraní", "Spanish"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/py.png",
      svg: "https://flagcdn.com/py.svg",
    },
    emoji: "🇵🇾",
    countryCallingCode: "+595",
  },
  {
    name: "Estonia",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Estonian"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/ee.png",
      svg: "https://flagcdn.com/ee.svg",
    },
    emoji: "🇪🇪",
    countryCallingCode: "+372",
  },
  {
    name: "Palestine",
    currencies: [
      { name: "Egyptian pound", symbol: "E£" },
      { name: "Israeli new shekel", symbol: "₪" },
      { name: "Jordanian dinar", symbol: "JD" },
    ],
    languages: ["Arabic"],
    flags: {
      png: "https://flagcdn.com/w320/ps.png",
      svg: "https://flagcdn.com/ps.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Finland",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Finnish", "Swedish"],
    postalCode: { format: "#####", regex: "^(?:FI)*(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/fi.png",
      svg: "https://flagcdn.com/fi.svg",
    },
    emoji: "🇫🇮",
    countryCallingCode: "+358",
  },
  {
    name: "Honduras",
    currencies: [{ name: "Honduran lempira", symbol: "L" }],
    languages: ["Spanish"],
    postalCode: { format: "@@####", regex: "^([A-Z]{2}\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/hn.png",
      svg: "https://flagcdn.com/hn.svg",
    },
    emoji: "🇭🇳",
    countryCallingCode: "+504",
  },
  {
    name: "Dominican Republic",
    currencies: [{ name: "Dominican peso", symbol: "$" }],
    languages: ["Spanish"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/do.png",
      svg: "https://flagcdn.com/do.svg",
    },
    emoji: "🇩🇴",
    countryCallingCode: "+1 809",
  },
  {
    name: "Rwanda",
    currencies: [{ name: "Rwandan franc", symbol: "Fr" }],
    languages: ["English", "French", "Kinyarwanda"],
    flags: {
      png: "https://flagcdn.com/w320/rw.png",
      svg: "https://flagcdn.com/rw.svg",
    },
    emoji: "🇷🇼",
    countryCallingCode: "+250",
  },
  {
    name: "Oman",
    currencies: [{ name: "Omani rial", symbol: "ر.ع." }],
    languages: ["Arabic"],
    postalCode: { format: "###", regex: "^(\\d{3})$" },
    flags: {
      png: "https://flagcdn.com/w320/om.png",
      svg: "https://flagcdn.com/om.svg",
    },
    emoji: "🇴🇲",
    countryCallingCode: "+968",
    tax: 0.05,
  },
  {
    name: "Portugal",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Portuguese"],
    postalCode: { format: "####-###", regex: "^(\\d{7})$" },
    flags: {
      png: "https://flagcdn.com/w320/pt.png",
      svg: "https://flagcdn.com/pt.svg",
    },
    emoji: "🇵🇹",
    countryCallingCode: "+351",
  },
  {
    name: "Thailand",
    currencies: [{ name: "Thai baht", symbol: "฿" }],
    languages: ["Thai"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/th.png",
      svg: "https://flagcdn.com/th.svg",
    },
    emoji: "🇹🇭",
    countryCallingCode: "+66",
    tax: 0.07,
  },
  {
    name: "Timor-Leste",
    currencies: [{ name: "United States dollar", symbol: "$" }],
    languages: ["Portuguese", "Tetum"],
    flags: {
      png: "https://flagcdn.com/w320/tl.png",
      svg: "https://flagcdn.com/tl.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Armenia",
    currencies: [{ name: "Armenian dram", symbol: "֏" }],
    languages: ["Armenian"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/am.png",
      svg: "https://flagcdn.com/am.svg",
    },
    emoji: "🇦🇲",
    countryCallingCode: "+374",
    tax: 0.20,
  },
  {
    name: "Kuwait",
    currencies: [{ name: "Kuwaiti dinar", symbol: "د.ك" }],
    languages: ["Arabic"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/kw.png",
      svg: "https://flagcdn.com/kw.svg",
    },
    emoji: "🇰🇼",
    countryCallingCode: "+965",
    tax: 0,
  },
  {
    name: "Georgia",
    currencies: [{ name: "lari", symbol: "₾" }],
    languages: ["Georgian"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/ge.png",
      svg: "https://flagcdn.com/ge.svg",
    },
    emoji: "🇬🇪",
    countryCallingCode: "+995",
    tax: 0.18,
  },
  {
    name: "Burundi",
    currencies: [{ name: "Burundian franc", symbol: "Fr" }],
    languages: ["French", "Kirundi"],
    flags: {
      png: "https://flagcdn.com/w320/bi.png",
      svg: "https://flagcdn.com/bi.svg",
    },
    emoji: "🇧🇮",
    countryCallingCode: "+257",
  },
  {
    name: "Cambodia",
    currencies: [
      { name: "Cambodian riel", symbol: "៛" },
      { name: "United States dollar", symbol: "$" },
    ],
    languages: ["Khmer"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/kh.png",
      svg: "https://flagcdn.com/kh.svg",
    },
    emoji: "🇰🇭",
    countryCallingCode: "+855",
  },
  {
    name: "Lesotho",
    currencies: [
      { name: "Lesotho loti", symbol: "L" },
      { name: "South African rand", symbol: "R" },
    ],
    languages: ["English", "Sotho"],
    postalCode: { format: "###", regex: "^(\\d{3})$" },
    flags: {
      png: "https://flagcdn.com/w320/ls.png",
      svg: "https://flagcdn.com/ls.svg",
    },
    emoji: "🇱🇸",
    countryCallingCode: "+266",
  },
  {
    name: "Bolivia",
    currencies: [{ name: "Bolivian boliviano", symbol: "Bs." }],
    languages: ["Aymara", "Guaraní", "Quechua", "Spanish"],
    flags: {
      png: "https://flagcdn.com/w320/bo.png",
      svg: "https://flagcdn.com/bo.svg",
    },
    emoji: "",
    countryCallingCode: "",
    tax: 0.13,
  },
  {
    name: "United Kingdom",
    currencies: [{ name: "British pound", symbol: "£" }],
    languages: ["English"],
    postalCode: {
      format: "@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA",
      regex:
        "^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
    },
    flags: {
      png: "https://flagcdn.com/w320/gb.png",
      svg: "https://flagcdn.com/gb.svg",
    },
    emoji: "🇬🇧",
    countryCallingCode: "+44",
    tax: 0.20,
  },
  {
    name: "Spain",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Spanish"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/es.png",
      svg: "https://flagcdn.com/es.svg",
    },
    emoji: "🇪🇸",
    countryCallingCode: "+34",
  },
  {
    name: "Malaysia",
    currencies: [{ name: "Malaysian ringgit", symbol: "RM" }],
    languages: ["English", "Malay"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/my.png",
      svg: "https://flagcdn.com/my.svg",
    },
    emoji: "🇲🇾",
    countryCallingCode: "+60",
  },
  {
    name: "DR Congo",
    currencies: [{ name: "Congolese franc", symbol: "FC" }],
    languages: ["French", "Kikongo", "Lingala", "Tshiluba", "Swahili"],
    flags: {
      png: "https://flagcdn.com/w320/cd.png",
      svg: "https://flagcdn.com/cd.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Cuba",
    currencies: [
      { name: "Cuban convertible peso", symbol: "$" },
      { name: "Cuban peso", symbol: "$" },
    ],
    languages: ["Spanish"],
    postalCode: { format: "CP #####", regex: "^(?:CP)*(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/cu.png",
      svg: "https://flagcdn.com/cu.svg",
    },
    emoji: "🇨🇺",
    countryCallingCode: "+53",
  },
  {
    name: "Chile",
    currencies: [{ name: "Chilean peso", symbol: "$" }],
    languages: ["Spanish"],
    postalCode: { format: "#######", regex: "^(\\d{7})$" },
    flags: {
      png: "https://flagcdn.com/w320/cl.png",
      svg: "https://flagcdn.com/cl.svg",
    },
    emoji: "🇨🇱",
    countryCallingCode: "+56",
    tax: 0.19,
  },
  {
    name: "Bosnia and Herzegovina",
    currencies: [{ name: "Bosnia and Herzegovina convertible mark" }],
    languages: ["Bosnian", "Croatian", "Serbian"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/ba.png",
      svg: "https://flagcdn.com/ba.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Singapore",
    currencies: [{ name: "Singapore dollar", symbol: "$" }],
    languages: ["Chinese", "English", "Malay", "Tamil"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/sg.png",
      svg: "https://flagcdn.com/sg.svg",
    },
    emoji: "🇸🇬",
    countryCallingCode: "+65",
    tax: 0.08,
  },
  {
    name: "Eswatini",
    currencies: [
      { name: "Swazi lilangeni", symbol: "L" },
      { name: "South African rand", symbol: "R" },
    ],
    languages: ["English", "Swazi"],
    postalCode: { format: "@###", regex: "^([A-Z]\\d{3})$" },
    flags: {
      png: "https://flagcdn.com/w320/sz.png",
      svg: "https://flagcdn.com/sz.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Belgium",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["German", "French", "Dutch"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/be.png",
      svg: "https://flagcdn.com/be.svg",
    },
    emoji: "🇧🇪",
    countryCallingCode: "+32",
  },
  {
    name: "China",
    currencies: [{ name: "Chinese yuan", symbol: "¥" }],
    languages: ["Chinese"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/cn.png",
      svg: "https://flagcdn.com/cn.svg",
    },
    emoji: "🇨🇳",
    countryCallingCode: "+86",
  },
  {
    name: "Nicaragua",
    currencies: [{ name: "Nicaraguan córdoba", symbol: "C$" }],
    languages: ["Spanish"],
    postalCode: { format: "###-###-#", regex: "^(\\d{7})$" },
    flags: {
      png: "https://flagcdn.com/w320/ni.png",
      svg: "https://flagcdn.com/ni.svg",
    },
    emoji: "🇳🇮",
    countryCallingCode: "+505",
  },
  {
    name: "Canada",
    currencies: [{ name: "Canadian dollar", symbol: "$" }],
    languages: ["English", "French"],
    postalCode: {
      format: "@#@ #@#",
      regex:
        "^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ]) ?(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$ ",
    },
    flags: {
      png: "https://flagcdn.com/w320/ca.png",
      svg: "https://flagcdn.com/ca.svg",
    },
    emoji: "🇨🇦",
    countryCallingCode: "+1",
    tax: 0.05,
  },
  {
    name: "Togo",
    currencies: [{ name: "West African CFA franc", symbol: "Fr" }],
    languages: ["French"],
    flags: {
      png: "https://flagcdn.com/w320/tg.png",
      svg: "https://flagcdn.com/tg.svg",
    },
    emoji: "🇹🇬",
    countryCallingCode: "+228",
  },
  {
    name: "Ivory Coast",
    currencies: [{ name: "West African CFA franc", symbol: "Fr" }],
    languages: ["French"],
    flags: {
      png: "https://flagcdn.com/w320/ci.png",
      svg: "https://flagcdn.com/ci.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Slovenia",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Slovene"],
    postalCode: { format: "SI- ####", regex: "^(?:SI)*(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/si.png",
      svg: "https://flagcdn.com/si.svg",
    },
    emoji: "🇸🇮",
    countryCallingCode: "+386",
  },
  {
    name: "Sri Lanka",
    currencies: [{ name: "Sri Lankan rupee", symbol: "Rs  රු" }],
    languages: ["Sinhala", "Tamil"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/lk.png",
      svg: "https://flagcdn.com/lk.svg",
    },
    emoji: "🇱🇰",
    countryCallingCode: "+94",
  },
  {
    name: "Greece",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Greek"],
    postalCode: { format: "### ##", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/gr.png",
      svg: "https://flagcdn.com/gr.svg",
    },
    emoji: "🇬🇷",
    countryCallingCode: "+30",
  },
  {
    name: "Jamaica",
    currencies: [{ name: "Jamaican dollar", symbol: "$" }],
    languages: ["English", "Jamaican Patois"],
    flags: {
      png: "https://flagcdn.com/w320/jm.png",
      svg: "https://flagcdn.com/jm.svg",
    },
    emoji: "🇯🇲",
    countryCallingCode: "+1 876",
  },
  {
    name: "Italy",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Italian"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/it.png",
      svg: "https://flagcdn.com/it.svg",
    },
    emoji: "🇮🇹",
    countryCallingCode: "+39",
  },
  {
    name: "Croatia",
    currencies: [{ name: "Croatian kuna", symbol: "kn" }],
    languages: ["Croatian"],
    postalCode: { format: "HR-#####", regex: "^(?:HR)*(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/hr.png",
      svg: "https://flagcdn.com/hr.svg",
    },
    emoji: "🇭🇷",
    countryCallingCode: "+385",
  },
  {
    name: "Pakistan",
    currencies: [{ name: "Pakistani rupee", symbol: "₨" }],
    languages: ["English", "Urdu"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/pk.png",
      svg: "https://flagcdn.com/pk.svg",
    },
    emoji: "🇵🇰",
    countryCallingCode: "+92",
    tax: 0.18
  },
  {
    name: "Hong Kong",
    currencies: [{ name: "Hong Kong dollar", symbol: "$" }],
    languages: ["English", "Chinese"],
    flags: {
      png: "https://flagcdn.com/w320/hk.png",
      svg: "https://flagcdn.com/hk.svg",
    },
    emoji: "🇭🇰",
    countryCallingCode: "+852",
    tax: 0,
  },
  {
    name: "Latvia",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Latvian"],
    postalCode: { format: "LV-####", regex: "^(?:LV)*(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/lv.png",
      svg: "https://flagcdn.com/lv.svg",
    },
    emoji: "🇱🇻",
    countryCallingCode: "+371",
  },
  {
    name: "Lebanon",
    currencies: [{ name: "Lebanese pound", symbol: "ل.ل" }],
    languages: ["Arabic", "French"],
    postalCode: {
      format: "#### ####|####",
      regex: "^(\\d{4}(\\d{4})?)$",
    },
    flags: {
      png: "https://flagcdn.com/w320/lb.png",
      svg: "https://flagcdn.com/lb.svg",
    },
    emoji: "🇱🇧",
    countryCallingCode: "+961",
  },
  {
    name: "Mauritius",
    currencies: [{ name: "Mauritian rupee", symbol: "₨" }],
    languages: ["English", "French", "Mauritian Creole"],
    flags: {
      png: "https://flagcdn.com/w320/mu.png",
      svg: "https://flagcdn.com/mu.svg",
    },
    emoji: "🇲🇺",
    countryCallingCode: "+230",
    tax: 0.15,
  },
  {
    name: "Guinea",
    currencies: [{ name: "Guinean franc", symbol: "Fr" }],
    languages: ["French"],
    flags: {
      png: "https://flagcdn.com/w320/gn.png",
      svg: "https://flagcdn.com/gn.svg",
    },
    emoji: "🇬🇳",
    countryCallingCode: "+224",
  },
  {
    name: "Republic of the Congo",
    currencies: [{ name: "Central African CFA franc", symbol: "Fr" }],
    languages: ["French", "Kikongo", "Lingala"],
    flags: {
      png: "https://flagcdn.com/w320/cg.png",
      svg: "https://flagcdn.com/cg.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Eritrea",
    currencies: [{ name: "Eritrean nakfa", symbol: "Nfk" }],
    languages: ["Arabic", "English", "Tigrinya"],
    flags: {
      png: "https://flagcdn.com/w320/er.png",
      svg: "https://flagcdn.com/er.svg",
    },
    emoji: "🇪🇷",
    countryCallingCode: "+291",
  },
  {
    name: "Tajikistan",
    currencies: [{ name: "Tajikistani somoni", symbol: "ЅМ" }],
    languages: ["Russian", "Tajik"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/tj.png",
      svg: "https://flagcdn.com/tj.svg",
    },
    emoji: "🇹🇯",
    countryCallingCode: "+992",
  },
  {
    name: "Burkina Faso",
    currencies: [{ name: "West African CFA franc", symbol: "Fr" }],
    languages: ["French"],
    flags: {
      png: "https://flagcdn.com/w320/bf.png",
      svg: "https://flagcdn.com/bf.svg",
    },
    emoji: "🇧🇫",
    countryCallingCode: "+226",
  },
  {
    name: "Belarus",
    currencies: [{ name: "Belarusian ruble", symbol: "Br" }],
    languages: ["Belarusian", "Russian"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/by.png",
      svg: "https://flagcdn.com/by.svg",
    },
    emoji: "🇧🇾",
    countryCallingCode: "+375",
  },
  {
    name: "Zambia",
    currencies: [{ name: "Zambian kwacha", symbol: "ZK" }],
    languages: ["English"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/zm.png",
      svg: "https://flagcdn.com/zm.svg",
    },
    emoji: "🇿🇲",
    countryCallingCode: "+260",
  },
  {
    name: "Iceland",
    currencies: [{ name: "Icelandic króna", symbol: "kr" }],
    languages: ["Icelandic"],
    postalCode: { format: "###", regex: "^(\\d{3})$" },
    flags: {
      png: "https://flagcdn.com/w320/is.png",
      svg: "https://flagcdn.com/is.svg",
    },
    emoji: "🇮🇸",
    countryCallingCode: "+354",
  },
  {
    name: "Vietnam",
    currencies: [{ name: "Vietnamese đồng", symbol: "₫" }],
    languages: ["Vietnamese"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/vn.png",
      svg: "https://flagcdn.com/vn.svg",
    },
    emoji: "",
    countryCallingCode: "",
    tax: 0.10,
  },
  {
    name: "Brazil",
    currencies: [{ name: "Brazilian real", symbol: "R$" }],
    languages: ["Portuguese"],
    postalCode: { format: "#####-###", regex: "^(\\d{8})$" },
    flags: {
      png: "https://flagcdn.com/w320/br.png",
      svg: "https://flagcdn.com/br.svg",
    },
    emoji: "🇧🇷",
    countryCallingCode: "+55",
  },
  {
    name: "Myanmar",
    currencies: [{ name: "Burmese kyat", symbol: "Ks" }],
    languages: ["Burmese"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/mm.png",
      svg: "https://flagcdn.com/mm.svg",
    },
    emoji: "🇲🇲",
    countryCallingCode: "+95",
  },
  {
    name: "Senegal",
    currencies: [{ name: "West African CFA franc", symbol: "Fr" }],
    languages: ["French"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/sn.png",
      svg: "https://flagcdn.com/sn.svg",
    },
    emoji: "🇸🇳",
    countryCallingCode: "+221",
  },
  {
    name: "Slovakia",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Slovak"],
    postalCode: { format: "###  ##", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/sk.png",
      svg: "https://flagcdn.com/sk.svg",
    },
    emoji: "🇸🇰",
    countryCallingCode: "+421",
  },
  {
    name: "Philippines",
    currencies: [{ name: "Philippine peso", symbol: "₱" }],
    languages: ["English", "Filipino"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/ph.png",
      svg: "https://flagcdn.com/ph.svg",
    },
    emoji: "🇵🇭",
    countryCallingCode: "+63",
    tax: 0.12,
  },
  {
    name: "Albania",
    currencies: [{ name: "Albanian lek", symbol: "L" }],
    languages: ["Albanian"],
    flags: {
      png: "https://flagcdn.com/w320/al.png",
      svg: "https://flagcdn.com/al.svg",
    },
    emoji: "🇦🇱",
    countryCallingCode: "+355",
  },
  {
    name: "Gabon",
    currencies: [{ name: "Central African CFA franc", symbol: "Fr" }],
    languages: ["French"],
    flags: {
      png: "https://flagcdn.com/w320/ga.png",
      svg: "https://flagcdn.com/ga.svg",
    },
    emoji: "🇬🇦",
    countryCallingCode: "+241",
  },
  {
    name: "Qatar",
    currencies: [{ name: "Qatari riyal", symbol: "ر.ق" }],
    languages: ["Arabic"],
    flags: {
      png: "https://flagcdn.com/w320/qa.png",
      svg: "https://flagcdn.com/qa.svg",
    },
    emoji: "🇶🇦",
    countryCallingCode: "+974",
    tax: 0,
  },
  {
    name: "Venezuela",
    currencies: [{ name: "Venezuelan bolívar soberano", symbol: "Bs.S." }],
    languages: ["Spanish"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/ve.png",
      svg: "https://flagcdn.com/ve.svg",
    },
    emoji: "",
    countryCallingCode: "",
    tax: 0.16,
  },
  {
    name: "Liberia",
    currencies: [{ name: "Liberian dollar", symbol: "$" }],
    languages: ["English"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/lr.png",
      svg: "https://flagcdn.com/lr.svg",
    },
    emoji: "🇱🇷",
    countryCallingCode: "+231",
  },
  {
    name: "Equatorial Guinea",
    currencies: [{ name: "Central African CFA franc", symbol: "Fr" }],
    languages: ["French", "Portuguese", "Spanish"],
    flags: {
      png: "https://flagcdn.com/w320/gq.png",
      svg: "https://flagcdn.com/gq.svg",
    },
    emoji: "🇬🇶",
    countryCallingCode: "+240",
    tax: 15,
  },
  {
    name: "Yemen",
    currencies: [{ name: "Yemeni rial", symbol: "﷼" }],
    languages: ["Arabic"],
    flags: {
      png: "https://flagcdn.com/w320/ye.png",
      svg: "https://flagcdn.com/ye.svg",
    },
    emoji: "🇾🇪",
    countryCallingCode: "+967",
  },
  {
    name: "Tanzania",
    currencies: [{ name: "Tanzanian shilling", symbol: "Sh" }],
    languages: ["English", "Swahili"],
    flags: {
      png: "https://flagcdn.com/w320/tz.png",
      svg: "https://flagcdn.com/tz.svg",
    },
    emoji: "",
    countryCallingCode: "",
    tax: 0.18,
  },
  {
    name: "Australia",
    currencies: [{ name: "Australian dollar", symbol: "$" }],
    languages: ["English"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/au.png",
      svg: "https://flagcdn.com/au.svg",
    },
    emoji: "🇦🇺",
    countryCallingCode: "+61",
    tax: 0.10,
  },
  {
    name: "Mongolia",
    currencies: [{ name: "Mongolian tögrög", symbol: "₮" }],
    languages: ["Mongolian"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/mn.png",
      svg: "https://flagcdn.com/mn.svg",
    },
    emoji: "🇲🇳",
    countryCallingCode: "+976",
  },
  {
    name: "Poland",
    currencies: [{ name: "Polish złoty", symbol: "zł" }],
    languages: ["Polish"],
    postalCode: { format: "##-###", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/pl.png",
      svg: "https://flagcdn.com/pl.svg",
    },
    emoji: "🇵🇱",
    countryCallingCode: "+48",
  },
  {
    name: "Nepal",
    currencies: [{ name: "Nepalese rupee", symbol: "₨" }],
    languages: ["Nepali"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/np.png",
      svg: "https://flagcdn.com/np.svg",
    },
    emoji: "🇳🇵",
    countryCallingCode: "+977",
  },
  {
    name: "Argentina",
    currencies: [{ name: "Argentine peso", symbol: "$" }],
    languages: ["Guaraní", "Spanish"],
    postalCode: { format: "@####@@@", regex: "^([A-Z]\\d{4}[A-Z]{3})$" },
    flags: {
      png: "https://flagcdn.com/w320/ar.png",
      svg: "https://flagcdn.com/ar.svg",
    },
    emoji: "🇦🇷",
    countryCallingCode: "+54",
  },
  {
    name: "Malawi",
    currencies: [{ name: "Malawian kwacha", symbol: "MK" }],
    languages: ["English", "Chewa"],
    flags: {
      png: "https://flagcdn.com/w320/mw.png",
      svg: "https://flagcdn.com/mw.svg",
    },
    emoji: "🇲🇼",
    countryCallingCode: "+265",
  },
  {
    name: "Syria",
    currencies: [{ name: "Syrian pound", symbol: "£" }],
    languages: ["Arabic"],
    flags: {
      png: "https://flagcdn.com/w320/sy.png",
      svg: "https://flagcdn.com/sy.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Kyrgyzstan",
    currencies: [{ name: "Kyrgyzstani som", symbol: "с" }],
    languages: ["Kyrgyz", "Russian"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/kg.png",
      svg: "https://flagcdn.com/kg.svg",
    },
    emoji: "🇰🇬",
    countryCallingCode: "+996",
  },
  {
    name: "Uzbekistan",
    currencies: [{ name: "Uzbekistani soʻm", symbol: "so'm" }],
    languages: ["Russian", "Uzbek"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/uz.png",
      svg: "https://flagcdn.com/uz.svg",
    },
    emoji: "🇺🇿",
    countryCallingCode: "+998",
    tax: 0.12,
  },
  {
    name: "Netherlands",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Dutch"],
    postalCode: { format: "#### @@", regex: "^(\\d{4}[A-Z]{2})$" },
    flags: {
      png: "https://flagcdn.com/w320/nl.png",
      svg: "https://flagcdn.com/nl.svg",
    },
    emoji: "🇳🇱",
    countryCallingCode: "+31",
  },
  {
    name: "Niger",
    currencies: [{ name: "West African CFA franc", symbol: "Fr" }],
    languages: ["French"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/ne.png",
      svg: "https://flagcdn.com/ne.svg",
    },
    emoji: "🇳🇪",
    countryCallingCode: "+227",
  },
  {
    name: "Bahrain",
    currencies: [{ name: "Bahraini dinar", symbol: ".د.ب" }],
    languages: ["Arabic"],
    postalCode: { format: "####|###", regex: "^(\\d{3}\\d?)$" },
    flags: {
      png: "https://flagcdn.com/w320/bh.png",
      svg: "https://flagcdn.com/bh.svg",
    },
    emoji: "🇧🇭",
    countryCallingCode: "+973",
    tax: 0.10,
  },
  {
    name: "Indonesia",
    currencies: [{ name: "Indonesian rupiah", symbol: "Rp" }],
    languages: ["Indonesian"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/id.png",
      svg: "https://flagcdn.com/id.svg",
    },
    emoji: "🇮🇩",
    countryCallingCode: "+62",
    tax: 0.11,
  },
  {
    name: "Bangladesh",
    currencies: [{ name: "Bangladeshi taka", symbol: "৳" }],
    languages: ["Bengali"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/bd.png",
      svg: "https://flagcdn.com/bd.svg",
    },
    emoji: "🇧🇩",
    countryCallingCode: "+880",
  },
  {
    name: "Guatemala",
    currencies: [{ name: "Guatemalan quetzal", symbol: "Q" }],
    languages: ["Spanish"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/gt.png",
      svg: "https://flagcdn.com/gt.svg",
    },
    emoji: "🇬🇹",
    countryCallingCode: "+502",
    tax: 0.12,
  },
  {
    name: "Uruguay",
    currencies: [{ name: "Uruguayan peso", symbol: "$" }],
    languages: ["Spanish"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/uy.png",
      svg: "https://flagcdn.com/uy.svg",
    },
    emoji: "🇺🇾",
    countryCallingCode: "+598",
    tax: 0.22,
  },
  {
    name: "Morocco",
    currencies: [{ name: "Moroccan dirham", symbol: "د.م." }],
    languages: ["Arabic", "Berber"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/ma.png",
      svg: "https://flagcdn.com/ma.svg",
    },
    emoji: "🇲🇦",
    countryCallingCode: "+212",
    tax: 0.20,
  },
  {
    name: "Germany",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["German"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/de.png",
      svg: "https://flagcdn.com/de.svg",
    },
    emoji: "🇩🇪",
    countryCallingCode: "+49",
  },
  {
    name: "United States",
    currencies: [{ name: "United States dollar", symbol: "$" }],
    languages: ["English"],
    postalCode: { format: "#####-####", regex: "^\\d{5}(-\\d{4})?$" },
    flags: {
      png: "https://flagcdn.com/w320/us.png",
      svg: "https://flagcdn.com/us.svg",
    },
    emoji: "🇺🇸",
    countryCallingCode: "+1",
  },
  {
    name: "Bulgaria",
    currencies: [{ name: "Bulgarian lev", symbol: "лв" }],
    languages: ["Bulgarian"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/bg.png",
      svg: "https://flagcdn.com/bg.svg",
    },
    emoji: "🇧🇬",
    countryCallingCode: "+359",
    tax: 0.20,
  },
  {
    name: "Papua New Guinea",
    currencies: [{ name: "Papua New Guinean kina", symbol: "K" }],
    languages: ["English", "Hiri Motu", "Tok Pisin"],
    postalCode: { format: "###", regex: "^(\\d{3})$" },
    flags: {
      png: "https://flagcdn.com/w320/pg.png",
      svg: "https://flagcdn.com/pg.svg",
    },
    emoji: "🇵🇬",
    countryCallingCode: "+675",
  },
  {
    name: "Costa Rica",
    currencies: [{ name: "Costa Rican colón", symbol: "₡" }],
    languages: ["Spanish"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/cr.png",
      svg: "https://flagcdn.com/cr.svg",
    },
    emoji: "🇨🇷",
    countryCallingCode: "+506",
    tax: 0.13,
  },
  {
    name: "Ecuador",
    currencies: [{ name: "United States dollar", symbol: "$" }],
    languages: ["Spanish"],
    postalCode: { format: "@####@", regex: "^([a-zA-Z]\\d{4}[a-zA-Z])$" },
    flags: {
      png: "https://flagcdn.com/w320/ec.png",
      svg: "https://flagcdn.com/ec.svg",
    },
    emoji: "🇪🇨",
    countryCallingCode: "+593",
    tax: 0.12,
  },
  {
    name: "South Korea",
    currencies: [{ name: "South Korean won", symbol: "₩" }],
    languages: ["Korean"],
    postalCode: {
      format: "SEOUL ###-###",
      regex: "^(?:SEOUL)*(\\d{6})$",
    },
    flags: {
      png: "https://flagcdn.com/w320/kr.png",
      svg: "https://flagcdn.com/kr.svg",
    },
    emoji: "",
    countryCallingCode: "",
    tax: 0.10,
  },
  {
    name: "Puerto Rico",
    currencies: [{ name: "United States dollar", symbol: "$" }],
    languages: ["English", "Spanish"],
    postalCode: { format: "#####-####", regex: "^(\\d{9})$" },
    flags: {
      png: "https://flagcdn.com/w320/pr.png",
      svg: "https://flagcdn.com/pr.svg",
    },
    emoji: "🇵🇷",
    countryCallingCode: "+1 787",
    tax: 0.115
  },
  {
    name: "North Korea",
    currencies: [{ name: "North Korean won", symbol: "₩" }],
    languages: ["Korean"],
    postalCode: { format: "###-###", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/kp.png",
      svg: "https://flagcdn.com/kp.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Taiwan",
    currencies: [{ name: "New Taiwan dollar", symbol: "$" }],
    languages: ["Chinese"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/tw.png",
      svg: "https://flagcdn.com/tw.svg",
    },
    emoji: "🇹🇼",
    countryCallingCode: "+886",
    tax: 0.05,
  },
  {
    name: "Lithuania",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Lithuanian"],
    postalCode: { format: "LT-#####", regex: "^(?:LT)*(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/lt.png",
      svg: "https://flagcdn.com/lt.svg",
    },
    emoji: "🇱🇹",
    countryCallingCode: "+370",
  },
  {
    name: "Angola",
    currencies: [{ name: "Angolan kwanza", symbol: "Kz" }],
    languages: ["Portuguese"],
    flags: {
      png: "https://flagcdn.com/w320/ao.png",
      svg: "https://flagcdn.com/ao.svg",
    },
    emoji: "🇦🇴",
    countryCallingCode: "+244",
  },
  {
    name: "Tunisia",
    currencies: [{ name: "Tunisian dinar", symbol: "د.ت" }],
    languages: ["Arabic"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/tn.png",
      svg: "https://flagcdn.com/tn.svg",
    },
    emoji: "🇹🇳",
    countryCallingCode: "+216",
    tax: 0.19,
  },
  {
    name: "Ghana",
    currencies: [{ name: "Ghanaian cedi", symbol: "₵" }],
    languages: ["English"],
    flags: {
      png: "https://flagcdn.com/w320/gh.png",
      svg: "https://flagcdn.com/gh.svg",
    },
    emoji: "🇬🇭",
    countryCallingCode: "+233",
  },
  {
    name: "Iraq",
    currencies: [{ name: "Iraqi dinar", symbol: "ع.د" }],
    languages: ["Arabic", "Aramaic", "Sorani"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/iq.png",
      svg: "https://flagcdn.com/iq.svg",
    },
    emoji: "🇮🇶",
    countryCallingCode: "+964",
  },
  {
    name: "New Zealand",
    currencies: [{ name: "New Zealand dollar", symbol: "$" }],
    languages: ["English", "Māori", "New Zealand Sign Language"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/nz.png",
      svg: "https://flagcdn.com/nz.svg",
    },
    emoji: "🇳🇿",
    countryCallingCode: "+64",
    tax: 0.15,
  },
  {
    name: "Serbia",
    currencies: [{ name: "Serbian dinar", symbol: "дин." }],
    languages: ["Serbian"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/rs.png",
      svg: "https://flagcdn.com/rs.svg",
    },
    emoji: "🇷🇸",
    countryCallingCode: "+381",
  },
  {
    name: "Romania",
    currencies: [{ name: "Romanian leu", symbol: "lei" }],
    languages: ["Romanian"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/ro.png",
      svg: "https://flagcdn.com/ro.svg",
    },
    emoji: "🇷🇴",
    countryCallingCode: "+40",
  },
  {
    name: "Afghanistan",
    currencies: [{ name: "Afghan afghani", symbol: "؋" }],
    languages: ["Dari", "Pashto", "Turkmen"],
    flags: {
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
      svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    },
    emoji: "🇦🇫",
    countryCallingCode: "+93",
  },
  {
    name: "India",
    currencies: [{ name: "Indian rupee", symbol: "₹" }],
    languages: ["English", "Hindi", "Tamil"],
    postalCode: { format: "######", regex: "^(\\d{6})$" },
    flags: {
      png: "https://flagcdn.com/w320/in.png",
      svg: "https://flagcdn.com/in.svg",
    },
    emoji: "🇮🇳",
    countryCallingCode: "+91",
  },
  {
    name: "Denmark",
    currencies: [{ name: "Danish krone", symbol: "kr" }],
    languages: ["Danish"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/dk.png",
      svg: "https://flagcdn.com/dk.svg",
    },
    emoji: "🇩🇰",
    countryCallingCode: "+45",
  },
  {
    name: "Saudi Arabia",
    currencies: [{ name: "Saudi riyal", symbol: "ر.س" }],
    languages: ["Arabic"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/sa.png",
      svg: "https://flagcdn.com/sa.svg",
    },
    emoji: "🇸🇦",
    countryCallingCode: "+966",
    tax: 0.15,
  },
  {
    name: "Guinea-Bissau",
    currencies: [{ name: "West African CFA franc", symbol: "Fr" }],
    languages: ["Portuguese", "Upper Guinea Creole"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/gw.png",
      svg: "https://flagcdn.com/gw.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
  {
    name: "Norway",
    currencies: [{ name: "Norwegian krone", symbol: "kr" }],
    languages: ["Norwegian Nynorsk", "Norwegian Bokmål", "Sami"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/no.png",
      svg: "https://flagcdn.com/no.svg",
    },
    emoji: "🇳🇴",
    countryCallingCode: "+47",
  },
  {
    name: "Egypt",
    currencies: [{ name: "Egyptian pound", symbol: "£" }],
    languages: ["Arabic"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/eg.png",
      svg: "https://flagcdn.com/eg.svg",
    },
    emoji: "🇪🇬",
    countryCallingCode: "+20",
    tax: 0.14,
  },
  {
    name: "Cyprus",
    currencies: [{ name: "Euro", symbol: "€" }],
    languages: ["Greek", "Turkish"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/cy.png",
      svg: "https://flagcdn.com/cy.svg",
    },
    emoji: "🇨🇾",
    countryCallingCode: "+357",
  },
  {
    name: "Azerbaijan",
    currencies: [{ name: "Azerbaijani manat", symbol: "₼" }],
    languages: ["Azerbaijani", "Russian"],
    postalCode: { format: "AZ ####", regex: "^(?:AZ)*(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/az.png",
      svg: "https://flagcdn.com/az.svg",
    },
    emoji: "🇦🇿",
    countryCallingCode: "+994",
    tax: 0.18,
  },
  {
    name: "Zimbabwe",
    currencies: [{ name: "Zimbabwean dollar", symbol: "$" }],
    languages: [
      "Chibarwe",
      "English",
      "Kalanga",
      "Khoisan",
      "Ndau",
      "Northern Ndebele",
      "Chewa",
      "Shona",
      "Sotho",
      "Tonga",
      "Tswana",
      "Tsonga",
      "Venda",
      "Xhosa",
      "Zimbabwean Sign Language",
    ],
    flags: {
      png: "https://flagcdn.com/w320/zw.png",
      svg: "https://flagcdn.com/zw.svg",
    },
    emoji: "🇿🇼",
    countryCallingCode: "+263",
  },
  {
    name: "Mali",
    currencies: [{ name: "West African CFA franc", symbol: "Fr" }],
    languages: ["French"],
    flags: {
      png: "https://flagcdn.com/w320/ml.png",
      svg: "https://flagcdn.com/ml.svg",
    },
    emoji: "🇲🇱",
    countryCallingCode: "+223",
  },
  {
    name: "Mauritania",
    currencies: [{ name: "Mauritanian ouguiya", symbol: "UM" }],
    languages: ["Arabic"],
    flags: {
      png: "https://flagcdn.com/w320/mr.png",
      svg: "https://flagcdn.com/mr.svg",
    },
    emoji: "🇲🇷",
    countryCallingCode: "+222",
    tax: 0.16,
  },
  {
    name: "Ukraine",
    currencies: [{ name: "Ukrainian hryvnia", symbol: "₴" }],
    languages: ["Ukrainian"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/ua.png",
      svg: "https://flagcdn.com/ua.svg",
    },
    emoji: "🇺🇦",
    countryCallingCode: "+380",
    tax: 0.20,
  },
  {
    name: "Cameroon",
    currencies: [{ name: "Central African CFA franc", symbol: "Fr" }],
    languages: ["English", "French"],
    flags: {
      png: "https://flagcdn.com/w320/cm.png",
      svg: "https://flagcdn.com/cm.svg",
    },
    emoji: "🇨🇲",
    countryCallingCode: "+237",
  },
  {
    name: "Mozambique",
    currencies: [{ name: "Mozambican metical", symbol: "MT" }],
    languages: ["Portuguese"],
    postalCode: { format: "####", regex: "^(\\d{4})$" },
    flags: {
      png: "https://flagcdn.com/w320/mz.png",
      svg: "https://flagcdn.com/mz.svg",
    },
    emoji: "🇲🇿",
    countryCallingCode: "+258",
  },
  {
    name: "Namibia",
    currencies: [
      { name: "Namibian dollar", symbol: "$" },
      { name: "South African rand", symbol: "R" },
    ],
    languages: [
      "Afrikaans",
      "German",
      "English",
      "Herero",
      "Khoekhoe",
      "Kwangali",
      "Lozi",
      "Ndonga",
      "Tswana",
    ],
    flags: {
      png: "https://flagcdn.com/w320/na.png",
      svg: "https://flagcdn.com/na.svg",
    },
    emoji: "🇳🇦",
    countryCallingCode: "+264",
  },
  {
    name: "Gambia",
    currencies: [{ name: "dalasi", symbol: "D" }],
    languages: ["English"],
    flags: {
      png: "https://flagcdn.com/w320/gm.png",
      svg: "https://flagcdn.com/gm.svg",
    },
    emoji: "🇬🇲",
    countryCallingCode: "+220",
  },
  {
    name: "Laos",
    currencies: [{ name: "Lao kip", symbol: "₭" }],
    languages: ["Lao"],
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
    flags: {
      png: "https://flagcdn.com/w320/la.png",
      svg: "https://flagcdn.com/la.svg",
    },
    emoji: "",
    countryCallingCode: "",
  },
];

export default COUNTRIES;