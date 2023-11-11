export const fetchPotentialMatch = async (userId, token) => {
  const response = await fetch(
    `http://localhost:3001/api/potential_match/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    }
  );
  return response.json();
};

export const sendInvite = async (senderId, receiverId, token) => {
  const response = await fetch(
    `http://localhost:3001/api/matches/send_invite`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        senderId,
        receiverId,
      }),
      // mode: "cors"
    }
  );
  return response.json();
};

export const fetchAcceptedMatch = async (userId, token) => {
  const dummyMatch = {
    message: "???",
    user_1: "6534934d016ba221aa4a73fe",
    user_2: "65335d5673204fcfb8dff945",
    conversation_id: "123",
  };
  // return dummyMatch;
  return null;
};

export const fetchEndConversation = async (conversationId, userId) => {
  const response = await fetch(`http://localhost:3001/api/end_conversation`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      conversationId,
      userId,
    }),
  });
  return response.json();
};
