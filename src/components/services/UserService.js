export async function fetchUser(userId, token) {
  const userProfile = await fetch(
    `http://localhost:3001/api/profile/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    }
  );
  return userProfile;
}
