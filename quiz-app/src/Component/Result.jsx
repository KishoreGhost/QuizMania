import React, { useState } from "react";
import questions from "../questions";
import QuestionBox from "./QuestionBox";
import appLogo from "../assets/AppLogo.png";
import lightModeLogo from "../assets/light_mode.png";
import darkModeLogo from "../assets/dark_mode.png";

const Result = (props) => {
  const { score, darkTheme, setDarkTheme } = props;
  const percentage = (score / questions.length) * 100;

  const [restart, setRestart] = useState(false);
  const [logo, setLogo] = useState(lightModeLogo);

  const handleThemeClick = () => {
    setDarkTheme(!darkTheme);
    setLogo(darkTheme ? lightModeLogo : darkModeLogo);
  };

  const changeResBackground = () => {
    return {
      backgroundColor: darkTheme ? "black" : "white",
      color: darkTheme ? "white" : "black",
    };
  };

  const handleRestart = () => {
    setRestart(true);
  };

  if (restart) {
    return <QuestionBox darkTheme={darkTheme} setDarkTheme={setDarkTheme} />;
  }

  return (
    <>
      <div id="header">
        <div id="top-left">
          <img src={appLogo} alt="" />
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
      <div id="result" style={{ backgroundColor: darkTheme ? "white" : "black" ,
    color: darkTheme ? "black" : "white" }}>    
        <h2 className="quiz-result">Your Scores:</h2>
        <p className="score">{`Score: ${score} / ${questions.length}`}</p>
        <p className="score">{`Percentage: ${percentage}%`}</p>
      </div>

      <div id="restart-div" style={changeResBackground()} onClick={handleRestart}>
        <div className="restart">Restart</div>
      </div>
    </>
  );
};

export default Result;
