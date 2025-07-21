import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 15%;
  background: #033599;
  padding: 1rem 0;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  @media screen and (max-width: 1000px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
  background: transparent;

  &:hover, &:focus {
    background: #fff;
    color: #033599;
    text-decoration: none;
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledList>
        <li><StyledNavLink to={`/`}>Home</StyledNavLink></li>
        <li><StyledNavLink to={`/education.html`}>Education</StyledNavLink></li>
        <li><StyledNavLink to={'/experience.html'}>Experience</StyledNavLink></li>
        <li><StyledNavLink to={`/projects.html`}>Projects</StyledNavLink></li>
        <li><StyledNavLink to={`/skills.html`}>Skills</StyledNavLink></li>
        <li><StyledNavLink to={`/contact.html`}>Contact</StyledNavLink></li>
      </StyledList>
    </StyledNav>
  );
}