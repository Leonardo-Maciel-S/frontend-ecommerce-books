import type { ButtonHTMLAttributes } from "react";
import { Link } from "react-router";

import bookMark from "./../../assets/book-mark.png";

interface ButtonWithMarkBookProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
}

const ButtonWithMarkBook = ({ to, children }: ButtonWithMarkBookProps) => {
  return (
    <Link
      to={to}
      className="group text-sm flex justify-center items-center rounded-md  hover:bg-light-brown font-bold px-4 py-2 relative transition-all delay-100 overflow-hidden font-primary"
    >
      <img
        src={bookMark}
        alt=""
        className="w-5 absolute -top-5 left-1 transition-all delay-100 group-hover:top-0"
      />
      <button className="ml-3 cursor-pointer">{children}</button>
    </Link>
  );
};

export default ButtonWithMarkBook;
