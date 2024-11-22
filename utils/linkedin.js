import axios from "axios";

export const fetchLinkedInPosts = async (accessToken, query) => {
  const url = "https://api.linkedin.com/v2/ugcPosts?q=authors&query=" + encodeURIComponent(query);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "X-Restli-Protocol-Version": "2.0.0",
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching LinkedIn posts:", error.response.data);
    throw new Error("Failed to fetch posts.");
  }
};