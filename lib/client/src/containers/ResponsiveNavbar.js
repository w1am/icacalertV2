import React from 'react';
import { ResponsiveMenu, ResponsiveLink, Links } from '../components/ResponsiveNavbar';

const ResponsiveNavbar = () => (
  <ResponsiveMenu>
    <ResponsiveLink><Links to='/account'>Account</Links></ResponsiveLink>
    <ResponsiveLink><Links to='/map'>Map</Links></ResponsiveLink>
    <ResponsiveLink><Links to='/alert'>Alert us</Links></ResponsiveLink>
    <ResponsiveLink><Links to='/download'>Download</Links></ResponsiveLink>
  </ResponsiveMenu>
)

export default ResponsiveNavbar;
