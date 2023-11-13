import React, { useState } from 'react'
import Nav from './Nav'
import './styles/Test.css'
import CountdownTimer from './CountdownTimer';
import Quiz from './Assets/Quiz.json'
import { RadioGroup } from "@mui/joy";
import RenderedOptions from './RenderedOptions'

function Test() {
  const [questionNo, setQuestionNo] = useState(1);
  const quizArray = Quiz;
  const randomQuestion = () => {
    const useQuestion = quizArray[Math.floor(Math.random() * 20) + 1];
    return useQuestion;
  }
  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [question, setQuestion] = useState(randomQuestion());

  return (
    <>
      <Nav titleLink={''} li1={"HOME"} li2={"ABOUT"} li3={"CONTACT"} />
      <h1 style={{ marginLeft: '45%' }}>TEST</h1>
      <h4 style={{ marginLeft: '41.5%' }}>Topic of the test</h4>
      <div className="container">
        <div className="flex">
          <p>
            Question <span id="qno">{questionNo}</span> of
            10
          </p>
          <CountdownTimer />
          <h1>
            Questions
          </h1>
        </div>
      </div>
      <div className="mcqs">
        <div className="padding">
          <p>{question.question}</p>
        </div>
        <div className="op">
          <RadioGroup
            aria-labelledby="completion-label"
            value={selectedOption}
            onChange={handleOptionChange}
            size="md"
            sx={{ gap: 1, flexDirection: 'row' }}
          >
            <RenderedOptions questionInfo={question} />
          </RadioGroup>
        </div>
      </div>
    </>
  )
}

export default Test;