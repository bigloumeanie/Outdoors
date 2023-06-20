import React, { useState, useEffect } from "react";
import mountainsData from "./assets/data/mountains.json";

function MountainsInformationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Filter mountains based on the search term
    const filteredMountains = mountainsData.filter((mountain) =>
      mountain.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredMountains);
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Mountains Information Page</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search mountains..."
      />

      {searchResults.map((mountain) => (
        <div key={mountain.id}>
          <h3>{mountain.name}</h3>
          <p>Elevation: {mountain.elevation}</p>
          <p>Location: {mountain.location}</p>
          {/* Add more mountain information here */}
        </div>
      ))}
    </div>
  );
}

export default MountainsInformationPage;
