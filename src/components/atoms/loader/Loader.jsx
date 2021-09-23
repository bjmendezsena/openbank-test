import React from "react";

import "./Loader.scss";

import './Loader.scss';

export const Loader = () => {
  return (
    <div className="loader_container">
      <svg className="loader_container-svg">
        <circle className="loader_container-svg-circle" cx="70" cy="70" r="70" ></circle>
      </svg>
    </div>
  );
};
