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

const SeeAllBooks = () => {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = 1;

  const { data } = useGetAllBooks(`limit=${limit}&page=${page || 1}`);

  return (
    <section className="py-10 space-y-10 w-full">
      <InputGroup className="py-8 px-5 bg-background">
        <InputGroupInput
          type="text"
          className="peer font-secondary text-zinc-500 md:text-lg font-semibold placeholder:text-zinc-400 placeholder:text-lg placeholder:italic placeholder:font-light"
          placeholder="Procure por título, autor..."
        />
        <InputGroupAddon className="text-zinc-400 peer-focus:text-primary">
          <Search className="text-4xl size-5" />
        </InputGroupAddon>
      </InputGroup>

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
