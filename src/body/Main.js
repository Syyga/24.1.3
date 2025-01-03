import CheckMission from "./Right-Container/CheckMission.js";
import "./Main.css";
import LeftContainer from "./Left/LeftContainer.js"

function Main () {
    return (
        <>
            <div className="mainContainer">
                <div className="container">
                    <div>
                        <LeftContainer />

                    </div>
                    <div>
                        <CheckMission />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;