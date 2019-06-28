# @prm/luhn
A zero-dependency Node.js module for calculating a numeric check digit for alphanumeric strings. The exported `luhn()` function uses the [Luhn algorithm ](https://en.wikipedia.org/wiki/Luhn_algorithm) to calculate a check digit based on an input string.

### Usage
Node.js
```js
const { luhn } = require("@prm/luhn")

luhn("Z2N 9Z3 F0 K3") // returns 2
```

SQL
```sql
SELECT luhn("1245496594") -- returns 3
```

### Testing
```sh
npm run test
```
