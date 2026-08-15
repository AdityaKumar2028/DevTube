import { useEffect } from "react";
import {
  getRandomAvatar,
  getRandomComment,
  getRandomName,
} from "../../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addLiveComments } from "../../utils/liveCommentsSlice";
import LiveComments from "./LiveComments";
const LiveChat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(
      () =>
        dispatch(
          addLiveComments({
            user: getRandomName(),
            text: getRandomComment(),
            avatar: getRandomAvatar(),
          }),
        ),
      2000,
    );
    return () => clearInterval(i);
  }, [dispatch]);

  const liveComments = useSelector((store) => store.liveCmts.comments);
  return (
    <>
      <div className="h-full overflow-y-auto flex flex-col bg-white">
        {liveComments.map((data) => (
          <LiveComments key={data.id} commentData={data} />
        ))}
      </div>
      <div className="sendComment"></div>
    </>
  );
};

export default LiveChat;
