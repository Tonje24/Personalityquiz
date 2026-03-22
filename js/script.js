console.log("script.js connected!");

const userAnswers = {};

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block) => {
  const answerButtons = block.querySelectorAll(".answer-btn");
  const questionId = block.parentElement.id;

  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      answerButtons.forEach((btn) => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline-primary");
      });

      button.classList.remove("btn-outline-primary");
      button.classList.add("btn-primary");

      const answerValue = button.dataset.answer;
      userAnswers[questionId] = answerValue;

      console.log(userAnswers);
    });
  });
});

function displayResult() {
  let adventureCount = 0;
  let cozyCount = 0;

  for (const question in userAnswers) {
    if (userAnswers[question] === "adventure") {
      adventureCount++;
    } else if (userAnswers[question] === "cozy") {
      cozyCount++;
    }
  }

  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");

  if (Object.keys(userAnswers).length < 4) {
    resultContainer.style.display = "block";
    resultText.textContent = "Please answer all 4 questions before seeing your result.";
    return;
  }

  if (adventureCount > cozyCount) {
    resultContainer.style.display = "block";
    resultText.textContent =
      "You are an Adventure Explorer! You love excitement, movement, and trying new experiences.";
  } else if (cozyCount > adventureCount) {
    resultContainer.style.display = "block";
    resultText.textContent =
      "You are a Cozy Homebody! You enjoy comfort, relaxing spaces, and peaceful weekends.";
  } else {
    resultContainer.style.display = "block";
    resultText.textContent =
      "You are a Balanced Mix! You enjoy both adventure and comfort equally.";
  }
}

const showResultButton = document.getElementById("show-result");
showResultButton.addEventListener("click", displayResult);