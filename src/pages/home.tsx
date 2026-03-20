import useGetAllBooks from "@/hooks/books/use-get-all-book";
import BooksList from "../components/books-list";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import BookListSkeleton from "@/components/skeletons/book-list-skeleton";

const Home = () => {
  const { data: books, isLoading, isSuccess } = useGetAllBooks("limit=4");

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

      {isLoading && <BookListSkeleton />}

      {isSuccess && (
        <section className="space-y-4">
          <div className="flex justify-between pb-5">
            <h2 className="text-3xl font-medium font-primary">
              Ultimas postagens
            </h2>

            <Link
              to={"/all-books"}
              className="group flex items-center gap-2 font-primary text-primary w-fit"
            >
              <p className="group-hover:underline">See all</p>{" "}
              <ArrowRight className="group-hover:translate-x-1 transform duration-200 ease-in" />
            </Link>
          </div>
          <BooksList books={books} />
        </section>
      )}

      <section className="bg-[#F7F0EA] p-10 rounded-lg my-10">
        <div className="flex flex-col md:flex-row justify-end items-center gap-10">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgGzH_zccXO5p95I_wu2V-R1VAwx9_PhnKOb4-4Ab6iZU2KbR_WUo2AEYSOABBaut09REZqQ-34ujtXZRqbhaaC17bmO2RBM0AXmuBq0GUoeILFEoKzwcyBFqt8Q4mzWk90UkT8zskVqB5aOcXa7TxMpk7aMDpYtAto-aeIkDHZoRCjqwEmK3J5t8RvlSV4C6wJqKeqsWh7puE0kLsyIcqFXBV50dfBwzTjR6tLeSSGJbar1Dw5pSx-VCGO2NJIT03lJWUBBSDOh52"
            alt=""
            className="rounded-lg w-full md:w-2/3"
          />

          <div className="space-y-2 self-center">
            <h3 className="font-primary text-2xl lg:text-4xl">
              Porque você deveria ler?
            </h3>
            <p className="text-sm lg:text-lg text-gray-600 text-start">
              10 dos principais benefícios da leitura para que você se inspire e
              comece agora mesmo a desenvolver o hábito de ler mais. Acompanhe!
            </p>

            <Link
              to={
                "https://www.estacio.br/blog/aluno/beneficios-da-leitura?srsltid=AfmBOopOwFzOnufgylGBkCQTSQjgE1FYiR9ouRXaAuAPBKU6DfDLWsqy"
              }
              target="_blank"
              className="group flex items-center gap-2 font-primary text-primary w-fit"
            >
              <p className="group-hover:underline font-semibold lg:text-xl">
                Ler artigo
              </p>{" "}
              <ArrowRight className="group-hover:translate-x-1 transform duration-200 ease-in" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
