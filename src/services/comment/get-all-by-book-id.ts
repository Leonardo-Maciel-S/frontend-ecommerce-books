import type { Comment } from "@/@types/comment";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

interface GetAllResponse {
  pagination: {
    totalComments: number;
    totalPages: number;
    actualPage: number;
    limit: number;
  };
  comments: Comment[];
}
export async function getAllCommentByBookId(id?: string) {
  if (!id) {
    throw new Error("Id é obrigatório");
  }

  try {
    const response = await api.get<GetAllResponse>(`/comment/${id}`, {
      withCredentials: true,
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
