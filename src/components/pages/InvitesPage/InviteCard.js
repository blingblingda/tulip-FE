import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../services/UserService";
import { Profile } from "../ProfilePage/Profile";
import { Modal } from "../../UI/Modal";
import { acceptInvite, declineInvite } from "../../services/InviteService";

export const InviteCard = ({ invite, userId, isReceived }) => {
  const [inviteStatus, setInviteStatus] = useState(invite.status);
  const [userInfo, setUserInfo] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const token = localStorage.getItem("token");
  const receiverId = localStorage.getItem("userId");
  const navigate = useNavigate();

  // Fetch user information when component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchUser(userId, token);
        setUserInfo(response);
      } catch (err) {
        console.error("Error fetching data:", err);
        alert("An error occurred while fetching data. Please try again later.");
      }
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
    async function sendData() {
      try {
        const acceptRes = await acceptInvite(
          invite.match_id,
          receiverId,
          token
        );
        navigate("/match");
      } catch (err) {
        console.error("Error sending data:", err);
        alert("An error occurred while sending data. Please try again later.");
      }
    }
    sendData();
  };

  const handleDecline = () => {
    setInviteStatus("declined");
    async function sendData() {
      try {
        const declineRes = await declineInvite(
          invite.match_id,
          receiverId,
          token
        );
        if (declineRes.status === 200) {
          window.location.reload(false);
        }
      } catch (err) {
        console.error("Error sending data:", err);
        alert("An error occurred while sending data. Please try again later.");
      }
    }
    sendData();
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div
        className="flex items-center"
        onClick={() => openProfileModal(userInfo)}
      >
        <img
          src={userInfo.photo_url || "https://via.placeholder.com/150"}
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover object-center mr-4"
        />
        <h5 className="text-lg font-medium dark:text-gray-500">
          {userInfo.name}
        </h5>
      </div>
      {/* Accept and decline buttons or status display */}
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
        </button>
      )}

      {/* User profile modal */}
      <Modal show={isModalOpen} onClick={closeProfileModal}>
        {selectedProfile && (
          <Profile
            profileData={selectedProfile}
            closeProfileModal={closeProfileModal}
            showInviteButton={false}
          />
        )}
      </Modal>
    </div>
  );
};
