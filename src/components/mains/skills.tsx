import styled from "styled-components";

const StyledSkills=styled.main`
    width: 70%;
    height: 100vh;
    color: white;
`;


const SkillsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap; /* Allows wrapping on small screens */
  margin-top: 2rem;
`;

const SkillCategory = styled.div`
  min-width: 180px;
  /* Optional: add a border or background for clarity */
  /* border: 1px solid #ccc; */
  /* background: #f9f9f9; */
  padding: 1rem;
  border-radius: 8px;
`;

export default function Skills(){
    return(
        <StyledSkills id="main-content">
            <h1 id="main-title">Skills:</h1>
            <hr />
            <div>
<h2>
                            My Techincal Skills:
                        </h2>
                        <SkillsContainer>
                            <SkillCategory>
                                <h3>Languages:</h3>
                                <ul>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>C</li>
                                    <li>SQL</li>
                                    <li>OCaml</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </SkillCategory>
                            <SkillCategory>
                                <h3>Frameworks:</h3>
                                <ul>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>Figma</li>
                                </ul>
                            </SkillCategory>
                            <SkillCategory>
                                <h3>Developer Tools:</h3>
                                <ul>
                                    <li>VS Code</li>
                                    <li>Visual Studio</li>
                                    <li>PyCharm</li>
                                    <li>Terminal</li>
                                    <li>Git</li>
                                    <li>Docker</li>
                                </ul>
                            </SkillCategory>
                            <SkillCategory>
                                <h3>Libraries:</h3>
                                <ul>
                                    <li>pandas</li>
                                    <li>NumPy</li>
                                    <li>Matplotlib</li>
                                    <li>PyTorch</li>
                                    <li>TensorFlow</li>
                                    <li>Keras</li>
                                    <li>Scikit-learn</li>
                                </ul>
                            </SkillCategory>
                        </SkillsContainer>
            </div>
        </StyledSkills>
    );
}