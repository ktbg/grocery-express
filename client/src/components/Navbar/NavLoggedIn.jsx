
const NavLoggedIn = (props) => {
  const { handleLogout } = props;

  return (
    <div className='nav-right-links'>
      <button className='sign-out' onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

export default NavLoggedIn
