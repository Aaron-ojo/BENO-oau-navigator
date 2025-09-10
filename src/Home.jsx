import { useState } from "react";
import NavBar from "./NavBar";
import MyMap from "./MyMap";

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
  { name: "Computer Building", lat: 7.517959229104742, lng: 4.528684591341449 },
  { name: "Admin Extension", lat: 7.521857178469172, lng: 4.51987961647887 },
  {
    name: "Agric Engineering",
    lat: 7.5234952340848995,
    lng: 4.528030424150036,
  },
  { name: "Ajose Hall", lat: 7.5213, lng: 4.526946811756186 },
  { name: "Alex Duduyemi LT", lat: 7.523948528369522, lng: 4.526352359057477 },
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
  { name: "Moremi Hall", lat: 7.520474506412491, lng: 4.520445893385167 }, // fixed duplicate lat
  { name: "Mozambique Hall", lat: 7.522542922670838, lng: 4.51380585231083 },
  { name: "Music Department", lat: 7.521855605428185, lng: 4.522125881546344 },
  { name: "Postgraduate Hall", lat: 7.522032649711087, lng: 4.517030779697262 },
  { name: "Spider", lat: 7.522910396748227, lng: 4.52915777285074 },
  { name: "Pit Theater", lat: 7.521859020777927, lng: 4.521079455822084 },
  { name: "Museum", lat: 7.48493820281078, lng: 4.559817596512988 },
];

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected] = useState(null);
  const [showRoute, setShowRoute] = useState(false);

  const handleSearch = () => {
    const match = locations.find((loc) =>
      loc.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (match) {
      setSelected(match);
      setShowRoute(false); // reset route when searching
    } else {
      alert("Location not found!");
    }
  };

  const handleOpenInMaps = () => {
    if (selected) {
      setShowRoute(true);
    }
  };

  return (
    <main>
      <header>
        <div className="header">
          <img src="oaulogo.png" alt="headerLogo" className="header-logo" />
          <p className="logo-title">OAU Campus Navigator</p>
          <NavBar />
        </div>
      </header>

      <section>
        <div className="top-section">
          <p className="find">Find Your Lecture Theatre</p>
          <p className="enter">
            Enter a name to get an image and the fastest route
          </p>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search location..."
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <p className="suggestions">
            Suggestions: Amphi Theatre • First Bank LT • BOOC LT
          </p>
        </div>
      </section>

      <section>
        <div className="middle-section">
          <div className="map-container">
            <MyMap
              selected={selected}
              setSelected={setSelected}
              showRoute={showRoute}
              locations={locations}
            />
          </div>
          <div className="vector-step">
            <div className="location-details">
              {selected ? (
                <>
                  <h2>{selected.name}</h2>
                  <img
                    src={`/images/${selected.name}.jpg`}
                    alt={selected.name}
                  />
                  <p>Details about {selected.name} go here.</p>
                </>
              ) : (
                <p>Click a marker or search to see details here.</p>
              )}
            </div>
            <div className="step">
              <p className="direction">Step-by-step</p>
              <p className="direction">
                1. Head north on University Rd for 200m
              </p>
              <p className="direction">2. Turn right at the library junction</p>
              <p className="direction">3. Destination on your left</p>
              <button
                className="open-button"
                onClick={handleOpenInMaps}
                disabled={!selected}
              >
                Open in Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <p className="designed">DESIGNED BY PART 2, GROUP 16 SWEP STUDENTS</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
