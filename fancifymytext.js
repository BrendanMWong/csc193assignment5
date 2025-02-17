function makeBigger() {
    alert("Text field font is bigger now");
    document.getElementById("user-text-area").style.fontSize = "4em";
}

function styleText() {
    alert("Text field styled added");
    document.getElementById("user-text-area").style.fontWeight = "bold";
    document.getElementById("user-text-area").style.color = "blue";
    document.getElementById("user-text-area").style.textDecorationLine = "underline";
}

function unstyleText() {
    alert("Text field style removed");
    document.getElementById("user-text-area").style.fontWeight = "normal";
    document.getElementById("user-text-area").style.color = "black";
    document.getElementById("user-text-area").style.textDecorationLine = "none";
}