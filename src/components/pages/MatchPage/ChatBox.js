import React, { useState, useEffect } from "react";
import { socket } from "../../../socketConfig";
import { Button } from "../../UI/Button";

export const ChatBox = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("messageHistory", (messageHistory) => {
      setMessages(messageHistory);
    });

    socket.on("newMessage", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off("messageHistory");
      socket.off("newMessage");
    };
  }, []);

  const handleMessage = () => {
    if (message) {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  const handleDisconnect = () => {};

  return (
    //<div className="col-start-6 col-end-13 p-3 rounded-lg"></div>
    //<div className="col-start-1 col-end-8 p-3 rounded-lg"></div>

    <div className="h-screen overflow-hidden flex items-center justify-center">
      <div className="fixed top-0 left-0 w-full flex justify-center bg-white z-50 py-1">
        <Button text={"Disconnect"} onClick={handleDisconnect} />
      </div>

      <div className="flex flex-col flex-auto h-full p-6">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
          <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`col-start-${
                      msg.user === username ? 1 : 6
                    } col-end-${msg.user === username ? 8 : 13} p-3 rounded-lg`}
                  >
                    <div
                      className={`flex ${
                        msg.user === username ? "flex-row" : "flex-row-reverse"
                      } items-center`}
                    >
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-custom-lightpink flex-shrink-0">
                        {msg.user.charAt(0)}
                      </div>
                      <div
                        className={`relative ${
                          msg.user === username ? "ml-3" : "mr-3"
                        } text-sm bg-white py-2 px-4 shadow rounded-xl`}
                      >
                        <div>{msg.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message"
                />
              </div>
            </div>
            <div className="ml-4">
              <Button text="Send" onClick={handleMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
