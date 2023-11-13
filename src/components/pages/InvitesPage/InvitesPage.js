// InvitesPage.js

import React, { useState, useEffect } from "react";
import { Header } from "../../UI/Header";
import { Footer } from "../../UI/Footer";
import Loader from "../LoadingScreen/Loader";
import { InviteCard } from "./InviteCard";
// Import additional services if you have them for fetching invites

export const InvitesPage = () => {
  const [receivedInvites, setReceivedInvites] = useState([]);
  const [sentInvites, setSentInvites] = useState([]);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Dummy data for received and sent invites
const dummyReceivedInvites = [
  { id: 1, name: "John Doe", status: 'pending' },
  { id: 2, name: "Jane Smith", status: 'pending' },
];

const dummySentInvites = [
  { id: 3, name: "Michael Johnson", status: 'accepted' },
  { id: 4, name: "Emily Davis", status: 'pending' },
];

// Handlers for the invite actions (placeholders for now)
const handleAccept = (inviteId) => {
  console.log("Accepted invite:", inviteId);
  // Here you would handle the accept logic
};

const handleDecline = (inviteId) => {
  console.log("Declined invite:", inviteId);
  // Here you would handle the decline logic
};

  // Replace with your actual fetch invites functions
  const fetchReceivedInvites = async () => {
    // Fetch logic for received invites
  };
  const fetchSentInvites = async () => {
    // Fetch logic for sent invites
  };

  useEffect(() => {
    fetchReceivedInvites();
    fetchSentInvites();
  }, []);

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Toggle button container */}
      <div className="py-4 w-full flex justify-center bg-gray-50">
        {" "}
        {/* Adjust the background as needed */}
        <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" onChange={handleToggle} />
          <div className="group peer ring-0 bg-black from-black-100 via-black-400 to-black-500 rounded-full outline-none duration-300 after:duration-300 w-24 h-12 shadow-md peer-checked:bg-gradient-to-tr from-custom-lightpink via-custom-plum to-custom-plum peer-focus:outline-none after:content-['📨'] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['📩'] peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
        </label>
      </div>

      {/* Main content area */}
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="flex-grow w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-auto mt-2 mb-20">
          <div className="p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl font-semibold text-center">
              {isToggleOn ? "Sent Invites" : "Received Invites"}
            </h1>
            <div>
              {isToggleOn
                ? dummySentInvites.map((invite) => (
                    <InviteCard key={invite.id} invite={invite} isReceived={false} />
                  ))
                : dummyReceivedInvites.map((invite) => (
                    <InviteCard
                      key={invite.id}
                      invite={invite}
                      onAccept={handleAccept}
                      onDecline={handleDecline}
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