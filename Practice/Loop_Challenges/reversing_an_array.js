// Psuedocode
// Create a function named reverse that takes in an array
// Create for loop that starts i at 0, ends halfway through the array, and increments by one
// Inside the for loop:
// Create a temp variable and store the left partner's value in it
// Overwrite the left partner wth the right partner
// Overwrite the right partner with temp
// Outside for loop:
// return the array

function reverse(arr){
    for(var i = 0; i < math.floor(arr.length/2); i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
        console.log(i: =)
    }
    return arr;
}

console.log(reverse([1,2,3,4,5,6,7]))

// when we sonsole.log a function call, we console.log whatever that function returns