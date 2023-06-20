import React, { useState } from "react";
import "./App.css";
import NationalParksSearch from "./nationalParksSearch";
import MountainsInformationPage from "./mountainsInformationPage";

function App() {
  const [showNationalParksSearch, setShowNationalParksSearch] = useState(false);
  const [showMountainsInformationPage, setShowMountainsInformationPage] =
    useState(false);

  const handleNationalParksButtonClick = () => {
    setShowNationalParksSearch(true);
  };

  const handleMountainsInformationButtonClick = () => {
    setShowMountainsInformationPage(true);
  };

  return (
    <div className="App">
      <div className="backgroundImage">
        <h1>National Parks Search</h1>

        <button onClick={handleNationalParksButtonClick}>
          National Parks Search
        </button>
        <button onClick={handleMountainsInformationButtonClick}>
          Mountains Information Page
        </button>

        {showNationalParksSearch && <NationalParksSearch />}
        {showMountainsInformationPage && <MountainsInformationPage />}
      </div>
    </div>
  );
}

export default App;
