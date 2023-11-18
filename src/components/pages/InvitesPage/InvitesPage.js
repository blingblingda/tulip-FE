import React, { useState, useEffect } from "react";
import { Header } from "../../UI/Header";
import { Footer } from "../../UI/Footer";
import { InviteCard } from "./InviteCard";
import {
  fetchReceivedInvites,
  fetchSentInvites,
} from "../../services/InviteService";

export const InvitesPage = () => {
  const [receivedInvites, setReceivedInvites] = useState([]);
  const [sentInvites, setSentInvites] = useState([]);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  // Fetches received and sent invites on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const receivedRes = await fetchReceivedInvites(userId, token);
        setReceivedInvites(receivedRes);

        const sentRes = await fetchSentInvites(userId, token);
        setSentInvites(sentRes);
      } catch (err) {
        console.error("Error fetching data:", err);
        alert("An error occurred while fetching data. Please try again later.");
      }
    }
    fetchData();
  }, []);

  // Toggles between received and sent invites
  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Toggle button container */}
      <div className="py-4 w-full flex justify-center bg-gray-750">
        {" "}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleToggle}
          />
          <div className="group peer ring-1 ring-white bg-black from-black-100 via-black-400 to-black-500 rounded-full outline-none duration-300 after:duration-300 w-24 h-12 shadow-md peer-checked:bg-gradient-to-tr from-custom-lightpink via-custom-plum to-custom-plum peer-focus:outline-none after:content-['📨'] after:rounded-full after:absolute after:bg-gray-50 after:border-2 after:border-gray-300 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['📩'] peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-focus:ring-4 peer-focus:ring-gray-300"></div>
        </label>
      </div>

      {/* Main content area */}
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="flex-grow w-full max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-auto mt-2 mb-20">
          <div className="p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl font-semibold text-center dark:text-gray-500">
              {isToggleOn ? "Sent Invites" : "Received Invites"}
            </h1>
            {/* Invites list */}
            <div>
              {isToggleOn
                ? sentInvites.map((invite) => (
                    <InviteCard
                      key={invite._id}
                      invite={invite}
                      userId={invite.user_2}
                      isReceived={false}
                    />
                  ))
                : receivedInvites.map((invite) => (
                    <InviteCard
                      key={invite._id}
                      invite={invite}
                      userId={invite.user_1}
                      isReceived={true}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
