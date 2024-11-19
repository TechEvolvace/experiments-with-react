/* 
    Components.js file imports every 
    component that were exported from each
    JSX file.
*/
import Title from "./Title"
import ExperimentCard from "./ExperimentCard"


/*  
    All of the components that were imported
    to this file will be exported, so I 
    can import as many of those components 
    from the Components folder as I need 
    by importing specific components from 
    this file, instead of manually importing
    each component one-by-one from each of 
    the JSX files under Components folder!
*/
export { Title, ExperimentCard }