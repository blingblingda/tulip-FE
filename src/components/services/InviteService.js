const BACKEND_URL = "https://tulip-back-end.onrender.com";

// Fetch received invites for a user from the backend
export const fetchReceivedInvites = async (userId, token) => {
  // Make a GET request to the backend API endpoint for received invites
  const response = await fetch(
    `${BACKEND_URL}/api/matches/get_invites/${userId}`,
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

// Fetch sent invites for a user from the backend
export const fetchSentInvites = async (userId, token) => {
  // Make a GET request to the backend API endpoint for sent invites
  const response = await fetch(
    `${BACKEND_URL}/api/matches/invites_sent/${userId}`,
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

export const acceptInvite = async (matchId, receiverId, token) => {
  // Send a PATCH request to the backend API to accept the match
  const response = await fetch(`${BACKEND_URL}/api/matches/accept_match`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify({
      matchId,
      receiverId,
    }),
  });
  return response.json();
};

export const declineInvite = async (matchId, receiverId, token) => {
  // Send a PATCH request to the backend API to decline the match
  const response = await fetch(`${BACKEND_URL}/api/matches/decline_match`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify({
      matchId,
      receiverId,
    }),
  });
  return response;
};
