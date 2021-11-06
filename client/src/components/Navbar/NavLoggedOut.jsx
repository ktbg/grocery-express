import { NavLink } from "react-router-dom";
import "./Nav.css";

const NavLoggedOut = ({ setOpen }) => {
  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <NavLink to="/login" onClick={handleClick}>
        Sign In
      </NavLink>
      <NavLink to="/register" onClick={handleClick}>
        Sign Up
      </NavLink>
    </>
  );
};

export default NavLoggedOut;
