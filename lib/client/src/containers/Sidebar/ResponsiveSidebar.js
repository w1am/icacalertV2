import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, List, Links } from '../../components/ResponsiveSidebar';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar';

const FaIcon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer
  }
`

class ResponsiveSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.toggleSidebar = this.toggleSidebar.bind(this);
  };
  toggleSidebar() {
    this.setState({toggle: !this.state.toggle})
  };
  render() {
    return (
      <div>
        <Layout>
          <List>
            <Links onClick={this.toggleSidebar}><FaIcon icon={faBars} /></Links>
            <Links><h4>Regions</h4></Links>
          </List>
        </Layout>
        <Sidebar toggle={this.state.toggle} />
      </div>
    )
  }
}

export default ResponsiveSidebar;
