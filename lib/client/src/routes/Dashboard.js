import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FadeInDiv } from '../components/Animation/Animation'

const Bold = styled.span`
  font-weight: 700;
` 

const Step = styled.p`
  border: 1px solid #C8C9CA;
  padding: 30px;
  border-radius: 5px;
  @media (max-width: 850px) {
    padding: 20px;
    font-size: 14px;
  }
` 

const Layout = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (max-width: 336px) {
    width: 100%;
    display: block;
  }
` 

const Region = styled.div`
  padding: 20px;
  margin: 10px;
  width: 250px;
  border: 1px solid #e8e8e8;
  -webkit-box-shadow: 0px 0px 20px -9px rgba(0,0,0,0.32);
  -moz-box-shadow: 0px 0px 20px -9px rgba(0,0,0,0.32);
  box-shadow: 0px 0px 20px -9px rgba(0,0,0,0.32);
  @media (max-width: 690px) {
    width: 150px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    width: 120px;
    padding: 10px;
    margin: 10px 2px;
  }
  @media (max-width: 336px) {
    width: 90%;
  }
` 

const Dashboard = () => (
  <FadeInDiv>
    <h2>Steps</h2>
    <Step><Bold>Step 1</Bold> click <Link to='/alert'>here</Link> to send an alert</Step>
    <Step><Bold>Step 2</Bold> view reports and tendencies by selecting a region from the left page. </Step>
    <Layout>
      <Link to='/alerts/portlouis'>
        <Region style={{borderLeft: '6px solid #3FBAF3'}}>
          <h4 style={{ paddingLeft: '10px' }}>Port Louis</h4>
        </Region>
      </Link>

      <Link to='/alerts/pamplemousses'>
        <Region style={{borderLeft: '6px solid #d747ff'}}>
          <h4 style={{ paddingLeft: '10px' }}>Pamplemousses</h4>
        </Region>
      </Link>

      <Link to='/alerts/grandport'>
        <Region style={{borderLeft: '6px solid #1fbaa5'}}>
          <h4 style={{ paddingLeft: '10px' }}>Grand Port</h4>
        </Region>
      </Link>

      <Link to='/alerts/savanne'>
        <Region style={{borderLeft: '6px solid #ffc147'}}>
          <h4 style={{ paddingLeft: '10px' }}>Savanne</h4>
        </Region>
      </Link>

      <Link to='/alerts/moka'>
        <Region style={{borderLeft: '6px solid #89ff3a'}}>
          <h4 style={{ paddingLeft: '10px' }}>Moka</h4>
        </Region>
      </Link>

      <Link to='/alerts/rivièredurempart'>
        <Region style={{borderLeft: '6px solid #42c47f'}}>
          <h4 style={{ paddingLeft: '10px' }}>Rivière Du Rempart</h4>
        </Region>
      </Link>

      <Link to='/alerts/plaineswilhems'>
        <Region style={{borderLeft: '6px solid #ed1757'}}>
          <h4 style={{ paddingLeft: '10px' }}>Plaines Wilhems</h4>
        </Region>
      </Link>

      <Link to='/alerts/blackriver'>
        <Region style={{borderLeft: '6px solid #177dea'}}>
          <h4 style={{ paddingLeft: '10px' }}>Black River</h4>
        </Region>
      </Link>

      <Link to='/alerts/flacq'>
        <Region style={{borderLeft: '6px solid #3a559f'}}>
          <h4 style={{ paddingLeft: '10px' }}>Flacq</h4>
        </Region>
      </Link>
    </Layout>
  </FadeInDiv>
)

export default Dashboard;
