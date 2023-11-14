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
import { Button } from "../../UI/Button";
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
        console.error(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleInvitesClick = () => {
    navigate("/invites"); // Use navigate inside this function
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
      <div className="flex-shrink-0">
        <Header />
      </div>
      <div className="flex-1 bg-base-200">
        {/* Button centered with flex container */}
        <div className="flex justify-center py-4">
          <Button text={"Invites"} onClick={handleInvitesClick} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-20 py-10 mx-auto max-w-screen-xl">
          {matchedData.map((data) => (
            <Pcard
              key={data._id}
              data={data}
              onClick={() => openProfileModal(data)}
            />
          ))}
        </div>
      </div>
      <div className="flex-shrink-0">
        <Footer />
      </div>

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
