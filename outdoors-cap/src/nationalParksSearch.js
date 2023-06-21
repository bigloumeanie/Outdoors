// nationalParksSearch.js

import React, { useState } from "react";
import nationalParksData from "./assets/data/nationalparks.json";
import locationsData from "./assets/data/locations.json";
import parkTypesData from "./assets/data/parktypes.json";

function NationalParksSearch() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedParkType, setSelectedParkType] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleParkTypeChange = (event) => {
    setSelectedParkType(event.target.value);
  };

  const handleSearch = () => {
    const filteredResults = nationalParksData.Table.filter((park) => {
      const locationMatch = selectedLocation
        ? park.State === selectedLocation
        : true;
      const parkTypeMatch = selectedParkType
        ? park.LocationName.includes(selectedParkType)
        : true;
      return locationMatch && parkTypeMatch;
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h3>National Parks Search</h3>
      <div>
        <label htmlFor="location">Search by Location:</label>
        <select id="location" value={selectedLocation} onChange={handleLocationChange}>
          <option value="">All Locations</option>
          {locationsData.locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="parkType">Search by Park Type:</label>
        <select id="parkType" value={selectedParkType} onChange={handleParkTypeChange}>
          <option value="">All Park Types</option>
          {parkTypesData.parkTypes.map((parkType, index) => (
            <option key={index} value={parkType}>
              {parkType}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSearch}>Search</button>
      <div>
        <h4>Search Results:</h4>
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          searchResults.map((park) => (
            <div key={park.LocationID}>
              <h4>{park.LocationName}</h4>
              <p>Address: {park.Address}</p>
              <p>City: {park.City}</p>
              <p>State: {park.State}</p>
              <p>Zip Code: {park.ZipCode}</p>
              <p>Phone: {park.Phone}</p>
              <p>Fax: {park.Fax}</p>
              <p>
                Visit Website:{" "}
                <a href={park.Visit} target="_blank" rel="noopener noreferrer">
                  {park.Visit}
                </a>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NationalParksSearch;