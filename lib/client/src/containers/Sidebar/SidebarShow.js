import React from 'react';
import { SidebarLayout, SidebarMenuLayout, SidebarMenuLinks, SidebarHeader } from '../../components/Sidebar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const SidebarShow = () => (
  <SidebarLayout>
    <SidebarHeader>Regions</SidebarHeader>
    <SidebarMenuLayout>
      <SidebarMenuLinks><a className="side-a" href='/alerts/portlouis'>Port Louis</a></SidebarMenuLinks>
      <SidebarMenuLinks><a className="side-a" href='/alerts/pamplemousses'>Pamplemousses</a></SidebarMenuLinks>
      <SidebarMenuLinks><a className="side-a" href='/alerts/grandport'>Grand Port</a></SidebarMenuLinks>
      <SidebarMenuLinks><a className="side-a" href='/alerts/savanne'>Savanne</a></SidebarMenuLinks>
      <SidebarMenuLinks><a className="side-a" href='/alerts/moka'>Moka</a></SidebarMenuLinks>
      <SidebarMenuLinks><a className="side-a" href='/alerts/rivièredurempart'>Rivière Du Rempart</a></SidebarMenuLinks>
      <SidebarMenuLinks><a className="side-a" href='/alerts/plaineswilhems'>Plaines Wilhems</a></SidebarMenuLinks>
      <SidebarMenuLinks><a className="side-a" href='/alerts/blackriver'>Black River</a></SidebarMenuLinks>
      <SidebarMenuLinks><a className="side-a" href='/alerts/flacq'>Flacq</a></SidebarMenuLinks>
    </SidebarMenuLayout>
    <Footer />
  </SidebarLayout>
)

export default SidebarShow
