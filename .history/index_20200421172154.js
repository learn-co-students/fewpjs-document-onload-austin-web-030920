// Your code goes here
function yeet() {
    const text = document.getElementById("text")
    console.log(text)
    text.innerHTML = 'This is really cool!'
}

document.addEventListener("DOMContentLoaded", yeet) {
    console.log("The DOM has loaded");
};