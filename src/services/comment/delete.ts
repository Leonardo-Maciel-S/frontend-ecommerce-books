import type { Comment } from "@/@types/comment";
import { api } from "@/lib/axios";

interface Response {
  comment: Comment;
}

export async function deleteComment(id: string) {
  try {
    const res = await api.delete<Response>(`comment/${id}`, {
      withCredentials: true,
    });

    return res.data.comment;
  } catch (error) {
    throw new Error("Erro ao deletar comentário.");
  }
}
