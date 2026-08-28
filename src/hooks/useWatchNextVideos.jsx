import { useEffect } from "react";
import getMainVideos from "../api/getMainVideos";
import { useDispatch } from "react-redux";
import { setWatchNextVideos } from "../utils/videosSlice";

export const useWatchNextVideos = (query) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNextVideos = async () => {
      const videoResult = await getMainVideos(query);
      console.log(videoResult);
      dispatch(setWatchNextVideos(videoResult));
    };

    getNextVideos();
  }, [dispatch, query]);
};
