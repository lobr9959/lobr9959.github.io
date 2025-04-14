const url = "https://opentdb.com/api.php?amount=1&type=multiple";
const quoteTextElement = document.getElementById("js-quote-text");
const multipleChoiceContainer = document.getElementById("multiple-choice-container");
const resultTextElement = document.getElementById("result-text");
const newQuoteButton = document.getElementById("js-new-quote");
const loadingSpinner = document.getElementById("loading-spinner");


let currentQuestion = "";
let currentCorrectAnswer = "";
let currentChoices = [];
let questionAnswered = false;

newQuoteButton.addEventListener("click", fetchNewTrivia);
quoteTextElement.textContent = "Click the button to generate a trivia question!";


function decodeHtml(html) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.value;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayTrivia() {
    quoteTextElement.textContent = currentQuestion;

    multipleChoiceContainer.innerHTML = "";
    resultTextElement.className = "result-text";

    currentChoices.forEach(choice => {
        const choiceButton = document.createElement("button");
        choiceButton.className = "choice-button";
        choiceButton.textContent = choice;
        choiceButton.dataset.answer = choice;
        choiceButton.addEventListener("click", checkAnswer);
        multipleChoiceContainer.appendChild(choiceButton);
    });
    
    questionAnswered = false;
}

function checkAnswer(event) {
    if (questionAnswered) return;
    
    const selectedAnswer = event.target.dataset.answer;
    const buttons = document.querySelectorAll(".choice-button");
    
    buttons.forEach(button => {
        if (button.dataset.answer === currentCorrectAnswer) {
            button.classList.add("correct");
        } else if (button.dataset.answer === selectedAnswer) {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });
    

    if (selectedAnswer === currentCorrectAnswer) {
        resultTextElement.textContent = "Correct! Well done!";
        resultTextElement.className = "result-text success";
    } else {
        resultTextElement.textContent = `Incorrect! The correct answer is: ${currentCorrectAnswer}`;
        resultTextElement.className = "result-text failure";
    }
    
    questionAnswered = true;
}


async function fetchNewTrivia() {
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.response_code !== 0 || !data.results || data.results.length === 0) {
            throw new Error("Invalid response from API");
        }
        
        const triviaData = data.results[0];
        
        currentQuestion = decodeHtml(triviaData.question);
        currentCorrectAnswer = decodeHtml(triviaData.correct_answer);
        
        const incorrectAnswers = triviaData.incorrect_answers.map(answer => decodeHtml(answer));
        currentChoices = [...incorrectAnswers, currentCorrectAnswer];
        currentChoices = shuffleArray(currentChoices);

        displayTrivia();
    } catch (error) {
        console.error("Error fetching trivia:", error);
        quoteTextElement.textContent = "Failed to fetch trivia. Please try again.";
        multipleChoiceContainer.innerHTML = "";
        resultTextElement.className = "result-text";
    }
}

window.addEventListener("DOMContentLoaded", init);