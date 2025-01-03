import "./Menu.css";
import aa from "../../assets/Group.png";
import bb from "../../assets/topic.png";
import cc from "../../assets/ocean.png";
import dd from "../../assets/ss.png";

function Menu() {
  return (
    <>
      <div id="menu">
        <div className="menu-item">
          <div>
            <img src={aa}></img>
          </div>
          <div>오늘의 미션</div>
        </div>
        <div className="menu-item">
          <div>
            <img src={bb}></img>
          </div>
          <div>주제 던지기</div>
        </div>
        <div className="menu-item2">
          <div>
            <img src={cc}></img>
          </div>
          <div>코지 바다</div>
        </div>
        <div className="menu-item2">
          <div>
            <img src={dd}></img>
          </div>
          <div>개념 공부</div>
        </div>
      </div>
    </>
  );
}

export default Menu;
