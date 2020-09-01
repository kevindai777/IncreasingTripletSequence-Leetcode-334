//Objective is to see whether there are three numbers in an array that are in
//an increasing subsequence order, from left to right

let nums = [1,2,3,4,5]


//O(n) solution where n is the number of elements in the array

let first = Infinity
let second = Infinity

for (let num of nums) {
    if (num <= first) {
        first = num
    } else if (num <= second) {
        second = num
    } else {
        return true
    }
}

return false