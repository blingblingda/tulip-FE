import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CustomDatePicker component that allows users to select a date and calculates age based on the date selected
export const CustomDatePicker = ({ onAgeChange }) => {
  // State for storing the selected date
  const [startDate, setStartDate] = useState(new Date());

  // Handler for date change
  const handleDateChange = (date) => {
    setStartDate(date);
    const currentYear = new Date().getFullYear();
    const birthYear = date.getFullYear();
    const age = currentYear - birthYear;
    onAgeChange(age); // Pass the calculated age to the parent component's handler
  };

  // Calculate today's date minus 18 years to set as the maximum selectable date.
  const maxDate = new Date(
    new Date().setFullYear(new Date().getFullYear() - 18)
  );

  // Calculate today's date minus 100 years to set as the minimum selectable date.
  const minDate = new Date(
    new Date().setFullYear(new Date().getFullYear() - 100)
  );

  return (
    <div className="sm:col-span-3">
      <label className="block text-lg font-medium leading-6 text-gray-900">
        Birthday
      </label>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        maxDate={maxDate}
        minDate={minDate}
        dateFormat="MM/dd/yyyy"
        showYearDropdown
        dropdownMode="select"
      />
      <div className="mt-4 text-lg">
        You are {new Date().getFullYear() - startDate.getFullYear()} years old
      </div>
    </div>
  );
};
