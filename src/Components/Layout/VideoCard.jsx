import { useDispatch } from "react-redux";
import { setPlayerVideo } from "../../utils/videosSlice";
import {
  formatDuration,
  formatViews,
  formatPublishedDate,
} from "../../utils/Constants";

// VideoCard.jsx
const VideoCard = ({ props }) => {
  const { snippet } = props.searchData;
  const { statistics, contentDetails } = props;

  const { title, publishedAt, thumbnails } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  const dispatch = useDispatch();

  function handleVideoClick(clickedVideoData) {
    console.log(clickedVideoData);
    dispatch(setPlayerVideo(clickedVideoData));
  }

  return (
    <div
      className="w-75 cursor-pointer bg-gray-100 group hover:bg-fuchsia-100 p-3 rounded-lg"
      onClick={() => handleVideoClick(props)}
    >
      <div className="relative overflow-hidden rounded-lg border border-[#E5E7EB] group-hover:border-[#6D28D9] group-hover:shadow-md transition-all duration-200">
        <img
          src={thumbnails.high.url}
          alt={title}
          className="w-full aspect-video object-cover"
        />

        <span className="absolute bottom-2 right-2 bg-black/85 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
          {formatDuration(duration)}
        </span>
      </div>

      <div className="mt-3">
        <h3 className="font-bold text-[15px] leading-snug text-[#1C1D1F] line-clamp-2 group-hover:text-green-600 transition-colors">
          {title}
        </h3>

        <p className="text-[13px] text-[#57606A] font-medium mt-1.5">
          {formatViews(viewCount)} views
          <span className="text-[#6D28D9] mx-1.5">•</span>
          {formatPublishedDate(publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
