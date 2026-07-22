import { useSelector } from "react-redux";
import VideoCard from "../Layout/VideoCard";

const VideoContainer = () => {
  const videoData = useSelector((store) => store.videos.mainVideos);
  if (!videoData) return null;
  console.log(videoData);
  return (
    <div className="videoContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videoData.map((videoContent) => (
        <VideoCard props={videoContent} key={videoContent.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
