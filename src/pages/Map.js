import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapContainer, TileLayer, Marker, Popup, useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

import houseIconUrl from './house.png'; // Path to your house icon

import Main from '../layouts/Main';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const houseIcon = new L.Icon({
  iconUrl: houseIconUrl,
  iconSize: [48, 48], // Size of the icon
  iconAnchor: [16, 32], // Anchor of the icon
  popupAnchor: [0, -32], // Popup anchor
});

const Map = () => {
  const [markers, setMarkers] = useState([
    { lat: 25.038, lng: 121.5645 }, // Initial marker example (Taipei 101)
  ]);

  const AddMarker = () => {
    useMapEvents({
      click(e) {
        const newMarker = { lat: e.latlng.lat, lng: e.latlng.lng };
        setMarkers([...markers, newMarker]);
      },
    });
    return null;
  };

  const removeMarker = (indexToRemove, e) => {
    e.stopPropagation();
    setMarkers(markers.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Main title="Map" description="Map API for testing">
      <article className="post" id="contact" style={{ height: '100%' }}>
        <header>
          <div className="title">
            <h2>
              <Link to="/map">Interactive Map</Link>
            </h2>
          </div>
        </header>
        <div className="map-container">
          <div className="map-wrapper" style={{ height: '500px', width: '100%' }}>
            <MapContainer
              center={[25.038, 121.5645]} // Center on Taipei
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {markers.map((marker, index) => (
                <Marker
                  key={`${marker.lat}-${marker.lng}`}
                  position={[marker.lat, marker.lng]}
                  icon={houseIcon} // Use house icon for all markers
                >
                  <Popup>
                    <div>
                      <p>You clicked here!</p>
                      <button type="button" onClick={(e) => removeMarker(index, e)}>Remove Marker</button>
                    </div>
                  </Popup>
                </Marker>
              ))}
              <AddMarker />
            </MapContainer>
          </div>
        </div>
      </article>
    </Main>
  );
};

export default Map;
