import "./Burger.css";
import Menu from "../Menu/Menu";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

// burger menu idea from: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const Burger = ({
  open,
  setOpen,
  currentUser,
  alwaysOptions, 
  handleLogout,
  MobileIcons, 
  width
}) => {
  const nodeRef = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="burger" onClick={handleClick}>
        <span className={open ? "patty rotate" : "patty"} />
        <span className={open ? "patty rotate" : "patty"} />
        <span className={open ? "patty rotate" : "patty"} />
      </div>
      <CSSTransition in={open} timeout={500} classNames="menu" unmountOnExit nodeRef={nodeRef}>
        <div ref={nodeRef} >
          <Menu
            currentUser={currentUser}
            alwaysOptions={alwaysOptions}
            handleLogout={handleLogout}
            setOpen={setOpen}
            MobileIcons={MobileIcons}
            width={width}
          />
        </div>
      </CSSTransition>
    </>
  );
};

export default Burger;

