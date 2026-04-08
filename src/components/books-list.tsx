import type { ReactNode } from "react";

interface BooksListProps {
  isMyBooks?: boolean;
  children: ReactNode;
}

const BooksList = ({ children }: BooksListProps) => {
  return (
    <div
      className={`mx-auto lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-evenly items-stretch flex-wrap gap-5`}
    >
      {children}
    </div>
  );
};

export default BooksList;
