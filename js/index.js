console.log("js loaded...");
function beginQuiz() {
  // user clicks on start button to render the first question
  $("#start-btn").on("click", e => {
    renderQuestion();
  });
}

//
function updateCurrentQuestionAndScore() {
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  // // append current question # and next button to DOM footer
  $(".footer").html(
    `<div id="question-tracker">Question: ${currentQuestion.id} / ${STORE.questions.length}</div>`
  );
  // append current score to score div
  $(".score").html(`Score: ${STORE.currentScore * 10}%`);
}

// render function example for each question (if it exists)
function renderFunc() {
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  if (currentQuestion.funcExample !== null) {
    $(".code-box").html(`
    <pre>
      <code>
      ${currentQuestion.funcExample}
      </code>
    </pre>`);
  }
}

// loops through options to display each on the DOM
function renderAnswerOptions() {
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  const answerList = currentQuestion.answers.map((answer, i) => {
    return `<label><input type="radio" clickable='true' class="answer" name="answer" id="answer${i +
      1}" value="${answer}" tabindex="${i + 1}"/>${answer}</label>`;
  });
  $(".answers").html(answerList);
}

// function renders each question
function renderQuestion() {
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  $(".main-content").html(`
  <form id="quiz">
          <fieldset>
            <legend>Question ${currentQuestion.id}:</legend>
            <h3>
              ${currentQuestion.question}
            </h3>
            <div class="code-box">
            </div>
            <div id="alert"></div>
            <div class="answers">
            </div>
            <div class="answer-button">
              <button id="submit-btn" class="btn" type="submit" tab-index="5">Submit Answer</button>
              <button id="next-btn" class="btn" tab-index="10">Next <i class="fas fa-arrow-right"></i></button>
            </div>
          </fieldset>
        </form>
  `);
  $("#next-btn").hide();
  updateCurrentQuestionAndScore();
  renderFunc();
  renderAnswerOptions();
}

// function that handles when a user selects and submits an option
function handleUserSelection() {
  $(".container").on("submit", "#quiz", function(e) {
    e.preventDefault();
    let currentQuestion = STORE.questions[STORE.currentQuestion];
    const userAnswer = $("input[name=answer]:checked").val();
    const correctAnswer = currentQuestion.correctAnswer;
    console.log(currentQuestion);
    // verify user answers the question
    if (!userAnswer) {
      $("#alert").html("You must answer the question before moving on!");
      return -1;
    }
    if (userAnswer === correctAnswer) {
      $("#alert").html("correct!");
      /* create a  green border around correct answer */
      STORE.currentScore++;
    } else {
      /* create a red and green border around incorrect and correct answer */
      $("#alert").html(`${currentQuestion.explanation}`);
    }
    STORE.currentQuestion++;
    $(".score").html(`Score: ${STORE.currentScore * 10}%`);
    $("input[name=answer]").attr("disabled", true);
    $("#next-btn").show();
    $("#submit-btn").hide();
  });
}

// checks if the quiz is over or if the user should move on to next question
function handleNextQuestion() {
  $(".container").on("click", "#next-btn", function(e) {
    e.preventDefault();
    if (STORE.currentQuestion === STORE.questions.length) {
      displayQuizResults();
    } else {
      renderQuestion();
    }
  });
}

// displays results depending on how well the user did.
function displayQuizResults() {
  const finalScore = STORE.currentScore;
  $(".main-content").html(`
  <div id="results">
  <h3 id="final-score">Final Score: ${finalScore * 10}%</h3>
  <div id="final-comment"></div>
  <button id="restart-btn" class="btn">Start Over</button>
  </div>`);
  if (finalScore === STORE.questions.length) {
    $("#final-comment")
      .html(`<h4>Wow, congratulations! A perfect score, baby yoda is proud!</h4>
    <img class="final-img" src="images/babyyodahappy.gif" alt="baby yoda smiling">`);
  } else if (finalScore > 6 && finalScore < 10) {
    $("#final-comment")
      .html(`<h4>Not bad! A passing score is good enough for baby yoda!</h4>
    <img class="final-img" src="images/babyyodamedium.gif" alt="baby yoda waving">`);
  } else {
    $("#final-comment")
      .html(`<h4>You didn't quite pass. Baby yoda hopes you do better next time!</h4>
    <img class="final-img" src="images/babyyodasad.gif" alt="baby yoda waving">`);
  }
  restartQuiz();
}

// resets current score and question to starting values and calls render question function
function restartQuiz() {
  $("#restart-btn").click(e => {
    STORE.currentQuestion = 0;
    STORE.currentScore = 0;
    renderQuestion();
  });
}

function handleQuizApp() {
  beginQuiz();
  handleUserSelection();
  handleNextQuestion();
}

$(handleQuizApp);
