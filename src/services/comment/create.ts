import type { Comment, CommentBody } from "@/@types/comment";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

export async function createComment(data: CommentBody) {
  try {
    const response = await api.post<Comment>("/comment", data, {
      withCredentials: true,
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
