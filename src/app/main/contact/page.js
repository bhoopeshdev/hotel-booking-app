import Image from 'next/image';
import styles from './styles/Contact.module.css'
import { PiAddressBook,PiPhone  } from "react-icons/pi";
import { CiMail,CiInstagram,CiTwitter,CiFacebook,CiYoutube } from "react-icons/ci";

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heroSection}>
                <p className={styles.contactUsText}>Contact Us</p>
                <p className={styles.contactUsSubText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
            </div>
            
            <div className={styles.tilesSection}>
                <form className={styles.formSection}>
                    <input type="text" placeholder="Name"/> 
                    <input type="text" placeholder="Email"/> 
                    <input type="text" placeholder="Subject"/> 
                    <textarea placeholder="Message"/>
                    <button type="submit">Submit</button>
                </form>
                <div className={styles.contactDetailsSection}>
                    <p className={styles.contactDetailsHeadText}>Get in Touch</p>
                    <p className={styles.contactDetailsSubText}>Lorem ipsum dolor sit amet, conse adipiscing elit.
                    Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat </p>
                    <div className={styles.contactDetailsSubSection }>
                        <PiAddressBook className={styles.contactDetailsIcons}/>
                        <p>123 Web Street, Code City</p>
                    </div>
                    <div className={styles.contactDetailsSubSection }>
                        <PiPhone  className={styles.contactDetailsIcons}/>
                        <p> +123-456-7890</p>
                    </div>
                    <div className={styles.contactDetailsSubSection }>
                        <CiMail  className={styles.contactDetailsIcons}/>
                        <p>contact@example.com</p>
                    </div>
                    <div className={styles.contactDetailsSeparator}></div>
                    <p className={styles.contactDetailsSubText}>Follow Us</p>
                    <div className={styles.contactDetailsSubSection }>
                        <CiInstagram  className={styles.contactDetailsIcons}/>
                        <CiFacebook  className={styles.contactDetailsIcons}/>
                        <CiTwitter  className={styles.contactDetailsIcons}/>
                        <CiYoutube  className={styles.contactDetailsIcons}/>
                    </div>
                </div>    
            <div/>
            </div>
        </div>
    )
}

export default Contact;