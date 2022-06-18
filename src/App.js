import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

// import Calculator from "./Calculator/Calculator";
// import MultipleApi from "./Calculator/MultipleApi";
// import Scramble from "./Scrambles/Scramble";

const App = () => {
  const activeStyle = {
    backgroundColor: "#E18E3A",
    color: "#000",
    border: "1px solid #000",
    borderRadius: "5px",
    padding: "3px",
    margin: "3px",
    fontSize: "1em",
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    // letterSpacing: "1px",
    fontFamily: "sans-serif",
    cursor: "pointer",
    transition: "all 0.1s ease-in-out",
    Animation: "fadeIn 0.3s ease-in-out",
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <NavLink
            to="/"
            className="navbar-brand"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/6646/6646479.png"
              alt="logo"
              width="50"
              height="50"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0  "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/calculator"
              >
                Calculator
              </NavLink>
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/form"
              >
                form
              </NavLink>
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/news"
              >
                News
              </NavLink>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Scramble /> */}
      {/* <Calculator /> */}
      {/* <MultipleApi /> */}
    </div>
  );
};

export default App;
