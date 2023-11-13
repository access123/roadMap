import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Button from '@mui/joy/Button';
import './styles/Prototype.css'

function Test() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(10).fill(-1));
  const [randNumIndex, setRandNumIndex] = useState([]);
  const [time, setTime] = useState(10 * 60);
  const [answerCount, setAnswerCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/");
        const data = await response.json();
        setQuizData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    startQuiz();
  }, [])
  useEffect(() => {
    randNumGen();

  }, []);

  const randNumGen = () => {
    const rands = [];
    while (rands.length < 10) {
      const r = Math.floor(Math.random() * 10);
      if (rands.indexOf(r) === -1) {
        rands.push(r);
      }
    }
    setRandNumIndex(rands);
  };

  const startTimer = () => {
    if (time > 0) {
      setInterval(updateCountdown, 1000);
    }
  };

  const startQuiz = () => {
    randNumGen();
    setCurrentQuestionIndex(0);
    setSelectedOptions(Array(10).fill(-1));
    setAnswerCount(0);
    startTimer();
    setNextQuestion();
  };

  const restartQuiz = () => {
    randNumGen();
    setCurrentQuestionIndex(0);
    setSelectedOptions(Array(10).fill(-1));
    setAnswerCount(0);
    startTimer();
    setNextQuestion();
  };

  const endQuiz = () => {
    // Additional logic if needed when the quiz ends.
  };

  const nextQue = () => {
    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      clearSelect();
      setNextQuestion();
    } else {
      endQuiz();
    }
  };

  const prevQue = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      clearSelect();
      setNextQuestion();
    }
  };

  const setNextQuestion = () => {
    showQuestion();
  };

  const showQuestion = () => {
    const questionNum = randNumIndex[currentQuestionIndex];
    // Update UI to display the question and options using quizData[questionNum]
  };

  const clearSelect = () => {
    setSelectedOptions((prevSelected) => {
      const newSelected = [...prevSelected];
      newSelected[currentQuestionIndex] = -1;
      return newSelected;
    });
  };

  const checkSelect = (butNo) => {
    setSelectedOptions((prevSelected) => {
      const newSelected = [...prevSelected];
      newSelected[currentQuestionIndex] = butNo;
      return newSelected;
    });
  };

  const showSelect = () => {
    // Additional logic if needed
  };

  const checkAnswers = () => {
    let count = 0;
    for (let i = 0; i < 10; i++) {
      if (selectedOptions[i] === quizData[randNumIndex[i]][5]) {
        count++;
      }
    }
    setAnswerCount(count);
  };

  const updateCountdown = () => {
    setTime((prevTime) => {
      if (prevTime > 0) {
        const newTime = prevTime - 1;
        if (newTime === 0) {
          endQuiz();
        }
        return newTime;
      }
      return prevTime;
    });
  };
  return (
    <>
      <Nav titleLink={''} li1={"HOME"} li2={"ABOUT"} li3={"CONTACT"} />
      <div>
        <div className="">
          <div className="">
            <Button color="warning" size="sm" variant="outlined" onClick={startQuiz}>
              Start Test
            </Button>
          </div>
        </div>
        <div className="container-fluid">
          <div className="main-area">
            <div className="heading">Quantum Physics Quiz</div>
            <div className="quiz-area">
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
                  <Button
                    color="warning"
                    size="sm"
                    variant="outlined"
                    onClick={() => checkSelect(1)}
                  >
                    <p id="op1t" className="option">
                      Option 1
                    </p>
                  </Button>
                  <Button
                    color="warning"
                    size="sm"
                    variant="outlined"
                    onClick={() => checkSelect(2)}
                  >
                    <p id="op2t" className="option">
                      Option 2
                    </p>
                  </Button>
                  <Button
                    color="warning"
                    size="sm"
                    variant="outlined"
                    onClick={() => checkSelect(3)}
                  >
                    <p id="op3t" className="option">
                      Option 3
                    </p>
                  </Button>
                  <Button
                    color="warning"
                    size="sm"
                    variant="outlined"
                    onClick={() => checkSelect(4)}
                  >
                    <p id="opt" className="option">
                      Option 4
                    </p>
                  </Button>
                </div>
                <div className="row justify-content-around but-area">
                  <div className="col-md-2">
                    <Button
                      color="warning"
                      size="sm"
                      variant="outlined"
                      onClick={endQuiz}>
                      End Test
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button
                        color="warning"
                        size="sm"
                        variant="outlined"onClick={restartQuiz}>
                      Restart
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button
                        color="warning"
                        size="sm"
                        variant="outlined"onClick={prevQue}>
                      Previous
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button
                        color="warning"
                        size="sm"
                        variant="outlined" onClick={nextQue}>
                      Next
                    </Button>
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
                    <Button
                        color="warning"
                        size="sm"
                        variant="outlined"
                      onClick={restartQuiz}
                    >
                      <p>Try Again</p>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Test
