import React, { useState, useEffect } from "react";
import mountainsData from "./assets/data/mountains.json";
import "./mountains.css";

async function getSunsetForMountain(lat, lng) {
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
  );
  let data = await response.json();
  return data;
}

function MountainsInformationPage() {
  const [selectedMountain, setSelectedMountain] = useState("");
  const [mountainData, setMountainData] = useState(null);
  const [sunriseSunsetData, setSunriseSunsetData] = useState(null);

  useEffect(() => {
    if (mountainData) {
      getSunsetForMountain(mountainData.lat, mountainData.lng).then(
        (sunsetData) => {
          setSunriseSunsetData(sunsetData.results);
        }
      );
    }
  }, [mountainData]);

  const handleMountainChange = (event) => {
    const selectedMountainName = event.target.value;
    const selectedMountainData = mountainsData.mountains.find(
      (mountain) => mountain.name === selectedMountainName
    );

    setSelectedMountain(selectedMountainName);
    setMountainData(selectedMountainData);
  };

  return (
    <div>
      <h1 className="MountainInfoPage">Mountains Information Page</h1>
      <div>
        <label id="selectamountain" htmlFor="mountain">
          Select a Mountain:
        </label>
        <select
          id="mountain"
          value={selectedMountain}
          onChange={handleMountainChange}
        >
          <option value="">Choose a Mountain</option>
          {mountainsData.mountains.map((mountain, index) => (
            <option key={index} value={mountain.name}>
              {mountain.name}
            </option>
          ))}
        </select>
      </div>
      {mountainData && (
        <div className="mountain-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Elevation</th>
                <th>Effort</th>
                <th>Description</th>
                <th>Sunrise</th>
                <th>Sunset</th>
              </tr>
            </thead>
            <tbody>
              <tr id="wordwrapthis">
                <td>{mountainData.name}</td>
                <td>{mountainData.elevation}</td>
                <td>{mountainData.effort}</td>
                <td className="overflow-wrap">{mountainData.desc}</td>
                <td>
                  {sunriseSunsetData && (
                    <span>{sunriseSunsetData.sunrise}</span>
                  )}
                </td>
                <td>
                  {sunriseSunsetData && <span>{sunriseSunsetData.sunset}</span>}
                </td>
              </tr>
              <tr>
                <td className="mountainImage" colSpan="6">
                  <img
                    src={`images/mountains/${mountainData.img}`}
                    width="1000px"
                    alt={mountainData.name}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MountainsInformationPage;
