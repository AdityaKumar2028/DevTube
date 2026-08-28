const feedShimmerItems = Array.from({ length: 15 }, (_, index) => index);
const searchShimmerItems = Array.from({ length: 9 }, (_, index) => index);
const upNextShimmerItems = Array.from({ length: 4 }, (_, index) => index);

const ShimmerBlock = ({ className }) => (
  <div
    aria-hidden="true"
    className={`animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800 ${className}`}
  />
);

const LoadingLabel = () => <span className="sr-only">Loading content</span>;

const VideoCardShimmer = () => (
  <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-900">
    <ShimmerBlock className="aspect-video w-full" />
    <ShimmerBlock className="mt-3 h-4 w-11/12" />
    <ShimmerBlock className="mt-2 h-4 w-8/12" />
    <ShimmerBlock className="mt-3 h-3 w-5/12" />
  </div>
);

export const VideoContainerShimmer = ({ isSidebarOpen }) => (
  <div
    role="status"
    className={`min-h-screen bg-white transition-all duration-300 dark:bg-slate-950 ${
      isSidebarOpen ? "ml-16 md:ml-48" : "ml-0"
    }`}
  >
    <LoadingLabel />
    <div className="grid grid-cols-1 gap-4 px-3 py-4 min-[480px]:grid-cols-2 sm:gap-5 sm:px-5 md:grid-cols-3 md:px-6 md:py-5 xl:grid-cols-4 2xl:grid-cols-5">
      {feedShimmerItems.map((item) => (
        <VideoCardShimmer key={item} />
      ))}
    </div>
  </div>
);

export const SearchContainerShimmer = ({ isSidebarOpen }) => (
  <div
    role="status"
    className={`min-h-screen bg-white transition-all duration-300 dark:bg-slate-950 ${
      isSidebarOpen ? "ml-16 md:ml-48" : "ml-0"
    }`}
  >
    <LoadingLabel />
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <ShimmerBlock className="mb-6 h-4 w-52" />
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {searchShimmerItems.map((item) => (
          <VideoCardShimmer key={item} />
        ))}
      </div>
    </div>
  </div>
);

export const UpNextVideosShimmer = () => (
  <section role="status">
    <LoadingLabel />
    <div className="border-b border-purple-100 bg-purple-50 px-4 py-3 dark:border-purple-900 dark:bg-purple-950/60">
      <ShimmerBlock className="h-5 w-20 dark:bg-purple-900" />
    </div>
    <div className="space-y-3 p-3">
      {upNextShimmerItems.map((item) => (
        <div key={item} className="flex gap-3">
          <ShimmerBlock className="h-16 w-28 shrink-0" />
          <div className="flex-1 space-y-2 pt-1">
            <ShimmerBlock className="h-3 w-full" />
            <ShimmerBlock className="h-3 w-8/12" />
            <ShimmerBlock className="h-2.5 w-5/12" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const WatchPlayerShimmer = ({ isSidebarOpen }) => (
  <main
    role="status"
    className={`min-h-screen bg-white p-3 transition-all duration-300 dark:bg-slate-950 sm:p-4 md:p-6 ${
      isSidebarOpen ? "ml-16 xl:ml-44" : ""
    }`}
  >
    <LoadingLabel />
    <div className="mx-auto flex max-w-[1600px] flex-col gap-5 sm:gap-6 xl:flex-row xl:items-start">
      <section className="min-w-0 flex-1">
        <ShimmerBlock className="aspect-video w-full rounded-xl sm:rounded-2xl" />
        <ShimmerBlock className="mt-4 h-7 w-10/12" />
        <ShimmerBlock className="mt-3 h-5 w-8/12" />
        <div className="mt-8 hidden space-y-5 md:block">
          <ShimmerBlock className="h-6 w-32" />
          {upNextShimmerItems.map((item) => (
            <div key={item} className="flex gap-3">
              <ShimmerBlock className="h-10 w-10 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <ShimmerBlock className="h-4 w-28" />
                <ShimmerBlock className="h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <aside className="flex w-full shrink-0 flex-col gap-5 xl:w-[350px] 2xl:w-[400px]">
        <ShimmerBlock className="h-80 w-full rounded-xl sm:h-96 sm:rounded-2xl" />
        <div className="rounded-2xl border border-slate-200 p-2 dark:border-slate-700 sm:p-4">
          <UpNextVideosShimmer />
        </div>
      </aside>
    </div>
  </main>
);
