import level1 from "./image7.png";
import "./Level.css";
import level2 from "../../../assets/level2.png";
import level3 from "../../../assets/level3.png";
import level4 from "../../../assets/level4.png";
import level5 from "../../../assets/level5.png";
import level0 from "../../../assets/level0.png";
import React, { useState, useEffect } from "react";

function Level({ Exp }) {
  const [currentLevel, setLevel] = useState({});

  useEffect(() => {
    if (Exp >= 80)
      setLevel({
        num: 5,
        content: "으아앙",
        text: "악마",
        img: level5,
      });
    else if (Exp >= 60)
      setLevel({
        num: 4,
        content: "크앙",
        text: "괴물",
        img: level4,
      });
    else if (Exp >= 40)
      setLevel({
        num: 3,
        content: "난 프로~",
        text: "어른",
        img: level3,
      });
    else if (Exp >= 20)
      setLevel({
        num: 2,
        content: "난 귀여워",
        text: "귀요미",
        img: level2,
      });
    else if (Exp > 0)
      setLevel({
        num: 1,
        content: "미션하자~",
        text: "아기",
        img: level1,
      });
    else
      setLevel({
        num: 0,
        content: "잘못슴다?",
        text: "이병",
        img: level0,
      });
  }, [Exp]);

  return (
    <>
      <div className="do-mission">{currentLevel.content}</div>
      <div className="level-container">
        <div className="level-box">
          <img className="level-image" src={currentLevel.img} alt="1"></img>
          <br></br>
          Lv.{currentLevel.num} {currentLevel.text} 코딩이
        </div>
      </div>
    </>
  );
}

export default Level;
