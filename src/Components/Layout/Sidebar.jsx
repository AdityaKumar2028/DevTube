import { useSelector } from "react-redux";
import { sidebarOptions } from "../../utils/Constants";
import { useEffect, useState } from "react";
import { useMainVideos } from "../../hooks/useMainVideos";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [selectedOption, setSelectedOption] = useState({
    title: "Home",
    query: "Programming",
  });
  useEffect(() => {
    handleSidebarOptionsClick("Home", "Programming");
  }, []);
  useMainVideos(selectedOption.query);
  function handleSidebarOptionsClick(title, query) {
    setSelectedOption({ title, query });
  }

  if (!isMenuOpen) return null;

  return (
    <aside className="sticky top-16 h-[calc(100vh-64px)] w-min overflow-y-auto border-r border-gray-200 bg-white py-4 shadow-lg select-none">
      <ul className="px-3">
        {sidebarOptions.map((item) => (
          <li
            key={item.title}
            onClick={() => handleSidebarOptionsClick(item.title, item.query)}
            className={`flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer mb-1
              transition-all duration-200 ease-out
              hover:scale-[1.03] hover:translate-x-1 hover:shadow-md
              active:scale-[0.97]
              ${
                selectedOption.title === item.title
                  ? "bg-green-400 text-white shadow-md scale-[1.02]"
                  : "hover:bg-purple-400 hover:text-white"
              }`}
          >
            <item.icon
              size={22}
              className="transition-transform duration-200 group-hover:rotate-3"
            />
            <span className="">{item.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
