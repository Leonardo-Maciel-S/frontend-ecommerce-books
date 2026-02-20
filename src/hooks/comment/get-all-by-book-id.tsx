import { commentService } from "@/services/comment";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useGetAllCommentByBookId = (id?: string) => {
  return useQuery({
    queryKey: ["all-comment", id],
    queryFn: async () => {
      try {
        const response = await commentService.getAllCommentByBookId(id);

        if (response) return response;
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
  });
};

export default useGetAllCommentByBookId;
