/* 
    Title component with appearance designed by inline-CSS 
    in the form of an object with CSS properties mapped to specific 
    values. 
*/
const Title = () => {

    return(
        <h1 style={{color: "green", fontSize: "2em", flex: "flex", textDecoration: "underline 3px", justifySelf: "center"}}>
            Title for Experiment 2
        </h1>
    )
}

/* 
    Title component is exported from this file, so the 
    Component.js file can import the Title component. 
*/
export default Title