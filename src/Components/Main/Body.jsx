import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import { useMainVideos } from "../../hooks/useMainVideos";

const Body = () => {
  const selectedOption = useSelector((store) => store.app.selectedMenuOption);
  useMainVideos(selectedOption.title, selectedOption.query);
  return (
    <div className="body-container">
      <VideoContainer />
    </div>
  );
};

export default Body;
