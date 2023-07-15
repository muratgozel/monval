declare module 'monval' {
    const currencyCodes = [
        'AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND',
        'BOB','BRL','BSD','BTC','BTN','BWP','BYN','BZD','CAD','CDF','CHF','CLF','CLP','CNH','CNY','COP','CRC','CUC',
        'CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GGP','GHS','GIP',
        'GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','IMP','INR','IQD','IRR','ISK','JEP','JMD',
        'JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD',
        'MDL','MGA','MKD','MMK','MNT','MOP','MRU','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR',
        'NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG',
        'SEK','SGD','SHP','SLL','SOS','SRD','SSP','STD','STN','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY',
        'TTD','TWD','TZS','UAH','UGX','USD','UYU','UZS','VEF','VES','VND','VUV','WST','XAF','XAG','XAU','XCD','XDR',
        'XOF','XPD','XPF','XPT','YER','ZAR','ZMW','ZWL'
    ] as const

    export type CurrencyCode = typeof currencyCodes[number]

    export const currencyCodes: CurrencyCode[]

    export type ExchangeRatesObject = {
        [k in CurrencyCode]?: number
    }

    export interface Money extends object {
        currency: CurrencyCode
        number: number
    }

    export interface Account {
        monval: Monval
        money: Money
        new(monval: Monval, money: Money): void
        add(numberOrRate: number | string, currency?: CurrencyCode): this
        addMoney(money: Money): this
        addRate(rate: number): this
        subtract(numberOrRate: number | string, currency?: CurrencyCode): this
        subtractMoney(money: Money): this
        subtractRate(rate: number): this
        exchange(target: CurrencyCode): this
        toFixed(decilen?: number): string
        toFloat(): number
        toObject(): Money
        pretty(decilen?: number): string
    }

    export interface Monval {
        reRate: RegExp
        reOnlyNumbers: RegExp
        reNumberWithCurrency: RegExp
        decilen: number
        currencySymbolUnicodeMap: {[index: string]: string}
        exchangeRatesBaseCurrency: CurrencyCode
        exchangeRates: ExchangeRatesObject
        defaultCurrency: CurrencyCode
        currencyCodes: CurrencyCode[]
        isValidInput(input: string | number | Money): boolean
        create(input: string | number | Money, currency?: CurrencyCode): Account
        exchange(money: Money, target: CurrencyCode): Money
        getCurrencySymbol(currency: CurrencyCode): string
        round(n: number, d: number, algorithm = 'GAUSSIAN'): number
        isRate(v: unknown): v is string
        isNumber(v: unknown): v is number
        isCurrency(v: unknown): v is CurrencyCode
        isObject(v: unknown): v is object
        isMoney(v: unknown): v is Money
    }

    export const monval: Monval
}