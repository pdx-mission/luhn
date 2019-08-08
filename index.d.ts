declare module "@prm/luhn" {
  export type CheckDigit = 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9

  export function luhn(input: string, appendDigit = false, validCharacters: RegExp = /([0-9]|[A-Z])/): CheckDigit
}
