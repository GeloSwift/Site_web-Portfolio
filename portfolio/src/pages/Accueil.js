import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaBook, FaCode, FaProjectDiagram, FaBriefcase, FaEnvelopeOpenText } from "react-icons/fa";
import profilePic from "../assets/images/profile.jpg";
import "../assets/css/Accueil.css";

const Accueil = () => {
  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={4} className="text-center">
          <img src={profilePic} alt="Angelo Nichele" className="rounded-circle " width={250} height={270} />
          <h1 className="mt-3">Angelo Nichele</h1>
          <h4 className="text-muted">Alternant en Cybersécurité</h4>
        </Col>
      </Row>

      <hr className="my-4" />

      <Row className="justify-content-center">
        <Col md={8}>
          <p className="fs-5">
            Moi c'est Angelo, je suis actuellement étudiant en <strong>3ème année de BUT Informatique</strong> et <strong>alternant en cybersécurité</strong> chez <strong>Capgemini</strong>.
            Je suis passionné par le <strong>développement</strong>, et la <strong>sécurité informatique</strong>.<br />
            L'année prochaine, je souhaite continuer mes études à <strong>BAC+5</strong> dans une <strong>école d'ingénieur en alternance</strong>.
          </p>
        </Col>
      </Row>

      <hr className="my-4" />

      <h2>Explorer mon Portfolio</h2>
      <Row className="justify-content-center my-4">
        {[{ path: "/formations", icon: <FaBook size={30} />, label: "Formations" },
          { path: "/competences", icon: <FaCode size={30} />, label: "Compétences" },
          { path: "/projets", icon: <FaProjectDiagram size={30} />, label: "Projets" },
          { path: "/experiences", icon: <FaBriefcase size={30} />, label: "Expériences" },
          { path: "/contact", icon: <FaEnvelopeOpenText size={30} />, label: "Contact" }].map((item, index) => (
            <Col md={2} key={index}>
              <Card as="a" href={item.path} bg="dark" text="white" border="secondary" 
                    className="card-custom text-center p-3 shadow-sm text-decoration-none d-flex align-items-center justify-content-center" 
                    style={{ height: "180px", width: "180px" }}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  {item.icon}
                  <Card.Title className="mt-2">{item.label}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>

      <hr className="my-4" />

      <h2>Me contacter</h2>
      <Row className="justify-content-center my-4">
        {[{ link: "https://github.com/GeloSwift", icon: <FaGithub size={20} />, label: "Github" },
          { link: "https://www.linkedin.com/in/angelo-nichele-110710268/", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
          { link: "mailto:angelo.nichele317@gmail.com", icon: <FaEnvelope size={20} />, label: "Email" },
          { link: "tel:+33785431000", icon: <FaPhone size={20} />, label: "Téléphone" }].map((item, index) => (
            <Col md={2} key={index}>
              <Card as="a" href={item.link} target="_blank" rel="noopener noreferrer" bg="dark" text="white" border="secondary" 
                    className="card-custom text-center p-3 shadow-sm text-decoration-none d-flex align-items-center justify-content-center" 
                    style={{ height: "120px", width: "120px" }}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  {item.icon}
                  <Card.Title className="mt-2">{item.label}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Accueil;
