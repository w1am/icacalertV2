import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarLayout = styled.ul`
  margin: 0;
  padding: 0rem 5rem;
  background: black;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
  @media (max-width: 1086px) {
    padding: 0.7rem 5rem;
  }
  @media (max-width: 850px) {
    padding: 0.1rem 2rem;
  }
`

export const NavbarLink = styled.li`
  display: inline-block;
  padding-right: 30px;
  @media (max-width: 1086px) {
    display: none;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #F5F5F5;
  font-weight: 600;
  border-bottom: 5px solid transparent;
  padding: 25px 0px;
  &:hover{
    color: #4BA855;
    border-bottom: 5px solid #4BA855;
    transition: all ease-in-out .2s;
  }
`

export const DownloadLink = styled(Link)`
  text-decoration: none;
  color: #1db954;
  font-weight: 600;
  border-bottom: 5px solid transparent;
  padding: 25px 0px;
  &:hover{
    color: #4BA855;
    border-bottom: 5px solid #4BA855;
    transition: all ease-in-out .2s;
  }
`

export const Links = styled.div`
  text-align: right;
  padding: 30px 0px;
`

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  @media (max-width: 850px) {
    top: 14px;
    margin-top: 5px;
    height: 25px;
  }
`