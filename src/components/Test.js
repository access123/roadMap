import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./styles/Test.css";
import CountdownTimer from "./CountdownTimer";
import Quiz from "./Assets/Quiz.json";
import { RadioGroup } from "@mui/joy";
import RenderedOptions from "./RenderedOptions";

function Test() {
  useEffect(() => {
    if (CountdownTimer === 0 || questionNo === 10) {
      endTest();
    }
  }, [CountdownTimer]);

  const endTest = () => {
    console.log("Hello");
  };
  const [questionNo, setQuestionNo] = useState(1);
  const quizArray = Quiz;
  const randomQuestion = () => {
    const useQuestion = quizArray[Math.floor(Math.random() * 20) + 1];
    return useQuestion;
  };
  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [question, setQuestion] = useState(randomQuestion());
  const answerobj = [];
  return (
    <>
      <Nav titleLink={""} li1={"HOME"} li2={"ABOUT"} li3={"CONTACT"} />
      <h1 style={{ marginLeft: "45.5%" }}>TEST</h1>
      <h4 style={{ marginLeft: "40%" }}>Quiz on Java Module 1</h4>
      <div className="container">
        <div className="flex">
          <p>
            Question <span id="qno">{questionNo}</span> of 10
          </p>
          <CountdownTimer />
          <h1>Questions</h1>
        </div>
      </div>
      <div className="quiz-box">
        <div className="mcqs">
          <div className="padding">
            <p>{question.question}</p>
          </div>
          <div>
            <RadioGroup
              aria-labelledby="completion-label"
              value={selectedOption}
              onChange={handleOptionChange}
              size="md"
              sx={{ gap: 1, flexDirection: "row" }}
            >
              <RenderedOptions questionInfo={question} />
            </RadioGroup>
            <hr />
          </div>
          <div className="padding btn-group">
            <button
              className="btn btn-outline-info btn-sm"
              onClick={() => {
                setQuestion(randomQuestion());
                setQuestionNo(questionNo + 1);
              }}
            >
              Next
            </button>
            <button
              className="btn btn-outline-info btn-sm mx-2"
              onClick={() => {
                endTest();
              }}
            >
              End Test
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
