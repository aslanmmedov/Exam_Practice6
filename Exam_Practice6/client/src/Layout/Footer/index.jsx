import React from "react";
import './index.scss';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-3 col-sm-12">
                <h2>Category</h2>
                <ul>
                  <li>Male</li>
                  <li>Female</li>
                  <li>Shoes</li>
                  <li>Fashion</li>
                </ul>
              </div>
              <div className="col-3 col-sm-12">
                <h2>Company</h2>
                <ul>
                  <li>About</li>
                  <li>News</li>
                  <li>FAQ</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="col-3 col-sm-12">
                <h2>Adress</h2>
                <p>
                  <a href="#">contact89@winter.com</a>
                </p>
              </div>
              <div className="col-3 col-sm-12">
                <h2 id = "newsletter">Newsletter</h2>
                <div className="footerInput">
                  <input type="text" placeholder="Email Adress" />
                  <button>Subscribe</button>
                </div>
                <div className="icons">
                  <ul>
                    <li><FaFacebookF /></li>
                    <li><FaInstagram /></li>
                    <li><FaTwitter /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
