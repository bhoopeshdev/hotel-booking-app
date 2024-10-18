"use client"
import styles from './styles/OfferCards.module.css';
import React, { useState, useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const OfferCards = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const offers = [
        {id: 1, title: '10% OFF', description: 'Hurry, only 10 left in stock', src: '/images/brooklyn-bridge.jpg', price: 1000},
        {id: 2, title: '20% OFF', description: 'Hurry, only 20 left in stock', src: '/images/city_roads.jpg', price: 1000},
        {id: 3, title: '30% OFF', description: 'Hurry, only 30 left in stock', src: '/images/europe.jpg', price: 1000},
        {id: 4, title: '40% OFF', description: 'Hurry, only 40 left in stock', src: '/images/river.jpg', price: 1000},
        {id: 5, title: '50% OFF', description: 'Hurry, only 50 left in stock', src: '/images/sea.jpg', price: 1000},
        {id: 6, title: '60% OFF', description: 'Hurry, only 60 left in stock', src: '/images/vitznau.jpg', price: 1000},
    ]

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        const container = containerRef.current;
        const firstOfferCard = containerRef.current.querySelector(`.${styles.offerCard}`);
        if (firstOfferCard) {
          
          // Get the width of the first card
          const width = firstOfferCard.getBoundingClientRect().width;
  
          container.scrollTo({
            left: index * (width * 1.133),
            behavior: 'smooth',
          });
        }
      };
    
      const handleNext = () => {
        if (currentIndex < offers.length - 3) { 
          scrollToIndex(currentIndex + 1);
        }
      };
    
      const handlePrev = () => {
        if (currentIndex > 0) {
          scrollToIndex(currentIndex - 1);
        }
      };

    return (
        <div className={styles.offersContainer}>
            <p className={styles.cardHeading}>Offers</p>
            <p className={styles.cardSubheading}>Promotions, deals, and special offers for you</p>
            <div className={styles.offersListContainer} ref={containerRef}>
                <div className={styles.cardsWrapper}>
                    {offers.map((offer) => (
                    <div key={offer.id} className={styles.offerCard}>
                        <div className={styles.text}>
                        <p className={styles.title}>{offer.title}</p>
                        <p className={styles.description}>{offer.description}</p>
                        </div>
                        <div className={styles.imageContainer}>
                        <img src={offer.src} alt={offer.title} className={styles.image} />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className={styles.arrowContainer}>
                <button className={styles.arrow} onClick={handlePrev}>
                    <FaAngleLeft/>
                </button>
                <button className={styles.arrow} onClick={handleNext}>
                    <FaAngleRight/>
                </button>
            </div>
        </div>
    );
};

export default OfferCards;