import styles from './Header.module.css';
import cannabisaiLogo from './cannabisai-logo.png'; 

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