import BookPreview from "./book-preview";
import type { Book } from "@/@types/books";

interface BooksListProps {
  books?: Book[];
  isMyBooks?: boolean;
}

const BooksList = ({ books, isMyBooks }: BooksListProps) => {
  return (
    <div className="flex gap-10 flex-wrap justify-start py-4 px-5">
      {books?.map((book) => (
        <BookPreview key={book.id} book={book} isMyBooks={isMyBooks} />
      ))}
    </div>
  );
};

export default BooksList;
