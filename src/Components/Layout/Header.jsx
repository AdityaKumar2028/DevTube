import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { Search, Moon, Menu, CircleUserRound, Mic } from "lucide-react";
import { toggleMenu } from "../../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSearchSuggestions } from "../../hooks/useSearchSuggestions";
import SearchSuggestionCard from "../Search/SuggestionCard";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useSearchSuggestions(query);
  const searchSuggestions = useSelector(
    (store) => store.search.searchSuggestions,
  );

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  const currentSuggestions = searchSuggestions[query] || [];
  const shouldShowSuggestions =
    showSuggestions && query.trim() !== "" && currentSuggestions.length > 0;

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="w-full border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
          <div className="flex h-16 items-center justify-between gap-3 px-3 sm:h-17.5 sm:px-6">
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <button
                className="rounded-full p-2.5 text-gray-600 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => dispatch(toggleMenu())}
                aria-label="Toggle Menu"
              >
                <Menu size={24} className="sm:size-7" />
              </button>

              <Link to="/" className="flex items-center gap-1">
                <img
                  src={logo}
                  alt="DevTube"
                  className="h-8 cursor-pointer object-contain sm:h-10"
                />
              </Link>
            </div>

            <div className="hidden max-w-180 flex-1 items-center justify-center px-8 md:flex">
              <form
                className="relative flex w-full items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate(`/search?q=${encodeURIComponent(query)}`);
                }}
              >
                <div className="flex w-full overflow-hidden rounded-l-full border border-gray-300 bg-white transition-all focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600 dark:border-gray-700 dark:bg-gray-900 dark:focus-within:border-purple-500 dark:focus-within:ring-purple-500">
                  <input
                    type="text"
                    value={query}
                    placeholder="Search programming videos..."
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={handleBlur}
                    className="h-11 w-full bg-transparent px-5 py-2 text-[15px] text-gray-900 placeholder-gray-500 outline-none dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
                <button
                  className="flex h-11 w-16 shrink-0 items-center justify-center rounded-r-full border border-l-0 border-gray-300 bg-gray-50 text-gray-600 transition-colors hover:bg-purple-50 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  aria-label="Search"
                >
                  <Search size={20} strokeWidth={2.5} />
                </button>

                {shouldShowSuggestions && (
                  <div className="absolute left-0 right-0 top-full z-50 mt-2">
                    <SearchSuggestionCard
                      searchSuggestions={currentSuggestions}
                    />
                  </div>
                )}
              </form>

              <button
                className="ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-purple-100 hover:text-purple-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                aria-label="Search with voice"
              >
                <Mic size={20} />
              </button>
            </div>

            <div className="flex shrink-0 items-center gap-1 sm:gap-3">
              <button className="rounded-full p-2.5 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
                <Moon size={24} className="sm:size-6" />
              </button>

              <button className="ml-1 rounded-full p-1 text-purple-600 transition-colors hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-gray-800">
                <CircleUserRound size={32} className="stroke-[1.5] sm:size-9" />
              </button>
            </div>
          </div>

          <div className="relative flex items-center gap-2 border-t border-gray-100 px-3 pb-2.5 pt-1.5 md:hidden dark:border-gray-900">
            <div className="flex flex-1 items-center overflow-hidden rounded-full border border-gray-300 bg-white focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600 dark:border-gray-700 dark:bg-gray-900 dark:focus-within:border-purple-500 dark:focus-within:ring-purple-500">
              <input
                type="text"
                value={query}
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={handleBlur}
                className="h-10 w-full bg-transparent px-4 text-[15px] text-gray-900 placeholder-gray-500 outline-none dark:text-gray-100 dark:placeholder-gray-500"
              />
              <button
                className="flex h-10 w-11 shrink-0 items-center justify-center text-gray-600 dark:text-gray-300"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
            <button
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              aria-label="Search with voice"
            >
              <Mic size={18} />
            </button>

            {shouldShowSuggestions && (
              <div className="absolute inset-x-3 top-full z-50 mt-2">
                <SearchSuggestionCard searchSuggestions={currentSuggestions} />
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="h-31 md:h-17.5 w-full shrink-0" aria-hidden="true"></div>
    </>
  );
};

export default Header;
