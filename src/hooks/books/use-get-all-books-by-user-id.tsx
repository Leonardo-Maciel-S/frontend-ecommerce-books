import { bookService } from "@/services/book";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useGetUserAuth from "../user/use-get-user-auth";
import { bookStore } from "@/store/books";

const useGetAllBooksByUserId = () => {
  const { isUserLogged, user } = useGetUserAuth();

  const { setBooks } = bookStore();

  const query = useQuery({
    queryKey: ["all-books-by-id", user?.id],
    queryFn: async () => {
      isUserLogged();

      try {
        const books = await bookService.getAll({ id: user?.id, search: "" });

        if (books) {
          setBooks(books);
        }

        return books;
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
  });

  return { ...query };
};

export default useGetAllBooksByUserId;
