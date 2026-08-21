const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const getSearchSuggestions = async (query) => {
  if (!query.trim()) return [];

  try {
    const devQuery = `${query} programming tutorial coding`;

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=28&maxResults=5&q=${encodeURIComponent(
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
