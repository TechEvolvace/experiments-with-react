import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <>
            <nav>
                {/* Navigation Links */}
                <Link to="/">
                    Home
                </Link>

                <Link to="/About">
                    About
                </Link>

                <Link to="/Process">
                    Process
                </Link>
            </nav>
        </>
    )
}

export default Navbar;