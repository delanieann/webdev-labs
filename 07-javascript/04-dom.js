// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let input = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector(".output");

// add an event listener on the target element
copy.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
    console.log("output", input.value);
    output.textContent = input.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area
let input2 = document.querySelector("#userInput2");

// fetch JavaScript objects representing specific elements in the DOM
input2.addEventListener("input", handleInput);
// add an event listener on the target element
let target = document.createElement("div");
target.setAttribute("class", "output");
document.querySelector("inputEventExample").append(target);

function handleInput(event){
    console.log("click", event);
    target.textContent = input2.value;
}
// callback function to handle event
