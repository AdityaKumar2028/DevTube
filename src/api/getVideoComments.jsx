import { BASE_URL } from "../utils/Constants";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const getVideoComments = async (videoId) => {
  const response = await fetch(
    `${BASE_URL}/commentThreads?part=snippet&videoId=${videoId}&maxResults=20&key=${API_KEY}`,
  );

  const json = await response.json();

  return json;
};

export default getVideoComments;
