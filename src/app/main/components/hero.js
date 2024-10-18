import styles from './styles/Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Welcome to Our Website</h1>
                <p>This is a captivating hero section with engaging text.</p>
            </div>
        </section>
    )
}

export default Hero;