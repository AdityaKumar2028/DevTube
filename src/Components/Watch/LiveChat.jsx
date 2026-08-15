import VideoComment from "./VideoComment";
import { useEffect } from "react";
import {
  getRandomAvatar,
  getRandomComment,
  getRandomName,
} from "../../utils/Constants";
import { useDispatch } from "react-redux";
const LiveChat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(
      () =>
        dispatch({
          name: getRandomName(),
          text: getRandomComment(),
          avatar: getRandomAvatar(),
        }),
      2000,
    );
    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <div>
      <VideoComment
        commentData={{
          user: "Aditya Rao",
          text: "Rao Sahab On Top",
          avatar: "https://i.pravatar.cc/40?img=16",
          replies: [],
        }}
      />
    </div>
  );
};

export default LiveChat;
