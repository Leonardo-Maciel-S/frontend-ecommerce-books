import BookPreview from "./book-preview";
import type { Book } from "@/@types/books";

interface BooksListProps {
  books?: Book[];
  isMyBooks?: boolean;
}

const BooksList = ({ books, isMyBooks }: BooksListProps) => {
  return (
    <div className="gap-5 gap-y-10 justify-center items-center grid grid-cols-1 lg:grid-cols-2 pb-10">
      {books?.map((book) => (
        <BookPreview key={book.id} book={book} isMyBooks={isMyBooks} />
      ))}
    </div>
  );
};

export default BooksList;
