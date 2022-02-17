import styled from'styled-components';

const StyledNavBar = styled.div`
    height: 50px;
    background-color: black;
    font-family: Bubblegum Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: right;
    color: #E4E4E4;
    display: flex;
    align-items: center;
    padding: 0 10px;

    @media (max-width: 500px) {
        flex-direction: column;
        height: fit-content;
        justify-content: flex-start;
    }
`;

const StyledHomeLogo = styled.img`
    width: 43px;
    height: 46px;
`;

const StyledDownArraow = styled.img`
    width: 30px;
    height: 30px;

    @media (min-width: 500px) {
        display: none;
    }

`;

const StyledNavLink = styled.a`
    padding: 0 20px;
    text-decoration: none;
    color: inherit;

    :hover {
        color: white;
        font-size: 20px;
    }

    @media (max-width: 500px) {
        padding: 20px;
        display: ${props => props.toggleArrow ? 'block' : 'none'}
    }
`;

const StyledName = styled.div`
    text-align: left;
    padding-left: 20px;
    display: inline;

    @media (max-width: 500px) {
        display: inline;
        padding: 20px;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 6;
    @media (max-width: 500px) {
        flex-grow: 1;
    }
`;

export { StyledNavBar, StyledNavLink, StyledHomeLogo,
    StyledDownArraow, StyledName, StyledContainer };