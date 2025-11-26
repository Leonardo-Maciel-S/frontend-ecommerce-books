import type { Book } from "@/@types/books";
import type { EditBookFormType } from "@/hooks/books/use-edit-book";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

const edit = async (data: EditBookFormType) => {
  try {
    const response = await api.patch<Book>(`/book/${data.id}`, data, {
      withCredentials: true,
    });

    if (response.data) return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data.message);
  }
};

export default edit;
