import { Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import MiniCard from "./MiniCard";

// Start setup custom icon
let DefaultIcon = L.icon({
  iconUrl: "/assets/placeholder.png",
  iconSize: [25, 25],
});

L.Marker.prototype.options.icon = DefaultIcon;
// End setup custom icon

// Define the type for your markers
type MarkerData = {
  geocode: LatLngExpression;
  popUp: string;
  isDefault: boolean
};

type MarkersPropsType = {
  address?: string;
  position: [number, number];
  setPosition: (pos: [number, number]) => void;
};

export default function Markers({
  address,
  position,
  setPosition,
}: MarkersPropsType) {
  const markers: MarkerData[]= [
    {
      geocode: [34.6949524, -1.9006104],
      popUp: "Hello I am a pop Up",
      isDefault:false
    },
    {
      geocode: [34.6557527, -1.9112698],
      popUp: "Hello I am a pop Up",
      isDefault: false
    },
    {
      geocode: [34.6981051, -1.8913764],
      popUp: "Hello I am a pop Up",
      isDefault: false

    },
    
    
  ];
  const map = useMap();
  map.flyTo([34.6949524, -1.9006104], map.getZoom());
  // L.marker([51.5, -0.09]).addTo(map)
  //   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  //   .openPopup();
    // L.marker([34.6981051, -1.8913764]).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.').openPopup()
    markers.forEach((marker) => {
      const newMarker = L.marker(marker.geocode, { icon: DefaultIcon }).addTo(map);
      const popupContent = marker.popUp;
  
      if (marker.isDefault) {
        newMarker.bindPopup(popupContent).openPopup();
      } else {
        newMarker.bindPopup(popupContent);
      }
    });
  return (
    null
    // <>
    //   {markers.map((marker) => (
    //     <Marker position={marker.geocode} icon={DefaultIcon} >
    //       <Popup open={true}>
    //         <MiniCard />
    //       </Popup>
    //     </Marker>
    //   ))}
    // </>
  );
}
