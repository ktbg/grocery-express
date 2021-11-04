import { NavLink } from 'react-router-dom'
import './Nav.css'

const NavLoggedOut = () => {
  return (
    <>
      <NavLink to='/login'>Sign In</NavLink>
      <NavLink to='/register'>Sign Up</NavLink>
    </>
  )
}

export default NavLoggedOut
