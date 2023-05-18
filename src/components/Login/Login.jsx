import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaGithub, FaGoogle, FaMailBulk } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const { LoginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    setError("");

    LoginUser(email, password)
      .then((result) => {
        toast.success("Log in Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // google login
  const handleGoogleLogin = (event) => {
    event.preventDefault();
    googleLogin()
      .then(() => {
       
        navigate(from, { replace: true });
         toast.success("Log in Successful");
      })
      .catch((error) => {
        setError(error.message);
      });
  };


  return (
    <div>
      <section className="py-5 bg-color">
        <Container>
          <div className="d-flex justify-content-center">
            <div className="col-md-6">
              <h2 className="text-center mb-4 fw-bold">LogIn to Your Account</h2>

              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button className="w-25 mt-2" variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
              <div>
                <p className="text-danger text-center mt-3 fw-bold">
                  {error ? (
                    <span className="p-1 border">Wrong Input & Password </span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className="text-center mt-2 text-primary">
                <p>
                  Don't have any account? Click here to{" "}
                  <Link to="/register">Register</Link>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="text-center mb-2">
              <Button onClick={handleGoogleLogin} variant="primary">
                <FaGoogle className="me-2" />
                Sign in with Google
              </Button>
            </div>
         
          </div>
        </Container>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
