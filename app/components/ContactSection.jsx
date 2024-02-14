import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px'}} id="contact">
      <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
      <p>Feel free to reach out to me through the following channels:</p>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '40px' }}>
        <li style={{ display: 'inline-block', marginRight: '20px' }}>
          <a href="https://github.com/LeslieTepale" style={{ textDecoration: 'none', color: 'white' }}>
            <FaGithub style={{ marginRight: '5px' }} />
            GitHub
          </a>
        </li>
        <li style={{ display: 'inline-block' }}>
          <a href="https://linkedin.com/in/leslie-tepale" style={{ textDecoration: 'none', color: 'white' }}>
            <FaLinkedin style={{ marginRight: '5px' }} />
            LinkedIn
          </a>
        </li>
        {/* Add more contact options as needed */}
      </ul>
    </div>
  );
};

export default ContactSection;