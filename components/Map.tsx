"use client"
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import * as L from 'leaflet';
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; 
import "leaflet-defaulticon-compatibility";
import Markers from './Markers';

type MapPropsType = {
  address?: string,
}

let DefaultIcon = L.icon({
  iconUrl: "/assets/placeholder.png",
  shadowUrl: 'leaflet/dist/images/marker-shadow.png',
  iconSize: [25, 25],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map({ address }: MapPropsType) {
  const [position, setPosition] = useState<LatLngExpression>([32, -5]);

  return (
    <>
      <MapContainer center={position} zoom={5} style={{width:"100%",height:"100%",position:"sticky", top:"0", left:"0",borderRadius: ".5rem",}}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        <Markers address={address} setPosition={setPosition} />
      </MapContainer>
    </>
  );
}