import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import { Search, Moon, Menu, Bell, CircleUserRound, Mic } from "lucide-react";
import { toggleMenu } from "../../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="sticky top-0 z-50 h-16 bg-white border-b-gray-800s shadow-sm select-none">
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            onClick={() => dispatch(toggleMenu())}
          >
            <Menu size={22} />
          </button>

          <Link to="/">
            <img
              src={logo}
              alt="DevTube"
              className="h-13 rounded-2xl bg-green-200 w-20 shadow cursor-pointer object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center flex-1 max-w-2xl mx-10">
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

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <Moon size={21} />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <Bell size={21} />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <CircleUserRound size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
