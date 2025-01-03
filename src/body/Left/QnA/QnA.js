import "./QnA.css";

function QnA() {
  return (
    <>
      <div className="qna">
        <div>질문에 답한 수</div>
        <div>
          <span className="currnt-qna">{}</span>회
        </div>
      </div>
      <div className="qna">
        <div>댓글 단 수</div>
        <div>
          <span className="currnt-qna">{}</span>회
        </div>
      </div>
    </>
  );
}

export default QnA;
