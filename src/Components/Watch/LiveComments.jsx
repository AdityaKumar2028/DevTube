const LiveComments = ({ commentData }) => (
  <article className="flex gap-2.5 rounded-xl px-3 py-2 transition-colors hover:bg-purple-50 dark:hover:bg-slate-800">
    <img
      src={commentData.avatar}
      alt={`${commentData.user}'s avatar`}
      className="h-8 w-8 shrink-0 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
    />
    <div className="min-w-0 text-sm leading-5">
      <span className="mr-2 font-semibold text-slate-800 dark:text-slate-100">
        {commentData.user}
      </span>
      <span className="wrap-break-word text-slate-700 dark:text-slate-300">{commentData.text}</span>
    </div>
  </article>
);

export default LiveComments;
