import Sidebar from "../Layout/Sidebar";
import VideoContainer from "./videoContainer";
const Body = () => {
  return (
    <div className="body-container flex flex-row">
      <Sidebar />
      <VideoContainer />
    </div>
  );
};

export default Body;
