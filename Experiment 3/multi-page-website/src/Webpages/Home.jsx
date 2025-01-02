/* Currently not used yet */

import { HomeTitle } from "./Home_Components/home.js";
import styles from './Home.module.css';

import Navbar from "../Navbar.jsx";

const Home = () => {

    /* Returns all needed content to display in Home page */
    return (
        <>
            <Navbar />
            <HomeTitle message={"Welcome to Experiment 3's Home Page!"} />

            <div className={`${styles.content}`}>
                <p>
                    Currently, React Experiment 3&apos;s website has a functional navbar!  
                </p>
                <p>
                    I will be working on the appearance and responsive design of the React Experiment 3 over 
                    the next couple of days!
                </p>
            </div>
            
        </>
    );
};

export default Home;