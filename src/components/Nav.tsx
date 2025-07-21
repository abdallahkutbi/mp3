import {Link} from "react-router";
import styled from "styled-components";

const StyledNav=styled.nav`
    width: 30%;
    
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledList=styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 1000px){
        flex-direction: row;
    }
    
`;

export default function Nav(){
    return(
        <StyledNav>
            <StyledList>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/education.html`}>Education</Link></li>
                <li><Link to={'/experience.html'}>Experience</Link></li>
                <li><Link to={`/projects.html`}>Projects</Link></li>
                <li><Link to={`/skills.html`}>Skills</Link></li>
                <li><Link to={`/contact.html`}>Contact</Link></li>
            </StyledList>
        </StyledNav>
    )
}