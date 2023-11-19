import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./styles/Test.css";
import Quiz from "./Assets/Quiz.json";
import { RadioGroup, Sheet, Radio } from "@mui/joy";
function Test() {
  const [timeInSeconds, setTimeInSeconds] = useState(600);
  const [notEndTest, setnotEndTest] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeInSeconds > 0) {
        setTimeInSeconds((prevTime) => prevTime - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeInSeconds]);

  const formatTime = () => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    if (timeInSeconds === 0) {
      endTest();
    }
  }, [timeInSeconds]);

  const quizArray = [];
  for (var i = 0; i < 10; i++) {
    quizArray.push(Quiz[i]);
  }
  var forResult = ["Questions", "Result"];
  const [questionNo, setQuestionNo] = useState(1);
  const [question, setQuestion] = useState(quizArray[questionNo - 1]);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [answersArr, setAnswersArr] = useState(
    useState(Array(10).fill(undefined))
  );
  const email = sessionStorage.getItem("email");

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
    const updatedanswersArr = [...answersArr];
    updatedanswersArr[questionNo - 1] = event.target.value;
    console.log(updatedanswersArr);
    setAnswersArr(updatedanswersArr);
  }

  const renderToggleNext = () => {
    if (questionNo === 10) {
      return false;
    } else {
      return true;
    }
  };
  const renderToggleBack = () => {
    if (questionNo === 1) {
      return false;
    } else {
      return true;
    }
  };
  const [scoreState, setScoreState] = useState(0);
  const endTest = () => {
    let score = 0;
    for (let i = 0; i < 10; i++) {
      if (answersArr[i] === quizArray[i].correctOption) {
        score++;
      }
    }
    setScoreState(score);
    setnotEndTest(false);
    addQuizStat(score);
  };
  const addQuizStat = async (score) => {
    const key = "Datastructures";
    try {
      const response = await fetch("http://localhost:3000/addQuizstat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, key, score }),
      });

      if (response.ok) {
        console.log("Quiz stat Added");
      } else {
        console.error("Error submitting quiz data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Nav/>
      <h1 style={{ marginLeft: "45.5%" }}>TEST</h1>
      <h4 style={{ marginLeft: "40%" }}>Quiz on Java Module 1</h4>
      <div className="container">
        <div className="flex">
          {notEndTest && (
            <>
              <h1>{forResult[0]}</h1>
              <p>
                Question <span id="qno">{questionNo}</span> of 10
              </p>
              <div>
                <div>{formatTime()}</div>
                {timeInSeconds === 0 && <p>Time's up!</p>}
              </div>
            </>
          )}
          {!notEndTest && (
            <>
              <h1>{forResult[1]}</h1>
              <h4>{`You Scored ${scoreState} out of 10`}</h4>
              <h5>Your response has been recorded</h5>
            </>
          )}
        </div>
      </div>
      <div className="quiz-box">
        {notEndTest && (
          <>
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
                        borderRadius: "sm",
                        boxShadow: "xs",
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
                              fontWeight: "md",
                              fontSize: "sm",
                              color: checked
                                ? "text.primary"
                                : "text.secondary",
                            },
                          }),
                          action: ({ checked }) => ({
                            sx: (theme) => ({
                              ...(checked && {
                                "--variant-borderWidth": "1px",
                                "&&": {
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
                {renderToggleBack() && (
                  <button
                    className="btn btn-outline-info btn-sm mx-2"
                    onClick={() => {
                      setSelectedOption(answersArr[questionNo - 2]);
                      setQuestionNo(questionNo - 1);
                      setQuestion(quizArray[questionNo - 2]);
                    }}
                  >
                    Back
                  </button>
                )}
                {renderToggleNext() && (
                  <button
                    className="btn btn-outline-info btn-sm"
                    onClick={() => {
                      setSelectedOption(answersArr[questionNo]);
                      setQuestionNo(questionNo + 1);
                      setQuestion(quizArray[questionNo]);
                    }}
                  >
                    Next
                  </button>
                )}
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
          </>
        )}
      </div>
    </>
  );
}

export default Test;
