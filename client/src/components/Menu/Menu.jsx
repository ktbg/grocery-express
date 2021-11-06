import NavLoggedIn from "../Navbar/NavLoggedIn";
import NavLoggedOut from "../Navbar/NavLoggedOut";
import "./Menu.css";

const Menu = (props) => {
  const { currentUser, alwaysOptions, handleLogout, setOpen } = props;

  return (
    <div className="menu">
      {alwaysOptions}
      {currentUser ? (
        <NavLoggedIn handleLogout={handleLogout} setOpen={setOpen} />
      ) : (
        <NavLoggedOut setOpen={setOpen} />
      )}
    </div>
  );
};

export default Menu;
