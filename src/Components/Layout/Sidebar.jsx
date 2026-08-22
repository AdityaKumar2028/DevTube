import { useDispatch, useSelector } from "react-redux";
import { sidebarOptions } from "../../utils/Constants";
import { setMenuOption } from "../../utils/appSlice";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const selectedOption = useSelector((store) => store.app.selectedMenuOption);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSidebarOptionsClick(title, query) {
    dispatch(setMenuOption({ title, query }));
  }

  if (!isMenuOpen) return null;

  return (
    <aside className="fixed left-0 top-31 md:top-17.5 z-40 h-[calc(100svh-7.75rem)] md:h-[calc(100svh-4.375rem)] w-16 overflow-y-auto border-r border-gray-200 bg-white py-3 shadow-md md:w-min md:py-4 md:shadow-none">
      <ul className="px-2 md:px-3">
        {sidebarOptions.map((item) => (
          <li
            key={item.title}
            onClick={() => {
              handleSidebarOptionsClick(item.title, item.query);
              navigate("/");
            }}
            className={`mb-1 flex cursor-pointer items-center justify-center gap-0 rounded-xl px-3 py-3 text-sm md:justify-start md:gap-4 md:px-4 md:py-4 md:text-base
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
            <span className="hidden md:inline">{item.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
