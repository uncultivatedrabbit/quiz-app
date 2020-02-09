console.log("js loaded...");
function beginQuiz() {
  // get the index of the current question
  const currentQuestionIndex = STORE.currentQuestion + 1;
  // filter through the questions for the current question object
  const currentQuestion = STORE.questions.filter(
    question => question.id === currentQuestionIndex
  )[0];
  // user clicks on start button to render the first question
  $("#start-btn").on("click", e => {
    renderQuestion(currentQuestion, currentQuestionIndex);
  });
}

function updateCurrentQuestionAndScore(currentQuestion) {

  const currentScore = STORE.currentScore;
  // // append current question # and next button to DOM footer
  $(".footer").html(
    `<div id="question-tracker">Question: ${currentQuestion.id} / ${STORE.questions.length}</div>
    <button id="next-btn" class="btn">Next <i class="fas fa-arrow-right"></i></button>`
  );
  // append current score to score div
  $(".score").html(`Score: ${currentScore}`);
}

// render function example for each question (if it exists)
function renderFunc(currentQuestion) {
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
function renderAnswerOptions(currentQuestion) {
  const answerList = currentQuestion.answers.map((answer, i) => {
    return `<label><input type="radio" clickable='true' class="answer" name="answer" id="answer${i +
      1}" value="${answer}" />${answer}</label>`;
  });
  $(".answers").html(answerList);
}

function renderQuestion(currentQuestion, currentQuestionIndex) {
  $(".main-content").html(`
  <form id="quiz">
          <fieldset>
            <legend>Question ${currentQuestionIndex}:</legend>
            <h3>
              ${currentQuestion.question}
            </h3>
            <div class="code-box">
            </div>
            <div class="answers">
            </div>
            <div class="answer-button">
              <button class="btn" type="submit">Submit Answer</button>
            </div>
          </fieldset>
        </form>
  `);
  updateCurrentQuestionAndScore(currentQuestion);
  renderFunc(currentQuestion);
  renderAnswerOptions(currentQuestion);
  handleUserSelection(currentQuestion);
}

function handleUserSelection(currentQuestion) {
  $(".container").on("submit", "#quiz", function(e) {
    e.preventDefault();
    const userAnswer = $("input[name=answer]:checked").val();
    const correctAnswer = currentQuestion.correctAnswer
    // -----------------continue here---------------------------//
  });
}

function restartQuiz() {}

function handleQuizApp() {
  beginQuiz();
  restartQuiz();
}

$(handleQuizApp);
