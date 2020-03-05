import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResponsiveMenu = styled.ul`
  text-align: center;
  background-color: #373940;
  margin: 0px;
  border-bottom: 1px solid #EFEFEF;
  display: none;
  padding-left: 0px;
  @media (max-width: 1086px) {
    display: flex;
    justify-content: center;
    justify-content: space-around;
  }
  @media (max-width: 850px) {
    font-size: 12px;
  }
`

export const ResponsiveLink = styled.li`
  display: inline-block;
  list-style-type: none;
  padding: 15px 0px;
  border-bottom: 5px solid transparent;
  font-weight: 700;
  color: #F5F5F5;
  &:hover{
    color: #4BA855;
    border-bottom: 5px solid #4BA855;
    transition: all ease-in-out .2s;
  }
  @media (max-width: 850px) {
    font-weight: 400;
  }
`

export const Links = styled(Link)`
  color: white;
`