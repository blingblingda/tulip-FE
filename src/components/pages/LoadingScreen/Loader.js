import React from 'react';
import './Loader.css'; // Assuming your CSS is in a file named Loader.css

const Loader = () => {
  return (
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

export default Loader;
