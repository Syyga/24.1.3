import Level from "./Level/Level.js";
import Xp from "./Xp/Xp.js";
import QnA from "./QnA/QnA.js";
import "./LeftContainer.css";
import React, { useState } from "react";

function LeftContainer({ Exp, setExp }) {
  return (
    <>
      <div className="leftcontainer">
        <Level Exp={Exp} />
        <Xp Exp={Exp} setExp={setExp} />
        <QnA />
      </div>
    </>
  );
}

export default LeftContainer;
