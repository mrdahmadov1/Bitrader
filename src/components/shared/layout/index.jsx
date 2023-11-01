import Header from "../header";
import PropTypes from "prop-types";
import styles from "./assets/css/styles.module.css";

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
