"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from './styles/Cards.module.css';
import OfferCards from './offerCards';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const url = "https://6702c722bd7c8c1ccd3fd138.mockapi.io/popular_hotels"

const CardSlider = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [cards, setCards] = useState([]);

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
    if (currentIndex < cards.length - 3) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    async function fetchCards() {
      try {
        let response = await fetch(url)
        response = await response.json()
        setCards(response);
      } catch (error) {
          console.error(error);
      }
    }
    fetchCards();
  },[])

  return (
    <div>

      <OfferCards />
      
      {/* Card style container */}
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
              {cards.map((card) => (
                <div key={card.id} className={styles.card1}>
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
        
      {/* card style 2 container */}
      <div>
        <div className={styles.cardHeadingContainer}>
              <p className={styles.cardHeading}>Explore More</p>
              <p className={styles.cardSubheading}>Lets Go on Adventure</p>
        </div>
        <div className={styles.listCardContainer}>
        <div className={styles.cardsContainer}>
            <div className={styles.cardsWrapper}>
              {cards.map((card) => (
                <div key={card.id} className={styles.card2}>
                  <img src={card.src} alt={card.title} className={styles.image} />
                  <div className={styles.cardBody}>
                    <div className={styles.cardInfo}>
                      <div className={styles.cardText}>
                        <h3 className={styles.title}>{card.title}</h3>
                        <p className={styles.description}>{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
        </div>
      </div>

  </div>
  );
};

export default CardSlider;