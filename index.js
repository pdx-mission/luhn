/**
 * Generates a check digit [0-9] based on string input
 * @param {string} input
 * @param {RegExp} [validCharacters]
 * @returns {number} a [0-9] integer
 */
module.exports = function luhnar(input, validCharacters = /([0-9]|[A-Z])/) {
  const cleanInput = input.toUpperCase().replace(/\s/g, "")
  const characters = cleanInput.split("").reverse()

  let sum = 0
  for (const [idx, char] of characters.entries()) {
    if (!char.match(validCharacters)) {
      throw `Invalid character: "${char}". Does not match ${validCharacters}`
    }

    let weight
    const digit = char.charCodeAt(0) - 48
    if (idx % 2 == 0) {
      weight = 2 * digit - Math.floor(digit / 5) * 9
    } else {
      weight = digit
    }
    sum += weight
  }

  sum = Math.abs(sum) + 10

  const digit = (10 - (sum % 10)) % 10
  return digit
}
