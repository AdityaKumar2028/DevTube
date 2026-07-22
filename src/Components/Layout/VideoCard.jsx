const VideoCard = ({ props }) => {
  const { snippet } = props.searchData;
  const { publishTime, title, thumbnails } = snippet;
  const { duration } = props.contentDetails;
  const { viewCount } = props.statistics;
  return (
    <div className="videoCard-container border border-black p-4">
      {" "}
      <img
        src={thumbnails?.high?.url}
        alt="thumbnail"
        className="w-72 h-58 rounded-2xl aspect-video object-cover"
      />
      <div className="flex flex-col w-72">
        <span>{title}</span>
        <span>Uploaded On: {publishTime}</span>
        <div className="flex flex-row gap-1">
          <span>duration: {duration}</span>
          <span>views: {viewCount}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
