import React ,{useState, useMemo}from "react";
import questions from "../questions";

const Result = (props) => {
  const { score, darkTheme, setDarkTheme } = props;
  const percentage = (score / questions.length) * 100;
  // const handleThemeClick = () => {
  //   setDarkTheme(!darkTheme);
  //   setLogo(darkTheme ? darkModeLogo : lightModeLogo);
  // };

  // const handleStartNow = () => {
  //   setStart(true);
  // };

  // const toggleTheme = useMemo(() => {
  //   return {
  //     backgroundColor: darkTheme ? "black" : "white",
  //     color: darkTheme ? "white" : "black",
  //   };
  // }, [darkTheme]);

  return (
    <>
      <div id="result">
        <h2>Your Quiz Result</h2>
        <p>{`Score: ${score} / ${questions.length}`}</p>
        <p>{`Percentage: ${percentage}%`}</p>
      </div>
    </>
  );
};

export default Result;
