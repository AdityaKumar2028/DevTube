import { BASE_URL } from "../utils/Constants";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const getMainVideos = async (query) => {
  const searchResponse = await fetch(
    `${BASE_URL}/search?part=snippet&type=video&videoDuration=long&maxResults=20&q=${encodeURIComponent(
      query,
    )}&key=${API_KEY}`,
  );

  const searchResult = await searchResponse.json();

  const searchVideoMap = new Map();

  searchResult.items.forEach((item) =>
    searchVideoMap.set(item?.id?.videoId, item),
  );

  const batchedId = searchResult.items
    .map((content) => content.id.videoId)
    .join(",");

  const videoResponse = await fetch(
    `${BASE_URL}/videos?part=statistics,contentDetails&id=${batchedId}&key=${API_KEY}`,
  );

  const videosResult = await videoResponse.json();

  const mergedVideos = videosResult.items.map((video) => ({
    ...video,
    searchData: searchVideoMap.get(video.id),
  }));

  return mergedVideos;
};

export default getMainVideos;
