import { useEffect, useRef, useState } from "react";
import {
  getRandomAvatar,
  getRandomComment,
  getRandomName,
} from "../../utils/Constants";
import { liveCommentsOffset } from "../../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addLiveComments,
  removeLiveComments,
} from "../../utils/liveCommentsSlice";
import LiveComments from "./LiveComments";
import liveChatAvatar from "../../assets/live-chat-avatar.png";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [chatMsg, setChatMsg] = useState("");
  const chatListRef = useRef(null);
  const liveComments = useSelector((store) => store.liveCmts.comments);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addLiveComments({
          user: getRandomName(),
          text: getRandomComment(),
          avatar: getRandomAvatar(),
          id: Date.now(),
        }),
      );
    }, liveCommentsOffset);
    return () => {
      dispatch(removeLiveComments());
      clearInterval(timer);
    };
  }, [dispatch]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!chatMsg.trim()) return;
    dispatch(
      addLiveComments({
        user: "Aditya Kumar",
        text: chatMsg,
        avatar: liveChatAvatar,
        id: Date.now(),
      }),
    );
    setChatMsg("");
    requestAnimationFrame(() => {
      chatListRef.current?.scrollTo({
        top: chatListRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  return (
    <section className="flex h-96 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex shrink-0 items-center justify-between border-b border-purple-100 bg-purple-50 px-4 py-3">
        <h2 className="text-base font-bold text-slate-900">Live chat</h2>
      </div>

      <div
        ref={chatListRef}
        className="flex flex-1 flex-col-reverse overflow-y-auto px-1 py-2 [scrollbar-color:#a78bfa_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-purple-300 [&::-webkit-scrollbar-thumb]:hover:bg-purple-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5"
      >
        <div className="flex flex-col">
          {liveComments.map((data) => (
            <LiveComments key={data.id} commentData={data} />
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSend}
        className="flex shrink-0 gap-2 border-t border-slate-200 bg-white px-3 py-3"
      >
        <input
          value={chatMsg}
          onChange={(e) => setChatMsg(e.target.value)}
          placeholder="Chat publicly..."
          className="min-w-0 flex-1 rounded-full bg-slate-100 px-4 py-2.5 text-sm text-slate-900 outline-none transition-shadow placeholder:text-slate-500 focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="rounded-full bg-purple-400 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
        >
          Send
        </button>
      </form>
    </section>
  );
};
export default LiveChat;
