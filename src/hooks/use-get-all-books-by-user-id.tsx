import { bookService } from "@/services/book";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useGetUserAuth from "./use-get-user-auth";

const useGetAllBooksByUserId = () => {
  const { isUserLogged, user } = useGetUserAuth();

  const query = useQuery({
    queryKey: ["all-books-by-id"],
    queryFn: async () => {
      isUserLogged();

      try {
        const books = await bookService.getAll(user?.id);

        return books;
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
  });

  return { ...query };
};

export default useGetAllBooksByUserId;
