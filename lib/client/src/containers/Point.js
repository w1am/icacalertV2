import React from 'react';
import { Circle, Popup } from 'react-leaflet';

const Point = ({ alerts }) => (
  alerts.map(a => (
    <Circle key={a.id} radius={400} center={{ lat: a.latitude, lng: a.longitude }}>
      <Popup>{a.city}</Popup>
    </Circle>
  ))
)

export default Point; 
