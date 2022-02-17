import styled from 'styled-components';

const StyledContainer = styled.div`
    height: 60vh;
    display: flex;
    background: #EFEFEF;
    padding: 20px 50px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column;
        height: fit-content; 
    }
`;

const StyledImage = styled.img` 
    height: 55vh;
    width: 50vw;

    @media (max-width: 500px) {
        height: 50vh;
        width: 80vw;
    }
`;

const StyledText = styled.p`
    font-family: Salsa;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    
    text-align: left;
    color: #3F2B2B;
`;

const StyledImageContainer = styled.div`
    padding: 20px;
`;

const StyledTextContainer = styled.div`

`;

export { StyledContainer, StyledImage, StyledText, StyledImageContainer, StyledTextContainer };