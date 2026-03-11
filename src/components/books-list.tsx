import type { Book } from "@/@types/books";

import PreviewCard from "./preview-card";

interface BooksListProps {
  books?: Book[];
}

const BooksList = ({ books }: BooksListProps) => {
  return (
    <div className="flex justify-evenly  items-stretch flex-wrap pb-10 gap-10">
      {books?.map((book) => (
        <PreviewCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
