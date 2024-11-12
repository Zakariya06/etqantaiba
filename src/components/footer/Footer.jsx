import "./Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footerSection" id="Footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footerInformation">
              <img src={logo} alt="img" className="footerLogo" />
              <p className="mainText">
                Etqan Taiba Co. – Building Excellence in Construction, Steel, IT,
                Project Management, and Trading.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footerLinkContainer">
              <h2 className="mdHeading">Quick Links</h2>
              <ul className="footerLinkList">
                <li>
                  <a href="#Home" className="footerLinks">
                    {" "}
                    Home
                  </a>
                </li>
                <li>
                  <a href="#Projects" className="footerLinks">
                    {" "}
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#Expertise" className="footerLinks">
                    {" "}
                    Business & Expertise
                  </a>
                </li>
                <li>
                  <a href="#GetInTouch" className="footerLinks">
                    {" "}
                    Get in Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footerInfo">
              <h2 className="mdHeading">Get In Touch</h2>
              <div className="contactInfo">
                <a href="tel:+966541120478" className="footerLinks">
                  <FaPhone className="contactIcon" />
                  +966 54 112 0478
                </a>
                <a href="mailto:Info@etqantaiba.com" className="footerLinks">
                  <FaEnvelope className="contactIcon" />
                  Info@etqantaiba.com
                </a>
                <a
                  href="https://www.google.com/maps/place/Riyadh,+Saudi+Arabia"
                  className="footerLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt className="contactIcon" />
                  Riyadh, Kingdom of Saudi Arabia
                </a>
              </div>
              <div className="socialLinks">
                <a href="https://www.facebook.com" className="footerLinks">
                  <FaFacebookF className="socialIcon" />
                </a>
                <a href="https://twitter.com" className="footerLinks">
                  <FaTwitter className="socialIcon" />
                </a>
                <a href="https://www.instagram.com" className="footerLinks">
                  <FaInstagram className="socialIcon" />
                </a>
                <a href="https://sa.linkedin.com/company/etqan-taiba-company?trk=public_post-text" className="footerLinks">
                  <FaLinkedinIn className="socialIcon" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footerForm">
              <h2 className="mdHeading">Send Message</h2>
              <form>
                <div className="formGroup">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="formInput"
                    required
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="formInput"
                    required
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="formInput"
                    required
                  />
                </div>
                <div className="formGroup">
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="formInput"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="mainBtn">
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h1 className="footerCopyWrite">© All Rights Reserved 2024</h1>
    </footer>
  );
};

export default Footer;
