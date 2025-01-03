import Level from "./Level/Level.js"
import Xp from "./Xp/Xp.js"
import QnA from "./QnA/QnA.js"
import "./LeftContainer.css"

function LeftContainer () {
    return (
        <>
            <div className="leftcontainer">
                
                <Level />
                <Xp />
                <QnA />
            </div>
        </>
    )
}

export default LeftContainer;