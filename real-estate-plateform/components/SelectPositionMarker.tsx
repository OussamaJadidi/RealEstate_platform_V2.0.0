"use client"
import { useEffect, useState } from "react";
import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import  MiniCard  from "./MiniCard";

// Define the type for your markers
type MarkerData = {
  geocode: LatLngExpression;
  popUp: string;
};

type MarkersPropsType = {
  address?: string,
  position: [number, number],
  setPosition: (pos: [number, number]) => void;
};


let DefaultIcon = L.icon({
  iconUrl: "/assets/placeholder.png",
  iconSize: [25, 25],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Markers({
  address,
  position,
  setPosition,
}: MarkersPropsType) {
  const handleMapClick = (e :L.LeafletMouseEvent) => {
    const { lat, lng } = e.latlng; // Destructure lat and lng from e.latlng
    setPosition([lat,lng]); 
  }; 
  const mapEvents = useMapEvents({
    click: handleMapClick, 
  });
  const map = useMap()
  useEffect(() => {
    const handleGeocode = async () => {
      try {
        if (address) {
          let result;
          if (address) {
            result = await geocodeLocation(address);
          }
          if (result) {
            setPosition(result);
          }
        }
      } catch (error: any) {
        console.error(error.message);
      }
    };

    handleGeocode();
  }, [address]);
  useEffect(()=> {
    map.flyTo(position,map.getZoom())

  },[position])
 
  return (
    <>
      <Marker
        position={position || [1, 1]}
        icon={DefaultIcon}
      >
      </Marker>
    </>
  );
}

export async function geocodeLocation(
  location: string
): Promise<[number, number]> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
    );

    if (!response.ok) {
      throw new Error("Geocoding request failed");
    }

    const data = await response.json();

    if (data.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    } else {
      throw new Error("Location not found");
    }
  } catch (error: any) {
    throw new Error("Geocoding failed: " + error.message);
  }
}
