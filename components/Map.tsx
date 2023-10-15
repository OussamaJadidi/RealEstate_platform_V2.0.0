"use client"
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {LatLngExpression} from "leaflet"
import * as L from 'leaflet';
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; 
import "leaflet-defaulticon-compatibility";
import {Card} from "./"
// Define the type for your markers
interface MarkerData {
  geocode: LatLngExpression;
  popUp: string;
}

let DefaultIcon = L.icon({
  iconUrl: "/assets/placeholder.png",
  shadowUrl: 'leaflet/dist/images/marker-shadow.png',
  iconSize: [25, 25],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const markers: MarkerData[] = [
    {
      geocode: [34.6949524,-1.9006104],
      popUp: "Hello I am a pop Up"
    },
    {
      geocode: [34.6557527,-1.9112698],
      popUp: "Hello I am a pop Up"
    },
    {
      geocode: [34.6981051,-1.8913764],
      popUp: "Hello I am a pop Up"
    },
  ];

  return (
    <>
      <MapContainer center={[34.6845636,-1.9486776]} zoom={13} style={{width:"100%",height:"100%",position:"sticky", top:"0", left:"0"}}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        {
          markers.map((marker) =>
            <Marker position={marker.geocode} icon={DefaultIcon}  >
              <Popup ><Card/></Popup>
            </Marker>
          )
        }
      </MapContainer>
    </>
  );
}