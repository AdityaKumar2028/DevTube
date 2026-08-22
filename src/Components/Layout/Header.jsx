import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { Search, Moon, Menu, CircleUserRound, Mic } from "lucide-react";
import { toggleMenu } from "../../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSearchSuggestions } from "../../hooks/useSearchSuggestions";
import SearchSuggestionCard from "../Search/SuggestionCard";

const SearchBox = ({
  query,
  setQuery,
  showSuggestions,
  setShowSuggestions,
  suggestions,
  mobile = false,
}) => {
  const navigate = useNavigate();

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const shouldShow = showSuggestions && query.trim() && suggestions.length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center ${
        mobile ? "flex-1" : "w-full max-w-180"
      }`}
    >
      <div
        className={`flex w-full overflow-hidden border border-gray-300 bg-white
        focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600
        dark:border-gray-700 dark:bg-gray-900 dark:focus-within:border-purple-500
        dark:focus-within:ring-purple-500 ${
          mobile ? "rounded-full" : "rounded-l-full"
        }`}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={handleBlur}
          placeholder={mobile ? "Search..." : "Search programming videos..."}
          className={`w-full bg-transparent text-gray-900 outline-none
          placeholder-gray-500 dark:text-gray-100 ${
            mobile ? "h-10 px-4" : "h-11 px-5"
          }`}
        />

        <button
          type="submit"
          className={`flex shrink-0 items-center justify-center text-gray-600
          dark:text-gray-300 ${
            mobile
              ? "h-10 w-11"
              : "h-11 w-16 rounded-r-full border border-l-0 border-gray-300 bg-gray-50 hover:bg-purple-50 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-800"
          }`}
        >
          <Search size={mobile ? 20 : 20} />
        </button>
      </div>

      {shouldShow && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2">
          <SearchSuggestionCard searchSuggestions={suggestions} />
        </div>
      )}
    </form>
  );
};

const Header = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useSearchSuggestions(query);

  const searchSuggestions = useSelector(
    (store) => store.search.searchSuggestions,
  );

  const suggestions = searchSuggestions[query] || [];

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
          {/* Main Header */}
          <div className="flex h-16 items-center justify-between gap-3 px-3 sm:h-17.5 sm:px-6">
            {/* Left */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <button
                onClick={() => dispatch(toggleMenu())}
                className="rounded-full p-2.5 text-gray-600 hover:bg-gray-100
                dark:text-gray-300 dark:hover:bg-gray-800"
                aria-label="Toggle Menu"
              >
                <Menu size={24} />
              </button>

              <Link to="/">
                <img
                  src={logo}
                  alt="DevTube"
                  className="h-8 object-contain sm:h-10"
                />
              </Link>
            </div>

            {/* Desktop Search */}
            <div className="hidden flex-1 items-center justify-center px-8 md:flex">
              <SearchBox
                query={query}
                setQuery={setQuery}
                showSuggestions={showSuggestions}
                setShowSuggestions={setShowSuggestions}
                suggestions={suggestions}
              />

              <button
                className="ml-4 flex h-11 w-11 shrink-0 items-center justify-center
                rounded-full bg-gray-100 text-gray-700 hover:bg-purple-100
                hover:text-purple-700 dark:bg-gray-800 dark:text-gray-300"
                aria-label="Search with voice"
              >
                <Mic size={20} />
              </button>
            </div>

            {/* Right */}
            <div className="flex shrink-0 items-center gap-1 sm:gap-3">
              <button
                className="rounded-full p-2.5 text-gray-600 hover:bg-gray-100
                dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <Moon size={24} />
              </button>

              <button
                className="rounded-full p-1 text-purple-600 hover:bg-purple-50
                dark:text-purple-400 dark:hover:bg-gray-800"
              >
                <CircleUserRound size={32} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="flex items-center gap-2 border-t border-gray-100 px-3 pb-2.5 pt-1.5 md:hidden">
            <SearchBox
              mobile
              query={query}
              setQuery={setQuery}
              showSuggestions={showSuggestions}
              setShowSuggestions={setShowSuggestions}
              suggestions={suggestions}
            />

            <button
              className="flex h-10 w-10 shrink-0 items-center justify-center
              rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800
              dark:text-gray-300"
              aria-label="Search with voice"
            >
              <Mic size={18} />
            </button>
          </div>
        </div>
      </header>

      <div className="h-31 w-full shrink-0 md:h-17.5" />
    </>
  );
};

export default Header;
