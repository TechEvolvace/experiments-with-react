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

/* 
    This Experiment_Card component is the card displayed on the
    website with the Details component inside! 
*/
const Experiment_Card = () => {
    return (
        <>
            <div className="experiment-card">
                <h2>This is the Experiment Card component, looks like a card containing details about Experiment 2!</h2>
                <Details />
            </div>
        </>
    )
}

/* Exporting the Experiment_Card component out of this JSX file! */
export default Experiment_Card;