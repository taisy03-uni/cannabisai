import { useState } from 'react';
import styles from './MacVersionPopup.module.css';

export default function MacVersionPopup({ onClose, onSelect }) {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <h3>Select Your Mac Processor Type</h3>
        <div className={styles.buttonGroup}>
          <button 
            onClick={() => onSelect('intel')}
            className={styles.versionButton}
          >
            Intel Processor
          </button>
          <button 
            onClick={() => onSelect('apple-silicon')}
            className={styles.versionButton}
          >
            Apple Silicon (M1/M2/M3)
          </button>
        </div>
        <button onClick={onClose} className={styles.closeButton}>
          Cancel
        </button>
      </div>
    </div>
  );
}