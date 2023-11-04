import Header from "../header";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
