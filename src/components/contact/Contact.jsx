import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_txzlk3e",
      "template_8mxc4aq",
      form.current,
      "9oKeGl-eMWGs7eKrs"
    );

    event.target.reset();
  };

  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vanivskyi.artur@gmail.com</h5>
            <a href="mailto:vanivskyi.artur@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Message me</h5>
            <a href="https://m.me/artur.vanivskyi" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FiPhoneCall className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+1 646-830-9748</h5>
            <a
              href="https://api.whatsapp.com/send?phone+16468309748"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
