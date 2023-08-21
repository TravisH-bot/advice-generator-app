import { useState, useEffect } from "react";
import axios from "axios";
import desktopDivider from "../images/pattern-divider-desktop.svg";
import mobileDivider from "../images/pattern-divider-mobile.svg";
import die from "../images/icon-dice.svg";

const AdviceCard = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");

    const advice = await response.data.slip;
    console.log(advice);
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="advice-container">
      <h4>Advice #{advice.id}</h4>
      <h2>"{advice.advice}"</h2>
      <picture className="divider">
        <source
          className="desktop-divider"
          media="(min-width: 1000px)"
          srcSet={desktopDivider}
        ></source>
        <img
          className="mobile-divider"
          src={mobileDivider}
          alt="mobile dividing graphic"
        ></img>
      </picture>
      <button type="submit" onClick={getAdvice} className="die">
        <img src={die} alt="dice graphic for button"></img>
      </button>
    </div>
  );
};

export default AdviceCard;
