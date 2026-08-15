const LiveComments = ({ commentData }) => {
  const { avatar, text, user } = commentData;
  return (
    <div className="flex gap-2 px-3 py-2 hover:bg-gray-100">
      <img src={avatar} alt={user} className="h-8 w-8 rounded-full" />
      <div className="text-sm">
        <span className="font-semibold mr-2">{user}</span>
        <span className="text-gray-700">{text}</span>
      </div>
    </div>
  );
};

export default LiveComments;
