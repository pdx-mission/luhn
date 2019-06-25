/**
 * Generates a check digit [0-9] based on string input
 * @param {string} input
 * @param {RegExp} [validCharacters]
 * @returns {number} a [0-9] integer
 */
module.exports = function luhnar(input, validCharacters = /([0-9]|[A-Z])/) {
  // Remove spaces and make all letters uppercase
  const cleanInput = input.toUpperCase().replace(/\s/g, "")

  // Check validity of characters
  cleanInput.split("").forEach(char => {
    if (!char.match(validCharacters)) {
      throw new Error(`Invalid character: "${char}". Does not match ${validCharacters}`)
    }
  })

  // Reverse the string
  const charIterator = cleanInput.split("").reverse().entries()

  // Initialize a sum of values
  let sum = 0

  for (const [idx, char] of charIterator) {
    // Store ASCII code for character, subtract 48
    const digit = char.charCodeAt(0) - 48

    // Calculate weight based on even/odd index
    let weight
    const base = 0 // 0, since Javascript has "0 based" indexing
    if (idx % 2 == base) {
      weight = 2 * digit - Math.floor(digit / 5) * 9
    } else {
      weight = digit
    }

    // Add weight to sum of values
    sum += weight
  }

  // Calculate check digit
  sum = Math.abs(sum) + 10
  return (10 - (sum % 10)) % 10
}
