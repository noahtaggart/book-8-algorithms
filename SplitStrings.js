// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


export const solution = (str) => {
    const arr = []
    for (let index = 0; index < str.length; index += 2) {
        if (str.slice(index, index + 2).length === 2) {
            arr.push(str.slice(index, index + 2))
        } else {
            arr.push(str.slice(-1) + '_')
        }
    }
    return arr
}

//better solution
// function solution(s){
//     return (s+"_").match(/.{2}/g)||[]
//  }