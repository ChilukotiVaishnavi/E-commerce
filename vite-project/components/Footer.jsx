import React from 'react';
import './mx.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <a className="social-ic" href="https://wa.me/qr/KZNP7MRG2Q7HD1">
          <i className="social-icon fa-brands fa-whatsapp fa-2x"></i>
        </a>
        <a className="social-ic" href="https://www.linkedin.com/in/chilukoti-vaishnavi-303a61252">
          <i className="social-icon fa-brands fa-linkedin-in fa-2x"></i>
        </a>
        <a className="social-ic" href="https://www.facebook.com/profile.php?id=100073705996357&mibextid=ZbWKwL">
          <i className="social-icon fab fa-facebook-f fa-2x"></i>
        </a>
        <a className="social-ic" href="https://instagram.com/chilukoti_vaishnavi?igshid=NGExMmI2YTkyZg==">
          <i className="social-icon fab fa-instagram fa-2x"></i>
        </a>
        <a className="social-ic" href="mailto:chilukoti.vaishnavi@gmail.com">
          <i className="social-icon fa-regular fa-envelope fa-2x"></i>
        </a>
      </div>
      <div className="F">
        <p>@Chilukoti Vaishnavi</p>
        <p>Phone no: 9912838599</p>
      </div>
    </footer>
  );
}

export default Footer;
