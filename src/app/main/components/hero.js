import styles from './styles/Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Welcome to Hotel & Co</h1>
                <p>The Best Hotel Booking Platform</p>
            </div>
        </section>
    )
}

export default Hero;