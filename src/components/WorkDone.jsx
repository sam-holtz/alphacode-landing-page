import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FakeLogo1 from "../assets/FakeLogo1.png";
import FakeLogo2 from "../assets/FakeLogo2.png";
import FakeLogo3 from "../assets/FakeLogo3.png";
import FakeLogo4 from "../assets/FakeLogo4.png";
import themeSettings from "../themeSettings.js";

const MainContainer = styled.div`
  padding: 6rem 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  @media (max-width: ${themeSettings.breakpoint}) {
    padding: 4rem 0;
  }
`;

const SecondaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-surface);
  padding: 2.5rem 3rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  @media (max-width: ${themeSettings.breakpoint}) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.95rem;
    color: var(--color-text-muted);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  @media (max-width: ${themeSettings.breakpoint}) {
    gap: 1.5rem;
  }
`;

const LogoImg = styled.img`
  height: 50px;
  object-fit: contain;
  opacity: 0.7;
  filter: grayscale(100%);
  transition: var(--transition);
  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  }
`;

const Logos = [
  { src: FakeLogo1, alt: "Client 1" },
  { src: FakeLogo2, alt: "Client 2" },
  { src: FakeLogo3, alt: "Client 3" },
  { src: FakeLogo4, alt: "Client 4" },
];

const WorkDone = () => {
  return (
    <MainContainer>
      <Container>
        <SecondaryContainer>
          <TextContainer>
            <h1>Don&apos;t take our word for it!</h1>
            <p>Our clients trust in our team</p>
          </TextContainer>

          <LogoContainer>
            {Logos.map(({ src, alt }, index) => (
              <LogoImg key={index} src={src} alt={alt} />
            ))}
          </LogoContainer>
        </SecondaryContainer>
      </Container>
    </MainContainer>
  );
};

export default WorkDone;
