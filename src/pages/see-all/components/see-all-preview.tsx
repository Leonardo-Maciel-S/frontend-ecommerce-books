import type { Book } from "@/@types/books";
import PrimaryButton from "@/components/primary-button";
import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";
import { StarFilled } from "@ant-design/icons";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";

interface SeeAllPreviewProps {
  book: Book;
}

const SeeAllPreview = ({ book }: SeeAllPreviewProps) => {
  const primaryColor = "#ec6d13";

  return (
    <div className="flex flex-col relative gap-2">
      <div className="group relative overflow-hidden hover:shadow-lg shadow-black/30 hover:-translate-y-2 transition-all duration-200 ease-in rounded-sm">
        <Link to={`/book-details/${book.id}`}>
          <img src={book.coverImg} alt="" className="lg:h-[500px]" />
        </Link>
        <PrimaryButton className="text-primary hover:bg-primary hover:text-white bg-white absolute -bottom-11 group-hover:bottom-3 right-3 p-3 transition-all duration-150 ease-in">
          <ShoppingBag strokeWidth={2} />
        </PrimaryButton>
      </div>

      <div className="">
        <h2 className="md:text-2xl font-primary font-semibold">{book.title}</h2>
        <p className="font-primary italic text-md font-medium text-zinc-500">
          {book.author}
        </p>
      </div>

      <div className="flex justify-between">
        <span className="flex gap-2">
          <StarFilled style={{ color: primaryColor }} />
          <p className="font-primary text-primary font-bold">{4.2}</p>
        </span>

        <p className="lg:text-xl font-light tracking-tighter">
          {convertPriceInCentsToReal(book.priceInCents)}
        </p>
      </div>
    </div>
  );
};

export default SeeAllPreview;
