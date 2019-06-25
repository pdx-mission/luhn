/**
 * Generates a check digit [0-9] based on string input
 * @param {string} input
 * @returns {number} a [0-9] integer
 */
module.exports = function luhnar(input) {
  const validChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVYWXZ"
  const cleanInput = input.toUpperCase().replace(/\s/g, "")

  let sum = 0
  for (var i = 0; i < cleanInput.length; i++) {
    const ch = cleanInput.charAt(cleanInput.length - i - 1)
    if (validChars.indexOf(ch) < 0) {
      throw "Invalid character(s) found!"
    }
    const digit = ch.charCodeAt(0) - 48
    let weight;
    if (i % 2 == 0) {
      weight = (2 * digit) - Math.floor(digit / 5) * 9
    } else {
      weight = digit
    }
    sum += weight
  }
  sum = Math.abs(sum) + 10

  const digit = (10 - (sum % 10)) % 10
  return digit
}
