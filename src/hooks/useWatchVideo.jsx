import { useEffect } from "react";
import getVideo from "../api/getVideo";
import { useDispatch } from "react-redux";
import { setWatchVideo } from "../utils/videosSlice";

export const useWatchVideo = (videoId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("API call");
    const getWatchVideo = async () => {
      const videoResponse = await getVideo(videoId);
      dispatch(setWatchVideo(videoResponse.items[0]));
    };

    getWatchVideo();
  }, [videoId, dispatch]);
};
