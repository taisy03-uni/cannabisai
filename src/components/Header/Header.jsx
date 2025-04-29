import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src="./cannabisai/src/assets/cannabisai-logo.png" alt="CannabisAI Logo" className={styles.logo} />
          <span className={styles.logoText}>CannabisAI</span>
        </div>
      </div>
    </header>
  );
}