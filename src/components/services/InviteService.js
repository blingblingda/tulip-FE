export const fetchReceivedInvites = async (userId, token) => {
  const response = await fetch(
    `http://localhost:3001/api/matches/get_invites/${userId}`,
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
