import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavLoggedIn from "./NavLoggedIn";
import NavLoggedOut from "./NavLoggedOut";

import "./Nav.css";

const Nav = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <nav>
      <NavLink to="/" className="nav-brand">
        Grocery Express
      </NavLink>
      <div className="nav-right">
        <HashLink to="/#categories">Departments</HashLink>
        { currentUser ? (
          <NavLoggedIn handleLogout={handleLogout} />
        ) : (
          <NavLoggedOut />
        )}
      </div>
      <div className="burger">burger</div>
    </nav>
  );
};

export default Nav;
