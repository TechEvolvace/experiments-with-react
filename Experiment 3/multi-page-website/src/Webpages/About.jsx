/* Currently not used yet */
import styles from './About.module.css';

const About = () => {

    /* Returns all needed content to display in About page */
    return (
        <>
            <h1 id={`${styles.title}`}>Welcome to the About page!</h1>
            <p className={`${styles.content}`}>
                The About page will describe the goals and purpose of React 
                Experiment 3! 
            </p>
            <p className={`${styles.content}`}>
                At the moment, it&apos;s currently in progress. 
            </p>
        </>
    )
}

export default About;