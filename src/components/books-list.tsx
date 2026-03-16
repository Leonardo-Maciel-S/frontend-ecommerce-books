import type { Book } from "@/@types/books";

import PreviewCard from "./preview-card";

interface BooksListProps {
  isMyBooks?: boolean;
  books?: Book[];
}

const BooksList = ({ books, isMyBooks }: BooksListProps) => {
  return (
    <div className="flex justify-evenly items-stretch flex-wrap gap-5">
      {books?.map((book) => (
        <PreviewCard key={book.id} book={book} isMyBooks={isMyBooks} />
      ))}
    </div>
  );
};

export default BooksList;
