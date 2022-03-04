//find all multiples of 3 or 5 below 1000
//sum of those multiples

export const sum = (numberLimit) => {
    let i, sum = 0
    //sets min number as 3 and max as the argurment
    for (i = 3; i < numberLimit; i++ ) {
        //if the index divided by 3 or 5 has a remainder of 0
        if (i % 3 === 0 || i % 5 === 0) {
            //add index to sum
            sum += i
        }
    }
    return sum
}

