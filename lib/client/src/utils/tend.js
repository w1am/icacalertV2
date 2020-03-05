import { High, Mhigh, Moderate, Mlow, Low } from '../components/Tend';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const FaIcon = styled(FontAwesomeIcon)`
  font-size: 10px;
`

export const tend = (tendency) => {
  switch(tendency) {
    case "high":
      return <High><FaIcon icon={faCircle} /></High>
        break;
    case "mod. high":
      return <Mhigh><FaIcon icon={faCircle} /></Mhigh>
        break;
    case "moderate":
      return <Moderate><FaIcon icon={faCircle} /></Moderate>
        break;
    case "mod. low":
      return <Mlow><FaIcon icon={faCircle} /></Mlow>
        break;
    case "low":
      return <Low><FaIcon icon={faCircle} /></Low>
        break;
  }
}
