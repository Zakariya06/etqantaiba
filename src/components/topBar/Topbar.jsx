import { FaLocationDot, FaLinkedin, FaPhone } from "react-icons/fa6"; 
import "./topbar.css";

const Topbar = () => {
  return (  
    <div className="topBarContainer">
      <div className="container">
        <div className="topBar">
          <div className="topBarLeft">  
            <a href="#" className="locationText "><FaLocationDot className="locationIcon" /> Riyadh, Kingdom of Saudi Arabia</a>
            <a href="tel:+966541120478" className="locationText phoneNumberText"><FaPhone className="locationIcon" /> <span>+966541120478</span> </a>
          </div>
          <div className="topBarRight">
            <div className="social">
            <a
              href="https://sa.linkedin.com/company/etqan-taiba-company?trk=public_post-text"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
           <FaLinkedin className="linkDinIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Topbar;
