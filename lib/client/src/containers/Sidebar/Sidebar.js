import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SidebarShow from './SidebarShow';
import SidebarHidden from './SidebarHidden';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 600;
`

class Sidebar extends React.Component {
  render() {
    const { toggle } = this.props;
    if (toggle) {
      return (
        <SidebarShow />
      )
    } else {
      return (
        <SidebarHidden />
      )
    }
  }
}

export default Sidebar;
