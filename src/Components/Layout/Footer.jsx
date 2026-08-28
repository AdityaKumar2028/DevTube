import { GitFork } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";

const features = [
  "API Polling",
  "Debouncing",
  "Redux Caching",
  "Nested Comments",
];

const Footer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <footer
      className={`mt-auto w-auto border-t border-slate-200 bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-950/80 ${
        isMenuOpen ? "ml-16 xl:ml-48" : "ml-0"
      }`}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 lg:py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <img
                src={logo}
                alt="DevTube"
                className="h-6 w-6 object-contain sm:h-8 sm:w-8"
              />
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
                DevTube
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              A high-performance video streaming platform built to demonstrate
              advanced frontend architecture, state management, and seamless
              user experiences.
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-slate-100">
              Technical Architecture
            </h3>
            <ul className="flex flex-wrap gap-2 md:justify-end md:gap-3">
              {features.map((feat) => (
                <li
                  key={feat}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                >
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
            © {new Date().getFullYear()} DevTube. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400 sm:text-sm">
            <span>Developed by Aditya Kumar</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href="https://github.com/AdityaKumar2028"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 transition-colors hover:text-purple-600 dark:hover:text-purple-400"
            >
              <GitFork
                size={16}
                className="text-slate-400 transition-colors group-hover:text-purple-600 dark:text-slate-500 dark:group-hover:text-purple-400"
              />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
