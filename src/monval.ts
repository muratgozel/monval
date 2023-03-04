import {currencies} from "@/currencies"
import type {Currency, ExchangeRatesObject, Money} from 'monval'

export class Monval {
    currencies: Currency[] = currencies
    defaultCurrency: Currency = 'EUR'
    exchangeRates: ExchangeRatesObject = {}
    exchangeRatesBaseCurrency: Currency = 'EUR'
    currencySymbolUnicodeMap: {[index: string]: string} = {
        TRY: '20BA', USD: '0024', EUR: '20ac', GBP: '00A3',
        JPY: '00A5', AMD: '058F', AFN: '060B', THB: '0E3F',
        SVC: '20A1', CRC: '20A1', INR: '20B9', BTC: '20BF'
    }
    decilen = 2
    reNumberWithCurrency = /[a-zA-Z]{3}\s[0-9]+((.|,)[0-9]+)?((.|,)[0-9]+)?/
    reOnlyNumbers = /^[0-9]+((.|,)[0-9]+)?((.|,)[0-9]+)?/
    reRate = /%[0-9]+((.|,)[0-9]+)?/

    create(input: string | number, currency?: Currency) {
        const cur = currency || this.defaultCurrency

        if (this.isNumber(input)) {
            const money: Money = {currency: cur, number: input}
            return new Account(this, money)
        }

        if (this.reOnlyNumbers.test(input)) {
            const money: Money = {currency: cur, number: parseFloat(input)}
            return new Account(this, money)
        }

        if (this.reNumberWithCurrency.test(input)) {
            const [currency, num] = input.split(' ') as [Currency, string]
            const money: Money = {currency: currency, number: parseFloat(num)}
            return new Account(this, money)
        }

        throw new Error(`Bad input. Valid kinds of input are create("USD 1.23"), create("1.23", "EUR") or create("1.23").`)
    }

    exchange(money: Money, target: Currency) {
        if (!Object.hasOwn(this.exchangeRates, this.exchangeRatesBaseCurrency)) {
            throw new Error(`Exchange rates not found.`)
        }

        if (!Object.hasOwn(this.exchangeRates, money.currency)) {
            throw new Error(`Exchange rate for ${money.currency} not found.`)
        }

        if (!Object.hasOwn(this.exchangeRates, target)) {
            throw new Error(`Exchange rate for ${target} not found.`)
        }

        money.number = money.number * ((this.exchangeRates[target] || 0) / (this.exchangeRates[money.currency] || 1))
        money.currency = target

        return money
    }

    getCurrencySymbol(currency: Currency): string {
        if (Object.hasOwn(this.currencySymbolUnicodeMap, currency)) {
            return String.fromCharCode(parseInt(this.currencySymbolUnicodeMap[currency] || '', 16))
        }
        return currency
    }

    round(n: number, d: number, algorithm = 'GAUSSIAN') {
        switch (algorithm) {
            case 'GAUSSIAN':
                const x = n * Math.pow(10, d)
                const r = Math.round(x)
                const br = Math.abs(x) % 1 === 0.5 ? (r % 2 === 0 ? r : r-1) : r
                return br / Math.pow(10, d)
            default:
                throw new Error('Unsupported rounding algorithm.')
        }
    }

    isRate(v: unknown): v is string {
        return typeof v === 'string' && this.reRate.test(v)
    }

    isNumber(v: unknown): v is number {
        return typeof v === 'number' && Number.isFinite(v)
    }
}

export type MonvalInstance = Monval

export class Account {
    monval: MonvalInstance
    money: Money

    constructor(monval: MonvalInstance, money: Money) {
        this.monval = monval
        this.money = money
    }

    add(numberOrRate: number | string, currency?: Currency): this {
        const cur = currency || this.money.currency

        if (this.monval.isNumber(numberOrRate)) {
            const money: Money = {number: numberOrRate, currency: cur}
            return this.addMoney(money)
        }

        if (this.monval.isRate(numberOrRate)) {
            return this.addRate(parseFloat(numberOrRate.slice(1)))
        }

        if (this.monval.reOnlyNumbers.test(numberOrRate)) {
            const money: Money = {number: numberOrRate, currency: cur}
            return this.addMoney(money)
        }

        throw new Error(`Bad input. You should specify either number or rate such as "%1.23"`)
    }

    addRate(rate: number): this {
        this.money.number = this.money.number + (this.money.number * rate / 100)
        return this
    }

    addMoney(money: Money): this {
        if (this.money.currency !== money.currency) {
            const _money = this.monval.exchange(money, this.money.currency)
            this.money.number += _money.number
            return this
        }

        this.money.number += money.number

        return this
    }

    subtract(numberOrRate: number | string, currency?: Currency): this {
        const cur = currency || this.money.currency

        if (this.monval.isNumber(numberOrRate)) {
            const money: Money = {number: numberOrRate, currency: cur}
            return this.subtractMoney(money)
        }

        if (this.monval.isRate(numberOrRate)) {
            return this.subtractRate(parseFloat(numberOrRate.slice(1)))
        }

        if (this.monval.reOnlyNumbers.test(numberOrRate)) {
            const money: Money = {number: numberOrRate, currency: cur}
            return this.subtractMoney(money)
        }

        throw new Error(`Bad input. You should specify either number or rate such as "%1.23"`)
    }

    subtractRate(rate: number): this {
        this.money.number = this.money.number - (this.money.number * rate / 100)
        return this
    }

    subtractMoney(money: Money): this {
        if (this.money.currency !== money.currency) {
            const _money = this.monval.exchange(money, this.money.currency)
            this.money.number -= _money.number
            return this
        }

        this.money.number -= money.number

        return this
    }

    exchange(target: Currency): this {
        if (!Object.hasOwn(this.monval.exchangeRates, this.monval.exchangeRatesBaseCurrency)) {
            throw new Error(`Exchange rates not found.`)
        }

        if (!Object.hasOwn(this.monval.exchangeRates, target)) {
            throw new Error(`Exchange rate for ${target} not found.`)
        }

        this.money.number = this.money.number * ((this.monval.exchangeRates[target] || 0) / (this.monval.exchangeRates[this.money.currency] || 1))
        this.money.currency = target

        return this
    }

    toFixed(decilen?: number): string {
        const _decilen = decilen || this.monval.decilen
        const str = this.monval.round(this.money.number, _decilen).toString()

        if (_decilen < 1) {
            return str
        }

        if (!str.includes('.')) {
            return str + '.' + Array.apply(null, Array(_decilen)).map(Number.prototype.valueOf, 0).join('')
        }

        const existingDecimalsLen = (str.split('.')[1] || []).length
        if (_decilen > existingDecimalsLen) {
            return str + Array.apply(null, Array(_decilen - existingDecimalsLen)).map(Number.prototype.valueOf, 0).join('')
        }

        return str
    }

    toFloat() {
        return this.money.number
    }

    toObject() {
        return this.money
    }

    pretty(decilen?: number) {
        const _decilen = decilen || this.monval.decilen
        return this.monval.getCurrencySymbol(this.money.currency) + ' ' + this.toFixed(_decilen)
    }
}

export type AccountInstance = Account

export const monval = new Monval()