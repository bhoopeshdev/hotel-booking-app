"use client"
import { useState,useEffect } from 'react';
import Link from 'next/link';
import styles from './styles/Navbar.module.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { toggle } from '@nextui-org/theme';

const Navbar = (data) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScreenWide, setIsScreenWide] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      console.log("handleResize");
      if (window.innerWidth >= 768) {
        setIsScreenWide(true);
        setIsOpen(true);
      } else {
        setIsScreenWide(false);
        setIsOpen(false);
      }
    };

    // Call handleResize initially
    handleResize();
  
    // Add event listener to watch for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  // Toggle the menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLoginPopup = () => {
    if(!isScreenWide) {
      toggleMenu();
    }
    data.handleLoginPopup();
  };

  const logout = () => {
    toggleProfileDropdown();
    data.handleLogin();
  };

  return (
    <div className={styles.navbar}>

      <div className={styles.navbarIconContainer}>
        <Link href="/main">
          <p className={styles.logo}>Hotel&Co</p>
        </Link>
        {/* conditional rendering of Hamburger icon if isOpen is false*/}
        {!isScreenWide && (
          <RxHamburgerMenu className={styles.hamburgerIcon} onClick={toggleMenu} />
        )}
      </div>
      {isOpen && (
        <div className={styles.navbarMenuContainer}>
          <ul className={styles.navbarMenu}>
            <li><Link href="/main">Home</Link></li>
            <li><Link href="/main/about">About</Link></li>
            <li><Link href="/main/contact">Contact</Link></li>
          </ul>
          <div className={styles.navbarRight}>
            {
              !data.isLoggedIn ? 
              <button className={styles.loginButtom} onClick={handleLoginPopup}>Login</button> :
              <div className={styles.profileContainer}>
                <div className={styles.profileDropdownIconContainer}>
                  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className={styles.profileIcon} alt="Profile Icon" onClick={toggleProfileDropdown}/>
                  <p className={styles.profileNameNavBar}>John Doe</p>
                </div>
                { isProfileDropdownOpen && <div className={styles.profileDropdown}>

                    <div className={styles.profileDetails}>
                      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className={styles.profileIcon} alt="Profile Icon"/>
                      <p className={styles.userName}>John Doe</p>
                    </div>
                    
                    <ul>
                      <li>Update Profile</li>
                      <li>Settings</li>
                      <li onClick={() => logout()}>Logout</li>
                    </ul>

                </div>
                }
              </div>
            }
          </div>
        </div>
      )}
      
      </div>

  );
};

export default Navbar;