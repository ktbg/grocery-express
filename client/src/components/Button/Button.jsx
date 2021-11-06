import './Button.css'
import { HashLink } from 'react-router-hash-link'


const Button = (props) => {
  // take in props for redirect location
  // take in props for button title
  // props for className? something to adjust height and width
  const { name, redirectLocation, className } = props;


  return (
    // <HashLink to={`${redirectLocation}`}>
    <HashLink to={redirectLocation}>
      <button className={`btn ${className}`}>{name}</button>
    </HashLink>
    // </HashLink>
  )
}

export default Button
