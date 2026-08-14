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
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-min border-r border-gray-200 bg-white py-4 z-10">
      <ul className="px-3">
        {sidebarOptions.map((item) => (
          <li
            key={item.title}
            onClick={() => {
              handleSidebarOptionsClick(item.title, item.query);
              navigate("/");
            }}
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
