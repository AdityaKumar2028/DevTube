import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import { useMainVideos } from "../../hooks/useMainVideos";
import { useLayoutEffect } from "react";

const Body = () => {
  const selectedOption = useSelector((store) => store.app.selectedMenuOption);
  useMainVideos(selectedOption.title, selectedOption.query);

  // A sidebar selection can update this view without changing the URL.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [selectedOption.title, selectedOption.query]);

  return (
    <div className="body-container">
      <VideoContainer />
    </div>
  );
};

export default Body;
