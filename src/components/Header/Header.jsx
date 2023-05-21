import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { toast } from "react-hot-toast";
import logo from "../../../public/tohub-logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = (event) => {
    event.preventDefault();

    logOut()
      .then(() => {
        toast.success("Log Out Successfully !");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    if (user) {
      tippy(buttonRef.current, {
        content: user.displayName,
      });
    }
  }, [user]);

  return (
    <div className="navbar-color py-2 mb-0">
      <Navbar open={open} expand="lg">
        <Container>
          <Link to="/" className="navbar-brand text-white fw-bold fs-3">
            <img
              className="img-fluid"
              style={{ height: "60px", width: "120px" }}
              src={logo}
              alt=""
            />
          </Link>
          <Navbar.Toggle onClick={() => setOpen(!open)} />
          <Navbar.Collapse>
            <Nav className="ms-auto text-black fs-5 font-style">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active-link text-decoration-none me-4 py-2"
                    : "link text-decoration-none text-black me-4 py-2"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active-link text-decoration-none me-4 py-2"
                    : "link text-decoration-none text-black me-4 py-2"
                }
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active-link text-decoration-none me-4 py-2"
                    : "link text-decoration-none text-black me-4 py-2"
                }
                to="/allToys"
              >
                All Toys
              </NavLink>

              {user ? (
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "active-link text-decoration-none me-4 py-2"
                        : "link text-decoration-none text-black me-4 py-2"
                    }
                    to="/myToys"
                  >
                    My Toys
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "active-link text-decoration-none me-4 py-2"
                        : "link text-decoration-none text-black me-4 py-2"
                    }
                    to="/addToys"
                  >
                    Add Toys
                  </NavLink>

                  <NavLink
                    onClick={handleLogOut}
                    className={({ isActive }) =>
                      isActive
                        ? "active-link text-decoration-none me-4 py-2"
                        : "link text-decoration-none text-black me-4 py-2"
                    }
                    to="/login"
                  >
                    LogOut
                  </NavLink>
                  <img
                    className="img-fluid rounded-circle ms-3"
                    src={user.photoURL}
                    alt=""
                    ref={buttonRef}
                    style={{ height: "38px", width: "40px" }}
                  />
                </div>
              ) : (
                <div className="me-4 py-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "active-link text-decoration-none me-4 py-2"
                        : "link text-decoration-none text-black me-4 py-2"
                    }
                    to="/login"
                  >
                    SignIn/SignUp
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
