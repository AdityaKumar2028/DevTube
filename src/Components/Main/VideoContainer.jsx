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
        isNavBarOpen ? "ml-16 md:ml-48" : "ml-0"
      }`}
    >
      <div className="px-3 py-4 sm:px-5 md:px-6 md:py-5">
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {videoData[selectedMenuOption.title].items.map((video) => (
            <Link
              to={`/watch?v=${video.id}&query=${encodeURIComponent(selectedMenuOption.query)}`}
              className="min-w-0"
              key={video.id}
            >
              <VideoCard key={video.id} props={video} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
