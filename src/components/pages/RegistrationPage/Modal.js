import React, { useState } from "react";
import "../../UI/Button.css";

export const PassionsModal = ({ onPassionsChange }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPassions, setSelectedPassions] = useState([]);
  const [savedPassions, setSavedPassions] = useState([]);

  const passions = [
    { label: "Traveling", emoji: "✈️" },
    { label: "Cooking", emoji: "🍳" },
    { label: "Reading", emoji: "📖" },
    { label: "Hiking", emoji: "🥾" },
    { label: "Photography", emoji: "📸" },
    { label: "Music", emoji: "🎵" },
    { label: "Movies", emoji: "🍿" },
    { label: "Dancing", emoji: "💃" },
    { label: "Gardening", emoji: "🌱" },
    { label: "Crafting", emoji: "✂️" },
    { label: "Painting", emoji: "🎨" },
    { label: "Cycling", emoji: "🚴" },
    { label: "Swimming", emoji: "🏊" },
    { label: "Meditation", emoji: "🧘" },
    { label: "Yoga", emoji: "🧘‍♀️" },
    { label: "Writing", emoji: "🖋️" },
    { label: "Theater", emoji: "🎭" },
    { label: "Fishing", emoji: "🎣" },
    { label: "Camping", emoji: "⛺" },
    { label: "Board games", emoji: "🎲" },
  ];

  const togglePassion = (passion) => {
    if (selectedPassions.some((p) => p.label === passion.label)) {
      setSelectedPassions((prev) =>
        prev.filter((p) => p.label !== passion.label)
      );
    } else {
      if (selectedPassions.length < 5) {
        setSelectedPassions((prev) => [...prev, passion]);
      } else {
        alert("You can select a maximum of 5 passions!");
      }
    }
  };

  const handleSave = () => {
    setSavedPassions(selectedPassions);
    setModalOpen(false);
    onPassionsChange(selectedPassions);
  };

  return (
    <div>
      <button
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        onClick={(e) => {
          e.preventDefault();
          setModalOpen(true);
        }}
      >
        Passions 💡
      </button>
      {savedPassions.length > 0 && (
        <div className="mt-4">
          You are passionate about:{" "}
          {savedPassions.map((p) => `${p.emoji} ${p.label}`).join(", ")}
        </div>
      )}

      {isModalOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          onClick={() => setModalOpen(false)}
        >
          <div className="flex items-center justify-center min-h-screen text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h2 className="text-xl font-semibold mb-4">
                  Select Your Passions (max 5)
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {passions.map((passion) => (
                    <div key={passion.label}>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-indigo-600"
                          checked={selectedPassions.some(
                            (p) => p.label === passion.label
                          )}
                          onChange={() => togglePassion(passion)}
                        />
                        <span className="ml-2">
                          {passion.emoji} {passion.label}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  Selected: {selectedPassions.length} / 5
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mt-3 w-full sm:mt-0 sm:w-auto"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-700 rounded-lg border border-gray-300 shadow-sm bg-white hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mt-3 w-full sm:mt-0 sm:w-auto"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
