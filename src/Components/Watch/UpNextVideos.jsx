import { useDispatch, useSelector } from "react-redux";
import { removeLiveComments } from "../../utils/liveCommentsSlice";
import { Link } from "react-router-dom";
import VideoCard from "../Layout/VideoCard";
import { removeLiveComments } from "../../utils/liveCommentsSlice";

const UpNextVideos = ({ props }) => {
  const recommendedVideos = useSelector(
    (store) => store.videos.watchNextVideos,
  );
  const dispatch = useDispatch();
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-purple-100 bg-purple-50 px-4 py-3">
        <h2 className="text-base font-bold text-slate-900">Up next</h2>
      </div>
      <div className="h-80 space-y-3 overflow-y-auto p-3 pr-2 sm:h-96 xl:h-[calc(100svh-8rem)] [scrollbar-color:#a78bfa_transparent] scrollbar-width-thin [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-purple-300 [&::-webkit-scrollbar-thumb]:hover:bg-purple-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5">
        {recommendedVideos.items.map((data) => (
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
  );
};

export default UpNextVideos;
