import { useState } from "react";
import styles from "./assets/css/styles.module.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={styles.btnHamburger}
      >
        {isOpenMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
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
          <li className={styles.menuItem}>
            <p className={styles.menuLink}>
              About
              <MdExpandMore className={styles.expandIcon} />
            </p>

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
            <Link className={styles.menuLink} to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
