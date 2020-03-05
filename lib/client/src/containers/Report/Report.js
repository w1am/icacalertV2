import React from 'react';
import { tend } from '../../utils/tend';

import { Layout, Header } from '../../components/Layouts/CardBorder';
import { ReportLayout, InfoHeader, Identifier, InfoLayoutTendency, InfoLayoutAlert } from '../../components/Report/Report.js';


const Report = ({ tendency, arrLength }) => (
  <ReportLayout>
    <Header>REPORT</Header>
    <Layout>
      <InfoLayoutTendency>
        <InfoHeader>{tend(tendency)} { tendency.toUpperCase() }</InfoHeader>
        <Identifier>Overall Tendency</Identifier>
      </InfoLayoutTendency>
      <InfoLayoutAlert>
        <InfoHeader>{ arrLength ? arrLength : '0' }</InfoHeader>
        <Identifier>Alerts</Identifier>
      </InfoLayoutAlert>
    </Layout>
  </ReportLayout>
)

export default Report;
