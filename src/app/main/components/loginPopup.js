"use client"
import { useState } from 'react';
import styles from './styles/LoginPopup.module.css';
import { ImCross } from "react-icons/im";

const LoginPopup = (data) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        data.handleLoginPopup();
        data.handleLogin();
    }

    return (
        <>
        {data.isLoginPopupOpen && <div className={styles.model}>
            <div className={styles.modalContent}>
                <button className={styles.cancelbtn} onClick={() => data.handleLoginPopup()}><ImCross style={{color: 'green', width: '20px', height: '20px'}} /></button>
                
                <div className={styles.firstHalf}>
                    <h1 style={{color: 'grey',fontSize: '50px'}}>Hotels&Co</h1>
                    <div className={styles.circle1}/>
                    <div className={styles.circle2}/>
                </div>
                
                <div className={styles.secondHalf}>
                    <div className={styles.modelHeader}><h1>Log in</h1></div>
                    <form className={styles.loginForm} action="/">
                        <label className={styles.formLabel}>Username</label>
                        <input className={styles.input} type="text" 
                            placeholder="Enter Username"
                            onChange={(e) => setUsername(e.target.value)} 
                            name="uname" required/>

                        <label className={styles.formLabel}>Password</label>
                        <input className={styles.input} type="password" 
                            placeholder="Enter Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            name="psw" required/>

                        <button className={styles.button} onClick={() => handleLogin()}>Login</button>
                        <div className={styles.rememberMeRow}><input className={styles.input} type="checkbox"/>
                        <p>Remember me</p></div>
                    </form>
                </div>
            </div>
            
        </div> }
        </>
    );
}

export default LoginPopup;