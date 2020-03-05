import React from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { graphql, Query } from 'react-apollo';
import { DISTRICT_ALERTS_QUERY, TENDENCIES_QUERY } from '../graphql'
import { District } from '../utils/Districts';
import { datetime } from '../utils/Datetime';

import { DistrictLayout } from '../components/Layouts/DistrictLayout'
import { DistrictHeader } from '../components/Header/Header'
import { Container } from '../components/Loader/Loader'
import { FadeInDiv } from '../components/Animation/Animation'
import { Layout, Header } from '../components/Layouts/Card';

import Table from '../containers/Table';
import Report from '../containers/Report/Report';
import Chart from '../containers/Chart/Chart';

class DistrictPage extends React.Component {
  async componentDidMount() {
    const res = await datetime();
    this.setState({
      timeStamp: res
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      timeStamp: '',
      district: this.props.match.params.dname
    }
  }
  render() {
    const { match: { params: { dname } }, data: { getAlerts, loading } } = this.props;
    const { timeStamp, district } = this.state;
    const tempStat = [{
      tendency: 'low',
      date: 1
    }]
    if (loading) {
      return (
        <Container>
          <ReactLoading type="cylon" color="#1ed760" />
        </Container>
      ) 
    } else {
      return (
        <FadeInDiv>
          <DistrictHeader>{District(dname)} ({getAlerts.alerts ? getAlerts.alerts.length : 0})</DistrictHeader>
          <DistrictLayout>
            <Report arrLength={getAlerts.alerts ? getAlerts.alerts.length : 0} tendency={getAlerts.tendency}/>
            <Query query={TENDENCIES_QUERY} variables={{timeStamp, district}}>
              {
                ({loading, data}) => {
                  if (loading) return null;
                  const { stat } = data.tendencies;
                  return (
                    <Chart data={stat} />
                  )
                }
              }
            </Query>
          </DistrictLayout>
          <Table dname={dname} />
        </FadeInDiv>
      )
    }
  }
}

export default graphql(DISTRICT_ALERTS_QUERY, {
  options: props => ({
    variables: { dname: props.match.params.dname },
    options: { fetchPolicy: 'network-only' },
  }),
})(DistrictPage);
