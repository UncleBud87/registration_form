console.log("page loading...")

var likeCount = 0;
var likeSpan1 = document.querySelector("#post-1");

function clicked() {
    likeCount++;
    likeSpan1.innerText = likeCount + " likes";
}