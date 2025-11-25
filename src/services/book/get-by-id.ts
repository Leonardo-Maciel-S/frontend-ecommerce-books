import type { Book } from "@/@types/books";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

const getById = async (id?: string) => {
  if (!id) null;

  try {
    const res = await api.get<{ book: Book }>(`/book/${id}`, {
      withCredentials: true,
    });

    return res.data.book;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data.message);
  }
};

export default getById;
