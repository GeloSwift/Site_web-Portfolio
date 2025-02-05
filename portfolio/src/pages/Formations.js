import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import styled from "styled-components";
import iutLogo from "../assets/images/iut-logo.png";
import lyceeLogo from "../assets/images/lycee-logo.png";
import "../assets/css/Formations.css"; 

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
  background: white;
  border-radius: 50%;
  border: 4px solid #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`;


const Formations = () => {
  return (
    <Container className="text-center py-5">

      <h1 className="mb-5">&#x1F4D8; Formations</h1>

      <hr className="custom-separator" /> 

      <Timeline>
        
        <TimelineLine />

        {/* Formation BUT */}
        <Row className="timeline-item">
          <Col md={5} className="text-end">
            <Card className="formation-card">
              <Card.Body>
                <Card.Title className="fw-bold">BUT Informatique 3ème année</Card.Title>
                <Card.Subtitle className="text-light-gray mb-4">2022 - 2025</Card.Subtitle>
                <Card.Text>
                  <strong><a href="https://www.iut-blagnac.fr/" target="_blank" rel="noopener noreferrer">IUT de Blagnac</a></strong>, <br></br> 
                  Université Toulouse II Jean Jaurès <br></br>
                  <i>Bachelor Universitaire de Technologie : Informatique</i>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} className="timeline-center">
            <a href="https://www.iut-blagnac.fr/" target="_blank" rel="noopener noreferrer">
              <TimelineNode>
                <img src={iutLogo} alt="IUT" width={80} />
              </TimelineNode>
            </a>
          </Col>
          <Col md={5}></Col>
        </Row>

        {/* Formation Bac */}
        <Row className="timeline-item">
          <Col md={5}></Col>
          <Col md={2} className="timeline-center">
            <a href="https://www.letudiant.fr/lycee/annuaire-des-lycees/fiche/lycee-polyvalent-saint-exupery-lycee-des-metiers-de-la-productique-et-de-la-maintenance-aeronautique-31.html" target="_blank" rel="noopener noreferrer">
              <TimelineNode>
                <img src={lyceeLogo} alt="Lycée" width={80} />
              </TimelineNode>
            </a>
          </Col>
          <Col md={5} className="text-start">
            <Card className="formation-card">
              <Card.Body>
                <Card.Title className="fw-bold">Baccalauréat Général</Card.Title>
                <Card.Subtitle className="text-light-gray mb-4">2019 - 2022</Card.Subtitle>
                <Card.Text>
                  <strong><a href="https://www.letudiant.fr/lycee/annuaire-des-lycees/fiche/lycee-polyvalent-saint-exupery-lycee-des-metiers-de-la-productique-et-de-la-maintenance-aeronautique-31.html" target="_blank" rel="noopener noreferrer">Lycée Saint-Exupéry</a></strong>,<br></br> 
                  Blagnac <br></br>
                  <i>Spécialités Mathématiques et Sciences de l'ingénieur. <strong>Mention assez bien</strong>.</i>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Timeline>

    </Container>
  );
};

export default Formations;
