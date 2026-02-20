import { queryClient } from "@/main";
import { commentService } from "@/services/comment";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCommentDelete = () => {
  return useMutation({
    mutationKey: ["delete-comment"],
    mutationFn: (id: string) => {
      return commentService.deleteComment(id);
    },
    onSuccess: () => {
      toast.success("Comentário deletado com sucesso!");

      queryClient.invalidateQueries({
        queryKey: ["all-comment"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useCommentDelete;
