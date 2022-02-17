import styled from "styled-components";

const StyledImage = styled.img`
    height: 100vh;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    postition: relative;

    
    @media (max-width: 500px) {
        height: 50vh;
    }
`;

const StyledText = styled.p`
    font-family: Ribeye;
    font-size: 100px;
    font-style: normal;
    font-weight: 400;
    line-height: 110px;
    letter-spacing: 0em;
    text-align: left;
    position: absolute;
    bottom: 8%;
    left: 5%;
    color: #FFFCFC;

    @media (max-width: 500px) {
        font-size: 50px;
        line-height: 60px;
        bottom: 20%;
    }
`;

const StyledButton = styled.button`
    position: absolute;
    padding: 10px;

    background: rgba(196, 196, 196, 0.5);
    backdrop-filter: blur(4px);

    font-family: Ribeye;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    position: absolute;
    bottom: 10%;
    right: 10%;
    color: black;

    :hover {
        background: white;
        opacity: 0.8;
        border-color: black;
        cursor: pointer;
    }

    @media (max-width: 500px) {
        font-size: 28px;
        line-height: 30px;
        bottom: 10%;
    }
`;

const StyledContainer = styled.div`
    position: relative;
`;

export { StyledImage, StyledText, StyledButton, StyledContainer };