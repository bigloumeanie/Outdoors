import React from "react";
import nationalParksData from "./assets/data/nationalparks.json";

function SearchResults() {
  let parks = [];

  if (
    nationalParksData &&
    nationalParksData.Table &&
    Array.isArray(nationalParksData.Table)
  ) {
    parks = nationalParksData.Table;
  }

  return (
    <div>
      <h3>Search Results:</h3>
      {parks.map((park) => (
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
      ))}
    </div>
  );
}

export default SearchResults;
