import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ContactUs from "../assets/ContactUs.png";
import themeSettings from "../themeSettings.js";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";

const MainContainer = styled.div`
  background: 
    radial-gradient(ellipse 60% 80% at 20% 100%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse 50% 60% at 80% 0%, rgba(34, 211, 238, 0.08) 0%, transparent 50%),
    var(--color-surface);
  padding: 6rem 0;
  border-top: 1px solid var(--color-border);
`;

const SecondaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  @media (max-width: ${themeSettings.breakpoint}) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

const ImageContainer = styled.div`
  content: url(${ContactUs});
  width: 360px;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
  @media (max-width: ${themeSettings.breakpoint}) {
    width: 280px;
  }
`;

const CallUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
`;

const InfoContainer = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 280px;
`;

const ContactBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.85rem 1.5rem;
  border-radius: var(--radius-md);
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  text-align: center;
`;

const EmailBtn = styled(ContactBtn)`
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: white;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  }
`;

const GitHubBtn = styled(ContactBtn)`
  background: var(--color-surface-elevated);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  &:hover {
    background: var(--color-surface);
    border-color: var(--color-primary);
    color: var(--color-primary-light);
    transform: translateY(-2px);
  }
`;

const TalkToUs = (props) => {
  return (
    <MainContainer ref={props.targetRef}>
      <Container>
        <SecondaryContainer>
          <ImageContainer />
          <CallUs>
            <InfoContainer>
              Say goodbye to frustration and delays, and hello to efficiency and
              growth. Contact us now and let&apos;s get started!
            </InfoContainer>
            <ButtonGroup>
              <EmailBtn href="mailto:samholtz1205@gmail.com">
                <EmailIcon fontSize="small" />
                Email us
              </EmailBtn>
              <GitHubBtn href="https://github.com/sam-holtz" target="_blank" rel="noopener noreferrer">
                <CodeIcon fontSize="small" />
                View on GitHub
              </GitHubBtn>
            </ButtonGroup>
          </CallUs>
        </SecondaryContainer>
      </Container>
    </MainContainer>
  );
};

export default TalkToUs;
