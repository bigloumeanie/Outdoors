import React, { useState } from "react";
import mountainsData from "./assets/data/mountains.json";

function MountainsInformationPage() {
  const [selectedMountain, setSelectedMountain] = useState("");
  const [mountainData, setMountainData] = useState(null);

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
      <h3>Mountains Information Page</h3>
      <div>
        <label htmlFor="mountain">Select a Mountain:</label>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mountainData.name}</td>
                <td>{mountainData.elevation}</td>
                <td>{mountainData.effort}</td>
                <td>{mountainData.desc}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MountainsInformationPage;
