import { bookService } from "@/services/book";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useGetAllBooks = (queryParams?: string) => {
  const query = useQuery({
    queryKey: ["all-books", queryParams],
    queryFn: async () => {
      if (!queryParams) {
        queryParams = "";
      }

      try {
        const books = await bookService.getAll({ queryParams });

        return books;
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    placeholderData: keepPreviousData,
  });

  return { ...query };
};

export default useGetAllBooks;
