import React, { useState } from 'react';
import { StyledNavBar, StyledNavLink, StyledHomeLogo, StyledName, StyledContainer, StyledDownArraow } from './styles';
import HomeLogo from '../../assets/logos/home_icon.png';
import DownArrow from '../../assets/logos/down-arrow.png';

function NavBar() {
  const [toggleArrow, setToggleArrow] = useState(false);
  console.log(toggleArrow)
  return (
    <StyledNavBar>
      <StyledContainer>
        <StyledHomeLogo src={HomeLogo} />
        <StyledName>Prosperity Developers</StyledName>
        <StyledDownArraow src={DownArrow} onClick={() => setToggleArrow(!toggleArrow)} toggleArrow />
      </StyledContainer>

      <StyledNavLink href="#aboutUs" toggleArrow={toggleArrow}>
        About Us
      </StyledNavLink>

      <StyledNavLink href="#footer" toggleArrow={toggleArrow}>
        Contact Us
      </StyledNavLink>
    </StyledNavBar>
  );
}

export default NavBar;
