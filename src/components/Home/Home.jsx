import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Home = () => {
  // const loader = useLoaderData();
  return (
    <div className="bg-color">
      <div className="container home-section pt-lg-5">
        {/* banner section start */}
        <div className="container mb-3 mb-lg-5 ">
          <div className="row ">
            <div className="col-md-6">
              <div className="px-0 px-lg-5 text-color">
                <h1 className="text-center pt-2">
                  Discover Endless Adventures with Toy Hub
                </h1>
                <p>
                  Experience the thrill of racing and collecting toy cars in our
                  exclusive toy car marketplace.
                </p>
                <p>
                  Explore our vast collection of toy cars and dive into a world
                  of thrilling racing and imaginative play. At our toy cars
                  marketplace, you'll find an extensive range of high-quality
                  toy cars.
                </p>
                <div className="text-center py-3">
                  <button type="button" className="btn btn-outline-primary">
                    EXPLORE NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="rounded-5">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 img-fluid rounded-5"
                      src="https://images.unsplash.com/photo-1642761030731-1e57677c3b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHx0b3klMjBzcG9ydHMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 img-fluid rounded-5"
                      src="https://images.unsplash.com/photo-1627808838459-6198a4bd8876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHx0b3klMjBzcG9ydHMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 img-fluid rounded-5"
                      src="https://images.unsplash.com/photo-1612527713429-25bdfb34a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHx0b3klMjBzcG9ydHMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        {/* banner section end */}

        {/* gallery  section start*/}

        <div className=" my-2 my-lg-5">
          <h1 className="text-center text-color fw-bold">
            <i>Gallery</i>
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 shadow py-3 body-color rounded">
              <div className="card shadow">
                <img
                  className="img-fluid rounded"
                  style={{ height: "250px" }}
                  src="https://img.freepik.com/free-photo/purple-white-race-car-with-word-speed-side_1340-25737.jpg?size=626&ext=jpg&uid=R101497129&ga=GA1.2.1449908384.1679952179&semt=ais"
                  alt="Card 1"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 shadow py-3 body-color rounded">
              <div className="card shadow">
                <img
                  className=" img-fluid rounded"
                  style={{ height: "250px" }}
                  src="https://img.freepik.com/free-photo/3d-render-f1-racing-car_1048-5611.jpg?size=626&ext=jpg&uid=R101497129&ga=GA1.2.1449908384.1679952179&semt=ais"
                  alt="Card 1"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 shadow py-3 body-color rounded">
              <div className="card shadow">
                <img
                  className=" img-fluid rounded"
                  style={{ height: "250px" }}
                  src="https://img.freepik.com/free-photo/blue-car-with-white-stripe-that-says-ford_1340-37094.jpg?size=626&ext=jpg&uid=R101497129&ga=GA1.2.1449908384.1679952179&semt=ais"
                  alt="Card 1"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 shadow py-3 body-color rounded">
              <div className="card shadow">
                <img
                  className="img-fluid rounded"
                  style={{ height: "250px" }}
                  src="https://images.unsplash.com/photo-1676763092563-628ad69c226b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRveSUyMHRydWNrJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="Card 1"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 shadow py-3 body-color rounded">
              <div className="card shadow">
                <img
                  className=" img-fluid rounded"
                  style={{ height: "250px" }}
                  src="https://images.unsplash.com/photo-1663885193694-bbeae8c95b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRveSUyMHRydWNrJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="Card 1"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 shadow py-3 body-color rounded">
              <div className="card shadow">
                <img
                  className=" img-fluid rounded"
                  style={{ height: "250px" }}
                  src="https://images.unsplash.com/photo-1564518073728-d947ff17f249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRveSUyMHRydWNrJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="Card 1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* gallery  section end */}

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
