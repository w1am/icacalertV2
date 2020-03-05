import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { ALERTS_QUERY } from '../graphql';
import { Query } from 'react-apollo';

import { FadeInDiv } from '../components/Animation/Animation'

import Point from '../containers/Point';

const height = { height: '500px', width: '100%' };

class Leaflet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -20.163385,
      lng: 57.504628
    }
  }
  render() {
    return (
      <FadeInDiv>
        <Map style={height} center={{ lat: this.state.lat, lng: this.state.lng }} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Query query={ALERTS_QUERY}>
            {({loading, data}) => {
              if (loading) return null;
              return (
                <Point alerts={data.alerts} />
              )
            }}
          </Query>
        </Map>
      </FadeInDiv>
    )
  }
}

export default Leaflet;
