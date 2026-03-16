import type { Book } from "@/@types/books";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

const deleteBook = async (id: string) => {
  try {
    const response = await api.delete<Book>(`/book/${id}`, {
      withCredentials: true,
    });

    if (response.data) return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data.message);
  }
};

export default deleteBook;
