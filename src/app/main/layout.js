"use client"
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import LoginPopup from "./components/loginPopup";
import {useState} from "react";

import styles from './styles/layout.module.css';

const Layout = ({children}) => {

    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginPopup = () => {
        setIsLoginPopupOpen(!isLoginPopupOpen);
    }

    const handleLogin = () => {
        console.log("handleLogin");
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div className={styles.layoutWrapper}>
            
            <Navbar 
                handleLoginPopup={handleLoginPopup} 
                isLoggedIn={isLoggedIn}
                handleLogin={handleLogin}
            />
            <div className={styles.contentWrapper}>
                <LoginPopup 
                    isLoginPopupOpen={isLoginPopupOpen} 
                    handleLoginPopup={handleLoginPopup}
                    isLoggedIn={isLoggedIn}
                    handleLogin={handleLogin}
                />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout;