// Comment in js

// Create an array
// Create an empty array (two of the following are ways to create empty arrays)
var myArr = new Array()

// This is the recommended method to creat ean empty array
var myArr2 = []

// Create an array of a certain size
// This first array can hold 100 items
var myBiggArr = new Array(100)

var myBigArr2 = [,,,,]
var myBigArr2 = [1,2,3,4]

var array = []
array.length = 8

// Give us the size of the array
array.length

// Position of items in the array
// index
//                0        1          2
var superArr = ['rock', 'paper', 'scissors']
// 0 base index, meaning starts at zero and moves forward

// get a value with the index
supArr[1]

// insert in the array
var supArr = []

// how to insert things into the array, anything in the parentheses goes into the array
// adds items to the end of the array
supArr.push('Stan Lee', 'Spiderman')

// unshift will add the items into the beginning of an array
supArr.unshift(1 , 2.3, true)


// remove items from the array

// mutable vs immutable
// mutable are items that can be chagnged
// immutable are items that can't be changed

var sArr = [1, 2, 3]

// the two methods can remove an item from an array

// removes the last element of the array and returns it, mutable
sArr.pop

// removes the first element of the array and returns it, mutable
sArr.shift

// mutable, creates a "hole" in the array
delete sArr[2]

// immutable, doesn't change the array, cuts the array and turns it back
sArr.slice(2)

// iterate, going through an array, usually with loops
var nums = [1, 2, 3, 4, 5]

// forEach
nums.forEach(function(num, index) {
    console.log("index of: " + index + "values: " + num)
})

// map
nums.map(function(num, index) {
  console.log(num++)
})

nums.filter(function(num, index) {
  console.log(num % 2 == 0)
})

// the use case of filters is to specify what you want from an array
// a new array of only booleans will be created
['s', 23, 23.2, true, false].filter(boolean)

// for (loop)
for (var index = 0; index < nums.length; index++) {
  console.log(num[index])
}

// type checking
// checks for what datatype is something?
typeof []
typeof 0
typeof true

// misc functions
var lastArr = ["rock", "green", "blue"]

// returns a string of what the array looks like
lastArr.toString 

// brings two values together
lastArr.join()

// reverses the array
lastArr.reverse

// this will put the items in order, asc, alphabetical for 
// strings, numbers and floats < >
lastArr.sort()

// search the array
lastArr.find()

// tells the index of the value
lastArr.indexOf()

// boolean on if the array includes a value
lastArr.includes()

// combine two arrays
lastArrconcat()
