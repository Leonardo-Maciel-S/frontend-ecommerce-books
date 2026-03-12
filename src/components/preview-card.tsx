import type { Book } from "@/@types/books";
import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";
import { Link } from "react-router";

interface PreviewCardProps {
  book: Book;
  isMyBooks?: boolean;
}

const PreviewCard = ({ book }: PreviewCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 p-5 bg-white/30 rounded-4xl ">
      <Link to={`/book-details/${book.id}`}>
        <img
          src={book.coverImg}
          alt=""
          className="object-cover h-full md:h-[400px] rounded-lg shadow shadow-black/5 cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-black"
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

        <div className="w-full flex flex-col gap-3">
          <p className="font-bold text-xl text-primary font-primary">
            {convertPriceInCentsToReal(book.priceInCents)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
