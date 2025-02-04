import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaBook, FaCode, FaProjectDiagram, FaBriefcase, FaEnvelope } from "react-icons/fa";

const BootstrapNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="py-4">

        <Container>

          <Navbar.Brand href="/" className="fw-bold me-auto fs-4 d-flex align-items-center"><FaHome className="me-2" size={34} /> Accueil </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5 d-flex align-items-center gap-4">
              <Nav.Link href="/formations"><FaBook className="me-2" size={20} />Formations</Nav.Link>
              <Nav.Link href="/competences"><FaCode className="me-2" size={20} />Compétences</Nav.Link>
              <Nav.Link href="/projets"><FaProjectDiagram className="me-2" size={20} />Projets</Nav.Link>
              <Nav.Link href="/experiences"><FaBriefcase className="me-2" size={20} />Expériences</Nav.Link>
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
