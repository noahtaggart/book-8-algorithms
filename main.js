import { stairCase } from "./buildAStairCase.js";
import { buildingHeights } from "./cityPlanner.js";
import { binaryArrayToNumber } from "./onesAndZeros.js";
import { squareDigits } from "./squareEveryDigit.js";
import { sum } from "./sumOfMultiples.js";
import { uniqueInOrder } from "./uniqueInOrder.js";

let squared = squareDigits(3212)

let unique = uniqueInOrder([1,2,2,3,3])

let binaryNumber = binaryArrayToNumber([0, 0, 1, 0])
console.log(binaryNumber)

let totalSum = sum(1000)

let stairs = stairCase(6)

let city = buildingHeights([ 1150, 3023, 2020, 3023, 3023 ])
