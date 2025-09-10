import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";

const locations = [
  { name: "OAU-MAIN-GATE", lat: 7.498513922395018, lng: 4.52221698742415 },
  { name: "AmphiTheatre", lat: 7.519538704610767, lng: 4.522156103235021 },
  { name: "Oduduwa Hall", lat: 7.51897059743468, lng: 4.52207138194439 },
  { name: "FTLT", lat: 7.519508586695006, lng: 4.528965994339157 },
  { name: "1000seater LT", lat: 7.521059778997691, lng: 4.519779672300961 },
  { name: "BOOC", lat: 7.518997934000816, lng: 4.525539350861695 },
  { name: "Sport Complex", lat: 7.504074890241346, lng: 4.4520998207265405 },
  {
    name: "Hezekiah Oluwasanmi Library",
    lat: 7.519853126080705,
    lng: 4.5229168937401765,
  },
  { name: "ICT center", lat: 7.518714884701749, lng: 4.5293434012812925 },
  {
    name: "Computer Building",
    lat: 7.517959229104742,
    lng: 4.528684591341449,
  },
  { name: "Admin Extension", lat: 7.521857178469172, lng: 4.51987961647887 },
  {
    name: "Agric Engineering",
    lat: 7.5234952340848995,
    lng: 4.528030424150036,
  },
  { name: "Ajose Hall", lat: 7.5213, lng: 4.526946811756186 },
  {
    name: "Alex Duduyemi LT",
    lat: 7.523948528369522,
    lng: 4.526352359057477,
  },
  { name: "Alumni Hall", lat: 7.521755821151774, lng: 4.516724095589321 },
  { name: "Angola Hall", lat: 7.522289754512512, lng: 4.512571629972128 },
  { name: "Architecture", lat: 7.521401747983368, lng: 4.518321226523513 },
  { name: "Awolowo Hall", lat: 7.521293784505835, lng: 4.515697391207035 },
  { name: "DSA", lat: 7.522119623532502, lng: 4.527476518327954 },
  { name: "FBLT", lat: 7.522043678345562, lng: 4.524232101136557 },
  { name: "Geology", lat: 7.520838532961575, lng: 4.521718943465355 },
  { name: "Health Center", lat: 7.520524378773302, lng: 4.516394080283482 },
  {
    name: "Ican Lecture theatre",
    lat: 7.521633148135438,
    lng: 4.520308416478868,
  },
  {
    name: "Institute of Cultural Studies",
    lat: 7.521894757636735,
    lng: 4.521112479697303,
  },
  { name: "Moremi Hall", lat: 7.520474506412491, lat: 4.520445893385167 },
  { name: "Mozambique Hall", lat: 7.522542922670838, lng: 4.51380585231083 },
  {
    name: "Music Department",
    lat: 7.521855605428185,
    lng: 4.522125881546344,
  },
  {
    name: "Postgraduate Hall",
    lat: 7.522032649711087,
    lng: 4.517030779697262,
  },
  { name: "Spider", lat: 7.522910396748227, lng: 4.52915777285074 },
  { name: "Pit Theater", lat: 7.521859020777927, lng: 4.521079455822084 },
  { name: "Museum", lat: 7.48493820281078, lng: 4.559817596512988 },
];

const fallbackCenter = { lat: 7.5175, lng: 4.5228 };

function MyMap({ selected, setSelected, showRoute }) {
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);

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

  useEffect(() => {
    // Reset directions when route is not requested
    if (!showRoute) setDirections(null);
  }, [showRoute]);

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
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
              scaledSize: { width: 40, height: 40 },
            }}
            title="Your Current Location"
          />
        )}
        {showRoute && userLocation && selected && (
          <DirectionsService
            options={{
              origin: userLocation,
              destination: { lat: selected.lat, lng: selected.lng },
              travelMode: "DRIVING",
            }}
            callback={(result, status) => {
              if (status === "OK") {
                setDirections(result);
              }
            }}
          />
        )}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
