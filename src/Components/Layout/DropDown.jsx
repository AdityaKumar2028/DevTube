import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaGlobe,
} from "react-icons/fa";

const DropDown = ({ setShowProfileMenu }) => {
  const profileLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AdityaKumar2028",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-linkedin-id",
      icon: FaLinkedin,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/your-leetcode-id",
      icon: FaCode,
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=adityakumar2k28@gmail.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl border border-gray-200 bg-white py-2 shadow-lg ring-1 ring-black/5 transition-all focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:ring-white/10">
      <div className="border-b border-gray-100 px-4 py-3 dark:border-gray-800">
        <p className="text-sm font-bold text-gray-900 dark:text-white">
          Aditya Kumar
        </p>
        <p className="truncate text-xs text-gray-500 dark:text-gray-400">
          adityakumar2k28@gmail.com
        </p>
      </div>

      <div className="py-1">
        {profileLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-purple-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-purple-400"
              onClick={() => setShowProfileMenu(false)} // This now correctly uses the prop
            >
              <Icon className="h-[18px] w-[18px]" />
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
