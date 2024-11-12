import getInTouchImg from "../../assets/getintouch.jpg";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <section className="GetInTouchSection" id="GetInTouch">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div className="getInImgContainer">
            <img src={getInTouchImg} alt="getInTouchImg" />
          </div>
        </div>
        <div className="col-lg-4  ">
          <div className="getInTouchContainer">
            <h2 className="mdHeading">HOW WE DO IT</h2>
            <p className="mainText">
              At Etqan Taiba, we combine the expertise of experienced
              professionals to deliver projects seamlessly from design to
              completion. Our specialized teams work across Construction, IT,
              Steel Solutions, and Project Management to ensure excellence at
              every stage. In Construction, we manage the entire process with
              precision, while our IT specialists provide innovative technology
              solutions that enhance efficiency. Our Steel Solutions team
              delivers strong and reliable structures, and our Project
              Management experts ensure every project is executed smoothly and
              on time. Together, we drive operational success and business
              excellence.
            </p>
            <a href="#Footer" className="mainBtn">
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
