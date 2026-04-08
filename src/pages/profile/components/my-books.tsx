import MyBookPreview from "@/components/preview/my-book-preview";
import ShowComponent from "@/components/show-component";
import MyBookListSkeleton from "@/components/skeletons/my-book-list-skeleton";
import useGetAllBooksByUserId from "@/hooks/books/use-get-all-books-by-user-id";

const MyBooks = () => {
  const { data, isLoading } = useGetAllBooksByUserId();

  return (
    <div>
      <h2 className="font-extrabold tracking-wide bg-white font-secondary text-xl md:text-2xl p-3 md:px-5 py-6">
        Meus Livros
      </h2>

      <ShowComponent when={isLoading}>
        <div className="p-5">
          <MyBookListSkeleton />
        </div>
      </ShowComponent>

      <ShowComponent when={data?.books.length === 0}>
        <p className="text-center w-full text-zinc-500 text-lg font-semibold">
          Você não possui livros cadastrados.
        </p>
      </ShowComponent>

      <ShowComponent when={!!data?.books}>
        <div className="p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:grid-cols-4">
            {data?.books.map((book) => (
              <MyBookPreview key={book.id} book={book} />
            ))}
          </div>
        </div>
      </ShowComponent>
    </div>
  );
};

export default MyBooks;
