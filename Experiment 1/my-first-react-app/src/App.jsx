/* 
  Imported the styles from App.css file 
  and the Counter component with its functionality 
  from the Counter.jsx file!
*/
import './App.css'
import Counter from './Counter'

function App() {

  /* 
    The App function in the App.jsx file loads this 
    larger component with all the elements to display 
    for the website, which includes the headings text
    and the multiple Counter components! 

    The App function is exported and imported to the 
    main.jsx file!
  */
  return (
    /*
      Larger container that contains all of the content to display 
      for the website is what is returned by this App function! 
    */
    <div className="App">
      <h1>First React Experiment</h1>
      <h2>Counter 1: </h2>
      <Counter />

      <h2>Counter 2: </h2>
      <Counter />

      <h2>Counter 3: </h2>
      <Counter />
    </div>
  )
}

export default App
