import React from "react";
import { Button } from "../../UI/Button";

export const Profile = (props) => {
  return (
    <div className="bg-gray-100 p-4 md:p-8 min-h-md">
      {/* First Photo Card */}
      <div className="max-w-md p-6 rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
        <img
          src={props.profileData.url}
          className="h-auto max-w-full rounded-lg"
          alt=""
        />
      </div>

      {/* Name and Bio Card */}
      <div className="p-4 max-w-md bg-white rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
        <h1 className="text-2xl font-semibold mb-2">
          👋 {props.profileData.name}
        </h1>
        <h2>
          {props.profileData.age}, {props.profileData.gender},{" "}
          {props.profileData.city}
        </h2>
        <p className="text-gray-600">Bio</p>
      </div>

      {/* Second Photo Card */}
      <div className="max-w-md p-6 rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
        <img
          src={props.profileData.url}
          className="h-auto max-w-full rounded-lg"
          alt=""
        />
      </div>

      {/* Passions Card */}
      <div className="p-4 bg-white max-w-md rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
        <h2 className="text-lg text-gray-600 mb-2">🔥 Passions</h2>
        <ul className="pl-5 list-none">
          {props.profileData.passion.map((passion) => (
            <li>{passion}</li>
          ))}
        </ul>
      </div>

      {/* Close Modal */}
      <div className="flex flex-col items-center justify-center">
        <Button text={"X"} onClick={props.closeProfileModal} />
      </div>
    </div>
  );
};
