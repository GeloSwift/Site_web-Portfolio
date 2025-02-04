import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Formations = () => {
  return (
    <Container>
      <h1>Mes Formations</h1>
      <p>Ici, je vais détailler mon parcours académique.</p>
    </Container>
  );
};

export default Formations;
