import React from "react";
import styles from "./SearchBar.module.css";
import { IoMdCheckmark } from "react-icons/io";

function SearchBar({ onSearch }) {
  
  const handleOnSearch = () => onSearch(document.getElementById("id").value);
  return (
    <div className={styles.searchBar}>
      <input className={styles.input} id="id" placeholder="Agrega una ciudad" />
      <button className={styles.btn} onClick={handleOnSearch}>
        <IoMdCheckmark />
      </button>
    </div>
  );
}

export default SearchBar;
