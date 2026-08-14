import { useEffect } from "react";
import getMainVideos from "../api/getMainVideos";
import { useDispatch, useSelector } from "react-redux";
import { setMainVideos } from "../utils/videosSlice";

export const useMainVideos = (title, query) => {
  const videoData = useSelector((store) => store.videos.mainVideos);
  console.log("Hello", title, query);

  const dispatch = useDispatch();

  useEffect(() => {
    if (videoData[title]) return;

    const fetchMainVideos = async () => {
      try {
        const result = await getMainVideos(query);
        dispatch(setMainVideos({ [title]: result }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMainVideos();
  }, [dispatch, title, query, videoData]);
};
