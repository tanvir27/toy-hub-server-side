import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Home = () => {
  // const loader = useLoaderData();
  return (
    <div className="bg-color">
      <div className="container home-section pt-lg-5">
        {/* banner section start */}
       
        {/* banner section end */}

        {/* chefs section  */}
        {/* <div className="text-center pt-4">
          <h1 className="fw-bold text-secondary py-2">
            Meet Our Talented Chefs
          </h1>
        </div> */}
        {/* chefs section  card*/}
        {/* <div className="row row-cols-1 row-cols-md-3 mt-2">
          {loader.map((data) => (
            <ChefDetails data={data} key={data.id}></ChefDetails>
          ))}
        </div> */}
        {/* chefs section end here  */}

        {/* about us section start*/}
        
        {/* about us section end */}

        {/* contact us section  */}

        <div className="contact-us pb-lg-5">
          <h1 className="text-center fw-bold text-secondary pb-4">
            Connect with us
          </h1>
          <Container>
            <Row className="shadow border py-2">
              <Col md={6}>
                <div className="mb-4">
                  <h2 className="text-center fw-bold">Contact</h2>
                </div>
                <div className="mb-4">
                  <p>
                    <FaMapMarkerAlt /> Address: Ahmednagar, Paikpara, Jonaki
                    Road, Mirpur-1
                  </p>
                  <p>
                    <FaPhoneAlt /> Phone: 01776-858436
                  </p>
                  <p>
                    <FaEnvelope /> Email: kitchenhouse@gmail.com
                  </p>
                </div>
                <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter your message"
                    />
                  </Form.Group>
                  <Button className="my-3 w-25" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col md={6}>
                <div className="mb-4">
                  <h2 className="fw-bold text-center">Find Us</h2>
                </div>
                <div style={{ height: "400px", width: "100%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4644.050169423253!2d90.36039884853662!3d23.794755127667628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c15d8b028891%3A0x3edc39f46d1449c8!2sJonaki%20Road!5e0!3m2!1sen!2sbd!4v1683136515717!5m2!1sen!2sbd"
                    style={{ height: "100%", width: "100%", border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* contact us section  */}
      </div>
    </div>
  );
};

export default Home;
