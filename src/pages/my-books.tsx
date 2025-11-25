import BooksList from "@/components/books-list";
import ShowComponent from "@/components/show-component";
import useGetAllBooksByUserId from "@/hooks/books/use-get-all-books-by-user-id";

const MyBooks = () => {
  const { data: books } = useGetAllBooksByUserId();

  return (
    <div>
      <h2 className="font-semibold font-primary text-private-secondary text-4xl py-5 text-center">
        Meus Livros
      </h2>

      <ShowComponent when={books?.length === 0}>
        <p className="text-center w-full text-zinc-500 text-lg font-semibold">
          Você não possui livros cadastrados.
        </p>
      </ShowComponent>

      <ShowComponent when={!!books}>
        <BooksList books={books} isMyBooks={true} />
      </ShowComponent>
    </div>
  );
};

export default MyBooks;
