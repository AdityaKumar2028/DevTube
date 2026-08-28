import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import he from "he";
import VideoComment from "./VideoComment";
import LiveChat from "./LiveChat";

import { useVideoComments } from "../../hooks/useVideoComments";
import { useWatchVideo } from "../../hooks/useWatchVideo";
import UpNextVideos from "./upNextVideos";
import WatchVideoStats from "./watchVideoStats";

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

  const { title: videoTitle, publishedAt } = videoData.snippet;
  const { duration } = videoData.contentDetails;
  const { viewCount, likeCount, commentCount } = videoData.statistics;

  const statsprops = {
    publishTime: publishedAt,
    duration: duration,
    viewCount: viewCount,
    likeCount: likeCount,
    commentCount: commentCount,
  };

  return (
    <main
      className={`min-h-screen bg-white p-3 transition-all duration-300 dark:bg-slate-950 sm:p-4 md:p-6 ${isMenuOpen ? "ml-16 xl:ml-44" : ""}`}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-5 sm:gap-6 xl:flex-row xl:items-start">
        <section className="min-w-0 flex-1">
          <div className="mx-auto aspect-video w-full overflow-hidden rounded-xl bg-black shadow-sm sm:rounded-2xl">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <h1 className="mt-3 line-clamp-2 text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:mt-4 sm:text-xl md:text-2xl">
            {he.decode(videoTitle || "")}
          </h1>
          <WatchVideoStats props={statsprops} />

          <hr className="my-5 hidden border-slate-200 dark:border-slate-700 md:block" />

          <h2 className="mb-4 hidden text-lg font-bold text-slate-900 dark:text-slate-100 sm:mb-5 sm:text-xl md:block">
            Comments ({videoComments.length})
          </h2>
          <div className="hidden flex-col gap-4 md:flex sm:gap-6">
            {videoComments.map((data, index) => (
              <VideoComment key={data?.id || index} commentData={data} />
            ))}
          </div>
        </section>

        <aside className="flex w-full shrink-0 flex-col gap-5 xl:w-[350px] 2xl:w-[400px]">
          <div className="w-full">
            <LiveChat />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-4">
            <UpNextVideos query={query} videoId={videoId} />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default WatchPlayer;
