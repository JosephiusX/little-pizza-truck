// Footer.js
import React from 'react';
import NavLinksFoot from './NavLinksFoot';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Home
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  About us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Pricing
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Menu
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="col-1-of-2">
          <p className="footer__copyright">
          Built by{' '}
          <a href="#" className="footer__link">
          Jonas Schmedtmann
          </a>{' '}
          for his online course{' '}
          <a href="#" className="footer__link">
          Advanced CSS and Sass
          </a>
          . Copyright &copy;
          </p>
        </div> */}
      </div>
      <NavLinksFoot />
    </footer>
  );
};


export default Footer;