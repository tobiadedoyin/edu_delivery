import React, { useState } from "react";

function SimpleSearchBar() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // Sample data for search (can be an array of objects)
  // const data = [
  //   "Apple",
  //   "Banana",
  //   "Orange",
  //   "Mango",
  //   "Pineapple",
  //   "Grapes",
  //   "Watermelon",
  //   "Cherry",
  // ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter the data based on the search term
    // const filteredData = data.filter((item) =>
    //   item.toLowerCase().includes(value.toLowerCase())
    // );

    // setSearchResults(filteredData);
  };

  const handleSearchIconClick = () => {
    setSearchVisible(!isSearchVisible);
    // setSearchTerm(""); // Clear search term when search bar is hidden
  };

  return (
    <div style={{ paddingTop: "15px" }}>
      <span
        className="search-icon"
        onClick={handleSearchIconClick}
        style={{ cursor: "pointer" }}
      >
        {isSearchVisible ? (
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        ) : (
          "🔍"
        )}
      </span>
    </div>
  );
}

export default SimpleSearchBar;
