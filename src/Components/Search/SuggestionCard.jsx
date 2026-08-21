import { Search } from "lucide-react";
import he from "he";
import { Link } from "react-router-dom";

const SearchSuggestionCard = ({ searchSuggestions }) => {
  if (!searchSuggestions || searchSuggestions.length === 0) return null;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <ul className="max-h-[60vh] overflow-y-auto py-2 sm:py-3">
        {searchSuggestions.map((data) => (
          <Link
            to={`/watch?v=${data.id.videoId}&title=${data.id.videoId}&query=${encodeURIComponent(data.snippet?.title)}`}
            className="block min-w-0"
            key={data.id.videoId}
          >
            <li>
              <button className="flex w-full items-center gap-3 px-4 py-2 text-left transition-colors outline-none hover:bg-gray-100 focus:bg-gray-100 sm:gap-4 sm:px-5 sm:py-2.5 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                <Search
                  size={18}
                  className="shrink-0 text-gray-400 dark:text-gray-500"
                />

                {data.snippet?.thumbnails?.default?.url && (
                  <img
                    alt="thumbnail"
                    src={data.snippet.thumbnails.default.url}
                    className="h-8 w-14 shrink-0 rounded object-cover shadow-sm sm:h-9 sm:w-16"
                  />
                )}

                <span className="line-clamp-1 flex-1 text-sm font-medium text-gray-800 sm:text-[15px] dark:text-gray-200">
                  {he.decode(data.snippet?.title || "")}
                </span>
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggestionCard;
