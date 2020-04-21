// Your code goes here
function onLoad() {
    const text = document.getElementById("text")
    console.log(text)
    text.innerHTML = 'This is really cool!'
}

document.addEventListener("DOMContentLoaded", onLoad) {
    console.log("The DOM has loaded");
};