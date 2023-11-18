import React from "react";
import "./Loader.css";

// The Loader component is a functional component that returns JSX.
const Loader = () => {
  return (
    // The main container for the loader animation
    <div className="cssload-main">
      <div className="cssload-heart">
        <span className="cssload-heartL"></span>
        <span className="cssload-heartR"></span>
        <span className="cssload-square"></span>
      </div>
      <div className="cssload-shadow"></div>
    </div>
  );
};

export default Loader; // Export the component for use in other parts of the application
