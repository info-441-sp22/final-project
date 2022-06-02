import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Nav';
import Footer from './Footer';
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link, Outlet, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';
import { LoginService } from './services/LoginService';

const DEBUG = true;
export const BASEPOINT = (DEBUG) ? 'http://localhost:3000' : 'https://www.devdeck.me';

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [toastMessage, setToastMessage] = useState();
    const [toastState, setToastState] = useState('');
    const [credentials, setCredentials] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/home');
        }

        if (isLoggedIn) {
            // console.log('setting credentials...');
            setCredentials(LoginService.getUserCredentials());
        } else {
            // console.log('clearing credentials...');
            setCredentials();
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (toastMessage) {
            switch (toastState) {
                case 'error':
                    toast.error(toastMessage);
                    return;
                case 'info':
                    toast.info(toastMessage);
                    return;
            }
        }
    }, [toastMessage]);

    return (
        <div className="appContainer">
            <NavBar
                isLoggedIn={isLoggedIn}
                credentials={credentials}
                setLoggedInCallback={setLoggedIn}
                setToastMessageCallback={setToastMessage}
                setToastStateCallback={setToastState}
            />
            <Outlet context={
                { isLoggedIn, setLoggedIn, credentials, setCredentials }
            } />
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default App;