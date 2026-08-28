import { BASE_URL } from "../utils/Constants";
import getVideo from "./getVideo";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const getMainVideos = async (query) => {
  const devQuery = `${query} programming coding devloper`;
  const searchResponse = await fetch(
    `${BASE_URL}/search?part=snippet&type=video&videoDuration=long&maxResults=50&q=${encodeURIComponent(
      devQuery,
    )}&key=${API_KEY}`,
  );

  const searchResult = await searchResponse.json();

  const batchedId = searchResult.items
    .map((content) => content.id.videoId)
    .join(",");

  const videosResult = await getVideo(batchedId);

  return videosResult;
};

export default getMainVideos;
