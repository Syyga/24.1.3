import "./Menu.css";
import aa from "../../assets/Group.png";
import bb from "../../assets/topic.png";
import cc from "../../assets/ocean.png";
import dd from "../../assets/ss.png";

function Menu () {
    return (
        <>
            <div id="menu">

            
                <div className="menu-item">
                    <img src={aa} ></img> 오늘의 미션
                </div>
                <div className="menu-item">
                    <img src={bb} ></img> 주제 던지기
                </div>
                <div className="menu-item">
                    <img src={cc} ></img> 코지 바다
                </div>
                <div className="menu-item">
                    <img src={dd} ></img> 개념 공부
                </div>
            </div>
        </>
    )
}

export default Menu;