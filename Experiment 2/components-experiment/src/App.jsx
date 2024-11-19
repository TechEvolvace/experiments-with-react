// Imports styling for the App
import './App.css'

/* 
  I can import as many of the multiple components
  from each of the JSX files under Components folder
  directly from the Components.js file with just one 
  line of code! It's because all of the Components 
  under the Components folder are exported 
  from the Components.js file after importing each 
  of the Component from each of the JSX file under 
  the Components folder, where they are originally 
  created and exported from!
*/
import { Title } from "./Components/Components.js"

/* 
  This App component contains all the content 
  shown on the website for Experiment 2!
*/
function App() {
  
  return (
    <>
      <Title />
    </>
  )
}

/* Exports App component for main.jsx file to import it! */
export default App
