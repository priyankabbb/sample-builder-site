import { StyledContainer, StyledContactInfoContainer, StyledSocialMediaLinkContainer, StyledContactInfoTitle,
  StyledContactInfo, StyledLogo } from "./styles";
import FbLogo from '../../assets/logos/facebook-logo.png';
import InstaLogo from '../../assets/logos/instagram-logo.png';
import TwitterLogo from '../../assets/logos/twitter-logo.png';

function Footer() {
  return (
    <StyledContainer id="footer">
      <StyledSocialMediaLinkContainer>
        <a href="https://facebook.com" target="_blank"><StyledLogo src={FbLogo} /></a>
        <a href="https://instagram.com"target="_blank"><StyledLogo src={InstaLogo} /></a>
        <a href="https://twitter.com" target="_blank"><StyledLogo src={TwitterLogo} /></a>
      </StyledSocialMediaLinkContainer>

      <StyledContactInfoContainer>
        <StyledContactInfoTitle>Contact Us</StyledContactInfoTitle>
        
        <StyledContactInfo>
          Prosperity Deveopers<br/>
          John Doe<br/>
          +91 999 999 999 0<br/>
          Delhi, India
        </StyledContactInfo>
      </StyledContactInfoContainer>
    </StyledContainer>
  );
}

export default Footer;
