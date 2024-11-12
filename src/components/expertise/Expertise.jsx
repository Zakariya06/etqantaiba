import ExpertiesSlider from "./expertiesSlider/ExpertiesSlider";
import "./Expertise.css";

const Expertise = () => {
  return (
    <section className="aboutUsSection expertiesSection" id="Expertise">
      <div className="col-lg-10 mx-auto">
        <div className="aboutUsContainer">
          <h1 className="mdHeading">Our Business and Expertise</h1>
          <p className="mainText">
            Etqan Taiba specializes in Construction, IT, Steel Solutions, and
            Project Management. We deliver high-quality construction, innovative
            tech solutions, robust steel structures, and seamless project
            execution ensuring excellence and efficiency across all sectors.
          </p>
        </div>
        <div className="expertiesSliderSection">
          <ExpertiesSlider />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
