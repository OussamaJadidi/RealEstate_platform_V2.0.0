"use client";
import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
// import "leaflet-defaulticon-compatibility";
// import "leaflet/dist/leaflet.css";
import MultipleMarkers from "./MultipleMarkers";
import SelectPositionMarker from "./SelectPositionMarker";
import { useState } from "react";
type LocationProp={
  address: string,
  country: string,
  city: string,
  latAndLng: [number,number] 
}

type MapPropsType = {
  address?: string,
  showMultiplePositions: Boolean,
  latAndLng?: [number,number],
  updateData?: (latAndLng: Partial<LocationProp>) => void
};

export default function Map({
  address,
  showMultiplePositions,
  updateData,
  latAndLng,
}: MapPropsType) {
  const [position, setPosition] = useState<[number, number]>(latAndLng || [32, -5]);
  return (
    <>
      <MapContainer
        scrollWheelZoom={false}
        center={position}
        zoom={13}
        style={{
          width: "100%",
          height: "100%",
          position: "sticky",
          top: "0",
          left: "0",
          borderRadius: ".5rem",
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showMultiplePositions === true ? (
          <MultipleMarkers
            address={address}
            position={position}
            setPosition={setPosition}
          />
        ) : (
          <SelectPositionMarker
            address={address}
            position={position}
            setPosition={setPosition}
            updateData={updateData}
            latAndLng={latAndLng}
          />
        )}
      </MapContainer>
    </>
  );
}
