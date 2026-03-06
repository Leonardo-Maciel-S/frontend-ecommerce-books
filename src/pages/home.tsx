import useGetAllBooks from "@/hooks/books/use-get-all-book";
import BooksList from "../components/books-list";
import Loading from "@/components/loading";
import { Link, useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { data: books, isLoading } = useGetAllBooks("");

  const [queryParams] = useSearchParams();

  const categories = [
    "Romance",
    "Suspense",
    "Terror",
    "Acadêmicos",
    "Religioso",
  ];

  const categoryFilter = queryParams.get("category") || categories[0];

  console.log(categoryFilter);

  return (
    <div className="space-y-10">
      <section className=" grid md:grid-cols-2 gap-36 justify-between items-center py-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl tracking-wide font-primary ">
            "Sempre imaginei que o <span className="text-primary">paraíso</span>{" "}
            fosse uma espécie de <strong>livraria</strong>."
          </h1>

          <p className="font-medium italic text-zinc-600 ">Jorge Luis Borges</p>
        </div>

        <img
          src={
            "https://images.pexels.com/photos/2663851/pexels-photo-2663851.jpeg"
          }
          alt="ilustração de biblioteca"
          className="hidden md:block object-cover rounded-2xl shadow-lg shadow-black/30"
        />
      </section>

      <section className="flex items-center gap-10 border-t border-b border-[#F7EBE2] py-8">
        {categories.map((category, index) => (
          <Link
            to={`./?category=${category}`}
            key={index}
            className={`rounded-full px-8 py-2 text-white font-bold ${category.toLowerCase() === categoryFilter.toLowerCase() ? "bg-primary" : "bg-primary/50"}`}
          >
            {category}
          </Link>
        ))}
      </section>

      {isLoading && <Loading />}

      <BooksList books={books} />
    </div>
  );
};

export default Home;
