import type { CommentBody } from "@/@types/comment";
import { commentService } from "@/services/comment";
import { useMutation } from "@tanstack/react-query";

interface MutateEditComment {
  id: string;
  data: CommentBody;
}

const useEditComment = () => {
  return useMutation({
    mutationKey: ["edit-comment"],
    mutationFn: async (params: MutateEditComment) => {
      try {
        const comment = await commentService.editComment({ ...params });

        return comment;
      } catch (error) {
        throw new Error(error as string);
      }
    },
  });
};

export default useEditComment;
