// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]



//Noah Solution
export const uniqueInOrder = (iterable) => {
    if (iterable.isArray = true) {
        const newArray = iterable
        let uniqueArray = []

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] != uniqueArray[uniqueArray.length - 1]) {
            uniqueArray.push(newArray[i])
        }
    }
    return uniqueArray
    } else {
        const newArray = iterable.split("")
        let uniqueArray = []

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] != uniqueArray[uniqueArray.length - 1]) {
            uniqueArray.push(newArray[i])
        }
    }
    return uniqueArray
    }
}

//better solution
// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }