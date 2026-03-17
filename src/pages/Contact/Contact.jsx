import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'deebeshjim',
    'deebeshjim',
    e.target,
    'M_Bh9cT8Kr53CKgiL'
  )
  .then(() => {
    alert('Message sent successfully!');
  })
  .catch(() => {
    alert('Failed to send message');
  });
};

function Contact() {

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>deebeshjim@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+971 55 198 8474</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>United Arab Emirates</span>
          </div>

        </div>

        {/* RIGHT FORM */}

        <form className="contact-form" onSubmit={sendEmail}>

          <input
            type="text"
            placeholder="Your Name" name="name"
            required
          />

          <input
            type="email"
            placeholder="Your Email" name="email"
            required
          />

          <textarea
            placeholder="Your Message" name="your message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );

}

export default Contact;