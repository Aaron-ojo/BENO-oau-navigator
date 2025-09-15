import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// Fix default marker icons
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({ iconUrl, shadowUrl: iconShadow });
L.Marker.prototype.options.icon = DefaultIcon;

// Green icon for user location
const userIcon = new L.Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// OAU boundaries
const oauBounds = [
  [7.49, 4.515],
  [7.525, 4.535],
];

// Routing component
const Routing = ({ userLocation, destination }) => {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (userLocation && destination) {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }

      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(userLocation.lat, userLocation.lng),
          L.latLng(destination.lat, destination.lng),
        ],
        lineOptions: { styles: [{ color: "blue", weight: 5 }] },
        addWaypoints: false,
        routeWhileDragging: false,
        showAlternatives: false,
      }).addTo(map);
    }
  }, [userLocation, destination, map]);

  return null;
};

const MyMap = ({ locations, setSelected, selectedLocation }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  // Keep track of marker references
  const markerRefs = useRef({});

  // Get live location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log("Raw position:", pos.coords); // Debug output
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.error("Geolocation error:", err);
          alert("Unable to get precise location. Using default location.");
          // Fallback to main gate if GPS fails
          setUserLocation({ lat: 7.4985, lng: 4.5222 });
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
  }, []);

  // Open marker popup automatically when a location is selected from search
  useEffect(() => {
    if (selectedLocation && markerRefs.current[selectedLocation.name]) {
      markerRefs.current[selectedLocation.name].openPopup();
      setDestination(selectedLocation); // set route
    }
  }, [selectedLocation]);

  return (
    <MapContainer
      bounds={oauBounds}
      zoom={15}
      style={{ height: "100%", minHeight: "350px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* User live location */}
      {userLocation && (
        <Marker position={userLocation} icon={userIcon}>
          <Popup>You are here 📍</Popup>
        </Marker>
      )}

      {/* Campus locations */}
      {locations.map((loc, i) => (
        <Marker
          key={i}
          position={[loc.lat, loc.lng]}
          ref={(ref) => {
            if (ref) markerRefs.current[loc.name] = ref;
          }}
          eventHandlers={{
            click: () => {
              setDestination({ lat: loc.lat, lng: loc.lng });
              setSelected(loc);
            },
          }}
        >
          <Popup>
            {loc.name} <br />
            <button
              onClick={() => {
                setDestination(loc);
                setSelected(loc);
              }}
            >
              Go Here 🚶
            </button>
          </Popup>
        </Marker>
      ))}

      {userLocation && destination && (
        <Routing userLocation={userLocation} destination={destination} />
      )}
    </MapContainer>
  );
};

export default MyMap;
