import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import styled from "styled-components";
import logo from "../assets/2-nobg.png";
import themeSettings from "../themeSettings.js";

const MainContainer = styled.nav`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  transition: var(--transition);
`;

const LogoContainer = styled.div`
  content: url(${logo});
  width: 180px;
  filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.2));
  @media (max-width: 768px) {
    width: 140px;
  }
`;

const CenterColumn = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  @media (max-width: ${themeSettings.breakpoint}) {
    display: none;
  }
`;

const NavItem = styled.li`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    color: var(--color-primary-light);
  }
`;

const ContactBtn = styled.button`
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-md);
  border: none;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: white;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  }
`;

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainContainer style={{ boxShadow: scrolled ? "var(--shadow-md)" : "none" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <LogoContainer />
          <CenterColumn>
            <NavItem>Product</NavItem>
            <NavItem>Marketing</NavItem>
            <NavItem>Support & Services</NavItem>
          </CenterColumn>
          <ContactBtn onClick={props.scrollToCall}>Contact Us</ContactBtn>
        </div>
      </Container>
    </MainContainer>
  );
};

export default Navbar;
