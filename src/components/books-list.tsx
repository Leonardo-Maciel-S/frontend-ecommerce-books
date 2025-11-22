import BookPreview from "./book-preview";
import type { Book } from "@/@types/books";

const BooksList = ({ books }: { books?: Book[] }) => {
  return (
    <div className="flex gap-10 flex-wrap justify-start py-4 px-5">
      {books?.map((book) => (
        <BookPreview key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
