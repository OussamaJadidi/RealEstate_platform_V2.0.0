"use client"
import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
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
  //  const [g,setG] = useState(position)
    // var map = useMap()
    const markers: MarkerData[] = [
      {
        geocode: [34.6949524,-1.9006104],
        popUp: "Hello I am a pop Up",
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

  // let arr: [number,number] = [lat,lng];  // This is your array of two numbers
  // let ltlng: LatLngExpression = arr;

  // Use useEffect to update the coordinates when the address changes
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
      {markers.map((marker)=>

      <Marker
        position={marker.geocode}
        // position={position || [1, 1]}
        icon={DefaultIcon}
      >
        <Popup>
          <MiniCard />
        </Popup>
      </Marker>
       )} 
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
