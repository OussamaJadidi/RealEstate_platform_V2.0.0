"use client"
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; 
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import Markers from './Markers';
import { useState } from "react";

type MapPropsType = {
  address?: string,
  specifyLocationManually?: Boolean,
}

export default function Map({ address, specifyLocationManually = true }: MapPropsType) {
  const [position, setPosition] = useState<[number,number]>([32,-5])

  function MapEvents() {
    useMapEvents({
      click: (e) => {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        console.log("User clicked at latitude: " + lat + " and longitude: " + lng);
        setPosition([lat, lng]);
      }
    });
    return null;
  }

  return (
    <>
      <MapContainer scrollWheelZoom={false} center={position} zoom={6} style={{width:"100%",height:"100%",position:"sticky", top:"0", left:"0",borderRadius: ".5rem",}}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        <Markers address={address} position={position} setPosition={setPosition} />
        {specifyLocationManually && <MapEvents />}
      </MapContainer>
    </>
  );
}
