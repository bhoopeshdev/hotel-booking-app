import Testimonial from './components/testimonial';
import styles from './styles/About.module.css';
import {
  MdOutlinePriceChange,
  MdWorkspacePremium,
  MdOutlineMobileFriendly
 } from "react-icons/md";

import {VscWorkspaceTrusted} from "react-icons/vsc";
const About = () => {
  return (
    <div className={styles.aboutContainer}>

        <div className={styles.heroSection}>
            <p className={styles.aboutUsText}>About Us</p>
            <p className={styles.aboutUsSubText}>
                Welcome to <strong>LuxuryStay Hotels</strong>, where luxury meets comfort. We are a premium hotel
                booking service that provides seamless booking experiences, connecting travelers with the most
                exclusive and luxurious hotels across the globe. Whether it's a business trip or a vacation, we ensure
                you find the perfect stay at your dream destination.
            </p>
        </div>

        {/* Why Choose Us Section */}
        <section className={styles.sectionFullWidth}>
          <h2>Why Choose Us?</h2>
          <p>
            We stand out because of our commitment to quality and customer satisfaction. From hand-picked
            hotels to personalized services, we focus on making your stay as enjoyable as possible. Choose us for:
          </p>
          <ul className={styles.whyChooseUsList}>
            <li className={styles.whyChooseUsListItem}><MdOutlinePriceChange className={styles.iconsStyle}/><p>Unbeatable prices and exclusive offers</p></li>
            <li className={styles.whyChooseUsListItem}><MdWorkspacePremium className={styles.iconsStyle}/><p>A carefully curated list of luxury hotels</p></li>
            <li className={styles.whyChooseUsListItem}><MdOutlineMobileFriendly className={styles.iconsStyle}/><p>Seamless, user-friendly booking experience</p></li>
            <li className={styles.whyChooseUsListItem}><VscWorkspaceTrusted className={styles.iconsStyle}/><p>Trusted by thousands of customers</p></li>
          </ul>
        </section>

      {/* Our Mission Section */}
      <div className={styles.sectionContainer}>
      <section className={styles.sectionText}>
        <h2>Our Mission</h2>
        <p>
          At <strong>LuxuryStay Hotels</strong>, our mission is simple: to provide the finest selection of hotel stays,
          paired with exceptional customer service, ensuring every guest has a memorable experience. We aim
          to redefine the way people book hotels by making it faster, more personalized, and hassle-free.
        </p>
      </section>
      <img className={styles.sectionImg} src="/images/mission.jpg" alt="hero" />
      </div>

      
      <div className={styles.sectionContainer}>
      {/* Our Services Section */}
      <img className={styles.sectionImg} src="/images/services.jpg" alt="hero" />
      <section className={styles.sectionText}>
        <h2>Our Services</h2>
        <ul>
          <li>Exclusive deals with top hotels worldwide</li>
          <li>24/7 customer support to handle all booking inquiries</li>
          <li>Personalized booking recommendations based on preferences</li>
          <li>Flexible payment options and easy cancellations</li>
        </ul>
      </section>
      </div>

      <Testimonial />
    </div>
  );
};

export default About;