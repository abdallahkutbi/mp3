import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Routes, Route} from "react-router";
import Home from "./mains/home.tsx";
import Edu from "./mains/edu.tsx";
import styled from "styled-components";
import Projects from "./mains/projects.tsx";
import Experience from "./mains/experience.tsx";
import Skills from "./mains/skills.tsx";
import Contact from "./mains/contact.tsx";

const Wrapper=styled.div`
    background: grey;
    color: white;
`;

const Container=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default function Root(){
    return(
        <Wrapper>
            <Header/>
            <Container>
                <Nav/>
                <Routes>
                    <Route
                        path={`/`}
                        element={<Home/>}
                    />
                    <Route
                        path={`/education.html`}
                        element={<Edu/>}
                    />
                    <Route
                        path={`/projects.html`}
                        element={<Projects/>}
                    />
                    <Route
                        path={`/experience.html`}
                        element={<Experience/>}
                    />
                    <Route
                        path={`/skills.html`}
                        element={<Skills/>}
                    />
                    <Route
                        path={`/contact.html`}
                        element={<Contact/>}
                    />
                </Routes>
            </Container>
            <Footer/>
        </Wrapper>
    )
}