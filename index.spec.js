const { luhn } = require("./index")

const testCases = [
  ["12", 5],
  ["123", 0],
  ["1245496594", 3],
  ["TEST", 4],
  ["Test123", 7],
  ["00012", 5],
  ["9", 1],
  ["999", 3],
  ["999999", 6],
  ["CHECKDIGIT", 7],
  ["EK8XO5V9T8", 2],
  ["Y9IDV90NVK", 1],
  ["RWRGBM8C5S", 5],
  ["OBYY3LXR79", 5],
  ["Z2N9Z3F0K3", 2],
  ["ROBL3MPLSE", 9],
  ["VQWEWFNY8U", 9],
  ["45TPECUWKJ", 1],
  ["6KWKDFD79A", 8],
  ["HXNPKGY4EX", 3],
  ["91BT", 2],
  ["1018606 BB1 A GE", 8],
  ["3 6TT A GE", 7],
  ["3 743 A GE", 0],
  ["3 791 A GE", 1],
  ["3 793 A GE", 9],
  ["3 842 A GE", 0],
  ["3 891 A GE", 0],
  ["7 711 A GE", 9],
  ["7 793 A GE", 0],
  ["7 842 A GE", 1],
  ["7 913 A GE", 5],
  ["9 6A3 A GE", 9],
]

describe.each(testCases)('luhn("%s") → %i', (input, expected) => {
  it("ignores whitespace", () => {
    const regular = luhn(input)
    const noSpaces = luhn(input.replace(/\s/g, ""))
    expect(regular).toBe(noSpaces)
  })

  it("calculates expected digit", () => {
    expect(luhn(input)).toBe(expected)
  })
})
