
export const validateSum = (sum) => {
  let num = +sum
  if (!isNaN(num)) {
    return num
  }

  // Try comma as separator
  num = +sum.replace(",", ".")
  if (!isNaN(num)) {
    return num
  }

  return Number.NaN
}

export const isValidDate = (date) => {
  // Date should be in xx.xx.xxxx -format
  const parts = date.split(".")

  const validParts = (
      parts.length === 3 &&
      (parts[0] >= 1 && parts[0] <= 31) &&
      (parts[1] >= 1 && parts[1] <= 12) &&
      (parts[2] >= 2000 && parts[2] <= 3000)
  )

  if (!validParts) {
    return false
  }

  const d = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)

  return !isNaN(d)
}

export const sanitizeDate = (date) => {
  if (!isValidDate(date)) {
    return "VIRHEELLINEN PÄIVÄMÄÄRÄ";
  }

  const parts = date.split(".")

  const d = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
  return d.toLocaleDateString("fi-FI")
}

export const sanitizeSum = (sum) => {
  const s = validateSum(sum)

  return s.toFixed(2)
}