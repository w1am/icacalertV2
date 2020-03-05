import React from 'react';
import { Map, TileLayer, Circle } from 'react-leaflet';

const height = { height: '400px', width: '100%' };

const Position = ({ lat, long }) => (
  <Map style={height} center={{ lat, lng: long }} zoom={15}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Circle radius={200} center={{ lat, lng: long }} />
  </Map>
)

export default Position;
