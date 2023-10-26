import { useState } from "react";
import styles from "./assets/css/styles.module.css";
import expandMoreIcon from "./assets/images/expand-more-icon.png";
import expandLessIcon from "./assets/images/expand-less-icon.png";
import menuIcon from "./assets/images/menu-icon.png";
import closeIcon from "./assets/images/close-icon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenMegaMenu, setIsOpenMegaMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={styles.btnHamburger}
      >
        <img src={isOpenMenu ? closeIcon : menuIcon} alt="menu icon" />
      </button>

      {(isOpenMenu || window.innerWidth > 992) && (
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/">
              Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/services">
              Services
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/blogs">
              Blogs
            </Link>
          </li>
          <li
            className={`${styles.menuItem} ${
              isOpenMegaMenu ? styles.megaMenu : ""
            }`}
            onClick={() => setIsOpenMegaMenu(!isOpenMegaMenu)}
          >
            <p className={styles.menuLink}>About</p>
            <img
              src={isOpenMegaMenu ? expandLessIcon : expandMoreIcon}
              alt="expand icon"
            />

            {isOpenMegaMenu && (
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
            )}
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
