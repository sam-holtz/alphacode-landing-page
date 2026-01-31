import React from "react";
import styled from "styled-components";
import js from "../assets/js.png";
import oracle from "../assets/oracle.png";
import meta from "../assets/meta.png";
import react from "../assets/react.png";
import xd from "../assets/xd.png";
import aws from "../assets/aws.png";
import nodejs from "../assets/nodejs.png";

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-surface-elevated);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  padding: 0.75rem;
  transition: var(--transition);
  &:hover {
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const IconImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: brightness(0.9);
`;

const icons = [
  { src: xd, alt: "Adobe XD" },
  { src: oracle, alt: "Oracle" },
  { src: aws, alt: "AWS" },
  { src: meta, alt: "Meta" },
  { src: nodejs, alt: "Node.js" },
  { src: react, alt: "React" },
  { src: js, alt: "JavaScript" },
];

const HeroIcons = () => {
  return (
    <MainDiv>
      {icons.map(({ src, alt }, index) => (
        <IconWrapper key={index}>
          <IconImg src={src} alt={alt} />
        </IconWrapper>
      ))}
    </MainDiv>
  );
};

export default HeroIcons;
