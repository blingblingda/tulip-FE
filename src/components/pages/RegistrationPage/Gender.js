import React, { useState } from "react";

// Gender component allows users to select a gender and communicates the selection to the parent component
export const Gender = ({ onGenderChange }) => {
  // State to keep track of the currently selected gender option
  const [selectedOption, setSelectedOption] = useState("");

  // Handler for when the gender selection changes
  const handleGenderChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option); // Update the local state with the new selection
    onGenderChange(option); // Invoke the callback function passed from the parent component
  };

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-400">
        Gender
      </h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {["Male", "Female", "Other"].map((option, index) => (
          <li
            key={index}
            className={`w-full ${
              index < 3
                ? "border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                : "dark:border-gray-600"
            }`}
          >
            <div className="flex items-center pl-3">
              <input
                id={`horizontal-list-radio-${option
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                type="radio"
                value={option}
                name="list-radio"
                checked={selectedOption === option}
                onChange={handleGenderChange}
                className="w-4 h-4 text-primary-800 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={`horizontal-list-radio-${option
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {option}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
