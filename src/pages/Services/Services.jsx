import "./Services.css"
import { FaCode, FaPalette, FaLaptopCode } from "react-icons/fa";

function Services(){

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>Skills</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <FaCode className="service-icon"/>
          <h3>Frontend Development</h3>
          <p>I build modern and interactive websites using React, HTML, CSS, JavaScript, Node.Js, Php, MySql and Next.js.</p>
        </div>

        <div className="service-card">
          <FaPalette className="service-icon"/>
          <h3>UI Design</h3>
          <p>Creating clean and modern user interfaces with focus on design and usability.</p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="service-icon"/>
          <h3>Web Applications</h3>
          <p>Building modern web applications with dynamic features and smooth performance.</p>
        </div>
        <div className="service-card">
          <FaLaptopCode className="service-icon"/>
          <h3>Python</h3>
          <p>💻 Skilled in Python with a strong understanding of core concepts and logic.
I enjoy solving problems and building efficient, practical solutions.

</p>
        </div>

      </div>

    </div>
  )

}

export default Services;