const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY1;
import { BASE_URL } from "../utils/Constants";
const getSearchSuggestions = async (query) => {
  if (!query.trim()) return [];

  try {
    const devQuery = `${query} programming coding devloper`;

    const url = `${BASE_URL}/search?part=snippet&type=video&videoDuration=long&maxResults=5&q=${encodeURIComponent(
      devQuery,
    )}&key=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching developer videos:", error);
    return [];
  }
};

export default getSearchSuggestions;
