import { Link } from 'react-router-dom'

const NavLoggedOut = () => {
  return (
    <div>
      <Link to='/login'>Sign In</Link>
    </div>
  )
}

export default NavLoggedOut
