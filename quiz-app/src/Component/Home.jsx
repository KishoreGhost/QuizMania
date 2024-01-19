import React, { useState, useMemo } from "react";
import appLogo from "../assets/AppLogo.png";
import lightModeLogo from "../assets/light_mode.png";
import darkModeLogo from "../assets/dark_mode.png";
import QuestionBox from "./QuestionBox";

function Home(props) {
  const {darkTheme,setDarkTheme} = props
  const [start, setStart] = useState(false)
  const [logo, setLogo] = useState(lightModeLogo);

  const handleThemeClick = () => {
    setDarkTheme(!darkTheme);
    setLogo(darkTheme ? darkModeLogo : lightModeLogo);
  };

  const handleStartNow = () => {
    setStart(true)
  }

  const toggleTheme = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "black" : "white",
      color: darkTheme ? "white" : "black"
    };
  }, [darkTheme]);

  if (start) {
    return <QuestionBox darkTheme={darkTheme} setDarkTheme={setDarkTheme} />;
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
            alt="Theme Logo"
          />
        </div>
      </div>

      
      <div id="body" style={toggleTheme}>
        <h2 className="body-title">Quiz Mania</h2>
        <p className="desc">
          Quiz Mania is a dynamic and engaging quiz application designed to <br />
          challenge and entertain users of all ages. Whether you're a trivia{" "}
          <br />
          enthusiast, a student preparing for exams, or just looking to test{" "}
          <br />
          your knowledge on various topics, Quiz Mania has you covered.
        </p>
        <button className="start-button color" onClick={handleStartNow}>Start Now</button>
      </div>
    </>
  );
}

export default Home;
