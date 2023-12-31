import React from "react";
import "./App.css";
import "./mountains.css";
import "./nationalparks.css";
import NationalParksSearch from "./nationalParksSearch";
import MountainsInformationPage from "./mountainsInformationPage";

function App() {
  const [showNationalParksSearch, setShowNationalParksSearch] =
    React.useState(false);
  const [showMountainsInformationPage, setShowMountainsInformationPage] =
    React.useState(false);

  const handleNationalParksButtonClick = () => {
    setShowNationalParksSearch(true);
    setShowMountainsInformationPage(false);
  };

  const handleMountainsInformationButtonClick = () => {
    setShowNationalParksSearch(false);
    setShowMountainsInformationPage(true);
  };

  return (
    <div className="App">
      <div>
        <div className="titlePage">
          <h1>America: The Beautiful</h1>
        </div>

        <button
          onClick={handleNationalParksButtonClick}
          className="ParkSearchButton"
        >
          National Parks Search
        </button>
        <button
          onClick={handleMountainsInformationButtonClick}
          className="MountainSearchButton"
        >
          Mountains Information Page
        </button>

        {showNationalParksSearch ? <NationalParksSearch /> : null}
        {showMountainsInformationPage ? <MountainsInformationPage /> : null}
      </div>
    </div>
  );
}

export default App;
