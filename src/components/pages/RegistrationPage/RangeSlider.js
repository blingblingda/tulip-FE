// export default RangeSlider;
import React from "react";
import "./RangeSlider.css";

// RangeSlider component accepts an ageRange object and a setAgeRange function to update it
function RangeSlider({ ageRange = { min: 18, max: 65 }, setAgeRange }) {
  // Function to handle changes to either the min or max range sliders
  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding value in the ageRange state
    setAgeRange((prev) => ({
      ...prev,
      [name]: Number(value), // Ensuring the value is stored as a number
    }));
  };

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-semibold mb-4">Filter by Age</h2>
      {/* Minimum age range slider */}
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
      {/* Maximum age range slider */}
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
