import axios from "axios";

// Get Reddit access token
export const getRedditAccessToken = async () => {
  const credentials = `${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`;
  const token = Buffer.from(credentials).toString("base64");

  const response = await axios.post(
    "https://www.reddit.com/api/v1/access_token",
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": process.env.REDDIT_USER_AGENT,
      },
    }
  );

  return response.data.access_token;
};

// Fetch Reddit posts based on a search query
export const searchRedditPosts = async (query, limit = 20) => {
  const token = await getRedditAccessToken();

  const response = await axios.get(
    `https://oauth.reddit.com/search?q=${encodeURIComponent(query)}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": process.env.REDDIT_USER_AGENT,
      },
    }
  );

  return response.data.data.children.map((post) => post.data);
};
