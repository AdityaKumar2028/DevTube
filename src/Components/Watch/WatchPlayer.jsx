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
import { useMainVideos } from "../../hooks/useMainVideos";
import { removeLiveComments } from "../../utils/liveCommentsSlice";

const WatchPlayer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const title = searchParams.get("title") || "";
  const query = searchParams.get("query") || "";

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const videoComments = useSelector((store) => store.videos.videoComments);
  const mainVideos = useSelector((store) => store.videos.mainVideos);
  let videoData = useSelector((store) => store.videos.playerVideo);

  useVideoComments(videoId);
  useMainVideos(title, query);

  const dispatch = useDispatch();

  if (!videoData) {
    videoData = mainVideos?.[title]?.find((data) => data.id === videoId);
  }

  if (!videoData || !videoComments || !videoId) return null;

  const { title: videoTitle, publishTime } = videoData.searchData.snippet;
  const { duration } = videoData.contentDetails;
  const { viewCount, likeCount, commentCount } = videoData.statistics;
  const recommendedVideos =
    mainVideos?.[title]?.filter((data) => data.id !== videoId) || [];

  return (
    <main className={`p-3 sm:p-4 md:p-6 ${isMenuOpen ? "ml-16 xl:ml-44" : ""}`}>
      <div className="mx-auto flex max-w-[1600px] flex-col gap-5 sm:gap-6 xl:flex-row">
        <section className="min-w-0 flex-1">
          <div className="mx-auto aspect-video w-full overflow-hidden rounded-xl bg-black shadow-[0_12px_32px_rgba(15,23,42,0.18)] sm:rounded-2xl xl:w-[min(100%,calc(62svh*16/9))] xl:max-w-[56rem]">
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

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-purple-100 bg-purple-50 px-4 py-3">
              <h2 className="text-base font-bold text-slate-900">Up next</h2>
            </div>
            <div className="h-80 space-y-3 overflow-y-auto p-3 pr-2 sm:h-96 xl:h-[calc(100svh-8rem)] [scrollbar-color:#a78bfa_transparent] scrollbar-width-thin [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-purple-300 [&::-webkit-scrollbar-thumb]:hover:bg-purple-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5">
              {recommendedVideos.map((data) => (
                <Link
                  className="block max-w-full overflow-hidden rounded-lg [&>div]:w-full"
                  key={data.id}
                  onClick={() => dispatch(removeLiveComments())}
                  to={`/watch?v=${data.id}&title=${encodeURIComponent(title)}&query=${encodeURIComponent(query)}`}
                >
                  <VideoCard props={data} />
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default WatchPlayer;
