import { Search } from "lucide-react";

const SearchSuggestionCard = ({ searchSuggestions }) => {
  return (
    searchSuggestions && (
      <div className="absolute left-1/2 top-16 z-10 hidden w-full max-w-180 -translate-x-1/2 px-8 md:block sm:top-17.5">
        <ul className="overflow-hidden rounded-2xl border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-800 dark:bg-gray-900">
          {searchSuggestions?.map((data) => (
            <li key={data.id.videoId}>
              <button className="flex w-full items-center gap-3 px-5 py-2.5 text-left text-[15px] text-gray-800 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                <Search
                  size={16}
                  className="shrink-0 text-gray-400 dark:text-gray-500"
                />
                <img
                  alt="search thumbnail"
                  src="data.snippet.thumbnail.small"
                />
                <span className="truncate">{data.snippet.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default SearchSuggestionCard;
