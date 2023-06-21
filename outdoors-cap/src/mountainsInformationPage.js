// mountainsInformationPage.js

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
        <select id="mountain" value={selectedMountain} onChange={handleMountainChange}>
          <option value="">Choose a Mountain</option>
          {mountainsData.mountains.map((mountain, index) => (
            <option key={index} value={mountain.name}>
              {mountain.name}
            </option>
          ))}
        </select>
      </div>
      {mountainData && (
        <div>
          <h4>{mountainData.name}</h4>
          <p>Elevation: {mountainData.elevation}</p>
          <p>Effort: {mountainData.effort}</p>
          <img src={mountainData.img} alt={mountainData.name} />
          <p>{mountainData.desc}</p>
          <p>
            Coordinates: {mountainData.coords.lat}, {mountainData.coords.lng}
          </p>
        </div>
      )}
    </div>
  );
}

export default MountainsInformationPage;


// import React, { useState } from "react";
// import mountainsData from "./assets/data/mountains.json";

// function MountainsInformationPage() {
//   const [selectedMountain, setSelectedMountain] = useState("");
//   const [mountainData, setMountainData] = useState(null);

//   const handleMountainChange = (event) => {
//     const selectedMountainName = event.target.value;
//     const selectedMountainData = mountainsData.mountains.find(
//       (mountain) => mountain.name === selectedMountainName
//     );

//     setSelectedMountain(selectedMountainName);
//     setMountainData(selectedMountainData);
//   };

//   return (
//     <div>
//       <h3>Mountains Information Page</h3>
//       <div>
//         <label htmlFor="mountain">Select a Mountain:</label>
//         <select id="mountain" value={selectedMountain} onChange={handleMountainChange}>
//           <option value="">Choose a Mountain</option>
//           {mountainsData.mountains.map((mountain, index) => (
//             <option key={index} value={mountain.name}>
//               {mountain.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       {mountainData && (
//         <div>
//           <h4>{mountainData.name}</h4>
//           <p>Elevation: {mountainData.elevation}</p>
//           <p>Effort: {mountainData.effort}</p>
//           <img src={mountainData.img} alt={mountainData.name} />
//           <p>{mountainData.desc}</p>
//           <p>
//             Coordinates: {mountainData.coords.lat}, {mountainData.coords.long}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MountainsInformationPage;