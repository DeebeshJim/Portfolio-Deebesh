import UnicornScene from "unicornstudio-react";
import "./Hero.css";
import Footer from "../Footer/Footer";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      {/* `<UnicornScene
        projectId="kLM3mnmLXnAU5DHNMhUN"
        width="100%"
        height="900px"
        scale={1}
        dpi={1.5}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.3/dist/unicornStudio.umd.js"
      />` */
      <img src="1000082709.png" alt="" className="hero-image" /> }
      <div className="content">
        <div className="buttn">
          <a href="#contact">Contact</a>
          <a href="#about">Who I'm</a>
          <a href="DeebeshCV.pdf"> Download CV</a> 
          <a href="https://www.youtube.com/@SaberKingscrown" target="_blank" rel="noopener noreferrer">YouTube Channel - Saber Kingscrown</a>
          <a href="https://www.webnovel.com/profile/4504719451" target="_blank" rel="noopener noreferrer">Webnovel - Saber Kingscrown</a>
          
        </div>
      </div>
    </div>
    
  );
}