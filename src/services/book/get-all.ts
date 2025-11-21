import type { Book } from "@/@types/books";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

const getAll = async () => {
  try {
    const res = await api.get<{ books: Book[] }>("/book");

    return res.data.books;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data.message);
  }
};

export default getAll;
