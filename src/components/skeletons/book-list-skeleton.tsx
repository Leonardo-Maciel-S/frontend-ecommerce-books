import { Skeleton } from "../ui/skeleton";

const BookListSkeleton = () => {
  const mockList = [1, 2, 3, 4];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly items-stretch flex-wrap gap-5">
      {mockList.map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-1 gap-3 p-5 bg-white/30 rounded-4xl "
        >
          <Skeleton className="object-cover h-[400px] rounded-lg shadow shadow-black/5 cursor-pointer" />

          <div className=" flex flex-col gap-3 justify-between">
            <div className="space-y-1">
              <Skeleton className="font-medium text-2xl font-primary text-black h-8 w-2/3" />
              <Skeleton className="h-5 w-1/2" />
            </div>
          </div>

          <Skeleton className="h-6 w-1/4" />
        </div>
      ))}
    </div>
  );
};

export default BookListSkeleton;
