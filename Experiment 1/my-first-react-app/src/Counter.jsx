/* 
    Imported useState, a useful function, from React
    to set the initial state of the count.
*/
import {useState} from 'react'

/* 
    The Counter function in this Counter.jsx file 
    is exported to App.jsx, such that the Counter component
    that is returned by this Counter function can be implemented
    for the App.jsx file before the App function in the App.jsx file
    is later exported and imported to the main.jsx file! 
*/
export default function Counter(){

    /* 
        Sets the initial count to 0 using useState function
        and declares a function setCount
    */
    const [count, setCount] = useState(0)

    /* Returns a Counter component that is created here.*/
    return (

        /* 
            Counter component consist of a message 
            displaying the number of times the button was 
            clicked and a button that when clicked 
            calls the setCount function to increment the count
            by 1. 
        */
        <div>
            <p> You clicked {count} times! </p>
            <button onClick={ () => setCount(count + 1) }>
                Click me
            </button>
        </div>

    )

}