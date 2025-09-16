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

// Routing component (updates line when userLocation changes)
const Routing = ({ userLocation, destination }) => {
  const map = useMap();
  const routingControlRef = useRef(null);
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (!destination || !userLocation) return;

    // Clear previous debounce
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      if (!routingControlRef.current) {
        // Create route first time
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
      } else {
        // Just update the first waypoint (user's location)
        let waypoints = routingControlRef.current.getWaypoints();
        waypoints[0].latLng = L.latLng(userLocation.lat, userLocation.lng);
        routingControlRef.current.setWaypoints(waypoints);
      }
    }, 3000); // update every 3s

    return () => clearTimeout(debounceTimer.current);
  }, [userLocation, destination, map]);

  return null;
};

const MyMap = ({ locations, setSelected, selectedLocation }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const markerRefs = useRef({});

  // Continuously track user location
  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.error("Geolocation error:", err);
          alert("Unable to get precise location. Using default location.");
          setUserLocation({ lat: 7.4985, lng: 4.5222 }); // fallback
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );

      // cleanup watcher on unmount
      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  // Open marker popup automatically when location selected from search
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

      {/* User live location marker */}
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

      {/* Dynamic route */}
      {userLocation && destination && (
        <Routing userLocation={userLocation} destination={destination} />
      )}
    </MapContainer>
  );
};

export default MyMap;
