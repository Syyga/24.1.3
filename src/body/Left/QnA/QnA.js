import "./QnA.css";
import React, { useState, useEffect } from "react";

function QnA({ setExp }) {
  const [qCount, setqCount] = useState(12);
  const [aCount, setaCount] = useState(34);

  const addExp = () => {
    const cal = (qCount + aCount) / 10;
    const total = parseFloat(cal.toFixed(1));
    setExp((prev) => Math.min(Math.max(prev + total, 0), 100));
  };
  useEffect(() => {
    addExp();
  }, [qCount, aCount]);

  return (
    <>
      <div className="qna">
        <div>질문에 답한 수</div>
        <div>
          <span className="currnt-qna">{qCount}</span>회
        </div>
      </div>
      <div className="qna">
        <div>댓글 단 수</div>
        <div>
          <span className="currnt-qna">{aCount}</span>회
        </div>
      </div>
    </>
  );
}

export default QnA;
