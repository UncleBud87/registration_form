function accept() {
    var element = cookie;
    element.remove();
}


var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");
var e = document.querySelector("#e");
var f = document.querySelector("#f");
var g = document.querySelector("#g");
var h = document.querySelector("#h");

function temp(element) {
    if (element.value == "cel") {
        a.innerText = "24°";
        b.innerText = "18°";
        c.innerText = "27°";
        d.innerText = "19°";
        e.innerText = "21°";
        f.innerText = "16°";
        g.innerText = "26°";
        h.innerText = "21°";
    }
    else if (element.value == "far") {
        a.innerText = "75°";
        b.innerText = "65°";
        c.innerText = "80°";
        d.innerText = "66°";
        e.innerText = "69°";
        f.innerText = "61°";
        g.innerText = "78°";
        h.innerText = "70°";
    }
}

// function c2f(temp) {
//     return Math.round(9 / 5 * temp + 32);
// }

// function f2c(temp) {
//     return Math.round(5 / 9 * (temp - 32));
// }

// function convert(element) {
//     console.log(element.value);
//     for(var i=1; i<9; i++) {
//         var tempSpan = document.querySelector("#temp" + i);
//         var tempVal = parseInt(tempSpan.innerText);
//         if(element.value == "°C") {
//             tempSpan.innerText = f2c(tempVal);
//         } else {
//             tempSpan.innerText = c2f(tempVal);
//         }
//     }
// }