import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Marketing from "../assets/Marketing.jpg";
import Dev from "../assets/Dev.jpg";
import themeSettings from "../themeSettings.js";

const MainContainer = styled.div`
  padding: 6rem 0;
  background: var(--color-surface);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Main = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
  @media (max-width: ${themeSettings.breakpoint}) {
    padding: 0 1rem;
  }
`;

const Subtext = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  max-width: 500px;
  margin: 0 auto;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: ${themeSettings.breakpoint}) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const Card = styled.div`
  flex: 1;
  min-width: 320px;
  max-width: 420px;
  background: var(--color-surface-elevated);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: var(--transition);
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(99, 102, 241, 0.3);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 220px;
  background: ${(props) => `url(${props.src}) center/cover`};
`;

const CardContent = styled.div`
  padding: 1.75rem;
`;

const InfoContainer = styled.p`
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const LearnMoreBtn = styled.button`
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.65rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary-light);
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-1px);
  }
`;

const Expertise = (props) => {
  return (
    <MainContainer>
      <Container>
        <Header>
          <Main>Launch to market with our MVP development program</Main>
          <Subtext>Merging marketing and software development expertise</Subtext>
        </Header>

        <MainSection>
          <Card>
            <CardImage src={Marketing} />
            <CardContent>
              <InfoContainer>
                Get consulted by marketing experts on a wide range of products to
                kick-start your project
              </InfoContainer>
              <LearnMoreBtn onClick={props.scrollToCall}>Learn More</LearnMoreBtn>
            </CardContent>
          </Card>
          <Card>
            <CardImage src={Dev} />
            <CardContent>
              <InfoContainer>
                Turbocharge your business with a world-class dev team for your
                ultimate success!
              </InfoContainer>
              <LearnMoreBtn onClick={props.scrollToCall}>Learn More</LearnMoreBtn>
            </CardContent>
          </Card>
        </MainSection>
      </Container>
    </MainContainer>
  );
};

export default Expertise;
