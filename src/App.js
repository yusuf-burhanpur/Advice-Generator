import React, {useState, useEffect} from "react";
import axios from "axios";
import DividerDesktop from "./images/pattern-divider-desktop.png"
import DividerMobile from "./images/pattern-divider-mobile.png"
import Dice from "./images/icon-dice.png"
const App = () => {
  const [advice, setAdvice] = useState({id: "Loading..", advice: "Loading..."})
  const [click, setClick] = useState(true)
  const searchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice")
      setAdvice({
        id: response.data.slip.id,
        advice: response.data.slip.advice
      })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    searchAdvice()
    setClick(true)
  }, [click])
  const clickHandler = () => {
    setClick(false)
  }
  return (
    <div id="main">
    <div className="main-container">
        <h6>ADVICE #{advice.id}</h6>
        <p>"{advice.advice}"</p>
        <img src={window.screen.width >= 375 && window.screen.width <= 768 ? DividerMobile : DividerDesktop } alt="..." className="divider"/>
        <button type="button" className="button" onClick={clickHandler}><img src={Dice} alt="dice-logo" /></button>
    </div>
    </div>
  );
}

export default App;
