function getColor () {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color-code").innerText = randomColor;
    navigator.clipboard.writeText(randomColor);
}

//eventcall
document.getElementById("btn").addEventListener (
    "click",
    getColor
)

//initial call
getColor();