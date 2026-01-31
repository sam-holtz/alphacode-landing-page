import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import themeSettings from "../themeSettings.js";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const MainContainer = styled.footer`
  background: var(--color-surface);
  color: var(--color-text-muted);
  border-top: 1px solid var(--color-border);
`;

const SecondaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3rem 0;
  flex-wrap: wrap;
  gap: 2rem;
  @media (max-width: ${themeSettings.breakpoint}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Topic = styled.h4`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`;

const Link = styled.a`
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    color: var(--color-primary-light);
  }
`;

const CopyrightContainer = styled.div`
  padding: 1.5rem 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-muted);
`;

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <SecondaryContainer>
          <Section>
            <Topic>Company</Topic>
            <Link href="#clients">Clients</Link>
            <Link href="#about">About us</Link>
            <Link href="#affiliates">Affiliates</Link>
          </Section>
          <Section>
            <Topic>Careers</Topic>
            <Link href="#careers">Careers</Link>
            <Link href="#internships">Internships</Link>
          </Section>
          <Section>
            <Topic>Contact</Topic>
            <Link href="mailto:samholtz1205@gmail.com">
              <EmailIcon sx={{ fontSize: 18 }} />
              samholtz1205@gmail.com
            </Link>
            <Link href="https://github.com/sam-holtz" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ fontSize: 18 }} />
              github.com/sam-holtz
            </Link>
          </Section>
        </SecondaryContainer>
        <CopyrightContainer>
          © {new Date().getFullYear()} AlphaCode. All rights reserved.
        </CopyrightContainer>
      </Container>
    </MainContainer>
  );
};

export default Footer;
