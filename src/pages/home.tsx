import useGetAllBooks from "@/hooks/books/use-get-all-book";
import BooksList from "../components/books-list";
import Loading from "@/components/loading";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const { data: books, isLoading, isSuccess } = useGetAllBooks("");

  return (
    <div className="space-y-10">
      <section className=" grid lg:grid-cols-2 gap-10 lg:gap-36  justify-between items-center py-20 min-h-[80dvh] border-b-2 border-primary/30">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl md:text-4xl xl:text-5xl tracking-wide font-primary ">
            "Sempre imaginei que o <span className="text-primary">paraíso</span>{" "}
            fosse uma espécie de <strong>livraria</strong>."
          </h1>

          <p className="font-medium italic text-xs md:text-base text-zinc-600 ">
            Jorge Luis Borges
          </p>
        </div>

        <img
          src={
            "https://images.pexels.com/photos/2663851/pexels-photo-2663851.jpeg"
          }
          alt="ilustração de biblioteca"
          className="block object-cover rounded-2xl shadow-lg shadow-black/30"
        />
      </section>

      {isLoading && <Loading />}

      {isSuccess && (
        <section className="space-y-4">
          <div className="flex justify-between pb-5">
            <h2 className="text-3xl font-medium font-primary">
              Ultimas postagens
            </h2>

            <Link
              to={"/all-books"}
              className="group flex items-center gap-2 font-primary text-primary"
            >
              <p className="group-hover:underline">See all</p>{" "}
              <ArrowRight className="group-hover:translate-x-1 transform duration-200 ease-in" />
            </Link>
          </div>
          <BooksList books={books} />
        </section>
      )}
    </div>
  );
};

export default Home;
