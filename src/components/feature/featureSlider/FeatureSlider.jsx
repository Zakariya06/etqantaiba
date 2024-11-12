import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';  

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
 

const FeatureSlider = () => {
  return (
    <>
      {/* Main Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10} 
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="featureSlider"
      >
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project1} alt="project-1" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project2} alt="project-2" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project3} alt="project-3" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project4} alt="project-4" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project5} alt="project-5" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project6} alt="project-6" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project7} alt="project-7" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project8} alt="project-8" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project9} alt="project-9" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project10} alt="project-10" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project11} alt="project-11" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project12} alt="project-12" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project13} alt="project-13" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project14} alt="project-14" className="featureSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featureSliderSlide">
            <img src={project15} alt="project-15" className="featureSliderImg" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project16} alt="project-16" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project17} alt="project-17" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project18} alt="project-18" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project19} alt="project-19" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project20} alt="project-20" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project21} alt="project-21" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project22} alt="project-22" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project23} alt="project-23" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project24} alt="project-24" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project25} alt="project-25" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project26} alt="project-26" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project27} alt="project-27" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project28} alt="project-28" className="featureSliderImg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featureSliderSlide">
                <img src={project29} alt="project-29" className="featureSliderImg" />
              </div>
            </SwiperSlide>
        {/* Continue adding SwiperSlide for each image */}
      </Swiper>

    
    </>
  );
};
 

export default FeatureSlider;
