// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

    it("removes first item and shuffles the remaining content", () => {
        expect(content(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(content(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
       
    })
})

// ReferenceError: content is not defined

// b) Create the function that makes the test pass.

// PseudoCode:

// Remove the first item from the array and shuffle the remaining content.
// To remove the first element of the array to change the length of the array use .shift.
// Return shuffled content using .shuffle method to shuffle the array.
// Math.random to return random number from 0 to 1.

const content = (arr) => {
    arr.shift()
    return arr.sort((a,b) => 0.5-
    Math.random())
}

// PASS  ./code-challenges.test.js
// content
//   ✓ removes first item and shuffles the remaining content 

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax1", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]

    it("returns an array of min and max numbers in order", () => {
        expect(minMax1(nums1)).toEqual([-8, 90])
        expect(minMax1(nums2)).toEqual([5, 109])
       
    })
})

// ReferenceError: minMax1 is not defined

// b) Create the function that makes the test pass.

// PseudoCode:
// Create a function that takes an array of numbers and returns an array.
// Use .push the numbers to the end of the array and return a new array.
// Return min/max numbers in order. 

const minMax1 = (numArr) => {
    newArr = []
    newArr.push((Math.min(...numArr)))

    newArr.push((Math.max(...numArr)))
    return newArr
}

// PASS  ./code-challenges.test.js
// content
//   ✓ removes first item and shuffles the remaining content (1 ms)
// minMax1
//   ✓ returns an array of min and max numbers in order (1 ms)


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const testArray1 = [3, 7, 10, 5, 4, 3, 3]
// const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("dupe", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]


    it("takes in two arrays and returns one array", () => {
        expect(dupe(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// ReferenceError: dupe is not defined

// b) Create the function that makes the test pass.

//PseudoCode
// Use the new set array parameter to create a new set of an array.
// Concat both arrays.
// New set will take the values of arr1 and arr2 and return new array with no duplicates values.
// The rest parameter will denote a variable name with three periods (...)
// Return new array.

const dupe = (array1, array2) => {
    let newArr = [...new Set(array1.concat(array2))]
    return newArr
}

// PASS  ./code-challenges.test.js
// content
//   ✓ removes first item and shuffles the remaining content (1 ms)
// minMax1
//   ✓ returns an array of min and max numbers in order (1 ms)
// dupe
//   ✓ takes in two arrays and returns one array