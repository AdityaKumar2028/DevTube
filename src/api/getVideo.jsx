import { BASE_URL } from "../utils/Constants";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const getVideo = async (videoId) => {
  const videoResponse = await fetch(
    `${BASE_URL}/videos?part=statistics,contentDetails&id=${videoId}&key=${API_KEY}`,
  );
  const videoResponseJson = await videoResponse.json();

  return videoResponseJson;
};

export default getVideo;
