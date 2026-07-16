const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const getMainVideos = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search?part=snippet&type=video&videoDuration=long&maxResults=20&q=${encodeURIComponent(
      query,
    )}&key=${API_KEY}`,
  );

  const json = await response.json();
  return json;
};

export default getMainVideos;
