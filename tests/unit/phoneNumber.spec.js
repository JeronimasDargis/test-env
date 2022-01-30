const { checkIfStringIsPhoneNumber } = require('../../utilities/phoneNumber')

describe('phoneNumber utilities -> checkIfStringIsPhoneNumber', () => {
  it('if passed value is a link, utility should return false', () => {
    expect(checkIfStringIsPhoneNumber('https://www.google.com')).toEqual(false)
  })
  it('if passed value is a string, utility should return false', () => {
    expect(checkIfStringIsPhoneNumber('hello')).toEqual(false)
  })
  it('if passed value is an empty string, utility should return false', () => {
    expect(checkIfStringIsPhoneNumber('')).toEqual(false)
  })
  it('if passed value is a null, utility should return false', () => {
    expect(checkIfStringIsPhoneNumber(null)).toEqual(false)
  })

  it('if passed value is a phone number with a format of 8612345678, utility should return true', () => {
    expect(checkIfStringIsPhoneNumber('8612345678')).toEqual(true)
  })
  it('if passed value is a phone number with a format of +37012345678, utility should return true', () => {
    expect(checkIfStringIsPhoneNumber('+37012345678')).toEqual(true)
  })
  it('if passed value is a phone number with a format of (123) 456-7890, utility should return true', () => {
    expect(checkIfStringIsPhoneNumber('(123) 456-7890')).toEqual(true)
  })
  it('if passed value is a phone number with a format of +370 123 45 678, utility should return true', () => {
    expect(checkIfStringIsPhoneNumber('+370 123 45 678')).toEqual(true)
  })
  it('if passed value is a phone number with a format of (85) 123 4567, utility should return true', () => {
    expect(checkIfStringIsPhoneNumber('(85) 123 4567')).toEqual(true)
  })
  it('if passed value is a phone number with a format of 8 123 45 678, utility should return true', () => {
    expect(checkIfStringIsPhoneNumber('8 123 45 678')).toEqual(true)
  })
})
