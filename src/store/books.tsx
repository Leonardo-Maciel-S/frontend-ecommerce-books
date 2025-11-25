import type { Book } from "@/@types/books";
import { create } from "zustand";

interface BookStore {
  books: Book[];
  setBooks: (books: Book[]) => void;
}

export const bookStore = create<BookStore>((set) => ({
  books: [],
  setBooks: (books: Book[]) => {
    set({
      books,
    });
  },
}));
