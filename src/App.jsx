import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./Components/Layout/Header";
import Body from "./Components/Main/Body";
import "./index.css";
import { Route } from "lucide-react";
import { WatchPlayer } from "./Components/Watch Player/WatchPlayer";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <Route path="/" element={<Body />} />
      <Route path="/watch" element={<WatchPlayer />} />
    </Provider>
  );
}

export default App;
