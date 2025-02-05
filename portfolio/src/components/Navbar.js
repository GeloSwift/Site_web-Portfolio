import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaEnvelope } from "react-icons/fa";

const BootstrapNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="fixed-top py-4">

        <Container>

          <Navbar.Brand href="/" className="fw-bold me-auto fs-4 d-flex align-items-center"><FaHome className="me-2" size={34} /> Accueil </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5 d-flex align-items-center gap-4">
              <Nav.Link href="/formations">&#x1F4D8; Formations</Nav.Link>
              <Nav.Link href="/competences">&#x1F4C2; Compétences</Nav.Link>
              <Nav.Link href="/projets">&#x1F9EC; Projets</Nav.Link>
              <Nav.Link href="/experiences">&#x1F4BC; Expériences</Nav.Link>
            </Nav>
            <Nav className="ms-auto fs-5 d-flex align-items-center">
              <Nav.Link href="/contact" className="text-white" >
                <FaEnvelope className="me-2" size={20} /> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>

    </Navbar>
  );
};

export default BootstrapNavbar;
