import type { Book } from "@/@types/books";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

interface GetAllParams {
  id?: string;
  queryParams: string;
}

interface GetAllApiReturn {
  pagination: {
    totalBooks: number;
    totalPages: number;
    actualPage: number;
    limit: number;
  };
  books: Book[];
}

const getAll = async ({ id, queryParams }: GetAllParams) => {
  try {
    if (id) {
      const res = await api.get<GetAllApiReturn>("/book/user/" + id);

      return res.data;
    }

    const res = await api.get<GetAllApiReturn>(`/book?${queryParams}`);

    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data.message);
  }
};

export default getAll;
