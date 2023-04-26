/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
//useDispatch- allows us to dispatch actions to our store
//useSelector- allows us to select from our store
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase'
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails
} from '../features/user/userSlice'

const Header = props => {
  const dispatch = useDispatch() //Using to dispatch the details
  const history = useNavigate() //Using to access the history
  //Pulling the username and photo from the store.js file
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  //Using react hooks- This function only runs when the username is updated
  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        setUser(user)
        history('/home')
      }
    })
  }, [userName])

  const handleAuth = () => {
    //Checking if the userName exist or not
    if (!userName) {
      //Requesting for the google oAuth when login is clicked
      auth
        .signInWithPopup(provider)
        .then(result => {
          setUser(result.user)
        })
        .catch(error => {
          alert(error.message)
        })
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState())
          history('/')
        })
        .catch(err => alert(err.message))
    }
  }

  const setUser = user => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }

  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt='Disney+' />
      </Logo>

      {/* Checking if the user is signed in yet or not. If not showing only the login button, else the whole navBar */}

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          {console.log(userPhoto)}
          <NavMenu>
            <a href='/home'>
              <img src='/images/home-icon.svg' alt='HOME' />
              <span>HOME</span>
            </a>
            <a href='/search'>
              <img src='/images/search-icon.svg' alt='HOME' />
              <span>SEARCH</span>
            </a>
            <a href='/watchlist'>
              <img src='/images/watchlist-icon.svg' alt='HOME' />
              <span>WATCHLIST</span>
            </a>
            <a href='/originals'>
              <img src='/images/original-icon.svg' alt='HOME' />
              <span>ORIGINALS</span>
            </a>
            <a href='/movies'>
              <img src='/images/movie-icon.svg' alt='HOME' />
              <span> MOVIES</span>
            </a>
            <a href='/series'>
              <img src='/images/series-icon.svg' alt='HOME' />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <Signout>
            <UserImg src={userPhoto} alt={userName} />
            <Dropdown>
              <span onClick={handleAuth}>Sign Out</span>
            </Dropdown>
          </Signout>
        </>
      )}
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
  justify-content: space-between; /* first item is aligned to the start of the container, the last item is aligned to the end of the container, and the remaining items are distributed with equal spacing between them. */
  align-items: center; /* Aligns the items to the center of the nav-bar vertically */
  padding: 0 36px; /* Gives a space of 36px to the left and right of the navbar form its elements */
  letter-spacing: 16px;
  z-index: 3; /* ensures that the header always stays on the top */
`

/* We use styled.a as the image is an anchor tag(it is a link to the main page of the website) */
const Logo = styled.a`
  padding: 0;
  width: 80px; /* Without this property we cant actually see the logo */
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  /* Properties for the disney+ image */
  img {
    display: block;
    width: 100%;
  }
`

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap; /* This shrinks the size of the children of this div, if place is not sufficient */
  height: 100%;
  justify-content: flex-end; /* Aligns all the NavMenu elements to the right leaving no space */
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      /* These three properties make sure that the image is visible and doesnt go less than 20px in any viewport */
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 3px 4px 2px;
      white-space: nowrap; /* prevents the text from wrapping */
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px; /* Takes the line to below the span text HOME */
        content: '';
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center; /* sets the origin point of the transformation to the left edge */
        transform: scaleX(
          0
        ); /*  scales the element along the horizontal axis (X-axis) to 0, effectively making it invisible */

        /* This below line is also used to give the smooth transition from left to right */
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; /* used to define the transition effect when the line becomes visible */
        /* sets the duration of the transition to 250ms, and specifies the cubic-bezier timing function, which determines the speed of the transition */

        visibility: hidden;
        width: 100%;
      }
    }

    /* Styles to be applied on hover */
    &:hover {
      /* modify the styles of span:before */
      span:before {
        transform: scaleX(
          1
        ); /* scales the line horizontally to a width of 100% of the span's width, effectively making it visible */
        visibility: visible;
        opacity: 1 !important; /*  line sets the opacity of the line to 1 and overrides any other opacity values that may have been applied to the element */
      }
    }

    @media (max-width: 765px) {
      /* menu disappears when the viewport size is less than 765px */
      display: none;
    }
  }
`

const Login = styled.button`
  background-color: rgb(0, 0, 0, 0.6);
  color: #f9f9f9;
  padding: 8px 16px;
  text-transform: uppercase; /* Capitalize each letter */
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
  width: 100%;
  letter-spacing: 1.5px;
`

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgb(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`

const Signout = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center; /* To vertically align */
  justify-content: center; /* To horizontally align */

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`

export default Header
