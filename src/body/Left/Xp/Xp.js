import "./Xp.css";

function Xp({ Exp, setExp }) {
  const addExp = (i) => {
    setExp((prev) => Math.min(Math.max(prev + i, 0), 100));
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
