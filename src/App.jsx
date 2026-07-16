import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./Components/Layout/Header";
import Body from "./Components/Main/Body";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
