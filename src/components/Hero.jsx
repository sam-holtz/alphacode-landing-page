import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import HeroIcons from "./HeroIcons";
import themeSettings from "../themeSettings.js";

const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 6rem 0 4rem;
  background: 
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 100% 100%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 100%);
  border-bottom: 1px solid var(--color-border);
`;

const CenterText = styled.h1`
  text-align: center;
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: ${themeSettings.breakpoint}) {
    padding: 0 1rem;
    font-size: 2.25rem;
  }
`;

const CodeTag = styled.span`
  color: var(--color-primary-light);
  font-weight: 700;
`;

const SpecializeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
`;

const SpecializeLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
`;

const Hero = () => {
  return (
    <MainContainer>
      <Container>
        <CenterText>
          Unlocking your business potential with software and marketing mastery{" "}
          <CodeTag>{"</>"}</CodeTag>
        </CenterText>
        <SpecializeDiv>
          <SpecializeLabel>We specialize in</SpecializeLabel>
          <HeroIcons />
        </SpecializeDiv>
      </Container>
    </MainContainer>
  );
};

export default Hero;
