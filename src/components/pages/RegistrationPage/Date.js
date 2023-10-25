import React, { useState } from "react";

function DatePicker({ onAgeChange }) {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [age, setAge] = useState(null);

  onAgeChange(age);

  // Calculate today's date minus 18 years to set as the maximum selectable date.
  const maxDate = new Date(
    new Date().setFullYear(new Date().getFullYear() - 18)
  )
    .toISOString()
    .split("T")[0];

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDateOfBirth(selectedDate.toISOString().split("T")[0]);

    const currentYear = new Date().getFullYear();
    const birthYear = selectedDate.getFullYear();

    setAge(currentYear - birthYear);
  };

  return (
    <div className="sm:col-span-3">
      <label className="block text-lg font-medium leading-6 text-gray-900">
        Birthday
      </label>
      <input
        type="date"
        className="border p-2 rounded"
        value={dateOfBirth || ""}
        onChange={handleDateChange}
        max={maxDate} // set the maximum date to the calculated date
      />
      {age && <div className="mt-4 text-lg">You are {age}</div>}
    </div>
  );
}

export default DatePicker;
