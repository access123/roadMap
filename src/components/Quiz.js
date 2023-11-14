import React from "react";
import Nav from "./Nav";
import Rule from "./Rule";
import "./styles/Quiz.css";
const Quiz = () => {
  return (
    <div>
      <Nav titleLink={"Roadmap"} li1={"HOME"} li2={"ABOUT"} li3={"CONTACT"} />

      <div className="container-fluid">
        <div className="main-area">
          <div className="heading">Quantum Physics Quiz</div>
          <div className="quiz-area">
            <div id="info-area">
              <div className="row gx-0 row1">
                <div className="col-md-10 title">
                  <p>Following are the rules for the Quiz:</p>
                </div>
                <div className="col-md-2 timer">
                  <p>00:00:00</p>
                </div>
              </div>
              <div className="row gx-0 row2">
                <div className="col-md-12 rules">
                  <ol>
                    <li>
                      This quiz is in MCQ format and consists of 10 questions.
                    </li>
                    <li>Each question has 4 options to select from.</li>
                    <li>
                      Correct answer gives 1 point while wrong option gives 0
                      points.
                    </li>
                    <li>You have 10 minutes to answer these questions.</li>
                    <li>
                      Result will be displayed at the end of the test along with
                      your score.
                    </li>
                    <li>
                      Keep all distraction away while attempting the quiz.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row gx-0 row3 justify-content-end">
                <div className="col-md-3 start">
                  <button id="start-btn" className="button" onClick={startQuiz}>
                    Start Test
                  </button>
                </div>
              </div>
            </div>

            <div id="mcq-area" className="hide">
              <div className="row gx-0 row1">
                <div className="col-md-10 title">
                  <p>
                    Question <span id="qno">{currentQuestionIndex + 1}</span> of
                    10
                  </p>
                </div>
                <div className="col-md-2 timer">
                  <p id="countdown">00:00:00</p>
                </div>
              </div>
              <div className="row que-text">
                <p id="qtext"></p>
              </div>
              <div id="options" className="opt-text">
                <button
                  id="op1"
                  className="opbtn"
                  onClick={() => checkSelect(1)}
                >
                  <p id="op1t" className="option">
                    Option 1
                  </p>
                </button>
                <button
                  id="op2"
                  className="opbtn"
                  onClick={() => checkSelect(2)}
                >
                  <p id="op2t" className="option">
                    Option 2
                  </p>
                </button>
                <button
                  id="op3"
                  className="opbtn"
                  onClick={() => checkSelect(3)}
                >
                  <p id="op3t" className="option">
                    Option 3
                  </p>
                </button>
                <button
                  id="op4"
                  className="opbtn"
                  onClick={() => checkSelect(4)}
                >
                  <p id="opt" className="option">
                    Option 4
                  </p>
                </button>
              </div>
              <div className="row justify-content-around but-area">
                <div className="col-md-2">
                  <button id="end-btn" className="button" onClick={endQuiz}>
                    End Test
                  </button>
                </div>
                <div className="col-md-2">
                  <button id="res-btn" className="button" onClick={restartQuiz}>
                    Restart
                  </button>
                </div>
                <div className="col-md-2">
                  <button id="pre-btn" className="button" onClick={prevQue}>
                    Previous
                  </button>
                </div>
                <div className="col-md-2">
                  <button id="nxt-btn" className="button" onClick={nextQue}>
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div id="result-area" className="hide">
              <div className="row gx-0 r-row1">
                <div className="col-md-12 r-title">
                  <p>These are the result of your quiz:</p>
                </div>
              </div>
              <div className="row r-row2">
                <p>
                  You scored points <span id="cor-ans">{answerCount}</span> out
                  of 10
                </p>
                <p>
                  You took <span id="time-com"></span> to complete the test
                </p>
              </div>
              <div className="row r-row3">
                <div className="col-md-12">
                  <button
                    id="try-again"
                    className="button"
                    onClick={restartQuiz}
                  >
                    <p>Try Again</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row about">
          <div className="col-md-4">{/* Information about Learnistic */}</div>
          <div className="col-md-4">{/* Navigation links */}</div>
          <div className="col-md-4">{/* Social media links */}</div>
        </div>
      </div>
      <script src="YourJsFolder/quiz.js" defer></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

export default Quiz;
