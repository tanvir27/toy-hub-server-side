import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Register = () => {
  const { createUser, profileUpdate, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // validatePassword(password);
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    
    if (password < 6) {
      setError("Password Can not be less than 6 character long");
      return;
    }

    createUser(email, password)
      .then((result) => {
        profileUpdate(name, photoURL)
          .then(() => {
            logOut()
              .then(() => {
                navigate("/login");
              })
              .catch((error) => {
                console.log(error.message);
              });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <section className="bg-color py-5">
      <Container>
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Register for an Account</h2>
            <Form onSubmit={handleRegister}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPhoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  type="text"
                  name="photo"
                  placeholder="Enter your photo URL"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <div className="text-center ">
                <Button className="mt-2 w-25" variant="primary" type="submit">
                  Register
                </Button>
              </div>
              <div>
                <p className="text-danger text-center mt-3 fw-bold">
                  {error}
                  {/* {error ? <span className="p-1 border"> {error} </span> : ""} */}
                </p>
              </div>
              <div className="text-center mt-2 text-primary">
                <p>
                  Already have an Account? Click here to{" "}
                  <Link to="/login">Login</Link>{" "}
                </p>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Register;
