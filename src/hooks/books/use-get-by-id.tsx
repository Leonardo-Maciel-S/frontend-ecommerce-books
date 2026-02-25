import { bookService } from "@/services/book";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useGetBookById = (id?: string) => {
  const query = useQuery({
    queryKey: ["book-by-id", id],
    queryFn: async () => {
      try {
        const book = await bookService.getById(id);

        return book;
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
  });

  return { ...query };
};

export default useGetBookById;
