import { Link } from "react-router-dom";
import thumb from "./assets/images/thumb.png";
import styles from "./assets/css/styles.module.css";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={`wrapper ${styles.container}`}>
        <div className={styles.thumb}>
          <img src={thumb} alt="thumb" />
          <div className={styles.thumbContentTop}>
            <h3 className={styles.thumbTitle}>10 years</h3>
            <p className={styles.thumbDescription}>Consulting experience</p>
          </div>
          <div className={styles.thumbContentBottom}>
            <h3 className={styles.thumbTitle}>25K+</h3>
            <p className={styles.thumbDescription}>Satisfied customers</p>
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Meet <span>our company</span> unless miss the opportunity
          </h2>
          <p className={styles.description}>
            Hey there! So glad you stopped by to Meet Our Company. Do not miss
            out on this opportunity to learn about what we do and the amazing
            team that makes it all happen! Our company is all about creating
            innovative solutions and providing top-notch services to our
            clients. From start to finish, we are dedicated to delivering
            results that exceed expectations.
          </p>
          <Link className={styles.linkExplore}>Explore more</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
