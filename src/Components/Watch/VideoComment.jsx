import { useState } from "react";
const VideoComment = ({ commentData }) => {
  const { avatar, text, user, replies } = commentData;
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="mt-3">
      <div className="flex gap-2.5 rounded-lg bg-gray-100 p-3 sm:gap-3">
        <img
          src={avatar}
          alt={user}
          className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-sm">{user}</h3>
          <p className="break-words text-sm text-gray-800 sm:text-base">{text}</p>
        </div>
      </div>
      {replies?.length > 0 && (
        <button
          className="mt-2 text-sm font-medium text-blue-600"
          onClick={() => setShowReplies((prev) => !prev)}
        >
          {showReplies ? "Hide Replies" : "Show Replies"}
        </button>
      )}
      {showReplies && replies?.length > 0 && (
        <div className="ml-3 mt-2 border-l-2 border-gray-300 pl-3 sm:ml-6 sm:pl-4">
          {replies.map((reply) => (
            <VideoComment key={reply.id} commentData={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoComment;
