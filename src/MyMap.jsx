import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const locations = [
  { name: "OAU-MAIN-GATE", lat: 7.5172, lng: 4.522 },
  { name: "AmphiTheatre", lat: 7.5194, lng: 4.5225 },
  { name: "Health Centre", lat: 7.5203, lng: 4.5176 },
  { name: "Oduduwa Hall", lat: 7.51897059743468, lng: 4.52207138194439 },
  { name: "FTLT", lat: 7.519508586695006, lng: 4.528965994339157 },
  { name: "1000seater LT", lat: 7.521, lng: 4.5198 },
  { name: "BOOC", lat: 7.5187, lng: 4.5257 },
  { name: "Sport Complex", lat: 7.504, lng: 4.4517 },
  { name: "Hezekiah Oluwasanmi Library", lat: 7.5198, lng: 4.5228 },
  { name: "ICT center", lat: 7.5185, lng: 4.5295 },
  { name: "CSC department", lat: 7.5185, lng: 4.528 },
];

const fallbackCenter = { lat: 7.5175, lng: 4.5228 };

function MyMap({ selected, setSelected }) {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDJz1mymVXlo5PKpjSX4ZCDm2tN9YIARw4">
      <GoogleMap
        mapContainerClassName="google-map"
        center={selected || userLocation || fallbackCenter}
        zoom={16}
      >
        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={{ lat: loc.lat, lng: loc.lng }}
            onClick={() => setSelected(loc)}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
