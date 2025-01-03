import React, { useContext, useState } from "react";
import "./CheckMission.css";
import checkbox from "../../assets/checkbox.png";
import X from "../../assets/Vector.png";

function CheckMission({ Exp, setExp }) {
  const [missions, setMissions] = useState([false, false, false, false]);

  const addExp = (i) => {
    setExp((prev) => Math.min(Math.max(prev + i, 0), 100));
  };

  const toggleMission = (index) => {
    setMissions((prevMissions) =>
      prevMissions.map((mission, i) => {
        if (i === index) {
          const newMissionState = !mission;
          if (newMissionState) {
            addExp(10);
            return !mission;
          } else {
            addExp(-10);
          }
        } else {
          return mission;
        }
      })
    );
  };

  return (
    <>
      <div>
        <p className="p-text">오늘의 미션을 수행하고 포인트를 얻어보세요!</p>
        <div className="gridContainer">
          <div
            className={missions[0] ? "grid-item1" : "grid-item2"}
            onClick={() => toggleMission(0)}
            style={{ cursor: "pointer" }}
          >
            <img className="check" src={missions[0] ? checkbox : X} />
            출석체크 미션
            <div id={missions[0] ? "checkcon" : "con"}>
              {missions[0] ? "+10 P 확득!" : "아직 안했어요"}
            </div>
          </div>
          <div
            className={missions[1] ? "grid-item1" : "grid-item2"}
            onClick={() => toggleMission(1)}
            style={{ cursor: "pointer" }}
          >
            <img className="check" src={missions[1] ? checkbox : X} />
            주제 답글 미션
            <div id={missions[1] ? "checkcon" : "con"}>
              {missions[1] ? "+10 P 확득!" : "아직 안했어요"}
            </div>
          </div>
          <div
            className={missions[2] ? "grid-item1" : "grid-item2"}
            style={{ cursor: "pointer" }}
            onClick={() => toggleMission(2)}
          >
            <img className="check" src={missions[2] ? checkbox : X} />
            공부 인증하기 미션
            <div id={missions[2] ? "checkcon" : "con"}>
              {missions[2] ? "+10 P 확득!" : "아직 안했어요"}
            </div>
          </div>
          <div
            className={missions[3] ? "grid-item1" : "grid-item2"}
            style={{ cursor: "pointer" }}
            onClick={() => toggleMission(3)}
          >
            <img className="check" src={missions[3] ? checkbox : X} />
            질문에 답변해보기
            <div id={missions[3] ? "checkcon" : "con"}>
              {missions[3] ? "+10 P 확득!" : "아직 안했어요"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckMission;
