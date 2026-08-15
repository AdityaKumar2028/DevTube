import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import VideoCard from "../Layout/VideoCard";
import he from "he";
import {
  formatDuration,
  formatPublishedDate,
  formatViews,
} from "../../utils/Constants";
import { useVideoComments } from "../../hooks/useVideoComments";
import VideoComment from "./VideoComment";
import { useMainVideos } from "../../hooks/useMainVideos";
import LiveChat from "./LiveChat";

const WatchPlayer = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  const title = searchParams.get("title");
  const query = searchParams.get("query");

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  let videoData = useSelector((store) => store.videos.playerVideo);
  const videoComments = useSelector((store) => store.videos.videoComments);
  const mainVideos = useSelector((store) => store.videos.mainVideos);

  useVideoComments(videoId);
  useMainVideos(title, query);

  if (!videoData) {
    videoData = mainVideos?.[title]?.find((data) => data.id === videoId);
  }

  if (!videoData || !videoComments || !videoId) return null;

  const recommendedVideoData = mainVideos[title];
  const { title: videoTitle, publishTime } = videoData.searchData.snippet;
  const { duration } = videoData.contentDetails;
  const { viewCount, likeCount, commentCount } = videoData.statistics;

  return (
    <div className={`p-4 md:p-6 ${isMenuOpen ? "lg:ml-44" : ""}`}>
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-1 w-full">
          <div className="w-3xl aspect-video bg-black rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title={videoTitle}
              allowFullScreen
            />
          </div>

          <h1 className="text-xl font-bold mt-4">{he.decode(videoTitle)}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
            <span>{formatViews(viewCount)} views</span>
            <span>{formatPublishedDate(publishTime)}</span>
            <span>👍 {formatViews(likeCount)}</span>
            <span>{formatViews(commentCount)} comments</span>
            <span>⏱ {formatDuration(duration)}</span>
          </div>

          <hr className="my-6 border-gray-300" />

          <h2 className="text-lg font-bold mb-4">
            Comments ({videoComments.length})
          </h2>
          <div className="flex flex-col gap-4">
            {videoComments.map((data) => (
              <VideoComment key={data.id} commentData={data} />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-100 flex flex-col gap-6 lg:sticky lg:top-4 lg:max-h-[95vh] overflow-y-auto pr-2 pb-4 custom-scrollbar">
          <div className="shrink-0 border border-gray-200 rounded-xl bg-gray-50 h-75 flex flex-col">
            <div className="p-3 bg-white border-b border-gray-200 rounded-t-xl font-bold flex justify-between">
              <span>Live Chat</span>
              <span className="text-red-500 text-sm">Live</span>
            </div>
            <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
              <LiveChat />
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 bg-white">
            <h3 className="font-bold mb-4">Up next</h3>
            <div className="flex flex-col gap-4">
              {recommendedVideoData
                .filter((data) => data.id !== videoId)
                .map((data) => (
                  <Link
                    to={`/watch?v=${data.id}&title=${encodeURIComponent(title)}&query=${encodeURIComponent(query)}`}
                    key={data.id}
                  >
                    <VideoCard key={data.id} props={data} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPlayer;
