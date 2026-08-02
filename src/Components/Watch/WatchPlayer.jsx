import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  formatDuration,
  formatPublishedDate,
  formatViews,
} from "../../utils/Constants";

const WatchPlayer = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const videoData = useSelector((store) => store.videos.playerVideo);

  if (!videoData) return null;

  const { title, publishTime } = videoData.searchData.snippet;
  const { duration } = videoData.contentDetails;
  const { viewCount, likeCount, commentCount } = videoData.statistics;

  return (
    <div className={`p-6 ${isMenuOpen ? "ml-44" : ""}`}>
      <div className="max-w-3xl">
        <div className="aspect-video overflow-hidden rounded-xl shadow">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <h1 className="mt-4 text-xl font-semibold">{title}</h1>

        {/* Stats */}
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-800 font-semibold">
          <span>{formatViews(viewCount)} views</span>
          <span>•</span>
          <span>{formatPublishedDate(publishTime)}</span>
          <span>•</span>
          <span>{formatViews(likeCount)} likes</span>
          <span>•</span>
          <span>{formatViews(commentCount)} comments</span>
          <span>•</span>
          <span>Duration: {formatDuration(duration)}</span>
        </div>

        <hr className="my-5" />

        <h2 className="text-lg font-semibold">Comments</h2>
      </div>
    </div>
  );
};

export default WatchPlayer;
