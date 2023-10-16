import { useEffect } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import * as L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import { Card } from "./";

// Define the type for your markers
type MarkerData = {
  geocode: LatLngExpression;
  popUp: string;
}

type MarkersPropsType = {
  address?: string,
  setPosition: (pos: LatLngExpression) => void,
}

let DefaultIcon = L.icon({
  iconUrl: "/assets/placeholder.png",
  iconSize: [25, 25],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Markers({ address, setPosition }: MarkersPropsType) {
  const map = useMapEvents({
    load: () => {
      ELG.geocode().text(address).run((error: any, results: any) => {
        if (results?.results?.length > 0) {
          const { lat, lng } = results?.results[0].latlng;
          setPosition([lat, lng]);
          map.flyTo([lat, lng], 6);
        }
      });
    },
  });

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
      {markers.map((marker) =>
        <Marker key={marker.popUp} position={marker.geocode} icon={DefaultIcon}>
          <Popup><Card /></Popup>
        </Marker>
      )}
    </>
  );
}