import useGetAllBooks from "@/hooks/use-get-all-book";
import BookPreview from "./book-preview";

const BooksList = () => {
  const { data: books } = useGetAllBooks();
  console.log(books);

  return (
    <div className="flex gap-10 flex-wrap justify-start py-4 px-5">
      {books && books.map((book) => <BookPreview key={book.id} book={book} />)}
    </div>
  );
};

export default BooksList;
