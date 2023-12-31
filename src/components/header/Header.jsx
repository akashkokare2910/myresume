import { Link } from "react-router-dom";
import { AvatarSVG, Email, Github, Linkedin } from "../../assets/image";
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from "react-icons/fa6";

const emailAddress = "akashkokare2017@gmail.com";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarSVG} alt="avatar" className="avatar" />
              <h1 className="header-name text-white">
                Akash Kokare, <br /> Software Engineer
              </h1>
            </div>
            <p className="header-text text text-white">
              Passionate software engineer skilled in web development (ReactJS)
              and back-end microservices (Spring Boot). Specialized in machine
              learning with projects using Convolutional Neural Networks and
              TensorFlow. Current role: Associate Software Engineer at
              RESEARCHWIRE. Connect on LinkedIn or check my GitHub. resources. .
              Languages: C/C++, Java, XSLT, Python. Web Development: React,
              JavaScript, Bootstrap, HTML/CSS, NodeJS, TypeScript. Technology:
              Git, AWS EC2, Docker, MongoDB, Spring Boot, Hibernate.
            </p>
          </div>

          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span className="text">akashkokare2017@email.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone: <span className="text">+91 74001-16992</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Address: <span className="text">Mumbai, India</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLink size={15} />
                </span>
                <p className="info-item-text">
                  Website:{" "}
                  <a
                    className="text"
                    href="https://akashkokare2910.github.io/Portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://akashkokare2910.github.io/Portfolio/
                  </a>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
              <li className="social-item">
                <Link to="https://www.linkedin.com/in/akash-kokare13bz/">
                  <img src={Linkedin} />
                  <span className="tooltip text">Linkedin</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="https://github.com/akashkokare2910">
                  <img src={Github} />
                  <span className="tooltip text">Github</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to={`mailto:${emailAddress}`}>
                  <img src={Email} alt="Email Icon" />
                  <span className="tooltip text">Email</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
