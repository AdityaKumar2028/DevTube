import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import he from "he";
import VideoCard from "../Layout/VideoCard";
import VideoComment from "./VideoComment";
import LiveChat from "./LiveChat";
import {
  formatDuration,
  formatPublishedDate,
  formatViews,
} from "../../utils/Constants";

import { useVideoComments } from "../../hooks/useVideoComments";
import { removeLiveComments } from "../../utils/liveCommentsSlice";
import useWatchVideo from "../../hooks/useWatchVideo";
import { setMenuOption } from "../../utils/appSlice";
import { useEffect } from "react";

const WatchPlayer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const query = searchParams.get("query") || "";

  useVideoComments(videoId);
  useWatchVideo(videoId);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const videoComments = useSelector((store) => store.videos.videoComments);
  const videoData = useSelector((store) => store.videos.watchVideo);

  if (!videoData || !videoComments || !videoId) return null;

  const { title: videoTitle, publishTime } = videoData.snippet;
  const { duration } = videoData.contentDetails;
  const { viewCount, likeCount, commentCount } = videoData.statistics;

  return (
    <main className={`p-3 sm:p-4 md:p-6 ${isMenuOpen ? "ml-16 xl:ml-44" : ""}`}>
      <div className="mx-auto flex max-w-[1600px] flex-col gap-5 sm:gap-6 xl:flex-row">
        <section className="min-w-0 flex-1">
          <div className="mx-auto aspect-video w-full overflow-hidden rounded-xl bg-black shadow-[0_12px_32px_rgba(15,23,42,0.18)] sm:rounded-2xl xl:w-[min(100%,calc(62svh*16/9))] xl:max-w-4xl">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <h1 className="mt-3 max-w-4xl text-lg font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-xl md:text-2xl line-clamp-2">
            {he.decode(videoTitle || "")}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-700 sm:gap-2 sm:text-sm">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 sm:px-3 sm:py-1.5">
              {formatViews(viewCount)} views
            </span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 sm:px-3 sm:py-1.5">
              {formatPublishedDate(publishTime)}
            </span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 sm:px-3 sm:py-1.5">
              👍 {formatViews(likeCount)}
            </span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 sm:px-3 sm:py-1.5">
              {formatViews(commentCount)} comments
            </span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 sm:px-3 sm:py-1.5">
              ⏱ {formatDuration(duration)}
            </span>
          </div>

          <hr className="my-5 hidden border-slate-200 md:block" />

          <h2 className="mb-4 hidden text-lg font-bold text-slate-900 sm:mb-5 sm:text-xl md:block">
            Comments ({videoComments.length})
          </h2>
          <div className="hidden flex-col gap-4 md:flex sm:gap-6">
            {videoComments.map((data, index) => (
              <VideoComment key={data?.id || index} commentData={data} />
            ))}
          </div>
        </section>

        <aside className="flex w-full shrink-0 flex-col gap-5 xl:sticky xl:top-20 xl:w-100">
          <LiveChat />
        </aside>
      </div>
    </main>
  );
};

export default WatchPlayer;
