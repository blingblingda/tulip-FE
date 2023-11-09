export async function fetchPotentialMatch(userId, token) {
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
}

export async function fetchAcceptedMatch(userId, token) {
  const dummyMatch = {
    message: "???",
    user_1: "6534934d016ba221aa4a73fe",
    user_2: "65335d5673204fcfb8dff945",
    conversation_id: "123",
  };
  return dummyMatch;
  // return null;
}
