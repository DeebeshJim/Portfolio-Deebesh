import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {
  

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">
      

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="deeb.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="1000082709.png" alt="" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
          

            I’m a passionate Computer Science Engineer with a deep love for creating visually engaging and user-focused digital experiences. With a strong foundation in modern web technologies, I enjoy transforming ideas into clean, responsive, and interactive interfaces that not only look great but feel seamless to use.                   

                                        Beyond development, I’m also a creative storyteller. I write original novels, crafting immersive worlds and compelling characters that reflect my imagination and attention to detail. This creative mindset enhances my approach to coding—helping me build projects that are not just functional, but meaningful and engaging.

            I also create and upload video content, where I experiment with unique ideas and connect with audiences through creativity and consistency. Whether it’s development, storytelling, or content creation, I’m always driven by the desire to build, express, and improve.

            I’m currently focused on growing as a developer and building impactful projects that can make a difference, while continuously pushing my creative boundaries.

          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;