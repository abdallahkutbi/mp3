import styled from "styled-components";

const StyledEducation=styled.main`
    margin: 3vh;
    width: 100%;
    height: 100vh;
    color: white;
`;

export default function Edu(){
    return(
        <StyledEducation id="main-content">
            <h1 id="main-title">Educational Background:</h1>
            <div>
                <h2><strong>B.A. Computer Science</strong>| <em><u>Boston University</u></em></h2>
                <p>Sep 2021 - Aug 2025</p> <br />
                <p>GPA 3.1 / 4.0</p> <br />
                <p>Key courses:</p> 
                <ul>
                    <li>CS111</li>
                    <li>CS112</li>
                    <li>CS131</li>
                    <li>CS132</li>
                    <li>CS210</li>
                    <li>CS237</li>
                    <li>CS330</li>
                    <li>CS332</li>
                    <li>CS320</li>
                    <li>CS392</li>
                    <li>CS412</li>
                    <li>CS440</li>
                </ul>
            </div>
        </StyledEducation>
    );
}
