import React, { useState, useMemo } from "react";
import appLogo from "../assets/AppLogo.png";
import lightModeLogo from "../assets/light_mode.png";
import darkModeLogo from "../assets/dark_mode.png";
import questions from "../questions.js";
import Result from "./Result";

function QuestionBox(props) {
  const { darkTheme, setDarkTheme } = props;
  const [logo, setLogo] = useState(lightModeLogo);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizFinished, setQuizFinish] = useState(false);
  const [userAnswer, setUserAnswer] = useState(Array(questions.length));
  const [Highlighted, setHighlighted] = useState(false);

  const handleThemeClick = () => {
    setDarkTheme(!darkTheme);
    setLogo(darkTheme ? lightModeLogo : darkModeLogo);
  };

  const toggleTheme = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "#000000" : "#ffffff",
      color: darkTheme ? "#ffffff" : "#000000",
    };
  }, [darkTheme]);

  const divTheme = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "#555454" : "#D4D4D4",
    };
  });

  const handleOptionClick = (selectedOption) => {
    const newUserAnswer = [...userAnswer];
    newUserAnswer[currentQuestion] = selectedOption;
    setUserAnswer(newUserAnswer);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinish(true);
    }
  };

  const highlightToggle = () => {
    setHighlighted(true);
  };

  const removeHighlight = () => {
    setHighlighted(false);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswer.forEach((selectedOption, index) => {
      const correctOption = questions[index].options.find(
        (option) => option.isCorrect === true
      );
      if (selectedOption === correctOption.text) {
        score += 1;
      }
    });
    return score;
  };

  const question = questions[currentQuestion];

  if (quizFinished) {
    const score = calculateScore();
    return <Result score={score} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />;
  }

  return (
    <>
      <div id="header">
        <div id="top-left">
          <img src={appLogo} alt="App Logo" />
          <p className="title color">Quiz Mania</p>
        </div>

        <div id="top-right">
          <p className="color">Choose a theme:</p>
          <img
            className="theme-logo"
            onClick={handleThemeClick}
            src={logo}
            alt=""
          />
        </div>
      </div>

      <div id="body" style={toggleTheme}>
        <div id="quiz-box" style={divTheme}>
          <div className="question-no">{`${currentQuestion + 1}`} / 5 </div>
          <p style={{ color: Highlighted ? 'red' : 'white'}} className="question">
            {question.text}
          </p>

          <div id="options">
            {question.options.map((option) => (
              <div
                key={option.id}
                className="option"
                onClick={() => handleOptionClick(option.text)}
              >
                {option.text}
              </div>
            ))}
          </div>
          <div id="highlighter">
            <div
              className="highlight"
              onClick={highlightToggle}
            >
              Highlight
            </div>
            <div
              className="rem-highlight"
              onClick={removeHighlight}
            >
              Remove Highlight
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionBox;
