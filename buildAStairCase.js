// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to 3. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Function Description
// The function should accept a number as input. This number is the height and width of the staircase.

// Print a staircase as described above.

// Function Constraints
// The number specified for height and width should be greater than 0 and less than 100.

// Output Format
// Print a staircase of size using # symbols and spaces.

// Sample Input
// 6

// Sample Output
//      #
//     ##
//    ###
//   ####
//  #####
// ######

export const stairCase = (stairHeight) => {
    let i, stairs = "#", spaces=" ", string=""
    //iterates through index with max height of stairHeight
    for (i = 1; i <= stairHeight; i++) {
        //add spaces to string based on stairheight - index
        string += spaces.repeat(stairHeight-i)
        //add stairs to string based on index
        string += stairs.repeat(i)
        //break the line
        string += "\n"
    
    }
    console.log(string)

    
}