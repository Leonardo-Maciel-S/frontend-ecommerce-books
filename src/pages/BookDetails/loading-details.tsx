import { Skeleton } from "@/components/ui/skeleton";

const LoadingDetails = () => {
  return (
    <>
      <div className="flex gap-8 justify-center sm:justify-start flex-wrap ">
        <Skeleton className="w-full h-[600px] sm:w-70 lg:w-96 max-w-96 object-fill rounded-lg " />

        <div className="flex-1 p-5 flex flex-col gap-3 justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex w-full max-w-xs flex-col gap-7">
              <div className="flex flex-col gap-3">
                <Skeleton className="h-4 w-20 " />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-24" />
              </div>
            </div>

            <Skeleton className="font-bold text-3xl" />
          </div>

          <div className="max-w-70 flex flex-col gap-3">
            <Skeleton className="border h-14 rounded-xl z-10" />

            <Skeleton className="border h-14 rounded-xl z-10" />
          </div>
        </div>
      </div>

      <div className="">
        <Skeleton className="h-8 w-1/4 mb-8" />

        <div className="p-3 -ml-4 bg-white/50 rounded-2xl w-60 ">
          <div className="pl-4 flex gap-10">
            <Skeleton className="p-3 flex flex-col items-center bg-white/80 h-full  space-y-3 rounded-lg shadow-lg shadow-black/5">
              <Skeleton className="w-30 h-40 object-fill cursor-pointer transition-all duration-200 mx-auto" />

              <Skeleton className="h-4 w-2/3 " />
            </Skeleton>

            <Skeleton className="p-3 flex flex-col items-center bg-white/80 h-full  space-y-3 rounded-lg shadow-lg shadow-black/5">
              <Skeleton className="w-30 h-40 object-fill cursor-pointer transition-all duration-200 mx-auto" />

              <Skeleton className="h-4 w-2/3 " />
            </Skeleton>

            <Skeleton className="p-3 flex flex-col items-center bg-white/80 h-full  space-y-3 rounded-lg shadow-lg shadow-black/5">
              <Skeleton className="w-30 h-40 object-fill cursor-pointer transition-all duration-200 mx-auto" />

              <Skeleton className="h-4 w-2/3 " />
            </Skeleton>

            <Skeleton className="p-3 flex flex-col items-center bg-white/80 h-full  space-y-3 rounded-lg shadow-lg shadow-black/5">
              <Skeleton className="w-30 h-40 object-fill cursor-pointer transition-all duration-200 mx-auto" />

              <Skeleton className="h-4 w-2/3 " />
            </Skeleton>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="space-y-4">
          <Skeleton className="h-8 w-40 mb-8" />

          <Skeleton className="h-4 w-52" />

          <div className="bg-white/30 rounded-2xl shadow-lg shadow-black/5 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Skeleton className="size-12 bg-zinc-200 rounded-full "></Skeleton>

                <div className="space-y-2">
                  <Skeleton className="font-semibold font-primary w-20 h-5 rounded-full" />
                  <Skeleton className="text-sm font-semibold text-zinc-500 w-32 h-3 rounded-full" />
                </div>
              </div>
            </div>
            <Skeleton className="h-4 w-24" />

            <Skeleton className="h-16 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingDetails;
