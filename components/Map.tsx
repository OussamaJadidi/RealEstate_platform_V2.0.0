"use client"
import "leaflet/dist/leaflet.css"
import React from 'react'
import {MapContainer,TileLayer} from "react-leaflet"
export default function Map() {
  return (
    <>
      <MapContainer center={[34.6845636,-+1.9486776,13]} zoom={13} style={{border: "1px solid red",width:"20rem",height:"calc(100vh - 5rem)"}}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>

      </MapContainer>
    </>
  )
}
