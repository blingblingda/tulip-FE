const BACKEND_URL = "https://tulip-back-end.onrender.com";

export const fetchReceivedInvites = async (userId, token) => {
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

export const fetchSentInvites = async (userId, token) => {
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
