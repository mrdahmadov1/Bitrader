import thumb11 from "./assets/images/1-1.png";
import thumb21 from "./assets/images/2-1.png";
import thumb12 from "./assets/images/1-2.png";
import thumb22 from "./assets/images/2-2.png";
import thumb32 from "./assets/images/3-2.png";
import thumb42 from "./assets/images/4-2.png";
import arrow from "./assets/images/arrow.png";
import styles from "./assets/css/styles.module.css";

function Feature() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shape}>
        <span></span>
      </div>
      <div className={`wrapper ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span>Benefits</span> we offer
          </h2>
          <p className={styles.description}>
            Unlock the full potential of our product with our amazing features
            and top-notch.
          </p>
          <ul className={styles.offerList}>
            <li className={`${styles.offerItem} ${styles.active}`}>
              <button className={styles.btnOffer}>
                Lending money for investment of your new projects
              </button>
            </li>
            <li className={styles.offerItem}>
              <button className={styles.btnOffer}>
                more Security and control over money from the rest
              </button>
            </li>
            <li className={styles.offerItem}>
              <button className={styles.btnOffer}>
                Mobile payment is more flexible and easy for all investors
              </button>
            </li>
            <li className={styles.offerItem}>
              <button className={styles.btnOffer}>
                all transaction is kept free for the member of pro traders
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.thumb}>
          <img className={styles.arrowImg} src={arrow} alt="arrow image" />
          <img className={styles.thumbImg} src={thumb11} alt="thumb image" />
          <div className={styles.thumbContentTop}>
            <img src={thumb12} alt="thumb content top image" />
            <p className={styles.thumbDescription}>Interest rate for loan</p>
          </div>
          <div className={styles.thumbContentBottom}>
            <h3 className={styles.thumbTitle}>10M</h3>
            <p className={styles.thumbDescription}>Available for loan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
