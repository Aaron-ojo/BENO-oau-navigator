import { useState } from "react";
import NavBar from "./NavBar";
import MyMap from "./MyMap";

const Home = () => {
  const [searchInput, setSearchInput] = useState(""); // store what user types
  const [selected, setSelected] = useState(null); // store selected location

  // Example locations list (keep in one place or import from MyMap.js)
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

  const handleSearch = () => {
    const match = locations.find(
      (loc) => loc.name.toLowerCase() === searchInput.toLowerCase()
    );
    if (match) {
      setSelected(match);
    } else {
      alert("Location not found!");
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
            {/* Pass selected location to MyMap */}
            <MyMap selected={selected} setSelected={setSelected} />
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
              <button className="open-button">Open in Maps</button>
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
