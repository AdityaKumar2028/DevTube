const VideoCard = ({ props }) => {
  console.log(props);
  const { videoId } = props.id;
  const { snippet } = props;
  console.log(videoId);
  const { publishTime, title, thumbnails } = snippet;
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
      </div>
    </div>
  );
};

export default VideoCard;
