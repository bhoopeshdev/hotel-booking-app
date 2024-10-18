import styles from './styles/sideSection.module.css';
import { MdOutlineBedroomChild } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { RiVipCrownFill } from "react-icons/ri";

/**
 * SideSection: A component which renders the price details of a hotel
 * @returns {React.ReactElement} The component element
 */
const SideSection = () => {

    return (
        <div className={styles.sideSection}>
            <div className={styles.priceSection}>
                <div className={styles.priceMainTextContainer}>
                    <p className={styles.priceMainText}>₹1000</p>
                    <p className={styles.priceMainTextCancel}>₹1200</p>
                    <p className={styles.priceSubText}>20% off</p>
                    <p className={styles.priceSubText}>+ taxes $ fees: ₹200</p>
                </div>
                <div className={styles.bookingDetailsContainer}>
                    <div className={styles.dateSection}>
                        <p className={styles.dateSectionText}>Wed,15 Oct - Fri,16 Oct</p>
                    </div>
                    <div className={styles.occupancySection}>
                        <p className={styles.occupancySectionText}>2 guests</p>
                    </div>
                </div>
                <div className={styles.roomTypeContainer}>
                    <MdOutlineBedroomChild className={styles.occupancyIcon}/>
                    <p className={styles.roomTypeText}>Standard Room</p>
                </div>

                <div className={styles.offersContainer}>
                    <p className={styles.offersHeadingText}>Your offers</p>
                    <div className={styles.checkBoxContainer}>
                        <div className={styles.checkBoxRow}>
                            <input type="checkbox" className={styles.checkBox}/>
                            <BiSolidOffer className={styles.offerIcon}/>
                            <p className={styles.offersText}>20% off on first Booking</p>
                        </div>
                        <div className={styles.checkBoxRow}>
                            <input type="checkbox" className={styles.checkBox}/>
                            <BiSolidOffer className={styles.offerIcon}/>
                            <p className={styles.offersText}>10% off on October Booking</p>
                        </div>
                        <div className={styles.separatorLine}/>
                        <div className={styles.checkBoxRow}>
                            <input type="checkbox" className={styles.checkBox}/>
                            <RiVipCrownFill className={styles.offerIcon}/>
                            <p className={styles.offersText}>5% extra off on membership</p>
                        </div>
                        <div className={styles.membershipOfferCard}>
                            <img src="/images/membership-offer.png" alt="membership offer" className={styles.membershipOfferImage}/>
                        </div>
                    </div>
                    <div className={styles.separatorLine}/>
                </div>

                <div className={styles.priceCalculatorContainer}>
                    <div className={styles.priceCalculatorRow}>
                        <p className={styles.priceCalculatorText}>Room price</p>
                        <p className={styles.priceCalculatorText}>₹1000</p>
                    </div>
                    <div className={styles.priceCalculatorRow}>
                        <p className={styles.priceCalculatorText}>Taxes & Fees</p>
                        <p className={styles.priceCalculatorText}>₹200</p>
                    </div>
                    <div className={styles.priceCalculatorRow}>
                        <p className={styles.priceCalculatorText}>Your Savings</p>
                        <p className={styles.priceCalculatorText}>-₹200</p>
                    </div>
                    <div className={styles.separatorLine}/>
                    <div className={styles.priceCalculatorRow}>
                        <p className={styles.priceCalculatorText}>Total</p>
                        <p className={styles.priceCalculatorText}>₹1200</p>
                    </div>
                </div>

                <button className={styles.bookNowButton}>Book Now</button>
                <p className={styles.termsText}>By continuing, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
            </div>

            <div className={styles.reviewSection}>
                <h2>Ratings and Reviews</h2>
                <div className={styles.ratingRowContainer}>
                    <div className={styles.ratingNumber}>4.8</div>
                    <div className={styles.numberOfRatings}>4.5K ratings</div>
                </div>
                <div className={styles.reviewContainer}>
                    <div className={styles.review}>
                        <div className={styles.reviewHeader}>
                            <div className={styles.reviewName}>John Doe</div>
                            <div className={styles.reviewDate}>Reviewed on 12th March 2022</div>
                            <div className={styles.individualRating}>4.8</div>
                        </div>
                        <div className={styles.reviewContent}>
                            I had a great time. The staff was friendly and helpful. The room was clean and comfortable. I would recommend this hotel to anyone looking for a great experience.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )       
}

export default SideSection;