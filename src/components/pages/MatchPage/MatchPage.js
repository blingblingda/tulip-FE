import React, { useState, useEffect } from "react";
import { Header } from "../../UI/Header";
import { Footer } from "../../UI/Footer";
import { Pcard } from "./Pcard";
import { Profile } from "../ProfilePage/Profile";
import { Modal } from "../../UI/Modal";
import { ChatBox } from "./ChatBox";
import { socket } from "../../../socketConfig";
import { fetchPotentialMatch } from "../../services/MatchService";
import { fetchUser } from "../../services/UserService";
import Loader from "../LoadingScreen/Loader";
import { useNavigate } from "react-router-dom";

export const MatchPage = () => {
  const [matchedData, setMatchedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [joined, setJoined] = useState(false);
  const [userName, setUserName] = useState("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await fetchUser(userId, token);
        if (userData.conversation.id) {
          socket.emit("joinRoom", {
            matchId: userData.conversation.id,
            userName: userData.name,
          });
          setUserName(userData.name);
          setJoined(true);
        } else {
          const potentialMatches = await fetchPotentialMatch(userId, token);
          setMatchedData(potentialMatches);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        alert("An error occurred while fetching data. Please try again later.");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleInvitesClick = () => {
    navigate("/invites");
  };

  const openProfileModal = (profileData) => {
    setSelectedProfile(profileData);
    setModalOpen(true);
  };

  const closeProfileModal = () => {
    setModalOpen(false);
    setSelectedProfile(null);
  };

  if (joined) {
    return <ChatBox username={userName} />;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content */}
      <div className="flex-1 bg-base-200">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            {/* Invites Button */}
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <p className="mb-4 text-sm tracking-tight font-extrabold text-gray-400 dark:text-white">
                Discover your connections – access your invites here.
              </p>
              <button
                className="bg-primary-700 text-white font-bold py-2 px-4 rounded animate-pulse"
                onClick={handleInvitesClick}
              >
                Invites
              </button>
            </div>

            {/* Title */}
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Find Your Match ✨
              </h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Each profile is a new chapter waiting to be read – will you
                start the story with a chat invite?
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-20 py-10">
              {matchedData.map((data) => (
                <Pcard
                  key={data._id}
                  data={data}
                  onClick={() => openProfileModal(data)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Profile Modal */}
      <Modal show={isModalOpen} onClick={closeProfileModal}>
        {selectedProfile && (
          <Profile
            profileData={selectedProfile}
            closeProfileModal={closeProfileModal}
            showInviteButton={true}
          />
        )}
      </Modal>
    </div>
  );
};
