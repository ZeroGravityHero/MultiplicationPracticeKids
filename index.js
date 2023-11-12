// Get references to the number buttons and the text element
const correctCount = document.getElementById("correctCount");
const incorrectCount = document.getElementById("incorrectCount");
const streakCount = document.getElementById("correctCount");
let correctCounter = 0;
let incorrectCounter = 0;

const displayText = document.getElementById("displayText");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const resultDescription = document.getElementById("resultDescription");

const numberButtons = document.querySelectorAll("#numberButtons button");
const clearButton = document.getElementById("clearButton");
const startButton = document.getElementById("startButton");


numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Get the number from the button's text
        const number = button.textContent;

        // Check if the current text length is less than 3
        if (displayText.textContent.length < 3) {
            // Append the number to the text
            displayText.textContent += number;
        } else {
            // If the length is 3, change text color to red for a few seconds
            displayText.style.color = "#ff5133";
            setTimeout(() => {
                displayText.style.transition = "color 0.2s ease-in-out";
                displayText.style.color = ""; // Reset to the regular color
            }, 300); // Change the duration as needed
        }
    });
});

clearButton.addEventListener("click", function() {
    clearAnswer();
});

startButton.addEventListener("click", function() {
    startProblem();
});

restartButton.addEventListener("click", function() {
    restart();
});

submitAnswer.addEventListener("click", function() {
    enter();
});

//Detecting Keyboard Press

const keyButtonMap = {
    '1': document.getElementById('button1'),
    '2': document.getElementById('button2'),
    '3': document.getElementById('button3'),
    '4': document.getElementById('button4'),
    '5': document.getElementById('button5'),
    '6': document.getElementById('button6'),
    '7': document.getElementById('button7'),
    '8': document.getElementById('button8'),
    '9': document.getElementById('button9'),
    '0': document.getElementById('button0')
};

document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;

    // Check if the pressed key is in the mapping
    if (keyButtonMap[keyPressed]) {
        // Trigger the click event of the corresponding button
        keyButtonMap[keyPressed].click();
    }
});

document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;

    // Check if the pressed key is the backspace key
    if (keyPressed === 'Backspace') {
        // Perform the clear action
        clearAnswer();
        return;  // Exit the function to avoid executing the rest of the code
    } else if (keyPressed === 'Enter') {
         // Perform the clear action
         enter();
         return;  // Exit the function to avoid executing the rest of the code
    }       

});


//FUNCTIONS

function addCorrectCounter() {

    correctCounter++;
    correctCount.textContent = "CORRECT: " + correctCounter;
}

function addIncorrectCounter() {

    incorrectCounter++;
    incorrectCount.textContent = "INCORRECT: " + incorrectCounter;
}

function enter() {
    const firstNumberValue = parseInt(firstNumber.textContent);
    const secondNumberValue = parseInt(secondNumber.textContent);

    const questionAnswer = firstNumberValue * secondNumberValue;

    // Convert the text content of displayText to a number for comparison
    const userAnswer = parseInt(displayText.textContent);

    if (questionAnswer === userAnswer) {
        resultDescription.textContent = "CORRECT!";
        resultDescription.style.color = "#5de112";
        console.log("Correct! questionAnswer =", questionAnswer);
        addCorrectCounter()
        startProblem();
        

    } else {
        resultDescription.textContent = "WRONG!";
        resultDescription.style.color = "#ff5133";
        displayText.textContent = "";
        addIncorrectCounter()
        console.log("Wrong! questionAnswer =", questionAnswer);
    }

}

function startProblem() {

    const firstNumberValue = Math.floor(Math.random() * 10) + 1;
    const secondNumberValue = Math.floor(Math.random() * 10) + 1;

    // Display the random numbers
    firstNumber.textContent = firstNumberValue;
    secondNumber.textContent = secondNumberValue;    
    displayText.textContent = "";

}

function clearAnswer() {

    const currentText = displayText.textContent;

    if (currentText.length > 1) { 
        const newText = currentText.slice(0, -1); // Remove the last character
        displayText.textContent = newText;
    } else {
        displayText.textContent = "";
    }
    
}

function restart() {

    firstNumber.textContent = 0;
    secondNumber.textContent = 0;  
    displayText.textContent = "";
    resultDescription.textContent = "LET'S MULTIPLY";
    resultDescription.style.color = "#241e20";
    correctCounter = 0;
    incorrectCounter = 0;
    correctCount.textContent = "CORRECT: " + correctCounter;
    incorrectCount.textContent = "INCORRECT: " + incorrectCounter;

}



