import React from "react";
import styles from "./searchbox.module.css";

const SearchBox = ({ search, handleSearch }) => {
  return (
    <div className={styles.search_box}>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        placeholder="Search for countries..."
        className={styles.search_input}
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
