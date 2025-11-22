import useGetAllBooks from "@/hooks/use-get-all-book";
import library from "../assets/library.jpg";
import BooksList from "../components/books-list";

const Home = () => {
  const { data: books } = useGetAllBooks();

  return (
    <div className="space-y-10">
      <img
        src={library}
        alt="ilustração de biblioteca"
        className="object-cover w-full max-h-[800px]"
      />

      <BooksList books={books} />
    </div>
  );
};

export default Home;
