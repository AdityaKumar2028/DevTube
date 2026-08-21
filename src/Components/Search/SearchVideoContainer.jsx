import { Link, useSearchParams } from "react-router-dom";
import { useSearchResults } from "../../hooks/useSearchResults";
import { useSelector } from "react-redux";
import VideoCard from "../Layout/VideoCard";

const SearchVideoContainer = () => {
  const [params] = useSearchParams();
  const query = params.get("q");

  useSearchResults(query);

  const searchResult = useSelector((store) => store.search.searchResults);

  if (!searchResult) return null;

  return (
    <div
      className={`min-h-screen bg-white transition-all duration-30
        `}
    >
      <div className="w-full">
        <div className="grid grid-cols-2 justify-center items-center gap-4 m-10">
          {searchResult?.map((video) => {
            console.log(video.id, video.searchData?.snippet?.title);
            return (
              <Link
                to={`/watch?v=${video.id}&title=${video.id}&query=${encodeURIComponent(video.searchData?.snippet?.title)}`}
                className="block min-w-0"
                key={video.id}
              >
                <VideoCard key={video.id} props={video} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchVideoContainer;
