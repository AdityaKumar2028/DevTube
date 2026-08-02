import { BASE_URL } from "../utils/Constants";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const getVideoComments = (videoId) => {
  const getComments = async () => {
    const response = await fetch(
      `${BASE_URL}/commentThreads?part=snippet&videoId=${videoId}&maxResults=20&key=${API_KEY}`,
    );

    const json = await response.json();

    console.log(json);
  };

  getComments();
};

export default getVideoComments;
