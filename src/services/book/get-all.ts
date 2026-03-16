import type { Book } from "@/@types/books";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

interface GetAllParams {
  id?: string;
  queryParams: string;
}

const getAll = async ({ id, queryParams }: GetAllParams) => {
  try {
    if (id) {
      const res = await api.get<{ books: Book[] }>("/book/user/" + id);

      return res.data.books;
    }

    const res = await api.get<{ books: Book[] }>(`/book?${queryParams}`);

    return res.data.books;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data.message);
  }
};

export default getAll;
