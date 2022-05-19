import { Link, Outlet } from "react-router-dom";
import NavBar from './Nav';
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/home');
        }
    });

    return (
        // <div>
        <div className="appContainer">
            {/* <h1>DevDeck</h1> */}
            <NavBar />
            {/* { <nav>
                <Link to="/home">Home</Link> |{" "}
                <Link to="/profile">Profile</Link> |{" "}
                <Link to="/project">Project Details</Link>
            </nav> */}
            <Outlet />
        </div>
    )
}