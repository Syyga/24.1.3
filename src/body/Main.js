import CheckMission from "./Right-Container/CheckMission.js";
import "./Main.css";
import LeftContainer from "./Left/LeftContainer.js";
import React, { useState } from "react";

function Main() {
  const [Exp, setExp] = useState(0);
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <div>
            <LeftContainer Exp={Exp} setExp={setExp} />
          </div>
          <div>
            <CheckMission />
          </div>
        </div>
      </div>
      <div>test:{Exp}</div>
    </>
  );
}

export default Main;
