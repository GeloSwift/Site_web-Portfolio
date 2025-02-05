import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ Importer useNavigate
import {
  FaJava, FaPython, FaCuttlefish, FaPhp, FaAngular, FaReact, FaHtml5, FaCss3Alt, FaNetworkWired,
  FaDatabase, FaGitAlt, FaGithub, FaGitlab, FaProjectDiagram, FaUsers, FaComments, FaTools
} from "react-icons/fa";
import { SiSymfony, SiCplusplus, SiOracle, SiMysql, SiMariadb, SiLinux } from "react-icons/si";
import { TiArrowLoop } from "react-icons/ti";
import "../assets/css/Competences.css"; 

const competences = [
  {
    id: "dev-conception",
    title: "Développement et Conception",
    desc: (
      <>
        Expérience en développement avec <strong>Java, Angular, Symfony</strong>, ... . 
        Maîtrise du principe de programmation <strong>orientée objet</strong> et autre.
      </>
    ),
    icons: [<FaJava />, <FaPython />, <FaPhp />, <FaAngular />, <FaReact />, <FaHtml5 />, <FaCss3Alt />, <SiSymfony />, <SiCplusplus />],
    projectIndex: 1 // Indice du projet correspondant dans Projets.js (Site web de livraison)
  },
  {
    id: "algo",
    title: "Algorithmique",
    desc: (
      <>
        Conception et optimisation d’algorithmes en <strong>Python, Java, C</strong>. 
        Expérience avec la <strong>complexité algorithmique</strong> et les 
        <strong> structures de données</strong>.
      </>
    ),
    icons: [<FaCuttlefish />, <SiCplusplus />, <FaJava />],
    projectIndex: 0 // Jeu Flappy Bird
  },
  {
    id: "reseaux",
    title: "Réseaux",
    desc: (
      <>
        Configuration et administration de <strong>serveurs Linux</strong>, et gestion des 
        <strong> protocoles réseaux</strong>.
      </>
    ),
    icons: [<FaNetworkWired />, <SiLinux />],
    projectIndex: 4 // Projet VM Linux
  },
  {
    id: "bdd",
    title: "Base de Données",
    desc: (
      <>
        Modélisation et gestion de bases de données en <strong>SQL, PL/SQL, MariaDB, NoSQL</strong>. 
        Utilisation de <strong>WinDesign</strong> pour les schémas relationnels.
      </>
    ),
    icons: [<FaDatabase />, <SiOracle />, <SiMysql />, <SiMariadb />],
    projectIndex: 5 // Gestion BDD
  },
  {
    id: "gestion-projet",
    title: "Gestion de Projet",
    desc: (
      <>
        Expérience avec <strong>Git, GitHub, GitLab</strong>. Planification avec 
        <strong> diagrammes de Gantt</strong> et méthodologies <strong>Agile</strong>.
      </>
    ),
    icons: [<FaProjectDiagram />, <FaGitAlt />, <FaGithub />, <FaGitlab />, <TiArrowLoop />],
    projectIndex: 2 // Application bancaire
  },
  {
    id: "comm-travail",
    title: "Communication et Travail d'équipe",
    desc: (
      <>
        Rédaction de <strong>documentations techniques</strong>, 
        conduite de <strong>réunions</strong>, <strong>présentation</strong> de projet, et <strong>relation client</strong>.
      </>
    ),
    icons: [<FaUsers />, <FaComments />, <FaTools />],
    projectIndex: 1 // Site web de livraison
  }
];

const Competences = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Utiliser useNavigate pour la redirection
  const [highlighted, setHighlighted] = useState([]);

  useEffect(() => {
    if (location.state?.highlight) {
      setHighlighted(location.state.highlight);
      setTimeout(() => {
        setHighlighted([]);
      }, 2500);
    }
  }, [location.state]);

  const handleNavigation = (projectIndex) => {
    navigate("/projets", { state: { projectIndex } });
  };

  return (
    <Container className="text-center py-5">
      <h1 className="mb-5">&#x1F4DA; Compétences</h1>
      <hr className="custom-separator" /> 

      <Row>
        {competences.map((comp, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card 
              className={`competence-card ${highlighted.includes(comp.id) ? "highlighted" : ""}`}
              onClick={() => handleNavigation(comp.projectIndex)} // ✅ Ajout du lien vers la page Projets
            >
              <Card.Body>
                <Card.Title className="fw-bold mb-4">{comp.title}</Card.Title>
                <Card.Text>{comp.desc}</Card.Text>
                <div className="competence-icons">
                  {comp.icons.map((icon, idx) => (
                    <span key={idx} className="icon">{icon}</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Competences;
