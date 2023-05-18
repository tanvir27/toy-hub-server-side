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
        <div className="banner-section mb-3">
          <Container fluid>
            <Row className="flex-column-reverse flex-lg-row">
              <Col lg={6} className="d-flex align-items-center">
                <Image
                  className="rounded-2"
                  src="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=996&t=st=1683125531~exp=1683126131~hmac=41652cb264498cec2e1ddf707bce5711beb132e20616a0be336625820317ba2f"
                  alt="Banner"
                  fluid
                />
              </Col>
              <Col lg={6} className="d-flex align-items-center">
                <div className="banner-text">
                  <h1 className="text-center fw-bold">
                    Welcome to Kitchen House
                  </h1>
                  <p className="fs-5">
                    We're passionate about creating delicious and nutritious
                    meals using fresh, seasonal ingredients. Our experienced
                    chefs have a wealth of knowledge and expertise, and are
                    dedicated to providing you with the best possible dining
                    experience.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
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
        <div className="about us my-3 py-3">
          <div className="text-center">
            <h1 className="text-secondary fw-bold">About Us</h1>
          </div>
          <Container className="py-3">
            <Row className="border rounded shadow">
              <Col xs={12} md={6}>
                <h2 className="text-center fw-bold pb-3">About Our Company</h2>
                <p className="">
                  We are a team of passionate food enthusiasts who believe that
                  cooking and eating delicious, healthy food is one of life's
                  greatest pleasures. Our mission is to bring the joy of cooking
                  to everyone, by providing the best ingredients, recipes, and
                  cooking tips to help you create amazing meals at home.
                </p>
                <p>
                  Our experienced chefs have traveled the world and learned the
                  secrets of great cuisine, and we want to share that knowledge
                  with you. Whether you're a beginner or an experienced cook, we
                  have everything you need to take your cooking to the next
                  level.
                </p>
              </Col>
              <Col xs={12} md={6}>
                <h2 className="text-center fw-bold pb-3">Our Chefs</h2>
                <p>
                  Our team of expert chefs is dedicated to creating delicious
                  and nutritious meals that are sure to impress. From classic
                  comfort food to exotic international cuisine, we have a recipe
                  for every taste and occasion.
                </p>
                <p>
                  Our chefs use only the freshest, highest-quality ingredients,
                  and they are always experimenting with new flavors and
                  techniques to keep things interesting. They love nothing more
                  than sharing their passion for food with others, and they are
                  always happy to answer questions and provide cooking tips and
                  advice.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
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
