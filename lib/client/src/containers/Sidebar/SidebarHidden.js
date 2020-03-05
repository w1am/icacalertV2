import React from 'react';
import { SidebarLayoutHidden, SidebarMenuLayoutHidden, SidebarMenuLinksHidden, SidebarHeader } from '../../components/Sidebar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const SidebarHidden = () => (
  <SidebarLayoutHidden>
    <SidebarHeader>Regions</SidebarHeader>
    <SidebarMenuLayoutHidden>
      <SidebarMenuLinksHidden><a className="side-a" href='/alerts/portlouis'>Port Louis</a></SidebarMenuLinksHidden>
      <SidebarMenuLinksHidden><a  className="side-a" href='/alerts/pamplemousses'>Pamplemousses</a></SidebarMenuLinksHidden>
      <SidebarMenuLinksHidden><a className="side-a"  href='/alerts/grandport'>Grand Port</a></SidebarMenuLinksHidden>
      <SidebarMenuLinksHidden><a className="side-a"  href='/alerts/savanne'>Savanne</a></SidebarMenuLinksHidden>
      <SidebarMenuLinksHidden><a  className="side-a" href='/alerts/moka'>Moka</a></SidebarMenuLinksHidden>
      <SidebarMenuLinksHidden><a  className="side-a" href='/alerts/rivièredurempart'>Rivière Du Rempart</a></SidebarMenuLinksHidden>
      <SidebarMenuLinksHidden><a  className="side-a" href='/alerts/plaineswilhems'>Plaines Wilhems</a></SidebarMenuLinksHidden>
      <SidebarMenuLinksHidden><a  className="side-a" href='/alerts/blackriver'>Black River</a></SidebarMenuLinksHidden>
      <SidebarMenuLinksHidden><a  className="side-a" href='/alerts/flacq'>Flacq</a></SidebarMenuLinksHidden>
    </SidebarMenuLayoutHidden>
    <Footer />
  </SidebarLayoutHidden>
)

export default SidebarHidden;
