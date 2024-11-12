import AboutUs from "./components/aboutUs/AboutUs";
import Expertise from "./components/expertise/Expertise";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import GetInTouch from "./components/getinTouch/GetInTouch";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import OurClient from "./components/ourClient/OurClient";
import Topbar from "./components/topBar/Topbar";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <GetInTouch />
      <Expertise />
      <Feature />
      <OurClient />
      <Footer />
    </>
  );
};

export default App;
