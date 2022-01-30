function checkIfStringIsPhoneNumber(valueToCheck) {
  if (
    valueToCheck &&
    // eslint-disable-next-line no-useless-escape
    valueToCheck.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)
  ) {
    return true
  } else {
    return false
  }
}

module.exports = { checkIfStringIsPhoneNumber }
