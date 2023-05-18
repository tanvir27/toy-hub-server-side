import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaSnapchat } from "react-icons/fa";
import logo from '../../../public/tohub-logo.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-color">
      <Container className=" text-black text-center pt-4 pb-3">
        <Row>
          <Col xs={12} md={3}>
            <div className="">
              <Link>
                {" "}
                <img
                  style={{ height: "150px" }}
                  className="img-fluid"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <h4 className="mt-2">Connect with Us</h4>
            <ul className="list-unstyled">
              <li className="">
                <FaFacebook /> Facebook
              </li>
              <li>
                <FaTwitter /> Twitter
              </li>
              <li>
                <FaInstagram /> Instagram
              </li>
              <li>
                <FaSnapchat /> Snapchat
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h4 className="mt-2">Legal</h4>
            <ul className="list-unstyled">
              <li className="">Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <div className="d-flex justify-content-center align-items-center">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="button">
                Search
              </button>
            </div>
            <div className="text-center text-lg-start pt-3 ps-3">
              <h4>About Us</h4>
              <ul className="list-unstyled">
                <li>Our Story</li>
                <li>Blog</li>
                <li>Reviews</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} className="text-center">
            <p className="text-black">
              <i>&copy; 2023 Toy Hub || All Rights Reserved.</i>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
