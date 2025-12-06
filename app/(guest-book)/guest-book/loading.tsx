export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto px-4 space-y-12">
      <div className="border border-dashed border-zinc-800 rounded-xl p-8 animate-pulse">
        <div className="h-10 bg-zinc-800 rounded w-48" />
        <div className="h-4 bg-zinc-800 rounded mt-3 w-64" />
      </div>

      <div className="space-y-8 py-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-4 animate-pulse">
            <div className="h-12 w-12 rounded-full bg-zinc-800" />
            <div className="flex-1 space-y-3">
              <div className="h-5 bg-zinc-800 rounded w-32" />
              <div className="space-y-2">
                <div className="h-4 bg-zinc-700 rounded" />
                <div className="h-4 bg-zinc-700 rounded w-5/6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}