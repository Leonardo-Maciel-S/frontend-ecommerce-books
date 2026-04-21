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
    <div className="flex gap-3 items-center justify-center">
      <PrimaryButton
        disabled={actualPage <= 1}
        variant="outline"
        size="sm"
        className="border-zinc-200 group disabled:border-zinc-200/50"
        onClick={() => setSearchParams({ page: String(actualPage - 1) })}
      >
        <ChevronLeft
          size={20}
          className="text-zinc-400 group-hover:text-primary group-disabled:text-zinc-400/50 "
        />
      </PrimaryButton>

      <div className="flex items-center gap-2">
        <ShowComponent when={actualPage - 1 > 0}>
          <PrimaryButton
            onClick={() => setSearchParams({ page: String(actualPage - 1) })}
            variant="outline"
            size="sm"
            className="rounded-xl text-zinc-500 hover:text-primary font-primary py-3 px-4 border-primary/0 hover:border-inherit"
          >
            {actualPage - 1}
          </PrimaryButton>
        </ShowComponent>

        <PrimaryButton
          onClick={() => setSearchParams({ page: String(actualPage) })}
          variant="primary"
          size="sm"
          className="rounded-xl font-primary py-3 px-4 "
          disabled
        >
          {actualPage}
        </PrimaryButton>

        <ShowComponent when={actualPage + 1 <= totalPages}>
          <PrimaryButton
            onClick={() => setSearchParams({ page: String(actualPage + 1) })}
            variant="outline"
            size="sm"
            className="rounded-xl text-zinc-500 hover:text-primary font-primary py-3 px-4 border-primary/0 hover:border-inherit "
          >
            {actualPage + 1}
          </PrimaryButton>
        </ShowComponent>
      </div>

      <PrimaryButton
        disabled={actualPage >= totalPages}
        variant="outline"
        size="sm"
        className="border-zinc-300 group disabled:border-zinc-200/50"
        onClick={() => setSearchParams({ page: String(actualPage + 1) })}
      >
        <ChevronRight
          size={20}
          className="text-zinc-400 group-hover:text-primary group-disabled:text-zinc-400/50 "
        />
      </PrimaryButton>
    </div>
  );
};

export default Pagination;
