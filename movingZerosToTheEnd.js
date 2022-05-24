// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export const moveZeros = (arr) => {
    let newArray = []

    for (const i of arr) {
        if ( i !==0) {
            newArray.push(i)
        }
    }
    
    for (var i = 1; i <= arr.filter(j => j === 0).length; i++ ) {
        newArray.push(0)
    }
    
    return newArray
}