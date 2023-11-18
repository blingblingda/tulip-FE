import React, { useState } from "react";
import { Button } from "../../UI/Button";
import { sendInvite } from "../../services/MatchService";

export const Profile = ({
  profileData,
  closeProfileModal,
  showInviteButton,
}) => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  // Handles sending an invite to the user
  const handleInviteSend = async () => {
    try {
      const inviteSent = await sendInvite(userId, profileData._id, token);
      setMessage(inviteSent.message);
    } catch (err) {
      // Log and display an error message if invite sending fails
      console.error("Error sending data:", err);
      alert("An error occurred while sending data. Please try again later.");
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <div className="overflow-auto max-h-[90vh] w-full lg:w-auto lg:max-w-6xl px-4 lg:px-8 mx-auto">
        {/* Photo Card */}
        <div className="max-w-md p-6 rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
          <img
            src={profileData.photo_url}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>

        {/* Name and Bio Card */}
        <div className="p-4 max-w-md bg-white rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
          <h1 className="text-xl font-semibold mb-1 dark:text-black">
            👋 {profileData.name}
          </h1>
          <h2 className="mb-1 dark:text-black">
            {profileData.age}, {profileData.gender}, {profileData.state}
          </h2>
          <p className="text-gray-600">Bio: {profileData.bio}</p>
        </div>

        {/* Passions Card */}
        <div className="p-4 bg-white max-w-md rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg text-gray-600 mb-2 dark:text-black">
            🔥 Passions
          </h2>
          <div className="dark:text-gray-600">
            {profileData.passion.map((p) => p).join(", ")}
          </div>
        </div>

        {/* Show me Card */}
        <div className="p-4 max-w-md bg-white rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg text-gray-600 mb-2 dark:text-black">
            👀 Looking For
          </h2>
          <ul className="mb-1 dark:text-gray-600">
            <li>Gender Preference: {profileData.gender_preference}</li>
            <li>
              Age: {profileData.age_preference.min} -{" "}
              {profileData.age_preference.max}
            </li>
            <li>State: {profileData.state}</li>
            <li>Relationship: {profileData.looking_for}</li>
          </ul>
        </div>

        {/* Display success message if invite is sent successfully */}
        {message && <div style={{ color: "green" }}>{message}</div>}
        {/* Display error message if there's an issue with sending the invite */}
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

        {/* Buttons for closing the modal and sending an invite */}
        <div className="flex justify-around mt-4 mb-2">
          <Button
            text={"Close"}
            onClick={closeProfileModal}
            className="w-full md:w-auto"
          />
          {/* Render this button only if showInviteButton is true */}
          {showInviteButton && (
            <Button
              text={"✈️ Invite"}
              onClick={handleInviteSend}
              className="w-full md:w-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};
