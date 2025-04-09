import React, { useState } from "react";
import LandingPage from "./Landing";
import SearchResultsPage from "./Search";

const PhotographyBookingApp = () => {
  const [view, setView] = useState("landing");
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = (params) => {
    setSearchParams(params);
    setView("search");
  };

  const handleBackToHome = () => {
    setView("landing");
  };

  return (
    <div>
      {view === "landing" && <LandingPage onSearch={handleSearch} />}
      {view === "search" && (
        <SearchResultsPage
          searchParams={searchParams}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
};

export default PhotographyBookingApp;
