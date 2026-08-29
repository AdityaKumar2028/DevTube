import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./Components/Layout/Header";
import Body from "./Components/Main/Body";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import WatchPlayer from "./Components/Watch/WatchPlayer";
import Sidebar from "./Components/Layout/Sidebar";
import SearchVideoContainer from "./Components/Search/SearchVideoContainer";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./Components/Layout/Footer";

// Keeps route changes from inheriting the previous page's scroll position.
const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, search]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <ScrollToTop />
          <Header />
          <Sidebar />

          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/watch" element={<WatchPlayer />} />
            <Route path="/search" element={<SearchVideoContainer />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
