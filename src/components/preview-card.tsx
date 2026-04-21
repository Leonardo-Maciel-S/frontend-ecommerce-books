import type { Book } from "@/@types/books";
import { Link } from "react-router";

interface PreviewCardProps {
  book: Book;
}

const PreviewCard = ({ book }: PreviewCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 p-5 bg-white/30 rounded-4xl ">
      <Link to={`/book-details/${book.id}`}>
        <img
          src={book.coverImg}
          alt=""
          className="object-fill w-full h-[400px] rounded-lg shadow shadow-black/5 cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-black"
        />
      </Link>

      <div className=" flex flex-col gap-3 justify-between">
        <div className="space-y-1">
          <h2 className="font-medium text-2xl font-primary text-black ">
            {book.title}
          </h2>
          <p className="font-secondary font-medium tracking-[1px] text-sm text-gray-600 italic">
            {book.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
