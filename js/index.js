console.log("js loaded...");
function beginQuiz() {
  // user clicks on start button to render the first question
  $("#start-btn").on("click", e => {
    renderQuestion();
  });
}

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
      1}" value="${answer}" />${answer}</label>`;
  });
  $(".answers").html(answerList);
}

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
              <button id="submit-btn" class="btn" type="submit">Submit Answer</button>
              <button id="next-btn" class="btn">Next <i class="fas fa-arrow-right"></i></button>
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
    console.log(currentQuestion)
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
    $('input[name=answer]').attr('disabled', true);
    $("#next-btn").show();
    $("#submit-btn").hide();
  });
}

function handleNextQuestion() {
  $(".container").on("click", "#next-btn", function(e) {
    e.preventDefault();
    if (STORE.currentQuestion === STORE.questions.length) {
      /* Need to build out display for user */
      console.log("finished");
    } else {
      renderQuestion();
    }
  });
}

function restartQuiz() {}

function handleQuizApp() {
  beginQuiz();
  restartQuiz();
  handleUserSelection();
  handleNextQuestion();
}

$(handleQuizApp);
