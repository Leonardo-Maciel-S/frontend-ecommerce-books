import { Box, Rating } from "@mui/material";
import type { Book } from "../../@types/books";
import ShowComponent from "../show-component";
import { Link, useNavigate } from "react-router";

import PreviewButton from "./preview-button";
import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";

interface BookPreviewProps {
  book: Book;
  isMyBooks?: boolean;
}

const BookPreview = ({ book, isMyBooks = false }: BookPreviewProps) => {
  const navigate = useNavigate();

  const handleEditBook = () => {
    navigate(`/edit-book/${book.id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-8 bg-white/30 rounded-4xl shadow-lg shadow-black/5">
      <Link to={`/book-details/${book.id}`}>
        <img
          src={book.coverImg}
          alt=""
          className="w-full h-full object-fill rounded-lg shadow-lg shadow-black/70 cursor-pointer transition-all duration-200 hover:shadow-black"
        />
      </Link>

      <div className="p-5 flex flex-col gap-3 justify-between">
        <div className="space-y-1">
          <p className="font-secondary font-normal tracking-[1px] text-sm text-gray-600 ">
            {book.author}
          </p>
          <h2 className="font-bold text-2xl font-primary text-private-secondary ">
            {book.title}
          </h2>
          <Box component="fieldset" borderColor="transparent">
            <Rating
              name="read-only"
              value={book.evaluation}
              readOnly
              size="small"
            />
          </Box>

          <p className="font-medium font-secondary text-gray-600 h-[100px] overflow-clip text-start italic">
            {book.synopsis}
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <p className="font-bold text-xl">
            {convertPriceInCentsToReal(book.priceInCents)}
          </p>

          <ShowComponent when={!isMyBooks}>
            <PreviewButton>COMPRAR</PreviewButton>
          </ShowComponent>

          <ShowComponent when={isMyBooks}>
            <PreviewButton onClick={handleEditBook}>Editar Livro</PreviewButton>
          </ShowComponent>
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
