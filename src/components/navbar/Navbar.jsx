import logo from "../../assets/logo.jpeg";
import "./navbar.css";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  customNavbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="brandLogo" />
          <p className="logoText">ETqan <span>Taiba Co. </span></p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
       <IoMdMenu  className="hambergerIcon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Expertise">
                Business & Expertise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link customNavLinkBtn" href="#GetInTouch">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
