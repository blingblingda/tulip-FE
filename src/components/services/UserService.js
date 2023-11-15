export const fetchUser = async (userId, token) => {
  const userProfile = await fetch(
    `https://tulip-back-end.onrender.com/api/profile/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    }
  );
  return userProfile.json();
};

export const sendUserImage = async (formData) => {
  const userImage = await fetch(
    `https://tulip-back-end.onrender.com/api/images`,
    {
      method: "POST",
      body: formData,
    }
  );
  return userImage.json();
};
