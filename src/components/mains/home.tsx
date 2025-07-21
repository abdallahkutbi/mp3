import styled from "styled-components";

const StyledWrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: grey;
    color: white;
`;
const StyledHome=styled.main`
    margin: 3vh;
    width: 100%;
    height: 100vh;
    color: white;
`;

const StyledImage=styled.div`
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #033599;
    margin: 10px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

export default function Home() {
    return (
        <>
            <title>Home | Resume</title>
            <StyledWrapper>
            <StyledHome id="main-content">
                <h1 id="main-title">Home:</h1>
                <div id="main"> 
                    <StyledImage id="main-image">
                        <img id="profile-image" src={`../../../public/profile.jpg`} alt="Abdallah Kutbi"/> 
                    </StyledImage>
                    <div id="main-text">
                        <h2>
                            About Me:
                        </h2>
                        <p>
                        CS senior at Boston University graduating May 2025. I build data-driven tools and AI agents, 
                        and I'm hunting for a software or ML internship where I can ship code that matters. 
                        other than my carrer, I'm a big fan of the NBA specifically the Boston Celtics. 
                        I'm also a big fan of F1, specifically the Aston Martin team.
                        <br />
                        <br />
                        </p>
                        </div>
                        <br />
                        <hr/> 
                    </div>
            </StyledHome>
            </StyledWrapper>
        </>

    )
}