import React, { useState } from "react";
import "./Xp.css";

function Xp() {
  const [Exp, setExp] = useState(0);

  const addExp = (i) => {
    setExp((prev) => Math.max(Math.min(prev + i, 100), 0));
  };

  return (
    <>
      <div className="xp">
        <div>코딩이 학습 레벨</div>
        <div className="exp-container">
          <div
            className="exp-bar"
            style={{
              width: `${Exp}%`,
            }}
          ></div>
        </div>
        <div className="exp-text">
          <span className="current-exp">{Exp}</span>/100P
        </div>
        <button onClick={() => addExp(10)}>+</button>
        <button onClick={() => addExp(-10)}>-</button>
      </div>
    </>
  );
}

export default Xp;
