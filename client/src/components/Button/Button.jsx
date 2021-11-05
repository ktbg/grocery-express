import './Button.css'
// import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Button = (props) => {
  // take in props for redirect location
  // take in props for button title
  // props for className? something to adjust height and width
  const { name, redirectLocation, className } = props;


  return (
    // <HashLink to={`${redirectLocation}`}>
    <Link to={`${redirectLocation}`}>
      <button className={className}>{name}</button>
    </Link>
    // </HashLink>
  )
}

export default Button
