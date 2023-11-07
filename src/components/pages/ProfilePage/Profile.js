import React from "react";
import { Button } from "../../UI/Button";

export const Profile = ({ profileData, closeProfileModal }) => {
  return (
    <div className="bg-gray-100 p-4 md:p-8">
      {/* First Photo Card */}
      <div className="max-w-md p-6 rounded-xl shadow-lg  mb-6 hover:scale-105 transition-transform duration-300">
        <img
          src={profileData.photo_url}
          className="h-auto max-w-full rounded-lg"
          alt=""
        />
      </div>

      {/* Name and Bio Card */}
      <div className="p-4 max-w-md bg-white rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
        <h1 className="text-xl font-semibold mb-1">👋 {profileData.name}</h1>
        <h2 className="mb-1">
          {profileData.age}, {profileData.gender}, {profileData.state}
        </h2>
        <p className="text-gray-600">Bio: {profileData.bio}</p>
      </div>

      {/* Passions Card */}
      <div className="p-4 bg-white max-w-md rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
        <h2 className="text-lg text-gray-600 mb-2">🔥 Passions</h2>
        <div>{profileData.passion.map((p) => p).join(", ")}</div>
      </div>

      {/* Show me Card */}
      <div className="p-4 max-w-md bg-white rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
        <h2 className="text-lg text-gray-600 mb-2">👀 Looking For</h2>
        <ul className="mb-1">
          <li>Gender: {profileData.gender}</li>
          <li>
            Age: {profileData.age_preference.min} -{" "}
            {profileData.age_preference.max}
          </li>
          <li>State: {profileData.state}</li>
          <li>Relationship: {profileData.relationship}</li>
        </ul>
      </div>

      {/* Close Modal */}
      <div className="flex flex-col items-center justify-center">
        <Button text={"Send invite"} onClick={closeProfileModal} />
      </div>
    </div>
  );
};
