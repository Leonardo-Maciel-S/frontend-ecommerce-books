import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { useRef, useState } from "react";
import SeeAllPreview from "./components/see-all-preview";
import useGetAllBooks from "@/hooks/books/use-get-all-book";

const SeeAllBooks = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const [page, setPage] = useState(1);

  const { data: books } = useGetAllBooks(`limit=8&page=${page}`);

  return (
    <section className="py-10 space-y-10">
      <InputGroup className="py-8 px-5 bg-background">
        <InputGroupInput
          ref={inputRef}
          type="text"
          className="peer font-secondary text-zinc-500 md:text-lg font-semibold placeholder:text-zinc-400 placeholder:text-lg placeholder:italic placeholder:font-light"
          placeholder="Procure por título, autor..."
        />
        <InputGroupAddon className="text-zinc-400 peer-focus:text-primary">
          <Search className="text-4xl size-5" />
        </InputGroupAddon>
      </InputGroup>

      {books && (
        <div className="flex flex-wrap gap-10">
          {books.map((book) => (
            <SeeAllPreview key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SeeAllBooks;
