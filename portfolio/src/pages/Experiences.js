import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";

import capgeminiLogo from "../assets/images/capgemini-logo.png"; 
import cyberarkLogo from "../assets/images/cyberark-logo.png"; 
import splunkLogo from "../assets/images/splunk-logo.png";

import "../assets/css/Experience.css"; 

const Timeline = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #007bff;
  transform: translateX(-50%);
`;

const TimelineNode = styled.div`
  position: absolute;
  left: 50%;
  width: 100px;
  height: 100px;
  background:rgb(224, 224, 224);
  border-radius: 50%;
  border: 4px solid#007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`;



const Experience = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="mb-5">💼 Mes Expériences</h1>

      <Timeline>
        <TimelineLine />

        <Row className="justify-content-between">
          <Col md={5} className="text-end">
            <Card className="experience-card">
            <img src={cyberarkLogo} alt="CyberArk" className="cyberark-logo" />
              <Card.Body>
                <Card.Title className="fw-bold">Développement de tableaux de bord (Alternance)</Card.Title>
                <Card.Subtitle className="text-light-gray mb-4">Septembre 2024 - Actuel</Card.Subtitle>
                <Card.Text>
                  Développement de dashboard Splunk reproduisant le comportement du “Pas Reporter” de CyberArk.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} className="timeline-center">
            <TimelineNode>
              <img src={capgeminiLogo} alt="Capgemini" width={80} />
            </TimelineNode>
          </Col>
          <Col md={5}></Col>
        </Row>

        <Row className="justify-content-between">
          <Col md={5}></Col>
          <Col md={2} className="timeline-center">
            <TimelineNode>
              <img src={capgeminiLogo} alt="Capgemini" width={80} />
            </TimelineNode>
          </Col>
          <Col md={5} className="text-start">
            <Card className="experience-card">
            <img src={splunkLogo} alt="Splunk" className="splunk-logo" />
              <Card.Body>
                <Card.Title className="fw-bold">Développement de connecteur (Stage)</Card.Title>
                <Card.Subtitle className="text-light-gray mb-4">Février - Avril 2024</Card.Subtitle>
                <Card.Text>
                  Développement de connecteur CyberArk PAM pour automatiser la gestion des identifiants sécurisés.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Timeline>
    </Container>
  );
};

export default Experience;
