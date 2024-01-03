import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const smederevoCoords = [44.6642, 20.9335];

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={smederevoCoords} zoom={14} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
