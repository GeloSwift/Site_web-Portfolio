import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Competences = () => {
  return (
    <Container>
      <h1>Mes Compétences</h1>
      <p>Ici, je vais détailler mes compétences acquises.</p>
    </Container>
  );
};

export default Competences;
