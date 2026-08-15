import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import { Search, Moon, Menu, Bell, CircleUserRound, Mic } from "lucide-react";
import { toggleMenu } from "../../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="sticky top-0 z-50 h-16 select-none border-b border-slate-200 bg-white shadow-sm">
      <div className="flex h-full items-center justify-between gap-2 px-3 sm:px-6">
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <button
            className="cursor-pointer rounded-full p-2 hover:bg-gray-100"
            onClick={() => dispatch(toggleMenu())}
          >
            <Menu size={22} />
          </button>

          <Link to="/">
            <img
              src={logo}
              alt="DevTube"
              className="h-10 w-12 cursor-pointer rounded-xl bg-green-100 p-1 object-contain shadow-sm sm:h-11 sm:w-16"
            />
          </Link>
        </div>

        <div className="hidden min-w-0 flex-1 items-center md:mx-4 md:flex lg:mx-10 lg:max-w-2xl">
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Search programming videos..."
              className="flex-1 h-11 border border-gray-300 rounded-l-full px-5 outline-none focus:border-purple-500"
            />

            <button className="w-16 h-11 cursor-pointer border border-l-0 border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
              <Search size={20} />
            </button>
          </div>

          <button className="ml-3 h-11 cursor-pointer w-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
            <Mic size={20} />
          </button>
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button className="cursor-pointer rounded-full p-2 hover:bg-gray-100 md:hidden">
            <Search size={20} />
          </button>
          <button className="hidden cursor-pointer rounded-full p-2 hover:bg-gray-100 sm:block">
            <Moon size={21} />
          </button>

          <button className="hidden cursor-pointer rounded-full p-2 hover:bg-gray-100 sm:block">
            <Bell size={21} />
          </button>

          <button className="cursor-pointer rounded-full p-1.5 hover:bg-gray-100 sm:p-2">
            <CircleUserRound className="h-7 w-7 sm:h-[30px] sm:w-[30px]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
