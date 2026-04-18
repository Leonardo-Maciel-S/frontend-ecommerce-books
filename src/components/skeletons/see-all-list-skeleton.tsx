import { Skeleton } from "../ui/skeleton";

const SeeAllListSkeleton = () => {
  const listMock = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
      {listMock.map((item) => (
        <div key={item} className="space-y-2">
          <Skeleton className="h-[500px] w-full" />

          <div className="space-y-2">
            <Skeleton className=" h-8 w-2/3" />
            <Skeleton className=" h-6 w-1/3" />
          </div>

          <div className="flex justify-between">
            <Skeleton className="h-5 w-10" />

            <Skeleton className="h-5 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeeAllListSkeleton;
