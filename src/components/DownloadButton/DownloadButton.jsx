import { useState } from "react";
import styles from "./DownloadButton.module.css";
import MacVersionPopup from "../MacVersionPopup/MacVersionPopup"; // Updated import path

export default function DownloadButton({ os }) {
  const [showMacPopup, setShowMacPopup] = useState(false);
  
  const downloadLinks = {
    mac: {
      'intel': 'https://drive.google.com/uc?export=download&id=1PYFD3Ika-uVwTF3rvDa1KqHSlfzk9UK8&confirm=no_antivirus',
      'apple-silicon': 'https://drive.google.com/uc?export=download&id=1e5ZA2fKbj1pJDrpCt9ZgSuWn-gTMhDZ5&confirm=no_antivirus'
    },
    windows: 'https://drive.google.com/uc?export=download&id=1trP5Dedj9dOhPCSF6l-mYCQaQKIIEAao&confirm=no_antivirus'
  };

  const handleDownload = () => {
    if (os === 'mac') {
      setShowMacPopup(true);
    } else {
      window.open(downloadLinks.windows, '_blank');
    }
  };

  const handleMacVersionSelect = (version) => {
    setShowMacPopup(false);
    window.open(downloadLinks.mac[version], '_blank');
  };

  return (
    <>
      <button 
        onClick={handleDownload}
        className={styles.downloadButton}
      >
        {os === 'mac' ? 'Download for Mac' : 'Download for Windows'}
      </button>

      {showMacPopup && (
        <MacVersionPopup
          onClose={() => setShowMacPopup(false)}
          onSelect={handleMacVersionSelect}
        />
      )}
    </>
  );
}