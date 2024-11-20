import "./ExperimentCard.css"

/* 
    Also possible to import components exported from any 
    JavaScript file from anywhere, including inside
    subfolders, as long as you provide the correct path
    to that JavaScript file! 

    Imports the Details component from the Card Components.js
    file inside the Card Components folder! 
*/
import { Details } from "./Card Components/Card Components.js"

const Experiment_Card = () => {
    return (
        <>
            <div className="experiment-card">
                <h2>Experiment Card</h2>
                <Details />
            </div>
        </>
    )
}

export default Experiment_Card;