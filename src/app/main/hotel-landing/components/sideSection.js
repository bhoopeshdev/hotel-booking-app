"use client"
import styles from './styles/sideSection.module.css';
import { MdOutlineBedroomChild } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { RiVipCrownFill } from "react-icons/ri";
import { useEffect,useState } from 'react';
import CustomDatePicker from './customDatePicker';


async function fetchReviewData() {
    const reviewData = [
        {
            name: "John Doe",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
            date: "2022-01-01",
            rating: 4.5
        },
        {
            name: "Jane Smith",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
            date: "2022-01-01",
            rating: 4.0
        },
        {
            name: "Sam Wilson",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
            date: "2022-01-01",
            rating: 5.0
        },
        {
            name: "Maria Rodriguez",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
            date: "2022-01-01",
            rating: 4.8
        },
    ]
    return reviewData
}

/**
 * SideSection: A component which renders the price details of a hotel
 * @returns {React.ReactElement} The component element
 */
const SideSection = () => {

    const [reviewData, setReviewData] = useState([]);
    const [guests, setGuests] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchReviewData();
            setReviewData(data);
        };
    
        fetchData();
    }, []);

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
                        <CustomDatePicker />
                    </div>
                    <div className={styles.occupancySection}>
                        <p className={styles.occupancyText}>Guests</p>
                        <input
                            type="number"
                            id="guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            min="1"
                            max="4"
                            placeholder="Guests"
                            className={styles.occupancyInput}
                        />
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
                    {reviewData.map((review,index) => (
                        <div className={styles.review} key={index}>
                            <div className={styles.reviewHeader}>
                                <div>
                                    <div className={styles.reviewName}>{review.name}</div>
                                    <div className={styles.reviewDate}>Reviewed on {review.date}</div>
                                </div>
                                <div className={styles.individualRating}>{review.rating}</div>
                            </div>
                            <div className={styles.reviewContent}>
                               {review.feedback}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )       
}

export default SideSection;