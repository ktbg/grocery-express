import { useState, useEffect } from 'react'
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import NavLoggedIn from "./NavLoggedIn";
import NavLoggedOut from "./NavLoggedOut";
import Burger from '../Burger/Burger';

import "./Nav.css";

const Nav = (props) => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const { currentUser, handleLogout } = props;

  const breakpoint = 900;
  let location = useLocation();
  let history = useHistory();

  // window size listener code idea from: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
   }, []);

  const HomeNav = (
    <>
      <NavLink to="/" className="nav-brand">
        Grocery Express
      </NavLink>
    </>
  )
 
  const BackNav = (
    <>
    <button className="invisible" onClick={() => history.goBack()} >
      <ChevronLeftIcon color="black"/><span className="nav-back">Back</span>
    </button>
    </>
  )

  const alwaysOptions = ( <HashLink to="/#categories">Departments</HashLink> )

  return (
    <nav>
      {/* conditional to render home branding, desktop back button, mobile back chevron */}

      <div className="nav-left">
        { location.pathname === "/" ? HomeNav : BackNav}
      </div>
      
      {/* conditional to render mobile menu or the right nav menu */}
      
      {width < breakpoint ? (
        <Burger 
          open={open}
          setOpen={setOpen}
          currentUser={currentUser}
          alwaysOptions={alwaysOptions}
          handleLogout={handleLogout}
        />
      ) : (
        <div className="nav-right">
          { alwaysOptions }

          { currentUser ? (
            <NavLoggedIn handleLogout={handleLogout} />
          ) : (
            <NavLoggedOut />
          )}
        </div>
      )}
      
    </nav>
  );
};

export default Nav;
