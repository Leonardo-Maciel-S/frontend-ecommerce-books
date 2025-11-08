import library from "../assets/library.jpg";
import BooksList from "../components/books-list";

const Home = () => {
  return (
    <div className="space-y-10">
      <img
        src={library}
        alt="ilustração de biblioteca"
        className="object-cover w-full max-h-[800px]"
      />

      <BooksList />
    </div>
  );
};

export default Home;
