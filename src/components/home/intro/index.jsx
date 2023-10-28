import { Link } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import bg from "./assets/images/bg.png";
import bgDark from "./assets/images/bg-dark.png";
import thumb from "./assets/images/thumb.png";
import cube from "./assets/images/cube.png";
import coin from "./assets/images/coin.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/theme/themeSlice";
import { AiOutlinePlayCircle, AiOutlineArrowRight } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTwitter,
} from "react-icons/bi";
import { FaSun, FaMoon } from "react-icons/fa6";
function Intro() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <section className={styles.wrapper}>
      <img
        className={styles.bgImg}
        src={currentTheme === "light" ? bg : bgDark}
        alt="bg image"
      />
      <button
        onClick={() => dispatch(toggleTheme())}
        className={styles.btnTheme}
      >
        {currentTheme === "light" ? <FaMoon /> : <FaSun />}
      </button>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.coin}>
            <img src={coin} alt="coin" />
          </div>
          <div className={styles.cube}>
            <img src={cube} alt="cube" />
          </div>

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
              <AiOutlineArrowRight className={styles.icon} />
            </Link>
            <Link className={styles.linkWatch}>
              <p>Watch Video</p>
              <AiOutlinePlayCircle className={styles.icon} />
            </Link>
          </div>

          <div className={styles.social}>
            <h5 className={styles.socialTitle}>Follow us</h5>
            <div className={styles.socialLinks}>
              <Link
                to="/register"
                className={`${styles.socialLink} ${styles.active}`}
              >
                <BiLogoFacebook />
              </Link>
              <Link to="/register" className={styles.socialLink}>
                <BiLogoLinkedin />
              </Link>
              <Link to="/register" className={styles.socialLink}>
                <BiLogoInstagram />
              </Link>
              <Link to="/register" className={styles.socialLink}>
                <BiLogoYoutube />
              </Link>
              <Link to="/register" className={styles.socialLink}>
                <BiLogoTwitter />
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
