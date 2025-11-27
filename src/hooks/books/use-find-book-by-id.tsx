import { bookStore } from "@/store/books";
import { useEffect } from "react";

const useFindBookById = (id?: string) => {
  const { books } = bookStore();

  const book = books.find((data) => data.id === id);

  useEffect(()=> {}, [book, id])

  return { book };
};

export default useFindBookById;
