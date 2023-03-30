declare module 'monval' {
    export type CurrencyCode = import('../src/currencies').CurrencyCode

    export const currencyCodes: CurrencyCode[]

    export type ExchangeRatesObject = {
        [k in CurrencyCode]?: number
    }

    export interface Money extends object {
        currency: CurrencyCode
        number: number
    }

    export type Account = import('../src/monval').Account
    export type Monval = import('../src/monval').Monval

    export const monval: Monval
}