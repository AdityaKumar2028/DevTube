import { useSelector } from "react-redux";
import VideoCard from "../Layout/VideoCard";

const VideoContainer = () => {
  const videoData = useSelector((store) => store.videos.mainVideos);
  if (!videoData) return null;
  return (
    <div className="videoContainer ">
      <VideoCard props={videoData[2]} />
    </div>
  );
};

export default VideoContainer;
