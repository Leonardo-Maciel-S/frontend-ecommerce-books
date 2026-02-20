import type { CommentBody } from "@/@types/comment";
import { commentService } from "@/services/comment";
import { useMutation } from "@tanstack/react-query";

const useCreateComment = () => {
  return useMutation({
    mutationKey: ["create-comment"],
    mutationFn: async (data: CommentBody) => {
      try {
        const comment = await commentService.createComment(data);

        if (comment) return comment;
      } catch (error) {
        throw new Error(error as string);
      }
    },
  });
};

export default useCreateComment;
