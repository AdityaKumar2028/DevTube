import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { Search, Moon, Menu, CircleUserRound, Mic } from "lucide-react";
import { toggleMenu } from "../../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
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
    if (query.length) navigate(`/search?q=${encodeURIComponent(query)}`);
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
        dark:focus-within:ring-purple-500 rounded-full`}
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
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // Ref to hold the speech recognition instance
  const recognitionRef = useRef(null);

  useSearchSuggestions(query);

  const searchSuggestions = useSelector(
    (store) => store.search.searchSuggestions,
  );

  const suggestions = searchSuggestions[query] || [];

  const handleVoiceSearch = () => {
    // If already listening, stop the recognition manually
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice search. Try Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      // Automatically trigger search after speech is transcribed
      navigate(`/search?q=${encodeURIComponent(transcript)}`);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full shadow-md">
        <div className="border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
          <div className="flex h-16 items-center justify-between gap-3 px-3 sm:h-17.5 sm:px-6">
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <button
                onClick={() => dispatch(toggleMenu())}
                className="rounded-full p-2.5 text-gray-600 hover:bg-gray-100
                dark:text-gray-300 dark:hover:bg-gray-800"
                aria-label="Toggle Menu"
              >
                <Menu size={24} />
              </button>

              <Link to="/" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="DevTube"
                  className="h-8 object-contain sm:h-10"
                />
                <h1 className="text-xl font-bold text-purple-600">DevTube</h1>
              </Link>
            </div>

            <div className="hidden flex-1 items-center justify-center px-8 md:flex">
              <SearchBox
                query={query}
                setQuery={setQuery}
                showSuggestions={showSuggestions}
                setShowSuggestions={setShowSuggestions}
                suggestions={suggestions}
              />

              <button
                onClick={handleVoiceSearch}
                className={`ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                  isListening
                    ? "animate-pulse bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 dark:bg-gray-800 dark:text-gray-300"
                }`}
                title={isListening ? "Listening..." : "Search with voice"}
                aria-label="Search with voice"
              >
                <Mic size={20} />
              </button>
            </div>

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
              onClick={handleVoiceSearch}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                isListening
                  ? "animate-pulse bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
              title={isListening ? "Listening..." : "Search with voice"}
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
