import styled from 'styled-components';

export const SidebarHeader = styled.h2`
  margin: 0px 0px 20px 0px;
  padding: 0rem; 
  @media (max-width: 850px) {
    display: none;
  }
`

export const SidebarLayoutHidden = styled.div`
  display: none;
  height: 155vh !important;
  position: absolute !important;
  @media (min-width: 850px) {
    display: block;
    width: 10rem;
    padding: 3rem 5rem;
    height: 70vh !important;
    overflow-y: hidden;
    margin: 0px;
  }
`

export const SidebarMenuLayoutHidden = styled.ul`
  display: none;
  @media (min-width: 850px) {
    padding: 0;
    display: block;
    margin: 0px;
  }
`

export const SidebarMenuLinksHidden = styled.li`
  display: none;
  @media (min-width: 850px) {
    display: block;
    padding: 8px 0px;
    color: #0366D6;
    font-weight: 600;
  }
`

export const SidebarLayout = styled.div`
  position: absolute !important;
  background-color: white;
  width: 10rem;
  margin: 0px;
  padding: 3rem 5rem;
  z-index: 1;
  @media (max-width: 850px) {
    height: 100vh !important;
    display: block;
    position: absolute !important; 
    width: 100%;
    padding: 0px;
  }
`

export const SidebarMenuLayout = styled.ul`
  padding: 0px;
  margin: 0px;
  @media (max-width: 850px) {
    padding: 2rem 5rem;
  }
`

export const SidebarMenuLinks = styled.li`
  padding: 8px 0px;
  color: #0366D6;
  font-weight: 600;
`
