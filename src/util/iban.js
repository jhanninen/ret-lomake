var IBAN = require('iban');

export const validateIBAN = (account) => {
  return IBAN.isValid(account)
}