"use client"
import { useState,useEffect } from 'react';
import Link from 'next/link';
import styles from './styles/Navbar.module.css';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScreenWide, setIsScreenWide] = useState(false);

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
            <button className={styles.loginButtom}>Login</button>
          </div>
        </div>
      )}
      
      </div>

  );
};

export default Navbar;