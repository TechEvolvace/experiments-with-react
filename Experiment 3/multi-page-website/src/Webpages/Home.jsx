/* Currently not used yet */

import { HomeTitle } from "./Home_Components/home.js";
import styles from './Home.module.css';

const Home = () => {

    /* Returns all needed content to display in Home page */
    return (
        <>
            <h1 id={`${styles.title}`}>Welcome to the Home page!</h1>
            <p className={`${styles.content}`}>
                The home page is the landing page for React Experiment 3 website!
            </p>
            <div className={`${styles.content}`}>
                <p>
                    Currently, we need to include a real navbar with navigation links,
                    but you can adjust the current URL of this website to a specific 
                    webpage by adding the following:    
                </p>
                <ul>
                    <li>For the Home page: add /</li>
                    <li>For the About page: add /About</li>
                    <li>For the Process page: add /Process</li>
                </ul>
            </div>
             
            <HomeTitle message={"Home Title successfully implemented!"} />
        </>
    );
};

export default Home;