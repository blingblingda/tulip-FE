import React, { useState, useEffect } from "react";
import { fetchUser } from "../../services/UserService";
import { Profile } from "../ProfilePage/Profile";
import { Modal } from "../../UI/Modal";

export const InviteCard = ({ invite, isReceived }) => {
  const [inviteStatus, setInviteStatus] = useState(invite.status);
  const [userInfo, setUserInfo] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchData() {
      const response = await fetchUser(invite.user_1, token);
      setUserInfo(response);
    }
    fetchData();
  }, []);

  const openProfileModal = (userInfo) => {
    setSelectedProfile(userInfo);
    setModalOpen(true);
  };

  const closeProfileModal = () => {
    setModalOpen(false);
    setSelectedProfile(null);
  };

  const handleAccept = () => {
    setInviteStatus("accepted");
    console.log("Accepted");
    // Here, you'd also call an API to update the invite status on the server
  };

  const handleDecline = () => {
    setInviteStatus("declined");
    console.log("Declined");
    // Here, you'd also call an API to update the invite status on the server
  };

  return (
    <div
      className="flex items-center justify-between p-4 border-b"
      onClick={() => openProfileModal(userInfo)}
    >
      <div className="flex items-center">
        <img
          src={userInfo.photo_url || "https://via.placeholder.com/150"}
          alt="Avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h5 className="text-lg font-medium">{userInfo.name}</h5>
          {/* Additional invite details here */}
        </div>
      </div>
      {isReceived ? (
        <div className="flex items-center">
          <button
            onClick={handleAccept}
            className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 text-white ${
              inviteStatus === "accepted"
                ? "bg-green-500"
                : "bg-gray-200 hover:bg-green-200"
            }`}
            disabled={inviteStatus !== "pending"}
          >
            ✓
          </button>
          <button
            onClick={handleDecline}
            className={`h-8 w-8 rounded-full flex items-center justify-center text-white ${
              inviteStatus === "declined"
                ? "bg-red-500"
                : "bg-gray-200 hover:bg-red-200"
            }`}
            disabled={inviteStatus !== "pending"}
          >
            ✗
          </button>
        </div>
      ) : (
        <button className="h-8 px-4 rounded text-gray-500 bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
          {inviteStatus.charAt(0).toUpperCase() + inviteStatus.slice(1)}{" "}
          {/* Capitalize the first letter */}
        </button>
      )}
      <Modal show={isModalOpen} onClick={closeProfileModal}>
        {selectedProfile && (
          <Profile
            profileData={selectedProfile}
            closeProfileModal={closeProfileModal}
          />
        )}
      </Modal>
    </div>
  );
};
