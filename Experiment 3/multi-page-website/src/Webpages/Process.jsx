/* Currently not used yet */
import styles from "./Process.module.css";

const Process = () => {

    /* Returns all needed content to display in Process page */
    return (
        <>
            <h1 id={`${styles.title}`}>Welcome to the Process page!</h1>
            <p>
                This Process page will contain the diagrams and code snippets
                of the code used to build this website for React Experiment 3!
                It&apos;s currently in progress.
            </p>
        </>
    )
}

export default Process;