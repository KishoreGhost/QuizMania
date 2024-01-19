import { useState } from 'react'
import './App.css'
import Home from "./Component/Home"
import QuestionBox from "./Component/QuestionBox"
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <Home darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      {/* <QuestionBox /> */}
    </>
  )
}

export default App
