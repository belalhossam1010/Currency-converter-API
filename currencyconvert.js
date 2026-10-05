let fromcurrency = document.querySelector("#from-currency");
let tocurrency = document.querySelector("#to-currency");
let fromflag = document.querySelector("#from-flag");
let toflag = document.querySelector("#to-flag");
let amount = document.querySelector(".amount");
let display_value = document.querySelector(".displayvalue");
let change = document.querySelector(".change");
let fromCode = "AED";
let toCode = "AED";
let button = document.querySelector(".btn");

const COUNTRY_NAMES = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Dutch Guilders",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Bruneian Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula",
  BZD: "Belizean Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLF: "Chilean Unit of Account UF",
  CLP: "Chilean Peso",
  CNH: "Chinese Yuan Offshore",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Republic Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanaese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Krona",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Caymanian Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Basotho Maloti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanma Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Arabian Riyal",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SYP: "Syrian Pound",
  SZL: "Swazi Emalangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Pa'anga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TWD: "Taiwan New Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistan Som",
  VND: "Vietnamese Dong",
  VUV: "Ni-Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "CFA Franc BEAC",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "CFA Franc BCEAO",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
};

//drop down menu

Object.entries(COUNTRY_NAMES).map(([code, name]) => {
  let countrycode = code.slice(0, 2);
  const flagUrl = `https://flagsapi.com/${countrycode}/shiny/32.png`;
  const option = `<option value="${code}" data-flag="${flagUrl}">${code} - ${name}</option>`;
  countrycode = code;
  fromcurrency.innerHTML += option;
  tocurrency.innerHTML += option;
});
function updateFlag(selectElem, flagContainer) {
  const selectedOption = selectElem.options[selectElem.selectedIndex];
  const flagUrl = selectedOption.dataset.flag;
  flagContainer.innerHTML = `<img src="${flagUrl}" alt="Flag" />`;
}
updateFlag(fromcurrency, fromflag);
updateFlag(tocurrency, toflag);
fromcurrency.addEventListener("change", (e) => {
  updateFlag(fromcurrency, fromflag);
  fromCode = e.target.value;
});
tocurrency.addEventListener("change", (e) => {
  updateFlag(tocurrency, toflag);
  toCode = e.target.value;
});
//drop down end
amount.addEventListener("blur", () => {
  if (
    amount.value.trim() === "" ||
    isNaN(amount.value) ||
    parseFloat(amount.value) <= 0
  ) {
    amount.value = "1";
  }
});
amount.addEventListener("focus", () => {
  amount.select();
});

button.addEventListener("click", (event) => {
  mainfunction();
});

amount.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    mainfunction();
  }
});

change.addEventListener("click", () => {
  let temp = fromCode;
  fromCode = toCode;
  toCode = temp;
  fromcurrency.value = fromCode;
  tocurrency.value = toCode;
  updateFlag(tocurrency, toflag);
  updateFlag(fromcurrency, fromflag);
  mainfunction();
});
function checkinput() {
  if (isNaN(amount.value) || amount.value <= 0) {
    display_value.innerHTML = `<h1 class="text-light">Invalid value</h1>`;
    return false;
  } else {
    return true;
  }
}
function mainfunction() {
  if (
    amount.value.trim() === "" ||
    parseFloat(amount.value) <= 0 ||
    isNaN(amount.value)
  ) {
    amount.value = "1";
  }
  if (checkinput()) {
    fetch(
      "https://v6.exchangerate-api.com/v6/e096e7e881944ab6c1277d9d/latest/USD",
    )
      .then((response) => response.json())
      .then((data) => {
        let fromconv = data.conversion_rates[fromCode];
        let toconv = data.conversion_rates[toCode];
        const valueusd = amount.value / fromconv;
        const final = (valueusd * toconv).toFixed(2);
        display_value.innerHTML = `<h1 class="text-light text-center m-0">${amount.value} ${fromCode} = ${final} ${toCode}</h1>`;
        amount.value = "";
      })
      .catch((error) => {
        display_value.innerHTML = `<h1>${error.message}</h1>`;
      });
  }
}
