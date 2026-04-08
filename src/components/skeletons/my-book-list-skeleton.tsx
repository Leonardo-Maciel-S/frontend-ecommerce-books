import { Skeleton } from "../ui/skeleton";

const MyBookListSkeleton = () => {
  const mockList = [1, 2, 3, 4];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:grid-cols-4">
      {mockList.map((_, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg inline-flex flex-wrap sm:flex-nowrap gap-4 shadow-lg "
        >
          <Skeleton className="rounded-lg w-full h-[400px] sm:size-40" />

          <div className="flex flex-col gap-4 justify-between w-full">
            <div className="space-y-2">
              <Skeleton className="font-extrabold text-xl h-7 w-2/3" />
              <Skeleton className="font-extrabold text-xl h-5 w-30" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookListSkeleton;
