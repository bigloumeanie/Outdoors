import React, { useState } from "react";
import locationsData from "./assets/data/locations.json";
import parkTypesData from "./assets/data/parktypes.json";
import SearchResults from "./SearchResults";

function NationalParksSearch() {
  const [searchBy, setSearchBy] = useState("location");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedParkType, setSelectedParkType] = useState("");

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleParkTypeChange = (e) => {
    setSelectedParkType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission, you can add your logic here
    console.log("Submitted!");
    console.log("Search By:", searchBy);
    console.log("Selected Location:", selectedLocation);
    console.log("Selected Park Type:", selectedParkType);
  };

  return (
    <div>
      <h2>National Parks Search</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Search By:
            <select value={searchBy} onChange={handleSearchByChange}>
              <option value="location">Location</option>
              <option value="parkType">Park Type</option>
            </select>
          </label>
        </div>

        {searchBy === "location" && (
          <div>
            <label>
              Location:
              <select value={selectedLocation} onChange={handleLocationChange}>
                <option value="">Select a location</option>
                {locationsData.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}

        {searchBy === "parkType" && (
          <div>
            <label>
              Park Type:
              <select value={selectedParkType} onChange={handleParkTypeChange}>
                <option value="">Select a park type</option>
                {parkTypesData.map((parkType) => (
                  <option key={parkType} value={parkType}>
                    {parkType}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}

        <button type="submit">Search</button>
      </form>

      <SearchResults
        selectedLocation={selectedLocation}
        selectedParkType={selectedParkType}
      />
    </div>
  );
}

export default NationalParksSearch;
