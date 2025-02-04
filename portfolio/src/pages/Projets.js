import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Projets = () => {
  return (
    <Container>
      <h1>Mes Projets</h1>
      <p>Ici, je vais détailler mes projets réalisés.</p>
    </Container>
  );
};

export default Projets;
