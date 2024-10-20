"use client"
import { useEffect,useState } from 'react';
import styles from './styles/mainSection.module.css';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaWifi,FaTv } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
import { RxEnter,RxExit,RxInfoCircled   } from "react-icons/rx";
import { RiUser3Line } from "react-icons/ri";
import { MdOutlinePayments,MdOutlineRoomService  } from "react-icons/md";

const MainSection = ({hotelData}) => {

     // State to track the selected room
     const [selectedRoom, setSelectedRoom] = useState(null);

     // Function to handle button click and select the room
     const handleSelect = (roomId) => {
         console.log(`Selected room: ${roomId}`);
         setSelectedRoom(roomId); // Update the selected room
     };

     // Data for the table (could also come from props or an API)
    const roomData = [
        { id: 1, type: "Standard Room", guests: 2, price: "₹1000" },
        { id: 2, type: "Deluxe Room", guests: 4, price: "₹1800" },
        { id: 3, type: "Suite Room", guests: 6, price: "₹3200" },
    ];

    return (
        <div className={styles.mainSection}>
                
        <div className={styles.imageContainer}>
            <div className={styles.mainImageContainer}>
                <img src={hotelData.images.mainImage} alt="Main Image" className={styles.mainImage}/>
            </div>
            <div className={styles.sideImageContainer}>
                { hotelData.images.sideImages.map((sideImage, index) => <img src={sideImage} alt="Side Image" className={styles.sideImage} key={index}/>) }
            </div>
        </div>

        <div className={styles.tagsRow}>
            <div className={styles.textTags}>
                <p>5.0</p>
                <p>Excellent</p>
                <p>100 reviews</p>
            </div>
            <div className={styles.shareTags}>
                <IoShareSocialOutline className={styles.shareIcon} />
            </div>
        </div>
        <div className={styles.hotelHeadingText}>
            <p className={styles.name}>{hotelData.name}</p>
            <p className={styles.address}>{hotelData.address}</p>
        </div>
        <div className={styles.detailsSection}>
            <h3>Description</h3>
            <p>{hotelData.description}</p>
            <h3>Hotels Amenities</h3>
            <div className={styles.featureTags}>
                <ul>
                    <li>
                        <FaWifi className={styles.featureIcon} />
                        <p>Wifi</p>
                    </li>
                    <li>
                        <IoBedOutline className={styles.featureIcon} />
                        <p>Double Bed</p>
                    </li>
                    <li>
                        <BiBath className={styles.featureIcon} />
                        <p>Bath Tub</p>
                    </li>
                    <li>
                        <ImSpoonKnife className={styles.featureIcon} />
                        <p>Breakfast</p>
                    </li>
                    <li>
                        <FaTv className={styles.featureIcon} />
                        <p>Television</p>
                    </li>
                    <li>
                        <MdOutlineRoomService className={styles.featureIcon} />
                        <p>Room Service</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.roomSelectSection}>
            <h2>Select Your Room</h2>
            <div className={styles.roomTypeSection}>
                <table className={styles.roomTypeTable}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Room Type</th>
                            <th className={styles.th}>Number of Guests</th>
                            <th className={styles.th}>Price</th>
                            <th className={styles.th}>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roomData.map((room) => (
                            <tr key={room.id}>
                            <td className={styles.roomType}>{room.type}</td>
                            <td>{room.guests}</td>
                            <td><p className={styles.price}>{room.price}</p></td>
                            <td>
                                <button
                                className={`${styles.selectButton} ${
                                    selectedRoom === room.id ? styles.selected : ""
                                }`}
                                onClick={() => handleSelect(room.id)}
                                >
                                {selectedRoom === room.id ? "Selected" : "Select"}
                                </button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <div className={styles.policySection}>
            <h2>Hotel Policies</h2>
           
            <div className={styles.policyRow}>
                <div className={styles.policyNameContainer}>
                    <RxEnter className={styles.policyIcon}/>
                    <p className={styles.heading}>check In</p>
                </div>
                <div className={styles.policyDescriptionContainer}><p className={styles.details}>After 12:00 PM</p></div>
            </div>

            <div className={styles.policyRow}>
                <div className={styles.policyNameContainer}>
                    <RxExit className={styles.policyIcon}/>
                    <p className={styles.heading}>check Out</p>
                </div>
                <div className={styles.policyDescriptionContainer}><p className={styles.details}>Before 10:00 AM</p></div>
            </div>

            <div className={styles.policyRow}>
                <div className={styles.policyNameContainer}>
                    <RxInfoCircled className={styles.policyIcon}/>
                    <p className={styles.heading}>Cancellation/ prepayment</p>
                </div>
                <div className={styles.policyDescriptionContainer}
                    ><p className={styles.details}>Cancelation and prepayment policies vary according to accommodation type. Check what conditions apply to each option when making your selection.</p>
                </div>
            </div>

            <div className={styles.policyRow}>
                <div className={styles.policyNameContainer}>
                    <RiUser3Line  className={styles.policyIcon}/>
                    <p className={styles.heading}>Age restriction</p>
                </div>
                <div className={styles.policyDescriptionContainer}
                    ><p className={styles.details}>The minimum age for check-in is 18</p>
                </div>
            </div>
            
            <div className={styles.policyRow}>
                <div className={styles.policyNameContainer}>
                    <MdOutlinePayments   className={styles.policyIcon}/>
                    <p className={styles.heading}>Payment Option</p>
                </div>
                <div className={styles.policyDescriptionContainer}
                    ><p className={styles.details}>This property accepts payments in Cash/Card/UPI</p>
                </div>
            </div>

        </div>

        <div className={styles.recommendationSection}>
            <h2>Other Recommendations</h2>
            <div className={styles.hotelsListContainer}>
                {hotelData.recommendedHotelData.map((hotel) => (
                    <div className={styles.hotelCard} key={hotel.id}>
                        <img className={styles.hotelCardImage} src={hotel.img} alt={hotel.name} />
                        <div className={styles.textContainer}>
                            <div className={styles.leftSide}>
                                <p className={styles.hotelName}>{hotel.name}</p>
                                <p className={styles.hotelAddress}>{hotel.address}</p>
                            </div>
                            <div className={styles.rightSide}>
                                <span><p className={styles.hotelPrice}>starting ₹{hotel.price}</p></span>
                                <p className={styles.hotelRating}>{hotel.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default MainSection;