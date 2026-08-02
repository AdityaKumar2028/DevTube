import { useSelector } from "react-redux";
import VideoCard from "../Layout/VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videoData = useSelector((store) => store.videos.mainVideos);
  const selectedMenuOption = useSelector(
    (store) => store.app.selectedMenuOption,
  );
  const isNavBarOpen = useSelector((store) => store.app.isMenuOpen);

  if (!videoData[selectedMenuOption.title]) return null;

  return (
    <div
      className={`min-h-screen bg-white transition-all duration-300 ${
        isNavBarOpen ? "ml-48" : "ml-0"
      }`}
    >
      <div className="py-5 px-6">
        <div
          className={`grid ${
            isNavBarOpen ? "grid-cols-4" : "grid-cols-5"
          } gap-y-5 gap-x-3`}
        >
          {videoData[selectedMenuOption.title].map((video) => (
            <Link to={`/watch?v=${video.id}`} key={video.id}>
              <VideoCard key={video.id} props={video} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
