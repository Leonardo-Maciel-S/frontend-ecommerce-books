import BooksList from "@/components/books-list";
import ShowComponent from "@/components/show-component";
import BookListSkeleton from "@/components/skeletons/book-list-skeleton";
import useGetAllBooksByUserId from "@/hooks/books/use-get-all-books-by-user-id";

const MyBooks = () => {
  const { data, isLoading } = useGetAllBooksByUserId();

  return (
    <div>
      <h2 className="font-extrabold tracking-wide bg-white font-secondary text-2xl p-5 py-6">
        Meus Livros
      </h2>

      <ShowComponent when={isLoading}>
        <BookListSkeleton />
      </ShowComponent>

      <ShowComponent when={data?.books.length === 0}>
        <p className="text-center w-full text-zinc-500 text-lg font-semibold">
          Você não possui livros cadastrados.
        </p>
      </ShowComponent>

      <ShowComponent when={!!data?.books}>
        <div className="p-5">
          <BooksList books={data?.books} isMyBooks={true} />
        </div>
      </ShowComponent>
    </div>
  );
};

export default MyBooks;
