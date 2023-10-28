import logoLight from "./assets/images/logo-light.png";
import logoDark from "./assets/images/logo-dark.png";
import styles from "./assets/css/styles.module.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { useSelector } from "react-redux";

export default function Header() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src={currentTheme === "light" ? logoLight : logoDark}
          alt="logo light"
        />

        <Navbar />

        <div className={styles.linkJoinContainer}>
          <Link className={styles.linkJoin}>Join Now</Link>
        </div>
      </div>
    </header>
  );
}
