// import './App.css'

// This works because the index.js inside Webpages export the React components to here. 
// import {Home, About, Process} from "./Webpages";

// This works because it directly access the Home component stored in this location specified in this absolute path.
import {Home, About, Process} from "./Webpages/webpages.js";
import "./App.css";

/* Importing main components for routing to different designated webpages! */
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  return (
    /* 
      Router is used instead of BrowserRouter because it was
      renamed when it was imported from react-router-dom package. 
    */

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Process" element={<Process />} />
        </Routes>
      </Router>
    </>

    // Old code
    // <>
    //   <h1>Experiment 2: Multipage Website with Functional Page Routing!</h1>
    //   <Home />
    //   <About />
    //   <Process />
    // </>
  )
}

export default App;
