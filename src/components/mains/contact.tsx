import styled from "styled-components";

const StyledContact=styled.main`
    margin: 3vh;
    width: 100%;
    height: 100vh;
    color: white;
`;

export default function Contact(){
    return(
        <StyledContact id="main-content">
            <h1 id="main-title">Get in touch:</h1>
            <hr />
            <div>
            <p>
                <a href="mailto:akutbi@bu.edu">akutbi@bu.edu</a>
                <br />
                <a href="https://www.linkedin.com/in/abdallah-kutbi/" target="_blank" rel="noopener">LinkedIn</a>
                <br />
                <a href="https://github.com/abdallah-kutbi" target="_blank" rel="noopener">GitHub</a>
                <br />
                <a href="https://www.instagram.com/abdullahkutbi/" target="_blank" rel="noopener">Instagram</a>
                <br />
                <a href="https://x.com/thelordabdu" target="_blank" rel="noopener">x</a> 
            </p>
            </div>
        </StyledContact>
    );
}