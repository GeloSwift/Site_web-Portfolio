import React, { useState, useEffect } from "react"; // ✅ Ajout de useEffect ici
import { Container, Carousel } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaUnity,
  FaJava,
  FaDatabase,
  FaAngular,
  FaLinux,
  FaHtml5,
  FaCss3Alt 
} from "react-icons/fa";
import { SiMariadb, SiLaravel, SiGithub, SiApache } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";


import "../assets/css/Projets.css";

// Importation des images des projets
import flappyBird from "../assets/images/flappy-bird.png";
import livraisonColis from "../assets/images/livraison-colis.png";
import appliBancaire from "../assets/images/appli-bancaire.png";
import memoryGame from "../assets/images/memory-game.png";
import vmLinux from "../assets/images/vm-linux.png";
import gestionBdd from "../assets/images/gestion-bdd.png";

// Liste des projets avec images et icônes des technologies utilisées
const projects = [
  {
    title: "Développement d'un jeu vidéo Flappy Bird",
    date: "Janvier 2025 (3 semaines)",
    description: (
      <>
        Création d'un <strong>clone du jeu Flappy Bird</strong> 
        sur le moteur de jeu <strong>Unity</strong>.
      </>
    ),
    image: flappyBird,
    technologies: [<FaUnity size={30}/>, <PiFileCSharp size={30}/>],
    linkedCompetences: ["dev-conception", "algo"]
  },
  {
    title: "Site web de livraison de colis",
    date: "Septembre 2024 (2 mois)",
    description:(
      <>
        Développement d'un <strong>site web complet</strong> de gestion de livraison de colis pour un <strong>vrai client</strong>. Backend en <strong>PHP Laravel</strong>, Frontend en <strong>Angular</strong>.
      </>
    ),
    image: livraisonColis,
    technologies: [<SiLaravel size={30} />, <FaDatabase size={30} />, <FaAngular size={30} />, <FaHtml5 size={30} />, <FaCss3Alt  size={30} />, <SiGithub size={30} />],
    linkedCompetences: ["dev-conception", "bdd", "gestion-projet", "comm-travail"]
  },
  {
    title: "Application bancaire en JavaFX",
    date: "Juin 2023 (1 mois)",
    description: (
      <>
        Développement d'une application bancaire en <strong>JavaFX</strong> avec <strong>base de données</strong> et <strong>gestion du projet</strong> via GitHub.
      </>
    ),
    image: appliBancaire,
    technologies: [<FaJava size={30} />, <FaDatabase size={30} />, <SiGithub size={30} />],
    linkedCompetences: ["dev-conception", "bdd", "gestion-projet"]
  },
  {
    title: "Jeu du memory en JavaFX",
    date: "Mai 2023 (1 semaine)",
    description: (
      <>
        Développement du <strong>jeu Memory</strong> en <strong>JavaFX</strong> avec le pattern <strong>Model-View-Controller</strong>.
      </>
    ),
    image: memoryGame,
    technologies: [<FaJava size={30} />],
    linkedCompetences: ["dev-conception", "algo"]
  },
  {
    title: "Création et administration d’une VM Linux",
    date: "Mars 2023 (1 mois)",
    description:(
      <>
        Mise en place d'une <strong>VM Debian</strong> avec <strong>serveur Apache</strong> et base de données <strong>MariaDB</strong>.
      </>
    ),
    image: vmLinux,
    technologies: [<FaLinux size={30} />, <SiApache size={30} />, <SiMariadb size={30} />],
    linkedCompetences: ["reseaux", "bdd"]
  },
  {
    title: "Création et gestion d'une base de données",
    date: "Décembre 2022 (1 mois)",
    description: (
      <>
        Développement d'une <strong>base de données</strong> pour la gestion des commandes et livraisons d'articles.
      </>
    ),
    image: gestionBdd,
    technologies: [<FaDatabase size={30} />],
    linkedCompetences: ["bdd", "gestion-projet"]
  },
];

const Projets = () => {
  const location = useLocation(); // ✅ Permet de récupérer l'index depuis Competences.js
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (location.state?.projectIndex !== undefined) {
      setIndex(location.state.projectIndex);
    }
  }, [location.state]);

  const navigate = useNavigate(); 


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleProjectClick = (project) => {
    navigate("/competences", { state: { highlight: project.linkedCompetences } });
  };

  return (
    <Container className="text-center py-5">

      <h1 className="mb-5">&#x1F9EC; Projets</h1>

      <hr className="custom-separator" /> 

      <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
        {projects.map((project, idx) => (
          <Carousel.Item key={idx} onClick={() => handleProjectClick(project)}>
            <img className="d-block w-100 project-image" src={project.image} alt={project.title} />
            <Carousel.Caption className="project-caption" onClick={() => handleProjectClick(project)}>
              <h3 className="fw-bold">{project.title}</h3>
              <p className="text-muted">{project.date}</p>
              <p className="text-description">{project.description}</p>
              <div className="project-tech">{project.technologies}</div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

    </Container>
  );
};

export default Projets;
