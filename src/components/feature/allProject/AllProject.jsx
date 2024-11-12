 
import PropTypes from 'prop-types';
import { Modal } from "react-bootstrap";
import project1 from "../../../assets/pro-1.jpg";
import project2 from "../../../assets/pro-2.jpg";
import project3 from "../../../assets/pro-3.jpg";
import project4 from "../../../assets/pro-4.jpg";
import project5 from "../../../assets/pro-5.jpg";
import project6 from "../../../assets/pro-6.jpg";
import project7 from "../../../assets/pro-7.jpg";
import project8 from "../../../assets/pro-8.jpg";
import project9 from "../../../assets/pro-9.jpg";
import project10 from "../../../assets/pro-10.jpg";
import project11 from "../../../assets/pro-11.jpg";
import project12 from "../../../assets/pro-12.jpg";
import project13 from "../../../assets/pro-13.jpg";
import project14 from "../../../assets/pro-14.jpg";
import project15 from "../../../assets/pro-15.jpg";
import project16 from "../../../assets/pro-16.jpg";
import project17 from "../../../assets/pro-17.jpg";
import project18 from "../../../assets/pro-18.jpg";
import project19 from "../../../assets/pro-19.jpg";
import project20 from "../../../assets/pro-20.jpg";
import project21 from "../../../assets/pro-21.jpg";
import project22 from "../../../assets/pro-22.jpg";
import project23 from "../../../assets/pro-23.jpg";
import project24 from "../../../assets/pro-24.jpg";
import project25 from "../../../assets/pro-25.jpg";
import project26 from "../../../assets/pro-26.jpg";
import project27 from "../../../assets/pro-27.jpg";
import project28 from "../../../assets/pro-28.jpg";
import project29 from "../../../assets/pro-29.jpg";

const AllProject = ({ show, handleClose }) => {
  const projects = [
    project1, project2, project3, project4, project5, project6, project7, project8, project9,
    project10, project11, project12, project13, project14, project15, project16, project17,
    project18, project19, project20, project21, project22, project23, project24, project25,
    project26, project27, project28, project29
  ];

  return (
    <Modal show={show} onHide={() => handleClose(false)} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>All Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body className="allProjectBody">
        <div className="modalBodyScroller">
        <div className="container">
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-xl-3  col-sm-6">
                <div className="featureSliderSlide">
                  <img src={project} alt={`project-${index + 1}`} className="featureSliderImg" />
                </div>
              </div>
            ))}
          </div>
        </div>
        </div> 
      </Modal.Body>
    </Modal>
  );
};

AllProject.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
  };
  

export default AllProject;
