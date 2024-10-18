"use client"
import React, { useState, useEffect } from 'react';
import styles from './styles/Testimonial.module.css';

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "LuxuryStay Hotels exceeded my expectations! The service was impeccable and the rooms were just as luxurious as advertised. I will definitely book again!",
  },
  {
    name: "Jane Smith",
    feedback:
      "I had a wonderful stay at the hotel booked through LuxuryStay. The process was seamless and I loved the attention to detail. Highly recommended!",
  },
  {
    name: "Sam Wilson",
    feedback:
      "The best hotel booking experience I've had! The website was easy to use, and I found the perfect stay for my vacation. Great customer service too.",
  },
  {
    name: "Maria Rodriguez",
    feedback:
      "LuxuryStay Hotels provided the best deal for my business trip. The hotel was fantastic, and the booking process was smooth. Thank you!",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.testimonial}>
        <p className={styles.feedback}>{testimonials[currentIndex].feedback}</p>
        <p className={styles.name}>— {testimonials[currentIndex].name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
