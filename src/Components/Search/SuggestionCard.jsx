import { Search } from "lucide-react";
import he from "he";
import { Link } from "react-router-dom";

const SearchSuggestionCard = ({ searchSuggestions }) => {
  if (!searchSuggestions || searchSuggestions.length === 0) return null;

  return (
    <div className="absolute left-1/2 top-16 z-50 hidden w-full max-w-180 -translate-x-1/2 px-8 md:block sm:top-[4.5rem]">
      <ul className="overflow-hidden rounded-xl border border-gray-200 bg-white py-3 shadow-xl dark:border-gray-800 dark:bg-gray-900">
        {searchSuggestions.map((data) => (
          <Link
            to={`/watch?v=${data.id.videoId}&title=${data.id.videoId}&query=${encodeURIComponent(data.snippet?.title)}`}
            className="min-w-0"
            key={data.id.videoId}
          >
            <li>
              <button className="flex w-full items-center gap-4 px-5 py-2.5 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 outline-none">
                <Search
                  size={18}
                  className="shrink-0 text-gray-400 dark:text-gray-500"
                />

                {data.snippet?.thumbnails?.default?.url && (
                  <img
                    alt="thumbnail"
                    src={data.snippet.thumbnails.default.url}
                    className="h-9 w-16 shrink-0 rounded object-cover shadow-sm"
                  />
                )}

                <span className="line-clamp-1 flex-1 text-[15px] font-medium text-gray-800 dark:text-gray-200">
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
