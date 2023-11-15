import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./styles/Test.css";
import CountdownTimer from "./CountdownTimer";
import Quiz from "./Assets/Quiz.json";
import { RadioGroup,Sheet ,Radio} from "@mui/joy";

function Test() {
  useEffect(() => {
    if (CountdownTimer === 0 || questionNo === 11) {
      endTest();
    }
  }, [CountdownTimer]);

  const endTest = () => {
    console.log("Hello");
  };
  const quizArray = [];
  for (var i = 0; i < 10; i++) {
    quizArray.push(Quiz[i]);
  }
  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }
  const [questionNo, setQuestionNo] = useState(1);
  const [question, setQuestion] = useState(quizArray[questionNo - 1]);
  const [selectedOption, setSelectedOption] = useState(undefined);

  const renderToggleNext = () => {
    if (questionNo === 10) {
      return false;
    } else {
      return true;
    }
  }
  const renderToggleBack = () => {
    if (questionNo === 1) {
      return false;
    } else {
      return true;
    }
  }
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
              {question.options.map((option, index) => (
                <Sheet
                  key={index}
                  sx={{
                    p: 1,
                    borderRadius: 'sm',
                    boxShadow: 'xs',
                  }}
                >
                  <Radio
                    label={option}
                    overlay
                    disableIcon
                    value={option}
                    slotProps={{
                      label: ({ checked }) => ({
                        sx: {
                          fontWeight: 'md',
                          fontSize: 'sm',
                          color: checked ? 'text.primary' : 'text.secondary',
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            '--variant-borderWidth': '1px',
                            '&&': {
                              borderColor: theme.vars.palette.primary[500],
                            },
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
              ))}
            </RadioGroup>
            <hr />
          </div>
          <div className="padding btn-group">
            {
              renderToggleBack() &&
              <button className="btn btn-outline-info btn-sm mx-2" onClick={() => {
                setQuestionNo(questionNo - 1);
                setQuestion(quizArray[questionNo - 2]);
              }}>
                Back
              </button>
            }
            {
              renderToggleNext() &&
              <button
                className="btn btn-outline-info btn-sm"
                onClick={() => {
                  setQuestionNo(questionNo + 1);
                  setQuestion(quizArray[questionNo]);
                }}>
                Next
              </button>
            }
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
