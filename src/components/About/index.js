import AddProject from "../AddProject";
import "./index.css";

const About = () => (
  <div>
    <div className="about-container">
      <div>
        <h1>Hello, my name is Ashoke</h1>
        <p className="about-para">
          Aspiring Full Stack Developer | Learned at CCBP 4.0 Intensive | Html,
          CSS, Bootstrap, Python , javascript, Sql, Node js , React js
        </p>
        <div>
          <button type="button" className="btn">
            Projects
          </button>
          <button type="button" className="btn lin-btn">
            Linkedin
          </button>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dxt3w8y0z/image/upload/v1682921498/MyPic_m2uin2.jpg"
        alt="top"
        className="top-image"
      />
    </div>
    <div>
      <AddProject />
    </div>
  </div>
);

export default About;
