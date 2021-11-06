import { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import NavLoggedIn from "./NavLoggedIn";
import NavLoggedOut from "./NavLoggedOut";
import Burger from "../Burger/Burger";

import "./Nav.css";

const Nav = (props) => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const { currentUser, handleLogout } = props;

  const breakpoint = 900;
  let location = useLocation();
  let history = useHistory();

  // ---------------- styles to override Mui icons for different screen sizes --------------

  const MobileIcons = {
    display: "inline", 
    marginBottom: "-3px",
    paddingRight: "50px"
  }

  const DesktopIcons = {
    display: "none"
  }


  // window size listener code idea from: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  //  ------------------ different left nav links depending on page -------------------------

  const HomeNav = (
    <>
      <NavLink to="/" className="nav-brand">
        Grocery Express
      </NavLink>
    </>
  );

  const BackNav = (
    <>
      <p className="invisible back" onClick={() => history.goBack()}>
        <ChevronLeftIcon color="black" sx={{ marginBottom: "-6px" }}/>
        <span className="nav-back">Back</span>
      </p>
    </>
  );

// ----------------- nav item always visible -------------------------------------------------

  const alwaysOptions = (
    <HashLink id="mobile-always" to="/#categories" onClick={()=> setOpen((prevState) => !prevState)}>
      Departments
    </HashLink>
  );

  return (
    <nav>
      {/* conditional to render home branding, desktop back button, mobile back chevron */}

      <div className="nav-left">
        {location.pathname === "/" ? HomeNav : BackNav}
      </div>

      {/* conditional to render mobile menu or the right nav menu */}

      {width < breakpoint ? (
        <Burger
          open={open}
          setOpen={setOpen}
          currentUser={currentUser}
          alwaysOptions={alwaysOptions}
          handleLogout={handleLogout}
          MobileIcons={MobileIcons}
          width={width}
        />
      ) : (
        <div className="nav-right">
          {location.pathname === "/" ? alwaysOptions : (
            <>
              <NavLink to="/">Home</NavLink>
              {alwaysOptions}
            </>
          )}

          {currentUser ? (
            <NavLoggedIn handleLogout={handleLogout} setOpen={setOpen} DesktopIcons={DesktopIcons}/>
          ) : (
            <NavLoggedOut setOpen={setOpen} DesktopIcons={DesktopIcons} />
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
