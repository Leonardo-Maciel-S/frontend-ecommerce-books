import { Box, Rating } from "@mui/material";
import type { Book } from "../@types/books";
import { convertPriceInCentsToReal } from "../utils/convert-price-incent-to-real";
import ShowComponent from "./show-component";
import { useNavigate } from "react-router";

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
    <div className="grid grid-cols-2 max-w-[550px] ">
      <img src={book.coverImg} alt="" className="w-full h-full" />

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
        </div>

        <p className="font-normal font-secondary text-gray-600 h-[100px] overflow-clip text-start">
          {book.synopsis}
        </p>

        <p className="font-bold text-xl">
          {convertPriceInCentsToReal(book.priceInCents)}
        </p>

        <ShowComponent when={!isMyBooks}>
          <button className="group cursor-pointer border border-private-secondary relative  h-14 transition-all duration-300 overflow-hidden">
            <div className="group-hover:translate-x-0 transition-all duration-300 bg-private-secondary w-full h-14 -z-10 -translate-x-full absolute top-0" />

            <span className="group-hover:text-white transition-all duration-300  z-20">
              BUY NOW
            </span>
          </button>
        </ShowComponent>

        <ShowComponent when={isMyBooks}>
          <button
            className="group cursor-pointer border border-private-secondary relative  h-14 transition-all duration-300 overflow-hidden"
            onClick={handleEditBook}
          >
            <div className="group-hover:translate-x-0 transition-all duration-300 bg-private-secondary w-full h-14 -z-10 -translate-x-full absolute top-0" />

            <span className="group-hover:text-white transition-all duration-300 font-semibold font-primary z-20">
              Editar Livro
            </span>
          </button>
        </ShowComponent>
      </div>
    </div>
  );
};

export default BookPreview;
