import { StyledContainer, StyledImage, StyledText, StyledImageContainer, StyledTextContainer } from './styles';
import HomeImage from '../../assets/images/home.jpg';
function InfoCard() {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledText>Your Dream Home is just a Click Away!</StyledText>
      </StyledTextContainer>

      <StyledImageContainer>
        <StyledImage src={HomeImage}></StyledImage>
      </StyledImageContainer>
    </StyledContainer>
  );
}

export default InfoCard;
