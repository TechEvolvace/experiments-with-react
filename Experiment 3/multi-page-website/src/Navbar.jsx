import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    
    return (
        <nav>
            {/* Navigation Links */}
            <Link to="/" className="link-button" >
                Home
            </Link>

            <Link to="/About" className="link-button">
                About
            </Link>

            <Link to="/Process" className="link-button">
                Process
            </Link>
        </nav>
    )
}

export default Navbar;