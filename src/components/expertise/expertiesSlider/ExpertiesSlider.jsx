import construction from "../../../assets/card-1.jpeg";
import it from "../../../assets/card-2.jpeg";
import project from "../../../assets/card-4.jpg";
import steel from "../../../assets/card-3.webp";
import { MdKeyboardArrowRight } from "react-icons/md";

const ExpertiesSlider = () => {
  return (
    <div className="row">
      <div className="col-xl-3 col-lg-6">
        <div className="expertiesSliderSlide">
          <div className="expertiesSliderCard">
            <img src={construction} alt="experties" className="sliderCardImg" />
          </div>
          <div className="cardfooter">
            <h1 className="mdHeading">Constuction</h1>
            <div className="sliderCardIconContainer">
              <MdKeyboardArrowRight className="sliderCardIcon" />
            </div>
          </div>
          <ul className="listOfServices">
            <li className="listItem">Architectural</li>
            <li className="listItem">Civil Construction</li>
            <li className="listItem">Renovation</li>
            <li className="listItem">Mechanical</li>
            <li className="listItem">Electrical</li>
            <li className="listItem">HVAC System</li>
            <li className="listItem">Solar System (Alternate Energy)</li>
            <li className="listItem">Fire Safety System</li>
            <li className="listItem">Security System & Equipment</li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6">
        <div className="expertiesSliderSlide">
          <div className="expertiesSliderCard">
            <img src={steel} alt="experties" className="sliderCardImg" />
          </div>
          <div className="cardfooter">
            <h1 className="mdHeading">Steel Solutions</h1>
            <div className="sliderCardIconContainer">
              <MdKeyboardArrowRight className="sliderCardIcon" />
            </div>
          </div>
          <ul className="listOfServices">
            <li className="listItem">
              Etqan Taiba is steel fabricator by providing a dynamic full range
              of steel material
            </li>
            <li className="listItem">Design</li>
            <li className="listItem">Engineering</li>
            <li className="listItem">Fabrication</li>
            <li className="listItem">Erection Services</li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6" >
        <div className="expertiesSliderSlide">
          <div className="expertiesSliderCard">
            <img src={it} alt="experties" className="sliderCardImg" />
          </div>
          <div className="cardfooter">
            <h1 className="mdHeading">Information Technology</h1>
            <div className="sliderCardIconContainer">
              <MdKeyboardArrowRight className="sliderCardIcon" />
            </div>
          </div>
          <ul className="listOfServices">
            <li className="listItem">Wired & Wireless Solutions</li>
            <li className="listItem">Voice & Data Solutions</li>
            <li className="listItem">Microsoft</li>
            <li className="listItem">Ribbon Communications</li>
            <li className="listItem">Shure AV Solutions</li>
            <li className="listItem">Polycom - Video Conference Solutions</li>
            <li className="listItem">Fortinet – NGAF Firewall Solutions</li>
            <li className="listItem">Dell EMC – Storage Solutions</li>
            <li className="listItem">
              Logitech – Video Conferencing Solutions
            </li>
            <li className="listItem">Yealink Solutions for Microsoft</li>
            <li className="listItem">Sangfor - Firewall Solution</li>
            <li className="listItem">
              Ruijie – SMB Wired & Wireless Solutions
            </li>
          </ul>
        </div>
      </div> 
      <div className="col-xl-3 col-lg-6">
        <div className="expertiesSliderSlide">
          <div className="expertiesSliderCard">
            <img src={project} alt="experties" className="sliderCardImg" />
          </div>
          <div className="cardfooter">
            <h1 className="mdHeading">Project Management and Trading</h1>
            <div className="sliderCardIconContainer">
              <MdKeyboardArrowRight className="sliderCardIcon" />
            </div>
          </div>
          <ul className="listOfServices">
            <li className="listItem">Project framing and definition</li>
            <li className="listItem">Development of detailed project plans</li>
            <li className="listItem">Establishment of a project team</li>
            <li className="listItem">
              Managing the professional team, consultants, suppliers and
              contractors
            </li>
            <li className="listItem">
              Establishing functional roles and responsibilities
            </li>
            <li className="listItem">Project scheduling and time management</li>
            <li className="listItem">Cost control</li>
            <li className="listItem">Project meetings and reports</li>
            <li className="listItem">Client liaising</li>
            <li className="listItem">
              Overall scope control and deviation management
            </li>
            <li className="listItem">Project commissioning and handover</li>
            <li className="listItem">Project close-out</li>
          </ul>
        </div>
      </div> 
    </div>
  );
};

export default ExpertiesSlider;
