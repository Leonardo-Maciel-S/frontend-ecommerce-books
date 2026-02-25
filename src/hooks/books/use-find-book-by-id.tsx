import { useEffect } from "react";
import useGetAllBooks from "./use-get-all-book";

const useFindBookById = (id?: string) => {
  const { data: books } = useGetAllBooks();

  const book = books?.find((data) => data.id === id);

  useEffect(() => {}, [book, id]);

  return { book };
};

export default useFindBookById;
