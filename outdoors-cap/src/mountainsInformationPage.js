import React, { useState } from "react";
//import mountainsData from "./assets/data/mountains.json";
import mountainsData from "./assets/data/mountains.json";
// import mountainsImages from "../public/images/mountains";
/*import WashingtonStoryImage from "./assets/images/mountains/Washington-StoryImage_2.jpg";*/

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
      <h1 className="MountainInfoPage">Mountains Information Page</h1>
      <div>
        <label id="selectamountain" htmlFor="mountain">Select a Mountain:</label>
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
              <tr>
                <td className="mountainImage" colSpan="4">
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
