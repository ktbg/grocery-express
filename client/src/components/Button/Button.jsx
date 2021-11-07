import "./Button.css";
import { HashLink } from "react-router-hash-link";

const Button = (props) => {
  const { name, redirectLocation, className } = props;

  return (
    <HashLink to={redirectLocation}>
      <button className={`btn ${className}`}>{name}</button>
    </HashLink>
  );
};

export default Button;
