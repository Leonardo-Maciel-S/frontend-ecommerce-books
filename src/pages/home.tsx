import useGetAllBooks from "@/hooks/books/use-get-all-book";
import library from "../assets/library.jpg";
import BooksList from "../components/books-list";
import Loading from "@/components/loading";

const Home = () => {
  const { data: books, isLoading } = useGetAllBooks("");

  return (
    <div className="space-y-10">
      <img
        src={library}
        alt="ilustração de biblioteca"
        className="object-cover w-full max-h-[800px] rounded-2xl shadow-lg shadow-black/50"
      />

      {isLoading && <Loading />}

      <BooksList books={books} />
    </div>
  );
};

export default Home;
