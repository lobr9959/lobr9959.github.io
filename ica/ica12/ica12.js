
const url = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

// First i store the html elements in variables for easy access
const quoteTextElement = document.getElementById("js-quote-text");
const answerTextElement = document.getElementById("js-answer-text");
const newQuoteButton = document.getElementById("js-new-quote");
const showAnswerButton = document.getElementById("js-tweet");

let currentQuestion = "";
let currentAnswer = "";

function displayQuote() {
    quoteTextElement.textContent = currentQuestion;
    answerTextElement.textContent = ""; 
}
async function getQuote() {
    try {
      const response = await fetch(url);
  
    if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.status}`);
    }
  
    const json = await response.json();

    console.log(json.question);
    console.log(json.answer);

    currentQuestion = json.question;
    currentAnswer = json.answer;
  
    displayQuote();

    } catch (error) {
      console.error("Error fetching trivia:", error);
      alert("Failed to fetch trivia. Please try again.");
      quoteTextElement.textContent = "Failed to fetch trivia. Please try again.";
    }
  }
  

newQuoteButton.addEventListener("click", async Click => {
    await getQuote();
});

showAnswerButton.addEventListener("click", Click => {
    if (currentAnswer) {
        answerTextElement.textContent = `Answer: ${currentAnswer}`;
    } else {
        answerTextElement.textContent = "Get a question first!";
    }
});
