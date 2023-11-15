export const checkUserInfo = async (email, password) => {
  const response = await fetch(
    `https://tulip-back-end.onrender.com/api/auth/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  return response;
};

export const createUserInfo = async (email, password) => {
  const response = await fetch(
    `https://tulip-back-end.onrender.com/api/profile/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  return response;
};
