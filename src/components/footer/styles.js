import styled from 'styled-components';

const StyledContainer = styled.div`
    height: 30vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 70px;

    @media (max-width: 550px) {
        flex-direction: column-reverse;
        height: fit-content; 
    }
`;

const StyledContactInfoContainer = styled.div`
    text-align: right;
    color: #797474;

`;

const StyledContactInfoTitle = styled.p`
    font-family: Ribeye;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
`;

const StyledContactInfo = styled.p`
    font-family: Bubblegum Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
`;

const StyledSocialMediaLinkContainer = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
    padding-bottom: 20px;
`; 

const StyledLogo = styled.img`
    width: 40px;
    height: 40px;
    padding: 0 20px;
`;

export { StyledContainer, StyledContactInfoContainer, StyledSocialMediaLinkContainer, StyledContactInfoTitle,
    StyledContactInfo, StyledLogo };
