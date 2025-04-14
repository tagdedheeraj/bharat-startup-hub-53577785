
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="aspect-[9/16] relative group rounded-xl overflow-hidden animate-pulse">
          <Skeleton className="w-full h-full rounded-xl bg-gray-200/50 dark:bg-gray-700/50" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
          
          {/* Fake content layout */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Skeleton className="h-8 w-3/4 mb-4 bg-gray-300/50 dark:bg-gray-600/50" />
            <Skeleton className="h-10 w-10 rounded-full mx-auto bg-gray-300/50 dark:bg-gray-600/50" />
          </div>
          
          {/* Fake shorts badge */}
          <div className="absolute top-2 right-2">
            <Skeleton className="h-5 w-16 rounded-full bg-gray-300/50 dark:bg-gray-600/50" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
