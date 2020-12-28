var Monval=function(e,n){"use strict";var i=[{name:"Afgaanse afgani",code:"AFN",num:"971",deciLen:2},{name:"Euro",code:"EUR",num:"978",deciLen:2},{name:"ཨཱལ་ཇི་རི་ཡ་གི་དངུལ་ ཌའི་ནར",code:"DZD",num:"012",deciLen:2},{name:"US Dollar",code:"USD",num:"840",deciLen:2},{name:"East Caribbean Dollar",code:"XCD",num:"951",deciLen:2},{name:"بيزو أرجنتيني",code:"ARS",num:"032",deciLen:2},{name:"የአርመን ድራም",code:"AMD",num:"051",deciLen:2},{name:"Australian Dollar",code:"AUD",num:"036",deciLen:2},{name:"Azərbaycan Manatı",code:"AZN",num:"944",deciLen:2},{name:"Bahamski dolar",code:"BSD",num:"044",deciLen:2},{name:"West African CFA Franc",code:"XOF",num:"952",deciLen:0},{code:"BMD",num:"060",deciLen:2},{code:"BOB",num:"068",deciLen:2},{name:"Norwegian Krone",code:"NOK",num:"578",deciLen:2},{name:"real Brazil",code:"BRL",num:"986",deciLen:2},{name:"ব্রুনেই ডলার",code:"BND",num:"096",deciLen:2},{name:"Български лев",code:"BGN",num:"975",deciLen:2},{name:"Central African CFA Franc",code:"XAF",num:"950",deciLen:0},{name:"dòlar canadenc",code:"CAD",num:"124",deciLen:2},{name:"кайман доллары",code:"KYD",num:"136",deciLen:2},{name:"ហ្វ្រង់​កូម័រ",code:"KMF",num:"174",deciLen:0},{name:"New Zealand Dollar",code:"NZD",num:"554",deciLen:2},{name:"hrvatska kuna",code:"HRK",num:"191",deciLen:2},{name:"Netherlands Antillean Guilder",code:"ANG",num:"532",deciLen:2},{name:"Danish Krone",code:"DKK",num:"208",deciLen:2},{name:"Etioopia birr",code:"ETB",num:"230",deciLen:2},{name:"CFP Franc",code:"XPF",num:"953",deciLen:0},{name:"British Pound",code:"GBP",num:"826",deciLen:2},{name:"magyar forint",code:"HUF",num:"348",deciLen:2},{name:"íslensk króna",code:"ISK",num:"352",deciLen:0},{name:"Rupiah Indonesia",code:"IDR",num:"360",deciLen:2},{name:"Israeli New Shekel",code:"ILS",num:"376",deciLen:2},{code:"KWD",num:"414",deciLen:3},{name:"Libanesescht Pond",code:"LBP",num:"422",deciLen:2},{name:"South African Rand",code:"ZAR",num:"710",deciLen:2},{name:"Swiss Franc",code:"CHF",num:"756",deciLen:2},{name:"Македонски денар",code:"MKD",num:"807",deciLen:2},{name:"Ariary",code:"MGA",num:"969",deciLen:2},{name:"မလေးရှား ရင်းဂစ်",code:"MYR",num:"458",deciLen:2},{name:"मॉरिटानियन ओगिया",code:"MRU",num:"929",deciLen:2},{name:"Монгол төгрөг",code:"MNT",num:"496",deciLen:2},{name:"Moroccan Dirham",code:"MAD",num:"504",deciLen:2},{code:"OMR",num:"512",deciLen:3},{name:"ਪਨਾਮੇਨੀਅਨ ਬਾਲਬੋਆ",code:"PAB",num:"590",deciLen:2},{name:"złoty polski",code:"PLN",num:"985",deciLen:2},{name:"leu românesc",code:"RON",num:"946",deciLen:2},{name:"российский рубль",code:"RUB",num:"643",deciLen:2},{name:null,code:"RWF",num:"646",deciLen:0},{code:"SAR",num:"682",deciLen:2},{name:"sieraleonski leone",code:"SLL",num:"694",deciLen:2},{code:"SGD",num:"702",deciLen:2},{name:"Shilingka Soomaaliya",code:"SOS",num:"706",deciLen:2},{name:"سوڊاني پائونڊ",code:"SDG",num:"938",deciLen:2},{name:"Суринамски долар",code:"SRD",num:"968",deciLen:2},{name:"ruoŧŧa kruvdno",code:"SEK",num:"752",deciLen:2},{name:"บาท",code:"THB",num:"764",deciLen:2},{name:"Paʻanga fakatonga",code:"TOP",num:"776",deciLen:2},{code:"TTD",num:"780",deciLen:2},{name:"Türk Lirası",code:"TRY",num:"949",deciLen:2},{name:"ئۇگاندا شىللىڭى",code:"UGX",num:"800",deciLen:0},{name:"O‘zbekiston so‘mi",code:"UZS",num:"860",deciLen:2},{name:"Unknown Currency",code:"XXX",num:"999",deciLen:null}];function r(e,i,r){var c=this;this.monval=e,this.value=i,this.currencyCode=r;var a=this.monval.currencyData.filter((function(e){return e.code==c.currencyCode}))[0];this.number=a.num,this.decilen=n.typekit.isNumber(this.monval.config.decilen)?this.monval.config.decilen:a.deciLen,this.nativeName=a.name}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.exchangeRates=null,this.readConfig(e)}return r.prototype.add=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;i=n.typekit.isEmpty(i)?this.currencyCode:i;var r=n.typekit.isString(e)&&-1!==e.indexOf("%");if(r){var c=parseFloat(e.replace("%",""));if(n.typekit.isNan(c))throw new Error("Invalid rate.");this.value=this.value+this.value*c/100}else{var a=this.monval.create(e,i);a.currencyCode==this.currencyCode||a.exchange(this.currencyCode),this.value+=a.value}return this},r.prototype.subtract=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;i=n.typekit.isEmpty(i)?this.currencyCode:i;var r=n.typekit.isString(e)&&-1!==e.indexOf("%");if(r){var c=parseFloat(e.replace("%",""));if(n.typekit.isNan(c))throw new Error("Invalid rate.");this.value=this.value-this.value*c/100}else{var a=this.monval.create(e,i);a.currencyCode==this.currencyCode||a.exchange(this.currencyCode),this.value-=a.value}return this},r.prototype.exchange=function(e){return e=e.toUpperCase(),this.value=this.exchangePure(this.value,e),this.currencyCode=e,this},r.prototype.exchangePure=function(e,i){if(!n.typekit.isObject(this.monval.exchangeRates))throw new Error("No exchange rate data found.");if(!this.monval.exchangeRates.hasOwnProperty(i))throw new Error('No exchange rate found for "'+i+'"');if(!this.monval.exchangeRates.hasOwnProperty(this.currencyCode))throw new Error('No exchange rate found for "'+this.currencyCode+'"');return e*(this.monval.exchangeRates[i]/this.monval.exchangeRates[this.currencyCode])},r.prototype.toFixed=function(){return this.monval.round(this.value,this.decilen).toString()},r.prototype.toFloat=function(){return this.value},r.prototype.pretty=function(){return(this.monval.currencySymbolUnicodeMap.hasOwnProperty(this.currencyCode)?String.fromCharCode(parseInt(this.monval.currencySymbolUnicodeMap[this.currencyCode],16)):this.currencyCode)+" "+this.toFixed()},r.prototype.pad=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",i=this.toFixed();i.length<e;)i=n+i;return i},c.prototype.currencySymbolUnicodeMap={TRY:"20BA",USD:"0024",EUR:"20ac",GBP:"00A3",JPY:"00A5",AMD:"058F",AFN:"060B",THB:"0E3F",SVC:"20A1",CRC:"20A1",INR:"20B9",BTC:"20BF"},c.prototype.currencyData=i,c.prototype.updateExchangeRates=function(e){this.exchangeRates=e},c.prototype.readConfig=function(e){var i=this,r={singleCurrency:!1,decilen:null};if((this.config=n.typekit.isObject(e)?Object.assign({},r,e):r,!1!==this.config.singleCurrency)&&(this.config.singleCurrency=this.config.singleCurrency.toUpperCase(),!this.currencyData.filter((function(e){return e.code==i.config.singleCurrency}))))throw new Error("Invalid singleCurrency. Please provide a valid 3-letter currency code.");if(!n.typekit.isNull(this.config.decilen)&&!n.typekit.isNumber(this.config.decilen))throw new Error("Invalid decilen. Please provide a number.")},c.prototype.create=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(n.typekit.isString(e)&&(e=parseFloat(e)),n.typekit.isNan(e)||!n.typekit.isNumber(e))throw new Error("The value should be a number or float parsable string.");if(!1!==this.config.singleCurrency)i=this.config.singleCurrency;else{var c=this.currencyData.filter((function(e){return e.code==i}));if(!c)throw new Error("Invalid currencyCode. Please provide a valid 3-letter currency code.")}return new r(this,e,i.toUpperCase())},c.prototype.round=function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GAUSSIAN";switch(i){case"GAUSSIAN":var r=e*Math.pow(10,n),c=Math.round(r),a=Math.abs(r)%1==.5?c%2==0?c:c-1:c;return a/Math.pow(10,n);default:throw new Error("Unsupported rounding algorithm.")}},e.Monval=c,Object.defineProperty(e,"__esModule",{value:!0}),e}({},Basekits);
