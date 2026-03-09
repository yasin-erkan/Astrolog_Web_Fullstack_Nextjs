export default function BlogListLoading() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="h-9 w-32 rounded theme-bg opacity-80 animate-pulse mb-8" />
      <div className="flex flex-wrap gap-2 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-8 w-20 rounded-full theme-bg opacity-70 animate-pulse" />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-xl overflow-hidden theme-border border theme-bg">
            <div className="aspect-video theme-bg opacity-60 animate-pulse" />
            <div className="p-5 sm:p-6 space-y-3">
              <div className="h-3 w-1/3 rounded theme-bg opacity-70 animate-pulse" />
              <div className="h-5 w-full rounded theme-bg opacity-70 animate-pulse" />
              <div className="h-5 w-3/4 rounded theme-bg opacity-70 animate-pulse" />
              <div className="h-4 w-full rounded theme-bg opacity-60 animate-pulse" />
              <div className="h-4 w-full rounded theme-bg opacity-60 animate-pulse" />
              <div className="h-4 w-2/3 rounded theme-bg opacity-60 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
