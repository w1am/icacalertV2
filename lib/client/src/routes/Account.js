import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isAuthenticated } from '../utils/verifyUser';
import { faSignOutAlt, faKey, faSignInAlt, faUserPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FadeInDiv } from '../components/Animation/Animation'

const FaIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
`

const FaAdminIcon = styled(FontAwesomeIcon)`
  color: #ddc616;
  padding-right: 10px;
`

const Status = styled.p`
  color: #5CB85B;
  display: inline;
  font-weight: 600;
`

const Control = styled.div`
  margin-top: 25px;
  border-top: 1px solid #dbdbdb;
  padding: 20px 0px;
  @media (max-width: 850px) {
    font-size: 14px;
  }
`

const Menu = styled.div`
  margin: 10px 0px;
`

const Item = styled.button`
  display: inline-block;
  width: 15em;
  background-color: #0189df;
  border: 0px;
  &:hover {
    background-color: #177cb2;
    transition: 0.5s;
    border: 0px;
  }
  &:first-child {
    margin-left: 0px;
    margin-right: 20px;
  }
  @media (max-width: 850px) {
    width: 100%;
  }
`

const Account = () => (
  <FadeInDiv>
    <h2>Account</h2>
    <p>You don't need an account to send alerts</p>
    {
      isAuthenticated().ok ? (
        <Menu>
          <Link style={{color: 'white'}} to='/account/signout/'><Item><FaIcon icon={faSignOutAlt} />Sign out</Item></Link>
          <Link  style={{color: 'white'}} to='/account/password/'><Item><FaIcon icon={faKey} />Change password</Item></Link>
          {
            isAuthenticated().account == 'admin' ? (
              <Control><FaAdminIcon icon={faStar} />admin status: <Status>true</Status></Control>
            ) : null
          }
        </Menu>
      ) : (
        <Menu>
          <Link style={{color: 'white'}}  to='/account/login/'><Item><FaIcon icon={faSignInAlt} />Login</Item></Link>
          <Link style={{color: 'white'}}  to='/account/register/'><Item><FaIcon icon={faUserPlus} />Register</Item></Link>
        </Menu>
      )
    }
  </FadeInDiv>
)

export default Account;
