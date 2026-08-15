import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setVideoComments } from "../utils/videosSlice";
import getVideoComments from "../api/getVideoComments";

export const useVideoComments = (videoId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const result = await getVideoComments(videoId);
        dispatch(setVideoComments(result));
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [dispatch, videoId]);
};
