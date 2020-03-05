import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarLayout, NavbarLink, StyledLink, DownloadLink, Links, LogoImg } from '../components/Navbar';
import Logo from '../assets/logov3.png';

const Navbar = () => (
  <NavbarLayout>
    <Link to='/'><LogoImg src={Logo} /></Link>
    <Links>
      <NavbarLink><StyledLink to='/account'>Account</StyledLink></NavbarLink>
      <NavbarLink><StyledLink to='/map'>Map</StyledLink></NavbarLink>
      <NavbarLink><StyledLink to='/alert'>Alert us</StyledLink></NavbarLink>
      <NavbarLink><DownloadLink to='/download'>Download App</DownloadLink></NavbarLink>
    </Links>
  </NavbarLayout>
)

export default Navbar;
