import { useDispatch, useSelector } from "react-redux";
import { removeLiveComments } from "../../utils/liveCommentsSlice";
import { Link } from "react-router-dom";
import VideoCard from "../Layout/VideoCard";
import { useWatchNextVideos } from "../../hooks/useWatchNextVideos";
import { UpNextVideosShimmer } from "../Shimmer";

const UpNextVideos = ({ query, videoId }) => {
  console.log(videoId);
  const dispatch = useDispatch();
  useWatchNextVideos(query);
  const recommendedVideos = useSelector(
    (store) => store.videos.watchNextVideos,
  );
  if (!recommendedVideos) return <UpNextVideosShimmer />;
  console.log(videoId);

  return (
    <section>
      <div className="border-b border-purple-100 bg-purple-50 px-4 py-3 dark:border-purple-900 dark:bg-purple-950/60">
        <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">Up next</h2>
      </div>
      <div className="h-80 space-y-3 overflow-y-auto p-3 pr-2 sm:h-96 xl:h-[calc(100svh-8rem)] [scrollbar-color:#a78bfa_transparent] scrollbar-width-thin [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-purple-300 [&::-webkit-scrollbar-thumb]:hover:bg-purple-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5">
        {recommendedVideos?.items
          .filter((video) => video.id != videoId)
          .map((data) => (
            <Link
              className="block max-w-full overflow-hidden rounded-lg [&>div]:w-full"
              key={data.id}
              onClick={() => dispatch(removeLiveComments())}
              to={`/watch?v=${data.id}&query=${encodeURIComponent(query)}`}
            >
              <VideoCard props={data} />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default UpNextVideos;
