const buttonList = document.getElementById("enter");
const userInput = document.getElementById("user-input");
const ul = document.querySelector("ul");

function inputLength() {
    return userInput.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
buttonList.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeyPress);