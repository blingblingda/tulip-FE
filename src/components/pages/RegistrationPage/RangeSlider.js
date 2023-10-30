// export default RangeSlider;
import React, { useState } from "react";
import { Button } from "../../UI/Button";
import "./RangeSlider.css";

function RangeSlider({ ageRange = { min: 18, max: 65 }, setAgeRange }) {
  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    setAgeRange((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-semibold mb-4">Filter by Age</h2>

      <div>
        <label className="mr-2">Min Age:</label>
        <input
          type="range"
          name="min"
          min="18"
          max="65"
          value={ageRange.min}
          onChange={handleRangeChange}
          className="cursor-pointer slider-thumb slider-track"
        />
        <span className="ml-2">{ageRange.min}</span>
      </div>

      <div>
        <label className="mr-2">Max Age:</label>
        <input
          type="range"
          name="max"
          min="18"
          max="65"
          value={ageRange.max}
          onChange={handleRangeChange}
          className="cursor-pointer slider-thumb slider-track"
        />
        <span className="ml-2">{ageRange.max}</span>
      </div>
    </div>
  );
}

export default RangeSlider;
