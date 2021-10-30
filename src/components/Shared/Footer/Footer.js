import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h5 className="my-2">Company</h5>
            <Link to="/about" className="footer-link">
              About Us
            </Link>
          </div>
          <div className="col-lg-3">
            <h5 className="my-2">Explore</h5>
            <Link to="/services" className="footer-link">
              Our Services
            </Link>
          </div>
          <div className="col-lg-3">
            <h5 className="my-2">Help</h5>
            <Link to="/Faq" className="footer-link">
              FAQ
            </Link>
            <Link to="/support_center" className="footer-link">
              Support Centre
            </Link>
            <Link to="/payment_security" className="footer-link">
              Payment Security
            </Link>
            <Link to="/privacy_policy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
          <div className="col-lg-3">
            <h5 className="my-2">Terms & Condition</h5>
            <Link to="/general" className="footer-link">
              General
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h5 className="my-3">Address</h5>
            <p>
              SA Hotel Ltd 4th Floor, Chinora 140/U, Nimatpur Naogaon, Chinora
              6530, Bangladesh
            </p>
            <p className="d-flex align-items-center">
              <i className="fa fa-envelope text-primary "></i>
              <a
                href="mailto:dev.shahin2@gmail.com"
                className="footer-social-link"
              >
                dev.shahin2@gmail.com
              </a>
            </p>
            <p className="d-flex align-items-center">
              <i className="fa fa-phone text-primary"></i>
              <a href="tel:+8809638307759" className="footer-social-link">
                +8809638307759
              </a>
            </p>
          </div>
          <div className="col-lg-8  align-self-end">
            <div className="payment-methods">
              <h6 className="fz14 fw-600">We Accept</h6>
              <div className="methods d-flex flex-wrap align-items-center mt-3">
                <div className="image">
                  <img
                    src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/amex-new.png"
                    alt=""
                  />
                </div>
                <div className="image">
                  <img
                    src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/visa-new.png"
                    alt=""
                  />
                </div>
                <div className="image">
                  <img
                    src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/mastercard-new.png"
                    alt=""
                  />
                </div>
                <div className="image">
                  <img
                    src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/dbbl-new.png"
                    alt=""
                  />
                </div>
                <div className="image">
                  <img
                    src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/bkash-new.png"
                    alt=""
                  />
                </div>
                <div className="image">
                  <img
                    src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/nogod-new.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">
        &copy; SA Hotel Booking Ltd , {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
