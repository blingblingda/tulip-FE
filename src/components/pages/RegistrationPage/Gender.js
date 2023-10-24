import React, { useState } from "react";

const IdentificationComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Gender
      </h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {["Male", "Female", "Others"].map((option, index) => (
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
                onChange={() => setSelectedOption(option)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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

export default IdentificationComponent;
