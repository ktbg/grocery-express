import GitHubLogo from "../../assets/images/site_general/GitHub-Mark-120px-plus.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/ktbg" rel="noreferrer noopener">
        <img className="footer-link" src={GitHubLogo} alt="GitHub" />
      </a>
    </footer>
  );
};

export default Footer;
