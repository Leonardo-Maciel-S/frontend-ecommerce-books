import { Handbag, Search, User } from "lucide-react";
import ButtonWithMarkBook from "./button-with-mark-book";
import { Link } from "react-router";

const HomeBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5">
      <Link to="/" className="text-4xl font-bold cursor-pointer">
        Bookstore
      </Link>

      <div className="flex justify-between gap-8">
        <ButtonWithMarkBook to="/">BOOKS</ButtonWithMarkBook>
        <ButtonWithMarkBook to="/">AUDIOLIVROS</ButtonWithMarkBook>
        <ButtonWithMarkBook to="/">STATIONERY & GIFTS</ButtonWithMarkBook>
        <ButtonWithMarkBook to="/">BLOG</ButtonWithMarkBook>
      </div>

      <div className="flex justify-between items-center gap-5 ">
        <Link
          to=""
          className="hover:bg-primary-light p-2 cursor-pointer transition-all duration-100 rounded-md"
        >
          <User />
        </Link>

        <Link
          to=""
          className="hover:bg-primary-light p-2 cursor-pointer transition-all duration-100 rounded-md"
        >
          <Search />
        </Link>

        <Link
          to=""
          className="hover:bg-primary-light p-2 cursor-pointer transition-all duration-100 rounded-md"
        >
          <Handbag />
        </Link>
      </div>
    </nav>
  );
};

export default HomeBar;
