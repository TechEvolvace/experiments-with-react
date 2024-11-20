const Details = () => {

    return (
        <>
            <div style={{backgroundColor: "#E0FFFF", borderRadius: "25px", padding: "0.2em 0.8em"}}>
                <h2>This is the Details component, containing all the details for Experiment 2 as seen below!</h2>
                <h2 style={{fontSize: "1.3em"}}>
                    Goals of Experiment 2: 
                </h2>
                <ol style={{fontSize: "1.1em"}}>
                    <li><p>Investigate how the system of importing and exporting Components work</p></li>
                    <li><p>Figure out the rules to the components importing and exporting system with React</p></li>
                    <li>
                        <p>
                            Demonstrate efficient import and/or exports of multiple components and make comments about 
                            how each significant piece of code helps make importing multiple components much more easier
                            and take up less lines of code!
                        </p>
                    </li>
                    <li>
                        <p>
                            Demonstrate imports of external CSS files for designing appearance of React components!
                        </p>
                    </li>
                    <li>
                        <p>
                            Demonstrate implementation of inline-CSS styling for designing the appearance of React components!
                        </p>
                    </li>
                </ol>
                <h2 style={{fontSize: "1.3em"}}>
                    Components:
                </h2>
                <ul style={{fontSize: "1.1em"}}>
                    <li>
                        <h3 style={{color: "green"}}>App (exported from App.jsx)</h3>
                        <p>Function: responsible for displaying content of website application!</p>
                        <p>Path: /Experiment 2/components-experiment/src/App.jsx</p>
                        <p>Imports Title and ExperimentCard components</p>
                        <p>Also imports React by default due to using React version 18!</p>
                    </li>
                    <li>
                        <h3 style={{color: "green"}}>Title (exported from Title.jsx)</h3>
                        <p>Function: displays Title for Experiment 2 on the website with an underline in green color</p>
                        <p>Path: /Experiment 2/components-experiment/src/Components/Title.jsx</p>
                        <p>Imports React by default due to using React version 18!</p>
                        <p>Uses inline-CSS styling to apply styling for Title component!</p>
                    </li>
                    <li>
                        <h3 style={{color: "green"}}>ExperimentCard (exported from ExperiemntCard.jsx)</h3>
                        <p>Function: Contains the details of the experiment in a card displayed on the website</p>
                        <p>Path: /Experiment 2/components-experiment/src/Components/ExperimentCard.jsx</p>
                        <p>Imports Details component</p>
                        <p>Also imports ExperimentCard.css file to apply styling for ExperimentCard component!</p>
                        <p>Also imports React by default due to using React version 18!</p>
                    </li>
                    <li>
                        <h3 style={{color: "green"}}>Details (exported from Details.jsx)</h3>
                        <p>Function: Content of the details for Experiment 2 that gets displayed on the website!</p>
                        <p>Path: /Experiment 2/components-experiment/src/Components/Card Components/Card Components.jsx</p>
                        <p>Imports React by default due to using React version 18!</p>
                        <p>Uses inline-CSS styling to apply styling for Details component!</p>
                    </li>
                </ul>
            </div>  
        </>
    )

}

export default Details;