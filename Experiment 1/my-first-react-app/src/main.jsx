/* 
  Imported StrictMode from React such that 
  it re-render an extra time to find any potential issues
  with the React code used to develop the components' 
  functionality! 
*/
import { StrictMode } from 'react'

/* 
  Imported createRoot from React such that it creates 
  a root to display the React components inside 
  a browser Document Object Model node, which is the div 
  tag with the id of "root" in the index.html file! 
*/
import { createRoot } from 'react-dom/client'

/* 
  Imported the styles from the index.css file!
*/
import './index.css'

/* 
  Imported the entire App component from the App.jsx file
  with all of the content to display on the website!
*/
import App from './App.jsx'

/* 
  Creates a connection between this element and the 
  div tag in the index.html, such that the imported App 
  component with the following styles from index.css 
  are applied on to the index.html. Then, the render 
  function is called to render the React components
  to display the content for the website!
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
