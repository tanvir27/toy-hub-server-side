import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaSnapchat } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-color">
      <Container className=" text-white text-center pt-4 pb-3">
        <Row>
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <div className="d-flex justify-content-center align-items-center">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="button">
                Search
              </button>
            </div>
            <div className="text-center text-lg-start pt-3 ps-3">
              <h4>About Us</h4>
              <ul className="list-unstyled">
                <li>Our Story</li>
                <li>Blog</li>
                <li>Reviews</li>
                <li>FAQs</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="">
              <p className="fw-semibold fs-2">
                <i>Kitchen House</i>
              </p>
              <p className="text-center text-lg-start">
                The Kitchen House is a leading online retailer of kitchen
                products and appliances. Our mission is to provide customers
                with the best products and customer service in the industry.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h4 className="mt-2">Connect with Us</h4>
            <ul className="list-unstyled">
              <li>
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
        </Row>
        <Row className="mt-3">
          <Col xs={12} className="text-center">
            <p className="text-danger">
              <i>&copy; 2023 The Kitchen House || All Rights Reserved.</i>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
