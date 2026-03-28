import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import SeeAllPreview from "./components/see-all-preview";
import useGetAllBooks from "@/hooks/books/use-get-all-book";
import { useSearchParams } from "react-router";
import Pagination from "@/components/pagination";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/error-message";

const SeeAllBooks = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const limit = 8;

  const { data } = useGetAllBooks(
    `search=${search}&limit=${limit}&page=${page}`,
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ search: string }>();

  const handleSearch = (data: { search: string }) => {
    setSearchParams({ search: data.search });
  };

  return (
    <section className="py-10 space-y-10 w-full">
      <form action="" onSubmit={handleSubmit(handleSearch)}>
        <InputGroup className="py-8 px-5 bg-background">
          <InputGroupInput
            {...register("search")}
            type="text"
            className="peer font-secondary text-zinc-500 md:text-lg font-semibold placeholder:text-zinc-400 placeholder:text-lg placeholder:italic placeholder:font-light"
            placeholder="Procure por título ou autor."
            defaultValue={search}
          />
          <InputGroupAddon className="text-zinc-400 peer-focus:text-primary">
            <Search className="text-4xl size-5" />
          </InputGroupAddon>
        </InputGroup>

        {errors.search && <ErrorMessage>{errors.search.message}</ErrorMessage>}
      </form>

      {data?.books && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
          {data?.books.map((book) => (
            <SeeAllPreview key={book.id} book={book} />
          ))}
        </div>
      )}

      <Pagination actualPage={page} totalPages={data?.pagination.totalPages!} />
    </section>
  );
};

export default SeeAllBooks;
