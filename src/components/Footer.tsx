import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter=styled.header`
    background-color: #033599;
`;
export default function Footer(){
    return(
        <StyledFooter>
            <p>All Rights Reserved by Abdallah Kutbi <Link to="../credits/credits.html"> Credits</Link> &copy;</p>
            <div id="time-date"></div>
        </StyledFooter>
    )
}