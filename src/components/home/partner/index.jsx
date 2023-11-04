import { useState, useEffect } from "react";
import styles from "./assets/css/styles.module.css";
import loqo1 from "./assets/images/1.png";
import loqo2 from "./assets/images/2.png";
import loqo3 from "./assets/images/3.png";
import loqo4 from "./assets/images/4.png";
import loqo5 from "./assets/images/5.png";
import loqodark1 from "./assets/images/1-dark.png";
import loqodark2 from "./assets/images/2-dark.png";
import loqodark3 from "./assets/images/3-dark.png";
import loqodark4 from "./assets/images/4-dark.png";
import loqodark5 from "./assets/images/5-dark.png";
import { useSelector } from "react-redux";

const logos = [
  loqo1,
  loqo2,
  loqo3,
  loqo4,
  loqo5,
  loqo1,
  loqo2,
  loqo3,
  loqo4,
  loqo5,
];

const darkLogos = [
  loqodark1,
  loqodark2,
  loqodark3,
  loqodark4,
  loqodark5,
  loqodark1,
  loqodark2,
  loqodark3,
  loqodark4,
  loqodark5,
];

const Partner = () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (logos.length - 5 + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={`wrapper ${styles.slider}`}>
        {(currentTheme === "dark" ? darkLogos : logos)
          .slice(currentIndex, currentIndex + 5)
          .map((logo, index) => (
            <div key={index} className={styles.logo}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Partner;
