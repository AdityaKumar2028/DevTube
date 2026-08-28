import { Link, useSearchParams } from "react-router-dom";
import { useSearchResults } from "../../hooks/useSearchResults";
import { useSelector } from "react-redux";
import VideoCard from "../Layout/VideoCard";
import { SearchContainerShimmer } from "../Shimmer";

const SearchVideoContainer = () => {
  const [params] = useSearchParams();
  const query = params.get("q");

  useSearchResults(query);

  const searchResult = useSelector((store) => store.search.searchResults);
  const isNavBarOpen = useSelector((store) => store.app.isMenuOpen);

  if (!searchResult) {
    return <SearchContainerShimmer isSidebarOpen={isNavBarOpen} />;
  }

  console.log(searchResult);

  return (
    <div
      className={`min-h-screen bg-white transition-all duration-300 dark:bg-slate-950 ${
        isNavBarOpen ? "ml-16 md:ml-48" : "ml-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="mb-5 text-sm font-medium text-gray-500 dark:text-gray-400">
          {searchResult.items.length} results for{" "}
          <span className="text-gray-900 dark:text-gray-100">"{query}"</span>
        </p>

        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {searchResult.items.map((video) => (
            <Link
              to={`/watch?v=${video.id}&query=${encodeURIComponent(
                video?.snippet?.title,
              )}`}
              className="group block min-w-0 overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
              key={video.id}
            >
              <VideoCard props={video} key={video.id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchVideoContainer;
