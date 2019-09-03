var IBAN = require('iban');

export const validateIBAN = (account) => {
  return IBAN.isValid(account)
}

export const sanitizeIBAN = (account) => {
  if (!validateIBAN(account)) {
    return "VIRHEELLINEN TILINUMERO";
  }

  return IBAN.printFormat(account);
}