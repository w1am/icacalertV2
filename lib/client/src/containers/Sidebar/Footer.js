import React from 'react';
import styled from 'styled-components';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FbIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #3A559F;
`

const YtIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #FF0000;
`

const EmIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #3FBAF3;
`

const Menu = styled.ul`
  margin-top: 20px;
  padding: 20px 0px 0px 0px;
  @media (max-width: 850px) {
    padding-left: 80px;
  }
` 
const Text = styled.li`
  color: #586069;
  font-size: 16px;
  list-style-type: none;
  display: inline-block;
  padding: 4px 8px;
  &:first-child {
    padding-left: 0px;
  }
  @media (max-width: 850px) {
    padding: 8px 8px;
  }
` 

const Footer = () => (
  <Menu>
    <Text><a href="https://www.facebook.com/icacmauritius" target="_blank"><FbIcon icon={faFacebook} /></a></Text>
    <Text><a href="https://www.youtube.com/channel/UCEhS14MLOrZ-zDXUhToNGiw" target="_blank"><YtIcon icon={faYoutube} /></a></Text>
    <Text><a href="mailto:icacoffice@intnet.mu" target="_blank"><EmIcon icon={faEnvelope} /></a></Text>
  </Menu>
) 

export default Footer;
