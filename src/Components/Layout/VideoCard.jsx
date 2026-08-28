import {
  formatDuration,
  formatViews,
  formatPublishedDate,
} from "../../utils/Constants";
import he from "he";

const VideoCard = ({ props }) => {
  const { statistics, contentDetails } = props;

  const { title, publishedAt, thumbnails } = props.snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  return (
    <div className="group flex h-full w-full cursor-pointer flex-col rounded-xl bg-gray-100 p-3 transition-colors hover:bg-fuchsia-100 dark:bg-slate-800 dark:hover:bg-slate-700">
      <div className="relative w-full shrink-0 overflow-hidden rounded-lg border border-[#E5E7EB] transition-all duration-200 group-hover:border-[#6D28D9] group-hover:shadow-md dark:border-slate-700 dark:group-hover:border-purple-400">
        <img
          src={thumbnails.high.url}
          alt={title}
          className="aspect-video w-full object-cover"
        />

        <span className="absolute bottom-2 right-2 rounded bg-black/85 px-1.5 py-0.5 text-xs font-semibold text-white">
          {formatDuration(duration)}
        </span>
      </div>

      <div className="mt-3 flex flex-1 flex-col gap-1.5">
        <h3 className="line-clamp-2 min-h-[44px] text-[15px] font-bold leading-snug text-[#1C1D1F] transition-colors group-hover:text-green-600 dark:text-slate-100 dark:group-hover:text-green-400">
          {he.decode(title)}
        </h3>

        <p className="mt-auto text-[13px] font-medium text-[#57606A] dark:text-slate-400">
          {formatViews(viewCount)} views
          <span className="mx-1.5 text-[#6D28D9] dark:text-purple-400">•</span>
          {formatPublishedDate(publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
