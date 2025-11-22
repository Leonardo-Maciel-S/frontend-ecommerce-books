import BooksList from "@/components/books-list";
import ShowComponent from "@/components/show-component";
import useGetAllBooksByUserId from "@/hooks/use-get-all-books-by-user-id";

const MyBooks = () => {
  const { data: books } = useGetAllBooksByUserId();

  return (
    <div>
      <h2 className="font-semibold font-primary text-primary text-3xl scroll-py-48 text-center">
        Meus livros
      </h2>

      <ShowComponent when={!!books}>
        <BooksList books={books} />
      </ShowComponent>

      <ShowComponent when={!books}>
        <p className="text-center w-full text-zinc-500 text-lg font-semibold">
          Você não possui livros cadastrados.
        </p>
      </ShowComponent>
    </div>
  );
};

export default MyBooks;
