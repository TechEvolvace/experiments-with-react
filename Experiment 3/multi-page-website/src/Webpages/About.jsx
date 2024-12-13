/* Currently not used yet */
import styles from './About.module.css';
import Navbar from "../Navbar.jsx";

const About = () => {

    /* Returns all needed content to display in About page */
    return (
        <>
            <Navbar />
            <h1 id={`${styles.title}`}>Welcome to the About page!</h1>
            <div className={`${styles.content}`}>
                <p>
                    The About page will describe the goals and purpose of React 
                    Experiment 3! 
                </p>
                <p>
                    At the moment, it&apos;s currently in progress. 
                </p>
            </div>
        </>
    )
}

export default About;