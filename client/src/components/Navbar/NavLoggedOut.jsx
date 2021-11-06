import { NavLink } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import "./Nav.css";

const NavLoggedOut = ({ setOpen }) => {
  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <NavLink to="/login" onClick={handleClick}>
        <AccountBoxIcon color="black" className="menu-icon" />Sign In
      </NavLink>
      <NavLink to="/register" onClick={handleClick}>
        <PersonAddIcon color="black" className="menu-icon" />Sign Up
      </NavLink>
    </>
  );
};

export default NavLoggedOut;
