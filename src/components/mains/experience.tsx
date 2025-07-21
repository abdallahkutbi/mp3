
import styled from "styled-components";

const StyledExperience=styled.main`
    margin: 3vh;
    width: 100%;
    height: 100vh;
    color: white;
`;


export default function Experience(){
    return(
        <StyledExperience id="main-content">
            <h1 id="main-title">Experience:</h1>
            <br />
            <hr />
            <div>
                <h2>Data Scientist Intern | December 2024 – January 2025</h2> <br />
                <li>Managed and structured client data to ensure accuracy, accessibility, and efficiency.</li>
                <li>Organized and optimized information flow, improving workflow and data retrieval.</li>
                <li>Ensured data integrity and confidentiality while handling sensitive client information.</li>
                <br />
                <br />
                <hr />

                <h2>Business Management Intern | January 2024 – April 2024</h2> <br />
                <li>Attended weekly meetings to assist small companies in connecting with buyers, manufacturers, and CEOs to facilitate business growth.</li>
                <li>Developed strategic partnerships and networking opportunities for clients to expand their market reach.</li>
                <li>Implemented innovative marketing strategies to increase client visibility and drive sales growth.</li>
                <br />
                <br />
                <hr />


            </div>
        </StyledExperience>
    );
}

















