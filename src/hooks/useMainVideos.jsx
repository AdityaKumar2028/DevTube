import { useEffect } from "react";
import getMainVideos from "../api/getMainVideos";
import { useDispatch } from "react-redux";
import { setMainVideos } from "../utils/videosSlice";

export const useMainVideos = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMainVideos = async () => {
      try {
        const result = await getMainVideos(query);
        console.log(result.items);
        dispatch(setMainVideos(result.items));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMainVideos();
  }, [dispatch, query]);
};
