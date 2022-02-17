import { StyledImage, StyledText, StyledButton, StyledContainer } from './styles';
import BuildingsImage from '../../assets/images/sunset.jpg';

function HeaderCard({ showModal }) {

  return (
    <StyledContainer>
      <StyledImage src={BuildingsImage} />
      <StyledText>
      Home is where the heart is!
      </StyledText>
      <StyledButton onClick={showModal}>Enquire Now!</StyledButton>
    </StyledContainer>
  );
}

export default HeaderCard;
