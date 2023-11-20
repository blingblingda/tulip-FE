import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../../../socketConfig";
import { Button } from "../../UI/Button";
import { Footer } from "../../UI/Footer";
import { endConversation } from "../../services/MatchService";
import { fetchUser } from "../../services/UserService";

export const ChatBox = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  // Effect for handling socket events
  useEffect(() => {
    // Event listener for initial message history
    socket.on("messageHistory", (messageHistory) => {
      setMessages(messageHistory);
    });

    // Event listener for new incoming messages
    socket.on("newMessage", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    // Event listener for user disconnection
    socket.on("userDisconnected", (matchId) => {
      alert("The conversation has ended.");
      navigate("/match", { replace: true });
      // Using setTimeout to ensure navigation completes before page reloads
      setTimeout(() => {
        window.location.reload();
      }, 100);
    });

    // Cleanup: removing event listeners when component unmounts
    return () => {
      socket.off("messageHistory");
      socket.off("newMessage");
      socket.off("userDisconnected");
    };
  }, []);

  const handleMessage = () => {
    if (message) {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleMessage();
    }
  };

  const handleDisconnect = async () => {
    try {
      const userData = await fetchUser(userId, token);
      const endRes = await endConversation(
        userData.conversation.id,
        userId,
        token
      );

      // Emitting socket event for user disconnection and navigating
      socket.emit("disconnectUser", userData.conversation.id);
      navigate("/match", { replace: true });

      // Using setTimeout to ensure navigation completes before page reloads
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (err) {
      console.error("Error fetching data:", err);
      alert("An error occurred while fetching data. Please try again later.");
    }
  };

  return (
    //<div className="col-start-6 col-end-13 p-3 rounded-lg"></div>
    //<div className="col-start-1 col-end-8 p-3 rounded-lg"></div>

    <div className="h-screen overflow-hidden flex items-center justify-center bg-black">
      <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-1">
        <Button text={"Disconnect"} onClick={handleDisconnect} />
      </div>

      <div className="flex flex-col flex-auto h-full px-4 pt-14 pb-20 my-24">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
          <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2">
                {/* Mapping and rendering messages */}
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`col-start-${
                      msg.user === username ? 6 : 1
                    } col-end-${msg.user === username ? 13 : 8} p-3 rounded-lg`}
                  >
                    <div
                      className={`flex ${
                        msg.user === username ? "flex-row-reverse" : "flex-row"
                      } items-center`}
                    >
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-custom-lightpink flex-shrink-0 dark:text-black">
                        {msg.user.charAt(0)}
                      </div>
                      <div
                        className={`relative ${
                          msg.user === username ? "mr-3" : "ml-3"
                        } text-sm bg-white py-2 px-4 shadow rounded-xl dark:text-black`}
                      >
                        <div>{msg.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Input field for typing messages */}
          <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 dark:text-black"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message"
                />
              </div>
            </div>
            {/* Button to send messages */}
            <div className="ml-4">
              <Button text="Send" onClick={handleMessage} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
