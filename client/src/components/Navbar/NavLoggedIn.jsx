
const NavLoggedIn = (props) => {
  const { handleLogout } = props;

  return (
    <>
      <button className='sign-out' onClick={handleLogout}>Sign Out</button>
    </>
  )
}

export default NavLoggedIn
