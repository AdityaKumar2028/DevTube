import {
  formatViews,
  formatPublishedDate,
  formatDuration,
} from "../../utils/Constants";
const WatchVideoStats = ({ props }) => {
  const { viewCount, publishTime, likeCount, commentCount, duration } = props;
  return (
    <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 sm:gap-2 sm:text-sm">
      <span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800 sm:px-3 sm:py-1.5">
        {formatViews(viewCount)} views
      </span>
      <span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800 sm:px-3 sm:py-1.5">
        {formatPublishedDate(publishTime)}
      </span>
      <span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800 sm:px-3 sm:py-1.5">
        👍 {formatViews(likeCount)}
      </span>
      <span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800 sm:px-3 sm:py-1.5">
        {formatViews(commentCount)} comments
      </span>
      <span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800 sm:px-3 sm:py-1.5">
        ⏱ {formatDuration(duration)}
      </span>
    </div>
  );
};

export default WatchVideoStats;
