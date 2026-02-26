import type { Comment, CommentBody } from "@/@types/comment";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

interface EditCommentParams {
  id: string;
  data: CommentBody;
}

export async function editComment({ id, data }: EditCommentParams) {
  try {
    const response = await api.patch<Comment>(`/comment/${id}`, data, {
      withCredentials: true,
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
