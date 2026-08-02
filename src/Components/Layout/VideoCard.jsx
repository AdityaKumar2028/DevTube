// VideoCard.jsx
const VideoCard = ({ props }) => {
  const { snippet } = props.searchData;
  const { statistics, contentDetails } = props;

  const { title, publishedAt, thumbnails } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  const formatViews = (views) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(Number(views));
  };

  const formatPublishedDate = (date) => {
    const seconds = Math.floor((Date.now() - new Date(date)) / 1000);

    const intervals = [
      { label: "year", value: 31536000 },
      { label: "month", value: 2592000 },
      { label: "week", value: 604800 },
      { label: "day", value: 86400 },
      { label: "hour", value: 3600 },
      { label: "minute", value: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.value);

      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }

    return "Just now";
  };

  const formatDuration = (iso) => {
    const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

    if (!match) return "";

    const [, h, m, s] = match;

    const hours = Number(h || 0);
    const minutes = Number(m || 0);
    const seconds = Number(s || 0);

    if (hours) {
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(
        seconds,
      ).padStart(2, "0")}`;
    }

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="w-75 cursor-pointer bg-gray-100 group hover:bg-fuchsia-100 p-3 rounded-lg">
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
