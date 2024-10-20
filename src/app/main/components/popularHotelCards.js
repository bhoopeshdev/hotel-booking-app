"use client"
import React, { useState, useRef } from 'react';
import styles from './styles/Cards.module.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PopularHotelCards = (data) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        const container = containerRef.current;
        const firstOfferCard = containerRef.current.querySelector(`.${styles.card1}`);
        if (firstOfferCard) {
        
        // Get the width of the first card
        const width = firstOfferCard.getBoundingClientRect().width;

        container.scrollTo({
            left: index * (width * 1.085),
            behavior: 'smooth',
        });
        }
    };

    const handleNext = () => {
        if (currentIndex < data.cards.length - 3) {
        scrollToIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
        scrollToIndex(currentIndex - 1);
        }
    };

    const gotoHotelLandingPage = () => {
        window.location.href = "/main/hotel-landing";
    }


    return (
        <div>
            <div className={styles.cardHeadingContainer}>
                <p className={styles.cardHeading}>Popular Hotels</p>
                <p className={styles.cardSubheading}>Find your next stay</p>
            </div>
            <div className={styles.sliderContainer}>
                <button className={styles.arrowLeft} onClick={handlePrev}>
                <FaAngleLeft />
                </button>

                <div className={styles.cardsContainer} ref={containerRef}>
                <div className={styles.cardsWrapper}>
                    {data.cards.map((card) => (
                    <div key={card.id} className={styles.card1} onClick={() => gotoHotelLandingPage()}>
                        <div className={styles.imageContainer}>
                            <img src={card.src} alt={card.title} className={styles.image} />
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.cardInfo}>
                                <div className={styles.cardText}>
                                    <h3 className={styles.title}>{card.title}</h3>
                                    <p className={styles.description}>{card.description}</p>
                                </div>
                                <div className={styles.cardPrice}>
                                    <p className={styles.price}>₹{card.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                <button className={styles.arrowRight} onClick={handleNext}>
                <FaAngleRight />
                </button>
            </div>
        </div>
    )
  };

  export default PopularHotelCards;