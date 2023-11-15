const BACKEND_URL = "https://tulip-back-end.onrender.com";

export const checkUserInfo = async (email, password) => {
  const response = await fetch(`${BACKEND_URL}/api/auth/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
};

export const createUserInfo = async (email, password) => {
  const response = await fetch(`${BACKEND_URL}/api/profile/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
};
