/* Currently not used yet */

import { HomeTitle } from "./Home_Components/home.js";
import "./Home.css";

const Home = () => {

    /* Returns all needed content to display in Home page */
    return (
        <>
            <h1>Welcome to the Home page!</h1>
            <HomeTitle message={"Home Title successfully implemented!"} />

            <HomeTitle message={"We got the props verified!"} />
        </>
    );
};

export default Home;