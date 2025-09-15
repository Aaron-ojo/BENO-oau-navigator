import { useState } from "react";

const Search = ({ locations, onSelect }) => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Handle typing in search bar
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.length > 0) {
      const matches = locations.filter((loc) =>
        loc.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  // Handle click on suggestion
  const handleSuggestionClick = (loc) => {
    setSearchInput(loc.name);
    setSuggestions([]);
    onSelect(loc);
  };

  // Handle search button click
  const handleSearchClick = () => {
    const match = locations.find(
      (loc) => loc.name.toLowerCase() === searchInput.toLowerCase()
    );
    if (match) {
      onSelect(match);
    } else {
      alert("Location not found!");
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Search location..."
        />
        <button onClick={handleSearchClick} className="search-button">
          Search
        </button>
      </div>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((loc, i) => (
            <li
              key={i}
              onClick={() => handleSuggestionClick(loc)}
              className="suggestion-item"
            >
              {loc.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
