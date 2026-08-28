import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./Components/Layout/Header";
import Body from "./Components/Main/Body";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchPlayer from "./Components/Watch/WatchPlayer";
import Sidebar from "./Components/Layout/Sidebar";
import SearchVideoContainer from "./Components/Search/SearchVideoContainer";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
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
