import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  const { currentUser, handleLogout } = props;
  
  return (
    <div className="layout">
      <Nav currentUser={currentUser} handleLogout={handleLogout}/>
        <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
