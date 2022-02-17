import styled from 'styled-components';

const StyledDescription = styled.p`
    font-family: Bubblegum Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
`;

const StyledTitle = styled.p`
    font-family: Ribeye;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
`;

const StyledContainer = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 100px;

    @media (max-width: 500px) {
        height: 60vh;
        padding: 50px;
    }
`;

export { StyledDescription, StyledTitle, StyledContainer };
