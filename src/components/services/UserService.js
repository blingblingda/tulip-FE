const BACKEND_URL = "https://tulip-back-end.onrender.com";

// Function to fetch user profile based on userId and token
export const fetchUser = async (userId, token) => {
  // Make a GET request to the user profile API endpoint
  const userProfile = await fetch(`${BACKEND_URL}/api/profile/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });
  return userProfile.json();
};

// Function to send user image data to the backend
export const sendUserImage = async (formData) => {
  // Make a POST request to the user images API endpoint
  const userImage = await fetch(`${BACKEND_URL}/api/images`, {
    method: "POST",
    body: formData,
  });
  return userImage.json();
};

// Function to fetch partner name and img based on conversation id
export const fetchPartner = async (conversationId, currentUserId, token) => {
  // Make a GET request to the getConversation API endpoint
  const partnerProfile = await fetch(
    `${BACKEND_URL}/api/matches/get_conversation/${conversationId}/${currentUserId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    }
  );
  return partnerProfile.json();
};
