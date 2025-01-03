import image from "./image7.png"
import "./Level.css"

function Level () {
    return (
        <>
        <div className="do-mission">
            미션해라~
        </div>
        <div className="level-container">
            <div className="level-image">
                <img src={image} alt="1"></img><br></br>
                Lv.{} {}~~
            </div>
                
        </div>
        </>
    )
}

export default Level;