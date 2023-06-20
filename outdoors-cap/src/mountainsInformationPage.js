import React, { useState, useEffect } from "react";
import mountainsData from "./assets/data/mountains.json";

function Mountains() {
  const [mountains, setMountains] = useState([]);

  useEffect(() => {
    setMountains(mountainsData.mountains);
    console.log(mountainsData.mountains);
  }, []);

  return (
    <div>
      <h3>Mountains:</h3>
      {mountains.length === 0 ? (
        <p>No mountains found.</p>
      ) : (
        mountains.map((mountain) => (
          <div key={mountain.name}>
            <h4>{mountain.name}</h4>
            <p>Elevation: {mountain.elevation}</p>
            <p>Effort: {mountain.effort}</p>
            <img src={mountain.img} alt={mountain.name} />
            <p>{mountain.desc}</p>
            <p>
              Coordinates: {mountain.coords.lat}, {mountain.coords.lng}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Mountains;
