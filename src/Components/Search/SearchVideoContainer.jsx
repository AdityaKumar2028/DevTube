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
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="mb-5 text-sm font-medium text-gray-500">
          {searchResult.length} results for{" "}
          <span className="text-gray-900">"{query}"</span>
        </p>

        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchResult.map((video) => (
            <Link
              to={`/watch?v=${video.id}&title=${video.id}&query=${encodeURIComponent(
                video.searchData?.snippet?.title,
              )}`}
              className="group block min-w-0 overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-md"
              key={video.id}
            >
              <VideoCard props={video} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchVideoContainer;
