import type { Book } from "@/@types/books";
import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";
import { Link } from "react-router";
import PrimaryButton from "./primary-button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import DeleteModal from "./delete-modal";
import useDeleteBook from "@/hooks/books/use-delete-book";

interface PreviewCardProps {
  book: Book;
  isMyBooks?: boolean;
}

const PreviewCard = ({ book, isMyBooks }: PreviewCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate, isPending } = useDeleteBook();

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = (id?: string) => {
    if (!id) {
      return;
    }

    mutate(id);
  };

  return (
    <div className="grid grid-cols-1 gap-3 p-5 bg-white/30 rounded-4xl ">
      <Link to={`/book-details/${book.id}`}>
        <img
          src={book.coverImg}
          alt=""
          className="object-fill w-full  h-full md:h-[400px] rounded-lg shadow shadow-black/5 cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-black"
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

        <div className="w-full  gap-3">
          {isMyBooks ? (
            <div className="flex gap-3 ">
              <Link to={`/edit-book/${book.id}`} className="flex-1">
                <PrimaryButton variant="secondary" className="w-full p-2 ">
                  Editar
                </PrimaryButton>
              </Link>

              <PrimaryButton
                variant="outline"
                className="p-2"
                onClick={handleModal}
              >
                <Trash2 />
              </PrimaryButton>
            </div>
          ) : (
            <p className="font-bold text-xl text-primary font-primary">
              {convertPriceInCentsToReal(book.priceInCents)}
            </p>
          )}
        </div>
      </div>

      <DeleteModal
        whoDelete="livro"
        handleDelete={handleDelete}
        handleModal={handleModal}
        id={book.id}
        isModalOpen={isModalOpen}
        isPending={isPending}
      />
    </div>
  );
};

export default PreviewCard;
