import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Contact = () => {
  return (
    <Container>
      <h1>Mes Contact</h1>
      <p>Ici, je vais détailler mes contact (lien Github et Linkedin + CV télchargeable).</p>
    </Container>
  );
};

export default Contact;
