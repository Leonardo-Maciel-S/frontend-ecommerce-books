import { bookService } from "@/services/book";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useGetAllBooks = () => {
  const query = useQuery({
    queryKey: ["all-books"],
    queryFn: async () => {
      try {
        const books = await bookService.getAll();

        return books;
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
  });

  return { ...query };
};

export default useGetAllBooks;
