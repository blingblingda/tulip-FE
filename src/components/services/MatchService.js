export const fetchPotentialMatch = async (userId, token) => {
  const response = await fetch(
    `https://tulip-back-end.onrender.com/api/potential_match/${userId}`,
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
    `https://tulip-back-end.onrender.com/api/matches/send_invite`,
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
    }
  );
  return response.json();
};

export const endConversation = async (conversationId, userId, token) => {
  const response = await fetch(
    `https://tulip-back-end.onrender.com/api/matches/end_conversation`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        conversationId,
        userId,
      }),
    }
  );
  return response.json();
};
