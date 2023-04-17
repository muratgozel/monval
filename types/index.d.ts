declare module 'monval' {
    export type {CurrencyCode} from '../src/currencies'

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