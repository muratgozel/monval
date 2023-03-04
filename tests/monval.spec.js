import {describe, expect, test} from '@jest/globals'
import {monval, Monval, Account, currencies} from '../build'
import sampleExchangeRates from './sampleExchangeRates.json' assert {type: 'json'}

test('creates account object from string and number based inputs', () => {
    const account = monval.create('EUR 1.23')
    expect(account).toBeInstanceOf(Account)
    expect(account.money).toEqual({number: 1.23, currency: 'EUR'})
    expect(monval.create('TRY 899.234567').money).toEqual({number: 899.234567, currency: 'TRY'})
    expect(monval.create(1.23, 'USD').money).toEqual({number: 1.23, currency: 'USD'})

    monval.defaultCurrency = 'USD'

    expect(monval.create('1.23').money).toEqual({number: 1.23, currency: 'USD'})
})

test('adds money to the account including in different currencies', () => {
    const account = monval.create('EUR 1.23')
    account.add(1.23)
    expect(account.money).toEqual({number: 2.46, currency: 'EUR'})
    account.add(1.23, 'EUR')
    expect(account.money).toEqual({number: 3.69, currency: 'EUR'})

    monval.exchangeRatesBaseCurrency = 'USD'
    monval.exchangeRates = sampleExchangeRates.rates

    account.add(1000, 'TRY')
    expect(account.money.number.toFixed(2)).toBe('154.91')
    expect(account.money.currency).toBe('EUR')
})

test('increases account\'s amount by rate', () => {
    const account = monval.create(10, 'USD')
    account.add('%10')
    expect(account.money).toEqual({number: 11, currency: 'USD'})

    account.add('%10')
    expect(account.money).toEqual({number: 12.1, currency: 'USD'})
})

test('subtracts money from account including in different currencies', () => {
    const account = monval.create(123.45, 'EUR')
    account.subtract(0.45)
    expect(account.money).toEqual({number: 123, currency: 'EUR'})
    account.subtract(12.55, 'EUR')
    expect(account.money).toEqual({number: 110.45, currency: 'EUR'})

    monval.exchangeRatesBaseCurrency = 'USD'
    monval.exchangeRates = sampleExchangeRates.rates

    account.subtract(1000, 'TRY')
    expect(account.money.number.toFixed(2)).toBe('-40.77')
    expect(account.money.currency).toBe('EUR')
})

test('decreases account\'s amount by rate', () => {
    const account = monval.create(10, 'USD')
    account.subtract('%10')
    expect(account.money).toEqual({number: 9, currency: 'USD'})

    account.subtract('%10')
    expect(account.money).toEqual({number: 8.1, currency: 'USD'})
})

test('converts money in the account to another currency', () => {
    const account = monval.create(123.45, 'EUR')
    account.exchange('TRY')
    expect(account.money.number.toFixed(2)).toBe('816.35')
    expect(account.money.currency).toBe('TRY')
})

test('rounds money in the account according to gaussian algorithm', () => {
    const account = monval.create(123.4567, 'EUR')
    expect(account.toFixed(2)).toBe('123.46')
    account.add(0.38)
    expect(account.toFixed(2)).toBe('123.84')
})

test('pretty prints the money with currency symbol and fixed decimals', () => {
    expect(monval.create(123.4567, 'EUR').pretty()).toBe('€ 123.46')
    expect(monval.create(123.4567, 'EUR').pretty(4)).toBe('€ 123.4567')
    expect(monval.create('USD 99.99' ).pretty()).toBe('$ 99.99')
    expect(monval.create('USD 99.99' ).pretty(3)).toBe('$ 99.990')
    expect(monval.create('AED 456' ).pretty()).toBe('AED 456.00')
})