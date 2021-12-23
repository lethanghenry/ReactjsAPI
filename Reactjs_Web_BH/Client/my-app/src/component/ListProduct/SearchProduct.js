import React from "react";
import { useState } from "react";

export default function Search({ searchNameProduct }) {
  const [text, setText] = useState("");
  const handleSearch = (event) => {
    return setText(event.target.value);
  };

  const searchName = () => {
    return searchNameProduct(text);
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
              className="form-control"
              onChange={handleSearch}
            />
          </div>
          <div className="col-md-4">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={searchName}
            >
              <img
                width="20px;"
                src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
                alt="Search icon - Free download on Iconfinder"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
