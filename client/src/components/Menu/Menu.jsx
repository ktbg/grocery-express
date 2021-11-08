import { NavLink } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HomeIcon from "@mui/icons-material/Home";
import "./Menu.css";
import React from "react";

const Menu = (props) => {
  const { currentUser, alwaysOptions, handleLogout, setOpen } = props;

  const handleClickDelete = () => {
    handleLogout();
    setOpen((prevState) => !prevState);
  };

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="menu">
      {/* menu options always available on mobile */}

      <div className="mobile-menu ">
        <HomeIcon color="black" sx={{ marginRight: "20px" }} />
        <NavLink to="/" onClick={handleClick}>
          Home
        </NavLink>
      </div>
      <div className="mobile-menu">
        <ShoppingBagIcon color="black" className="menu-icon" />
        {alwaysOptions}
      </div>

      {/* toggles the menu based on user login status */}

      {currentUser ? (
        <div className="mobile-menu sign-out-mobile">
          <LogoutIcon
            color="black"
            className="menu-icon"
            sx={{ marginRight: "70px" }}
          />
          <p className="sign-out" onClick={handleClickDelete}>
            Sign Out
          </p>
        </div>
      ) : (
        <React.Fragment>
          <div className="mobile-menu">
            <AccountBoxIcon color="black" sx={{ marginRight: "20px" }} />
            <NavLink to="/login" onClick={handleClick}>
              Sign In
            </NavLink>
          </div>
          <div className="mobile-menu">
            <PersonAddIcon color="black" sx={{ marginRight: "20px" }} />
            <NavLink to="/register" onClick={handleClick}>
              Sign Up
            </NavLink>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Menu;
