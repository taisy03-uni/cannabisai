import { useState } from 'react';
import Header from './components/Header/Header';
import DownloadButton from './components/DownloadButton/DownloadButton';
import FeatureCard from './components/FeatureCard/FeatureCard';
import styles from './App.module.css';

function App() {
  const [activeOS, setActiveOS] = useState('mac');

  const features = [
    {
      title: "Patient Predicted Outcomes",
      description: "Get instant EQ-5D-5L scores predictions for your patients"
    },
    {
      title: "Product Recommendations",
      description: "Based on 100+ widely used cannabis strains and their decomposition"
    },
    {
      title: "Reliable AI Model",
      description: "Trained on 19,000+ Patients in the last 5 years"
    }
  ];

  return (
    <div className={styles.app}>
      <Header />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Cannabis<span className={styles.titleHighlight}>AI</span>
          </h1>
          <p className={styles.subtitle}>
            Bridging clinical expertise with AI for better cannabis medicine outcomes
          </p>
          
          {/* OS Selector */}
          <div className={styles.osSelector}>
            <button 
              onClick={() => setActiveOS('mac')}
              className={`${styles.osButton} ${activeOS === 'mac' ? styles.active : ''}`}
            >
              <img src="./cannabisai/assets/mac-icon.svg" alt="Mac" className={styles.osIcon} />
              Mac
            </button>
            <button 
              onClick={() => setActiveOS('windows')}
              className={`${styles.osButton} ${activeOS === 'windows' ? styles.active : ''}`}
            >
              <img src="./cannabisai/assets/windows-icon.svg" alt="Windows" className={styles.osIcon} />
              Windows
            </button>
          </div>
          
          <DownloadButton os={activeOS} />
        </section>
        
        {/* Features Section */}
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Product Features:</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      
      </main>
      
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} CannabisAI. Made by all. </p>
      </footer>
    </div>
  );
}

export default App;