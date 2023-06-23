import React, { useState } from "react";
import nationalParksData from "./assets/data/nationalparks.json";
import locationsData from "./assets/data/locations.json";
import parkTypesData from "./assets/data/parktypes.json";

function NationalParksSearch() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedParkType, setSelectedParkType] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

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
    setIsSearchClicked(true);
  };

  return (
    <div>
      <h1 className="NationalParksSearch">National Parks Search</h1>
      <div>
        <label htmlFor="location" className="ParkSearchLocation">
          Search by Location:
        </label>
        <select
          id="location"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="">All Locations</option>
          {locationsData.locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="parkType" className="ParkSearchType">
          Search by Park Type:
        </label>
        <select
          id="parkType"
          value={selectedParkType}
          onChange={handleParkTypeChange}
        >
          <option value="">All Park Types</option>
          {parkTypesData.parkTypes.map((parkType, index) => (
            <option key={index} value={parkType}>
              {parkType}
            </option>
          ))}
        </select>
      </div>
      <br></br>
      <button onClick={handleSearch}>Search</button>
      <div className="mountain-table">
        {isSearchClicked && searchResults.length === 0 && (
          <p>No results found.</p>
        )}
        {searchResults.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Location Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Phone</th>
                <th>Visit Website</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((park) => (
                <tr key={park.LocationID}>
                  <td className="overflow-wrap">{park.LocationName}</td>
                  <td className="overflow-wrap">{park.Address}</td>
                  <td>{park.City}</td>
                  <td>{park.State}</td>
                  <td>{park.ZipCode}</td>
                  <td>{park.Phone}</td>
                  <td>
                    <a
                      href={park.Visit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {park.Visit}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default NationalParksSearch;
