// Your code goes here
function onLoaded(event) {
    const text = document.getElementById("text")
    console.log(text)
    text.innerHTML = 'This is really cool!'
}

document.addEventListener("DOMContentLoaded", onLoaded);