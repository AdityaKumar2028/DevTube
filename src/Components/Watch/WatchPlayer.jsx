import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPlayer = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const videoData = useSelector((store) => store.videos.playerVideo);

  if (!videoData) return null;

  console.log(videoData);

  const { publishTime, title } = videoData.searchData.snippet;

  const { viewCount, likeCount, commentCount } = videoData.statistics;

  console.log(title, publishTime, viewCount, likeCount, commentCount);

  return (
    <div className={`p-6 ${isMenuOpen ? "ml-44" : "ml-0"}`}>
      <div className="aspect-video w-3/4 overflow-hidden rounded-xl shadow-lg">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="content-stats">
        <p>{title}</p>
        <p>{viewCount}</p>
        <p>{publishTime}</p>
        <p>{likeCount}</p>
        <p>{commentCount}</p>
      </div>
    </div>
  );
};

export default WatchPlayer;
