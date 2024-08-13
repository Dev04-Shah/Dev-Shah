import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={"/images/Dev.jpeg"} alt="Dev Shah" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Dev Shah">
            Dev Shah
          </h1>

          <p className="title">Data Analytics & MERN Stack Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:devshah482004@gmail.com" className="contact-link">
                devshah482004@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+918238494441" className="contact-link">
                +918238494441
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2004-08-04">August 4, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Ahmedabad, Gujarat, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <FaGithub  style={{ fontSize: '36px' }} />
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <FaLinkedin  style={{ fontSize: '36px' }} />
            </a>
          </li>

        </ul>
      </div>
    </aside>
  );
};

export default Aside;
