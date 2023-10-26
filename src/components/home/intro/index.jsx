import { Link } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import thumb from "./assets/images/thumb.png";
import coin from "./assets/images/coin.png";
import arrowForward from "./assets/images/arrow-forward.svg";
import playCircle from "./assets/images/play-circle.svg";
import fbIcon from "./assets/images/fb.svg";
import linkedinIcon from "./assets/images/linkedin.svg";
import instagramIcon from "./assets/images/instagram.svg";
import youtubeIcon from "./assets/images/youtube.svg";
import twitterIcon from "./assets/images/twitter.svg";

function Intro() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={coin} alt="coin" />

          <h1 className={styles.title}>
            Invest Your Money With <span>Higher Return</span>
          </h1>
          <p className={styles.description}>
            Anyone can invest money to different currency to increase their
            earnings by the help of Bitrader through online.
          </p>

          <div className={styles.linkGroup}>
            <Link className={styles.linkStart}>
              <p>Get Started</p>
              <img src={arrowForward} alt="arrow forward" />
            </Link>
            <Link className={styles.linkWatch}>
              <p>Watch Video</p>
              <img src={playCircle} alt="play circle" />
            </Link>
          </div>

          <div className={styles.social}>
            <h5 className={styles.socialTitle}>Follow us</h5>
            <div className={styles.socialLinks}>
              <Link
                to="/register"
                className={`${styles.socialLink} ${styles.active}`}
              >
                <img src={fbIcon} alt="fb icon" />
              </Link>
              <Link to="/register" className={styles.socialLink}>
                <img src={linkedinIcon} alt="fb icon" />
              </Link>
              <Link to="/register" className={styles.socialLink}>
                <img src={instagramIcon} alt="fb icon" />
              </Link>
              <Link to="/register" className={styles.socialLink}>
                <img src={youtubeIcon} alt="fb icon" />
              </Link>
              <Link to="/register" className={styles.socialLink}>
                <img src={twitterIcon} alt="fb icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.thumb}>
          <img src={thumb} alt="thumb" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
