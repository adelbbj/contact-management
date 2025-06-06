export default function ContactCardSkeleton() {
  return (
    <div className="p-4 rounded-lg border bg-white border-gray-200 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
