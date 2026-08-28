import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { Search, Moon, Sun, Menu, CircleUserRound, Mic } from "lucide-react";
import { toggleMenu } from "../../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSearchSuggestions } from "../../hooks/useSearchSuggestions";
import SearchSuggestionCard from "../Search/SuggestionCard";
import { useTheme } from "../../hooks/useTheme";
import DropDown from "./DropDown"; // Importing your new DropDown component

const iconBtn =
  "rounded-full p-2.5 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800";

const MicButton = ({ isListening, onClick, size = 20, className = "" }) => (
  <button
    onClick={onClick}
    title={isListening ? "Listening..." : "Search with voice"}
    aria-label="Search with voice"
    className={`flex shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
      isListening
        ? "animate-pulse bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400"
        : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 dark:bg-gray-800 dark:text-gray-300"
    } ${className}`}
  >
    <Mic size={size} />
  </button>
);

const SearchBox = ({
  query,
  setQuery,
  showSuggestions,
  setShowSuggestions,
  suggestions,
  mobile = false,
}) => {
  const navigate = useNavigate();
  const handleBlur = () => setTimeout(() => setShowSuggestions(false), 200);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (query.length) navigate(`/search?q=${encodeURIComponent(query)}`);
  };
  const shouldShow = showSuggestions && query.trim() && suggestions.length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center ${mobile ? "flex-1" : "w-full max-w-180"}`}
    >
      <div className="flex w-full overflow-hidden rounded-full border border-gray-300 bg-white focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600 dark:border-gray-700 dark:bg-gray-900 dark:focus-within:border-purple-500 dark:focus-within:ring-purple-500">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={handleBlur}
          placeholder={mobile ? "Search..." : "Search programming videos..."}
          className={`w-full bg-transparent text-gray-900 outline-none placeholder-gray-500 dark:text-gray-100 ${
            mobile ? "h-10 px-4" : "h-11 px-5"
          }`}
        />
        <button
          type="submit"
          className={`flex shrink-0 items-center justify-center text-gray-600 dark:text-gray-300 ${
            mobile
              ? "h-10 w-11"
              : "h-11 w-16 rounded-r-full border border-l-0 border-gray-300 bg-gray-50 hover:bg-purple-50 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-800"
          }`}
        >
          <Search size={20} />
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
  const recognitionRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  // Dropdown state and ref
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const dropdownRef = useRef(null);

  useSearchSuggestions(query);
  const searchSuggestions = useSelector(
    (store) => store.search.searchSuggestions,
  );
  const suggestions = searchSuggestions[query] || [];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleVoiceSearch = () => {
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
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setQuery(transcript);
      navigate(`/search?q=${encodeURIComponent(transcript)}`);
    };
    recognition.onerror = (e) => {
      console.error("Speech recognition error", e.error);
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const searchBoxProps = {
    query,
    setQuery,
    showSuggestions,
    setShowSuggestions,
    suggestions,
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full shadow-md">
        <div className="border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
          <div className="flex h-16 items-center justify-between gap-3 px-3 sm:h-17.5 sm:px-6">
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <button
                onClick={() => dispatch(toggleMenu())}
                className={iconBtn}
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
              <SearchBox {...searchBoxProps} />
              <MicButton
                isListening={isListening}
                onClick={handleVoiceSearch}
                className="ml-4 h-11 w-11"
              />
            </div>

            <div className="flex shrink-0 items-center gap-1 sm:gap-3">
              <button
                onClick={toggleTheme}
                className={iconBtn}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                aria-pressed={theme === "dark"}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              {/* Profile Dropdown Wrapper */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="rounded-full p-1 text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-gray-800 transition-colors"
                >
                  <CircleUserRound size={32} strokeWidth={1.5} />
                </button>

                {showProfileMenu && (
                  <DropDown setShowProfileMenu={setShowProfileMenu} />
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-gray-100 px-3 pb-2.5 pt-1.5 dark:border-gray-800 md:hidden">
            <SearchBox {...searchBoxProps} mobile />
            <MicButton
              isListening={isListening}
              onClick={handleVoiceSearch}
              size={18}
              className="h-10 w-10"
            />
          </div>
        </div>
      </header>

      <div className="h-31 w-full shrink-0 md:h-17.5" />
    </>
  );
};

export default Header;
