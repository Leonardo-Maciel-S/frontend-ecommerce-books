import { queryClient } from "@/main";
import { bookService } from "@/services/book";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useDeleteBook = (id?: string) => {
  const query = useMutation({
    mutationKey: ["delete-book-by-id", id],
    mutationFn: async (id?: string) => {
      try {
        if (!id) return;

        const book = await bookService.deleteBook(id);

        return book;
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    onSuccess: () => {
      toast.success("Livro deletado com sucesso!");

      queryClient.invalidateQueries({
        queryKey: ["all-books-by-id"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { ...query };
};

export default useDeleteBook;
