import "./Nav.css";

const NavLoggedIn = (props) => {
  const { handleLogout, setOpen } = props;

  const handleClick = () => {
    handleLogout();
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <p className="sign-out" onClick={handleClick}>
        Sign Out
      </p>
    </>
  );
};

export default NavLoggedIn;
