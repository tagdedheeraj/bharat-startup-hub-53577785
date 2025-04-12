
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="aspect-[9/16] animate-pulse">
          <Skeleton className="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-700" />
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
