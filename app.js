const arrayToEvaluate = [4, 4, 3, 5, 5, 4, 4, 5, 5, 5, 5, 4, 4, 4, 6]
let currentItem = 0
let counter = 0
let hasMatch = 0
let newArray = []

// Pushing 1 item to 'newArray array'.
if (newArray.length < 1) {
    newArray.push(arrayToEvaluate[0])
}

// We will depend on the length of the 'arrayToEvaluate array' so that we can
// compare if an item within the 'newArray' is not equal to the an item within the
// 'arrayToEvaluate array'.
while (counter < arrayToEvaluate.length) {
    // console.log('counter ', counter)
    // We compare every item within the 'newArray array' to every item within the 
    // 'arrayToEvaluate array' which is dependent to the incrementing value of the
    // 'counter variable'. If the comparison is not equal then we can loop through
    // the current 'newArray array length' and see if the current item within the 
    // 'arrayToEvaluate array' is equal to the current 'newArray array' item. If it
    // does, then we can increment the value of 'hasMatch variable'.
    if (newArray[currentItem] != arrayToEvaluate[counter]) {
        for (let i = 0; i < newArray.length; i++) {
            if (arrayToEvaluate[counter] == newArray[i]) {
                hasMatch += 1
            }
        }
        // If 'hasMatch' is zero, that means we have found an item which is we can push
        // to the 'newArray array'. If 'hasMatch' is 1 or greater, we don't push, nothing
        // happens.
        if (hasMatch < 1) {
            newArray.push(arrayToEvaluate[counter])
            currentItem += 1
        }
    }
    counter += 1 // The 'while loop' control.
    hasMatch = 0 // The 'hasMatch' reset.
}

console.log('newArray', newArray)