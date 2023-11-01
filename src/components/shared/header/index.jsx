import { useEffect, useState } from "react";
import logoLight from "./assets/images/logo-light.png";
import logoDark from "./assets/images/logo-dark.png";
import styles from "./assets/css/styles.module.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { useSelector } from "react-redux";

export default function Header() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const [afterScroll, setAfterScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setAfterScroll(true);
      } else {
        setAfterScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${afterScroll ? styles.afterScroll : ""}`}
    >
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
