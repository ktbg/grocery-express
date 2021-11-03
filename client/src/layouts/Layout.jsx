import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

const Layout = (props) => {

  
  return (
    <div className="layout">
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
