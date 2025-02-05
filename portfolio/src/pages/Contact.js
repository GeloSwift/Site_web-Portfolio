import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import "../assets/css/Contact.css";

// Remplace ces valeurs par celles de ton compte EmailJS
const SERVICE_ID = "service_o3y4a0r";
const TEMPLATE_ID = "template_ck0tkqi";
const PUBLIC_KEY = "iYxHv43_uTJB1Q8-s";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      from_email: formData.email, // ✅ Correspond au modèle EmailJS
      to_name: "Angelo",         // ✅ Correspond au modèle EmailJS
      subject: formData.subject,  // ✅ Correspond au modèle EmailJS
      message: formData.message   // ✅ Correspond au modèle EmailJS
    };
  
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, emailParams, PUBLIC_KEY)
      .then(() => {
        setIsSent(true);
        setErrorMessage("");
        setFormData({ email: "", subject: "", message: "" }); // Réinitialiser le formulaire
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      });
  };

  return (
    <Container className="text-center py-5">
      <h1 className="mb-5">Contact</h1>

      <hr className="custom-separator" /> 

      {/* Lien pour télécharger le CV */}
      <a href="/cv_angelo_nichele.pdf" download className="btn btn-dark mb-3">
        <FaDownload size={18} /> Télécharger mon CV
      </a>

      {/* Formulaire de contact */}
      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Votre email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSubject" className="mb-3">
          <Form.Label>Objet</Form.Label>
          <Form.Control
            type="text"
            placeholder="Objet du message"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Écrivez votre message ici..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Envoyer
        </Button>


        {/* Message de confirmation */}
        {isSent && <p className="success-message mt-3">Votre message a été envoyé avec succès ! ✅</p>}
        {errorMessage && <p className="error-message mt-3">{errorMessage}</p>}
      </Form>

      {/* Liens vers GitHub et LinkedIn */}
      <div className="social-links mb-4 mt-5">
        <a href="https://github.com/GeloSwift" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/angelo-nichele-110710268/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="social-icon" />
        </a>
      </div>
    </Container>
  );
};

export default Contact;
