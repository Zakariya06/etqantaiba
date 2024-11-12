import Carousel from "react-bootstrap/Carousel";
import construction from "../../assets/construction.jpg";
import information from "../../assets/information-technology.jpg";
import steelSolutions from "../../assets/steel-solutions.jpg";
import projectManagement from "../../assets/project-management.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./heroSection.css";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Initialize AOS on component mount
    Aos.init({
      duration: 1000,
      startEvent: "DOMContentLoaded",
      offset: 0,
    });
  }, []);

  const handleSlideChange = (selectedIndex) => {
    setActiveSlide(selectedIndex);
    // Refresh AOS animations for the new slide
    Aos.refresh();
    // Force the animation to play on the new slide
    requestAnimationFrame(() => {
      const elements = document.querySelectorAll(".heroTextContainer");
      elements.forEach((element) => {
        element.classList.remove("aos-animate");
      });
      requestAnimationFrame(() => {
        elements[selectedIndex].classList.add("aos-animate");
      });
    });
  };

  return (
    <section className="heroSection" id="Home">
      <Carousel
        activeIndex={activeSlide}
        onSelect={handleSlideChange}
        autoPlay={true}
        interval={5000}
        onSlide={handleSlideChange}
      >
        <Carousel.Item>
          <img src={construction} alt="construction" className="sliderImg" />
          <Carousel.Caption>
            <div className="container">
              <div
                className="heroTextContainer"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="sliderTitle">Construction</h3>
                <p className="subText col-lg-4"> 
                </p>
                <a href="#Footer" className="mainBtn">
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={steelSolutions}
            alt="steelSolutions"
            className="sliderImg"
          />
          <Carousel.Caption>
            <div className="container">
              <div
                className="heroTextContainer text-center"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="sliderTitle">Steel Solutions</h3>
                <p className="subText col-lg-4 mx-auto"> 
                </p>
                <a href="#Footer" className="mainBtn">
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={information} alt="information" className="sliderImg" />
          <Carousel.Caption>
            <div className="container">
              <div
                className="heroTextContainer text-end"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="sliderTitle">Information Technology</h3>
                <p className="subText col-lg-4 ms-auto"> 
                </p>
                <a href="#Footer" className="mainBtn">
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
     
        <Carousel.Item>
          <img
            src={projectManagement}
            alt="projectManagement"
            className="sliderImg"
          />
          <Carousel.Caption>
            <div className="container">
              <div
                className="heroTextContainer text-left"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="sliderTitle">Project management  & Trading</h3>
                <p className="subText col-lg-4"> 
                </p>
                <a href="#Footer" className="mainBtn">
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
