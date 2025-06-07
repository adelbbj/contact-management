export function ContactDetailsSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div className="bg-gray-200 p-6 flex flex-col items-center md:flex-row md:items-start">
        <div className="h-24 w-24 bg-gray-300 rounded-full"></div>
        <div className="mt-4 md:mt-0 md:ml-6 space-y-2">
          <div className="h-6 bg-gray-300 rounded w-48"></div>
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="h-5 bg-gray-200 rounded w-40"></div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="h-5 bg-gray-200 rounded w-40"></div>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
