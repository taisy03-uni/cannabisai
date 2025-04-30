import styles from './Header.module.css';
import cannabisaiLogo from './assets/cannabisai-logo.png'; // Adjust the path as necessary

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={cannabisaiLogo} alt="CannabisAI Logo" className={styles.logo} />
          <span className={styles.logoText}>CannabisAI</span>
        </div>
      </div>
    </header>
  );
}