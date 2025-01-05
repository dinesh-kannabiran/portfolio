import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MyPortfolio</h2>
          <p>Creating impactful web experiences.</p>
        </div>
        <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dinesh All Rights Reserved.</p>
      </div>
        <div className="footer-socials">
          <h3>Follow Me</h3>
          <ul>
            <li><a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSDZBXHDsLBqkgtmSKwHSJskRQrXBrcDlCDhgghdjldLdsfvvkrPvRZdzSVVWNrkpNmmBwJH" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i>Email</a></li>
            <li><a href="https://gitlab.com/frontend-reactjs3/my-learnings/-/tree/design?ref_type=heads" target="_blank" rel="noopener noreferrer"><i className="fab fa-gitlab"></i>GitLab</a></li>
            <li><a href="https://www.linkedin.com/in/dinesh-kannabiran/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
