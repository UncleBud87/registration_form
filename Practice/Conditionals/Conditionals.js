var isSunny= true;
var temperature = 45;
var isRaining = false;
var whatToBring = "I should bring:";

// Conditional sttement - starts with the "if" keyword
// Another way for us to control the FLOW of our code.
// The keyword is followed by a BOOLEAN statement. If the statement resolves to true, then we execute the conditional's Code Block

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}

console.log(whatToBring);

// Prepare for Downcount
for (var i= 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!")
// Predictions 10,9,8,7,6,5,4,3,ignition,1, liftoff!

var countPositives = 0;
var numbers = [3,4,-2,7,16,-8,0];

for (var i=0; i < numbers.length-1; i++) {
    if (numbers[i] > 0) countPositives++;
}
    

// your code here!

// Concatenation - adding strings together

console.log("there are " + countPositives + "positive values");