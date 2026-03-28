import { ChevronLeft, ChevronRight } from "lucide-react";
import PrimaryButton from "./primary-button";
import { useSearchParams } from "react-router";
import ShowComponent from "./show-component";

interface PaginationProps {
  totalPages: number;
  actualPage: number;
}

const Pagination = ({ actualPage, totalPages }: PaginationProps) => {
  const [_, setSearchParams] = useSearchParams();

  return (
    <div className="flex gap-3 items-center ">
      <PrimaryButton
        disabled={actualPage <= 1}
        variant="outline"
        size="sm"
        className="border-zinc-200 group "
        onClick={() => setSearchParams({ page: String(actualPage - 1) })}
      >
        <ChevronLeft
          size={20}
          className="text-zinc-400 group-hover:text-primary group-disabled:text-zinc-400 "
        />
      </PrimaryButton>

      <div className="flex items-center gap-2">
        <PrimaryButton size="sm" className="rounded-xl font-primary py-3 px-4">
          {actualPage}
        </PrimaryButton>

        <ShowComponent when={actualPage + 1 <= totalPages}>
          <PrimaryButton
            onClick={() => setSearchParams({ page: String(actualPage + 1) })}
            variant="outline"
            size="sm"
            className="rounded-xl font-primary py-3 px-4"
          >
            {actualPage + 1}
          </PrimaryButton>
        </ShowComponent>

        <ShowComponent when={actualPage + 2 <= totalPages}>
          <PrimaryButton
            onClick={() => setSearchParams({ page: String(actualPage + 2) })}
            variant="outline"
            size="sm"
            className="rounded-xl font-primary py-3 px-4"
          >
            {actualPage + 2}
          </PrimaryButton>
        </ShowComponent>

        <ShowComponent when={actualPage + 3 <= totalPages}>
          <span>...</span>
        </ShowComponent>
      </div>

      <PrimaryButton
        disabled={actualPage >= totalPages}
        variant="outline"
        size="sm"
        className="border-zinc-200 group"
        onClick={() => setSearchParams({ page: String(actualPage + 1) })}
      >
        <ChevronRight
          size={20}
          className="text-zinc-400 group-hover:text-primary group-disabled:text-zinc-400 "
        />
      </PrimaryButton>
    </div>
  );
};

export default Pagination;
