import React from 'react'
import styled from 'styled-components'

const Header = props => {
  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt="Disney+"/>
      </Logo>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed; /* This makes sure that the position of the nav-bar is fixed and doesnt disappear when we scroll down */
  top: 0;
  left: 0;
  right: 0;
  /* By setting these properties to 0, the Nav component is fixed to the top of the viewport  */
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between; /* This ensures that there is maximum space between the both logo and login button */
  align-items: center; /* Aligns the items to the center of the nav-bar vertically */
  padding: 0 36px; /* Gives a space of 36px to the left and right of the navbar form its elements */
  letter-spacing: 16px;
  z-index: 3; /* ensures that the header always stays on the top */
`

/* We use styled.a as the image is an anchor tag(it is a link to the main page of the website) */
const Logo = styled.a`
  padding:0;
  width: 80px; /* Without this property we cant actually see the logo */
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img{
    display: block;
    width: 100%;
  }
`;

export default Header
