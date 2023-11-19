import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Rule.css"
function Rule() {
  return (
    <>
      <div className="centering ">
        <div>
          <div >
            <p>Following are the rules for the Quiz:</p>
          </div>
        </div>
        <div >
          <div >
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
                You can attempt the quiz only once. So be careful while
                answering. Once you submit the quiz, you're response will be recorded.
              </li>
              <li>
                Keep all distraction away while attempting the quiz.
              </li>
            </ol>
          </div>
        </div>
            <Link to='/quiz/test'>Start the test</Link>
      </div>
    </>
  )
}

export default Rule
