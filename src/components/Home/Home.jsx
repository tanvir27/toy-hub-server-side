import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail, HiPhone } from "react-icons/hi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  // const loader = useLoaderData();
  return (
    <div className="bg-color">
      <div className="container home-section pt-lg-5">
        {/* banner section start */}
        <div className="container mb-3 mb-lg-5 ">
          <div className="row ">
            <div
              className="col-md-6 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
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
            <div
              className="col-md-6 px-0 "
              data-aos="fade-left"
              data-aos-duration="2000"
            >
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
          <h1 className="text-center text-color my-5 fw-bold">
            <i>ToY Gallery</i>
          </h1>
          <div
            className="row "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
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

        {/* catagories section start */}

        <div className="text-center my-2 my-lg-5">
          <h1 className="fw-bold text-color mb-4">Shop By Category</h1>
          <Tabs>
            <div className="fw-bold text-color fst-italic">
              <TabList>
                <Tab>Truck Car</Tab>
                <Tab>Mini Police Car</Tab>
                <Tab>Sports Car</Tab>
              </TabList>
            </div>

            <TabPanel>
              <div className="container row row-cols-1 row-cols-md-2 mt-2 mx-auto">
                <div className="card mb-3">
                  <div className="row g-0 py-2">
                    <div className="col-md-6">
                      <img
                        src="https://images.unsplash.com/photo-1575574419906-41458fc83949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRveSUyMHRydWNrJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        className="img-fluid  rounded "
                        style={{ height: "100%" }}
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title fw-bold text-color">
                          Truck Car X
                        </h5>
                        <div className="mt-3">
                          <p className="">Price: $ 120</p>
                          <p className="">Ratings: ***** </p>
                        </div>
                        <div className="text-center mt-2">
                          <Link>
                            <button type="button" className="btn w-75 btn-info">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row g-0 py-2">
                    <div className="col-md-6">
                      <img
                        src="https://images.unsplash.com/photo-1575574419906-41458fc83949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRveSUyMHRydWNrJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        className="img-fluid  rounded "
                        style={{ height: "100%" }}
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title fw-bold text-color">
                          Truck Car X
                        </h5>
                        <div className="mt-3">
                          <p className="">Price: $ 120</p>
                          <p className="">Ratings: ***** </p>
                        </div>
                        <div className="text-center mt-2">
                          <Link>
                            <button type="button" className="btn w-75 btn-info">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </Tabs>
        </div>
        {/* catagories  section end */}

        {/* Reviews section start here  */}
        <div className="py-2">
          <h1 className="text-color fw-bold text-center mb-5">
            <i>
              {" "}
              <span>Happy</span>{" "}
              <span className="text-warning"> Clients says</span>
            </i>
          </h1>
          <div
            className="container row row-cols-1 row-cols-md-3  mx-auto "
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div className="card text-center">
              <div className="mt-0 mt-lg-5">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGUlMjBpbWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  className="rounded-circle"
                  alt="Client"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <p className="mt-3">
                "I absolutely love the toy cars I purchased from this website.
                The quality is outstanding, and the attention to detail is
                impressive. My kids are having a blast playing with them, and
                I'm thrilled with the excellent customer service I received.
                Highly recommended!"
              </p>
              <div className="mb-0 mb-lg-3 text-warning">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <div>
                <p className="text-color fw-semibold">John Doe</p>
                <p className="text-color fw-semibold">Doctor</p>
              </div>
            </div>
            <div className="card text-center">
              <div className="mt-0 mt-lg-5">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1617441356293-de82acf3552f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="rounded-circle"
                  alt="Client"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <p className="mt-3">
                "I absolutely love the toy cars I purchased from this website.
                The quality is outstanding, and the attention to detail is
                impressive. My kids are having a blast playing with them, and
                I'm thrilled with the excellent customer service I received.
                Highly recommended!"
              </p>
              <div className="mb-0 mb-lg-3 text-warning">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStarHalfAlt className="star-icon" />
              </div>
              <div>
                <p className="text-color fw-semibold">William Harry</p>
                <p className="text-color fw-semibold">Software Developer</p>
              </div>
            </div>
            <div className="card text-center ">
              <div className="mt-0 mt-lg-5">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="rounded-circle"
                  alt="Client"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <p className="mt-3">
                "I absolutely love the toy cars I purchased from this website.
                The quality is outstanding, and the attention to detail is
                impressive. My kids are having a blast playing with them, and
                I'm thrilled with the excellent customer service I received.
                Highly recommended!"
              </p>
              <div className="mb-0 mb-lg-3 text-warning">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon " />
              </div>
              <div>
                <p className="text-color fw-semibold">Harry state</p>
                <p className="text-color fw-semibold">Banker</p>
              </div>
            </div>
          </div>
        </div>
        {/* Reviews section end here  */}

        {/* contact us section  */}

        <div className="my-2 my-lg-5">
          <h1 className="text-center text-color fw-bold pt-3 pb-4 mt-lg-0">
            Any Problem With Our Gadget Just Contact Us
          </h1>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className=" py-5">
                <img
                  src="https://img.freepik.com/free-vector/call-center-manager-taking-calls_74855-19704.jpg?w=900&t=st=1684490241~exp=1684490841~hmac=8ed4e8d12372d43e42398fd439338d0d48be7164be751b72d907991a4ddcff7a"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="row">
                <div className="col-md-6 sol-sm-12  p-4">
                  <div className="card-body-color card-container  p-4">
                    <h3 className="text-white">Face-to-Face support</h3>
                    <p>product is in warranty, we're here to help.</p>
                    <div className="d-flex gap-4">
                      <HiLocationMarker className="fs-2"></HiLocationMarker>

                      <button className="btn btn-dark">
                        Find Our All Service Center
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 sol-sm-12  p-4">
                  <div className="card-body-color card-container  p-4">
                    <h3 className="text-white pb-3">24 Hours Phone </h3>

                    <div className="d-flex gap-4">
                      <HiPhone className="fs-2"></HiPhone>

                      <p className="fw-semibold">01776858436</p>
                    </div>
                    <p>09:00 AM to 06:00 PM [Everyday]</p>
                  </div>
                </div>
                <div className="col-md-6 sol-sm-12  p-4">
                  <div className="card-body-color card-container  p-4">
                    <h3 className="text-white pb-3">E-Mail Support</h3>

                    <div className="d-flex gap-4">
                      <HiOutlineMail className="fs-3"></HiOutlineMail>

                      <p className=" fw-bold">toyHub@gmail.com</p>
                    </div>
                    <p>We'll respond within 24 hours of your request.</p>
                  </div>
                </div>
                <div className="col-md-6 sol-sm-12  p-4">
                  <div className="card-body-color card-container  p-4">
                    <h3 className="text-white pb-3">WhatsApp Us</h3>

                    <div className="d-flex gap-4">
                      <HiPhone className="fs-2"></HiPhone>

                      <p className="fw-semibold">01776858436</p>
                    </div>
                    <p>09:00 AM to 06:00 PM [Everyday]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact us section  */}
      </div>
    </div>
  );
};

export default Home;
