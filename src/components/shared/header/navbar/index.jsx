import styles from "./assets/css/styles.module.css";
import expandIcon from "./assets/images/expand-icon.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className={styles.menuList}>
      <li className={styles.menuItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.menuItem}>
        <Link to="/services">Services</Link>
      </li>
      <li className={styles.menuItem}>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className={styles.menuItem}>
        <p>About</p>
        <img src={expandIcon} alt="expand icon" />

        <ul className={styles.megaMenuList}>
          <li className={styles.megaMenuItem}>
            <Link className={styles.megaMenuLink} to="/about">
              About Us
            </Link>
          </li>
          <li className={styles.megaMenuItem}>
            <Link className={styles.megaMenuLink} to="/about/price">
              Price
            </Link>
          </li>
          <li className={styles.megaMenuItem}>
            <Link className={styles.megaMenuLink} to="/about/team">
              Team
            </Link>
          </li>
        </ul>
      </li>
      <li className={styles.menuItem}>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}
