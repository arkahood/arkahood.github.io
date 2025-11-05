import React from 'react';
import type { Personal } from '../../types/portfolio';
import './Contact.css';

interface ContactProps {
  personal: Personal;
}

const Contact: React.FC<ContactProps> = ({ personal }) => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="numbered-heading overline">What's Next?</h2>
      
      <h2 className="title">Get In Touch</h2>
        
        <p className="contact-description">
          Although I'm not currently looking for any new opportunities, my inbox is 
          always open. Whether you have a question or just want to say hi, I'll 
          try my best to get back to you!
        </p>
        
        <a 
          className="email-link" 
          href={`mailto:${personal.email}`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
    </section>
  );
};

export default Contact;