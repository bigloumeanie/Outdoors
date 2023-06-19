import React, { useState, useEffect } from "react";
import "./App.css";
import locationsData from "./assets/data/locations.json";
import parkTypesData from "./assets/data/parktypes.json";

function App() {
  const [searchBy, setSearchBy] = useState("location");

  const [selectedLocation, setSelectedLocation] = useState("");

  const [selectedParkType, setSelectedParkType] = useState("");

  useEffect(() => {
    // Fetch national parks data from the file

    const fetchNationalParksData = async () => {
      try {
        const response = await fetch("./data/nationalparks_copy.json");

        const data = await response.json();

        console.log("National Parks data:", data);
      } catch (error) {
        console.error("Error fetching national parks data:", error.message);
      }
    };

    fetchNationalParksData();
  }, []);

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
    <div className="App">
      <h1>National Parks Search</h1>

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
      <h2>I can't wait to go camping this summer!</h2>
      <h3>The outdoors are calling me!</h3>
      <h4>Let's be outdoors forever!</h4>
    </div>
  );
}

export default App;
