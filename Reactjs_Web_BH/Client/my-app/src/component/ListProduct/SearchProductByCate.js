import React from "react";
import { useState } from "react";

export default function Search({ searchNameCategory }) {
  const [text, setText] = useState("");

  const handleSearch = (event) => {
    return setText(event.target.value);
  };

  const searchName = () => {
    return searchNameCategory(text);
  };

  return (
    <div>
      <div class="form-group">
        <div className="row">
          <div className="col-md-8">
            <input
              type="text"
              name="searchString"
              placeholder="SEARCH"
              className="thang form-control "
              onChange={handleSearch}
            />
          </div>
          <div className="col-md-4">
            <a type="submit" onClick={searchName}>
              aa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
