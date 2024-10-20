"use client"
import styles from './styles/Cards.module.css';

const ExploreMoreCards = (data) => {

    const gotoHotelLandingPage = () => {
        window.location.href = "/main/hotel-landing";
    }

    return (

      <div>
        <div className={styles.cardHeadingContainer}>
                <p className={styles.cardHeading}>Explore More</p>
                <p className={styles.cardSubheading}>Lets Go on Adventure</p>
        </div>
        <div className={styles.listCardContainer}>
            <div className={styles.cardsContainer}>
                <div className={styles.cardsWrapper}>
                    {data.cards.map((card) => (
                    <div key={card.id} className={styles.card2} onClick={() => gotoHotelLandingPage()}>
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
    )
}

export default ExploreMoreCards;