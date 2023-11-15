export async function fetchUser(userId, token) {
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
}
