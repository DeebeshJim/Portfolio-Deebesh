import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Header() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={scrolled ? "header scroll" : "header"}>
            <div className="logo">
                <h1><span>Deebesh </span>Jim</h1>
            </div>

            <ul className="links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#serv">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <ul className="icons">
                <li><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.instagram.com/deebeshj1?igsh=MzNrdzg2bHpxYWE1"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://www.linkedin.com/in/deebesh-jim-5957a7316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </header>
    )
}

export default Header