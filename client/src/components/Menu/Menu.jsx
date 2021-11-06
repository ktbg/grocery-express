import { NavLink } from 'react-router-dom'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./Menu.css";
import React from "react";

const Menu = (props) => {
  const {
    currentUser,
    alwaysOptions,
    handleLogout,
    setOpen,
    MobileIcons,
    width,
  } = props;

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  const IconStyles = {
    marginBottom: "-10px",
  }

  return (
    <div className="menu">
      <div className="mobile-menu"> 
        <ShoppingBagIcon color="black" className="menu-icon"/>
        {alwaysOptions}
      </div>
      
      {currentUser ? (
        <div className="mobile-menu">
          <LogoutIcon color="black" className="menu-icon" />
          <p className="sign-out" onClick={handleClick}>
            Sign Out
          </p>
        </div>
        
      ) : (
        <React.Fragment>
          <div className="mobile-menu" >
            <AccountBoxIcon color="black" sx={{ marginBottom: "-10px"}} />
            <NavLink to="/login" onClick={handleClick}>
              Sign In
            </NavLink>
          </div>
          <div className="mobile-menu" >
            <PersonAddIcon color="black"  />
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
