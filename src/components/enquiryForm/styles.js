import styled from "styled-components";

const StyledMask = styled.div`
    position: fixed;
    width: 100%;
    background: gray;
    opacity: 0.6;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledFormContainer = styled.div`
    background: white;
    border-radius: 20px;
    height: fit-content;
    width: 30vw;
    opacity: 1;
    position: fixed;
    top: 20%;
    z-index: 10;
    margin: 0 35%;
    padding: 30px;

    @media (max-width: 500px) {
        height: fit-content;
        width: 70vw;
        margin: 0 6%;
    }
`; 

const StyledContainer = styled.div`
    position: relative;
    
`;

const StyledInput = styled.input`
    background: #C4C4C4;
    border-radius: 5px;
    border-color: #C4C4C4;
    margin: 30px auto;
    display: block;
    height: 30px;
    width: 70%;
    font-family: Bubblegum Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    padding: 2px 10px;
`;

const StyledButton = styled.button`
    background: blue;
    color: white;
    height: 40px;
    width: 100px;
    border-radius: 5px;
    border-color: blue;
    color: #FFFFFF;
    font-family: Bubblegum Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    padding: 5px;

    :disabled {
        opacity: 0.5;
    }
`;

const StyledCrossIcon = styled.img`
    position: absolute;
    height: 30px;
    width: 30px;
    top: -5px;
    right: -5px;
    border-radius: 15px;
    cursor: pointer;
`;

const StyledSuccessBox = styled.div`
    background: white;
    border-radius: 20px;
    height: 10vh;
    width: 30vw;
    opacity: 1;
    position: fixed;
    top: 20%;
    z-index: 10;
    margin: 0 35%;
    padding: 30px;
    font-family: Bubblegum Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        height: 20vh;
        width: 70vw;
        margin: 0 6%;
    }
`; 

const StyledIcon = styled.img`
    height: 50px;
    width: 50px;
`;

export { StyledMask, StyledFormContainer, StyledContainer, StyledInput, 
    StyledButton, StyledCrossIcon, StyledSuccessBox, StyledIcon };