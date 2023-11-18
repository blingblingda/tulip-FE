const BACKEND_URL = "https://tulip-back-end.onrender.com";

// Function to fetch potential match for a user
export const fetchPotentialMatch = async (userId, token) => {
  const response = await fetch(`${BACKEND_URL}/api/potential_match/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });
  return response.json();
};

// Function to send an invite for a match
export const sendInvite = async (senderId, receiverId, token) => {
  const response = await fetch(`${BACKEND_URL}/api/matches/send_invite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify({
      senderId,
      receiverId,
    }),
  });
  return response.json();
};

// Function to end a conversation with a match
export const endConversation = async (conversationId, userId, token) => {
  const response = await fetch(`${BACKEND_URL}/api/matches/end_conversation`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify({
      conversationId,
      userId,
    }),
  });
  return response.json();
};
