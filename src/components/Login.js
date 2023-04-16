import React from 'react'
import styled from 'styled-components'

const Login = props => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Acess to Raya and the Last Dragon for an additional fee
            with Disney+ subscription. As of 16/04/23, the price of Disney+ and
            The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src='/images/cta-logo-two.png' />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
}

// Defining the styled-components
const Container = styled.section`
  overflow: hidden; /* Hides overflowing content */
  display: flex;
  flex-direction: column; /* Sets the flex direction to column */
  text-align: center;
  height: 100vh;
`

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%; /* Sets the width of the content to 100% */
  position: relative; /* Sets the position property to relative */
  min-height: 100vh;
  box-sizing: border-box; /* Includes padding and border in the element's total width and height */
  display: flex; /* Displays the element as a flex container */
  justify-content: center; /* Centers the content horizontally */
  align-items: center; /* Centers the content vertically */
  flex-direction: column; /* Sets the flex direction to column */
  padding: 80px 40px;
  height: 100%;
`

const BgImage = styled.div`
  background-image: url('/images/login-background.jpg'); /* sets the background image of the div */
  position: absolute; /* sets the position of the div to absolute */
  z-index: -1; /* sets the z-index of the div to -1, so that it appears behind other elements */
  top: 0;
  left: 0;
  width: 100%; /* Sets the width of the image to 100% */
  height: 100%; /* Sets the height of the image to 100% */
`

const CTA = styled.div`
  max-width: 650px; /* Sets the maximum width of the CTA section to 650px */
  display: flex; /* Displays the element as a flex container */
  flex-direction: column; /* Sets the flex direction to column */
  width: 100%; /* Sets the width of the CTA section to 100% of its parent container */
`

const CTALogoOne = styled.img`
  margin-bottom: 12px; /* Adds margin to the bottom of the CTALogoOne */
  min-height: 1px; /* Sets the minimum height of the CTALogoOne image to 1px */
  display: block; /* Displays the image as a block-level element */
  width: 100%; /* Sets the width of the image to 100% of the parent element */
`

const SignUp = styled.button`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transperant; /* Sets the border of the button to transparent */
  border-radius: 4px; /* gives rounded corners to the button */ 

  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  display: inline-block; /* Displays the image as an inline-block element */
  vertical-align: bottom;
  width: 100%;/* Sets the width of the image to 100% of the parent element */
`

export default Login
