import type { Book } from "@/@types/books";
import type { CreateBookFormType } from "@/hooks/books/use-create-book";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

const create = async (data: CreateBookFormType) => {
  try {
    const response = await api.post<Book>("/book", data, {
      withCredentials: true,
    });

    if (response.data) return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data.message);
  }
};

export default create;
