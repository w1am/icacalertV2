import React from 'react';
import styled from 'styled-components';

import AlertForm from '../containers/Form/Alert';
import { FadeInDiv } from '../components/Animation/Animation'

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FaIcon = styled(FontAwesomeIcon)`
  color: #C0C0C0;
  padding-right: 10px;
`

const FormLayout = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
`

const Title = styled.h2`
`
const Menu = styled.ul`
  padding: 0px !important;
  margin-bottom: 30px;
  @media (max-width: 850px) {
    padding-left: 18px;
  }
`
const Link = styled.li`
  list-style-type: none;
  border: 1px solid #E5E5E5;
  padding: 20px;
  &:last-child {
    border-top: 0px;
    border-radius: 0px 0px 5px 5px;
  }
  &:first-child {
    border-bottom: 0px;
    border-top: 4px solid #FF5454;
    padding: 18px 30px;
    font-weight: 700;
    background: #F4F4F4;
    color: #C0C0C0;
    border-radius: 5px 5px 0px 0px;
  }
  @media (max-width: 850px) {
    font-size: 14px;
  }
`

const AlertPage = () => (
  <FadeInDiv>
    <FormLayout>
      <Title>Alert Us</Title>
      <Menu>
        <Link><FaIcon icon={faExclamationCircle} />NOTICE</Link>
        <Link>Your alerts are anonymous </Link>
        <Link>Fake entries & spamming may be liable to legal procedures</Link>
      </Menu>
      <AlertForm />
    </FormLayout>
  </FadeInDiv>
)

export default AlertPage;
