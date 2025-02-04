import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: rgb(33, 37, 41); 
  color: white;
  text-align: center;
  padding: 2rem;
  width: 100%;
  position: relative;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <p className="mb-0"><strong>© 2025</strong> - Angelo Nichele | Tous droits réservés</p>
      </Container>
    </FooterContainer>
  );
};

export default Footer;