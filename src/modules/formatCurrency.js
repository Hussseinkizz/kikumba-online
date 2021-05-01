import CurrencyFormatter from 'currency-formatter'

export const formatCurrency = (amount) => 
  CurrencyFormatter.format(amount, {
    symbol: 'UGX',
    decimal: '.',
    thousand: ',',
    precision: 0,
    format: '%s %v' // %s is the symbol and %v is the value
  })