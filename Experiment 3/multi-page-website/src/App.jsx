// import './App.css'

// This works because the index.js inside Webpages export the React components to here. 
// import {Home, About, Process} from "./Webpages";

// This works because it directly access the Home component stored in this location specified in this absolute path.
import {Home, About, Process} from "./Webpages/webpages.js";
import "./App.css";

function App() {

  return (
    <>
      <h1>Experiment 2: Multipage Website with Functional Page Routing!</h1>
      <Home />
      <About />
      <Process />
    </>
  )
}

export default App;
