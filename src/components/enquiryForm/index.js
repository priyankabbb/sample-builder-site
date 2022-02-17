import React, { useState } from 'react';
import { StyledMask, StyledFormContainer, StyledContainer, StyledInput, StyledButton, 
  StyledCrossIcon, StyledSuccessBox, StyledIcon } from './styles';
import CloseButton from '../../assets/logos/close.png';
import GreenTick from '../../assets/logos/green-tick.png';

const EnquiryForm = (props) => {
  const { isModalVisible, handleOk, handleCancel } = props;  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if(name && contactNumber && email) {
      console.log(name, contactNumber, email);
      handleOk();
      setName();
      setEmail();
      setContactNumber();
      setSubmitted(true);
    }
  }

  if(isModalVisible) {
    return (
      <StyledContainer>
        <StyledFormContainer>
          <form>
            <StyledInput type="text" placeholder="Name" required 
            onChange={e => { 
              if(e.target.value !== null) {
                setName(e.target.value)
              }
            }} />
            <StyledInput type="email" placeholder="Email Id" required
            onChange={e => { 
              if(e.target.value !== null) {
                setEmail(e.target.value)
              }
            }}  />
            <StyledInput type="tel" maxlength="10" placeholder="Contact Number" required
            onChange={e => { 
              if(e.target.value!== null) {
                setContactNumber(e.target.value)
              }
            }}  />
            <StyledButton type="submit" onClick={handleSubmit} 
            disabled={!(name && contactNumber && email)}>
              Submit
            </StyledButton>
          </form>
          
          <StyledCrossIcon src={CloseButton} onClick={handleCancel} />
        </StyledFormContainer>
        <StyledMask />
      </StyledContainer>
    );
  } else if(submitted) {
    return <>
      <StyledSuccessBox>
        <StyledIcon src={GreenTick} />
        Our agent will contact you soon! 
        <StyledCrossIcon src={CloseButton} onClick={() => setSubmitted(false)} />
      </StyledSuccessBox>
      <StyledMask />
    </>
  } else {
    return null;
  }
  
};

export default EnquiryForm;