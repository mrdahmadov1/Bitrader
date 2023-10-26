import logoLight from "./assets/images/logo-light.png";
import styles from "./assets/css/styles.module.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logoLight} alt="logo light" />

        <Navbar />

        <div className={styles.linkJoinContainer}>
          <Link className={styles.linkJoin}>Join Now</Link>
        </div>
      </div>
    </header>
  );
}
