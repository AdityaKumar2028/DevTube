// VideoContainer.jsx
import { useSelector } from "react-redux";
import VideoCard from "../Layout/VideoCard";

const VideoContainer = () => {
  const videoData = useSelector((store) => store.videos.mainVideos);
  const isNavBarOpen = useSelector((store) => store.app.isMenuOpen);

  if (!videoData) return null;

  return (
    <div
      className={`flex-1 min-h-screen bg-white transition-all duration-300 ${isNavBarOpen ? "ml-0" : "ml-4"}`}
    >
      <div
        className={`py-5 transition-all duration-300 ${
          isNavBarOpen ? "px-3" : "px-6"
        }`}
      >
        <div
          className="grid gap-x-5 gap-y-3"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          }}
        >
          {videoData.map((video) => (
            <VideoCard key={video.id} props={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
