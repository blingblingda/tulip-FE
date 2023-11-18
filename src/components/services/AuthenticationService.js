const BACKEND_URL = "https://tulip-back-end.onrender.com";

// Function to authenticate user information
export const checkUserInfo = async (email, password) => {
  // Sending a POST request to authenticate user
  const response = await fetch(`${BACKEND_URL}/api/auth/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
};

// Function to create user information
export const createUserInfo = async (email, password) => {
  // Sending a POST request to create a user profile
  const response = await fetch(`${BACKEND_URL}/api/profile/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
};
