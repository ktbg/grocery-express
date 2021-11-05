
const NavLoggedIn = (props) => {
  const { handleLogout, setOpen } = props;

  const handleClick = () =>{
    handleLogout();
    setOpen((prevState) => !prevState);
  }


  return (
    <>
      <button className='sign-out invisible' onClick={handleClick}>Sign Out</button>
    </>
  )
}

export default NavLoggedIn
