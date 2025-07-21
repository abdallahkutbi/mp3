import styled from "styled-components";

const StyledHeader=styled.header`
    background-color: #033599;
`;

export default function Header(){
    return(
        <StyledHeader>
            <div>
                <h1>Abdallah Kutbi</h1>
            </div>
        </StyledHeader>
    )
}