import { isSquare } from "./aSquareOfSquares.js";
import { stairCase } from "./buildAStairCase.js";
import { buildingHeights } from "./cityPlanner.js";
import { highAndLow } from "./highestAndLowest.js";
import { isPrime } from "./isANumberPrime.js";
import { binaryArrayToNumber } from "./onesAndZeros.js";
import { rgb } from "./RGBToHexConversion.js";
import { solution } from "./SplitStrings.js";
import { squareDigits } from "./squareEveryDigit.js";
import { spinWords } from "./StopgninnipSMysdroW.js";
import { sum } from "./sumOfMultiples.js";
import { uniqueInOrder } from "./uniqueInOrder.js";

let squared = squareDigits(3212)

let highAndLowReturn = highAndLow("1 2 -3 4 5")

let squareRoot = isSquare(-1)
console.log(squareRoot)

let unique = uniqueInOrder([1,2,2,3,3])

let binaryNumber = binaryArrayToNumber([0, 0, 1, 0])
console.log(binaryNumber)

let totalSum = sum(1000)

let stairs = stairCase(6)

let city = buildingHeights([ 1150, 3023, 2020, 3023, 3023 ])
console.log(isPrime(73))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(0))
console.log(isPrime(9))
console.log(spinWords("This is another test"))
let result = solution('abcde')
let hex = rgb(255, 255, 255)


