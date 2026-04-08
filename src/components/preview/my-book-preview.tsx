import type { Book } from "@/@types/books";
import useDeleteBook from "@/hooks/books/use-delete-book";
import { useState } from "react";
import { Link } from "react-router";
import DeleteModal from "../delete-modal";

interface MyBookPreviewProps {
  book: Book;
}

const MyBookPreview = ({ book }: MyBookPreviewProps) => {
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
    <>
      <div className="p-4 bg-white rounded-lg inline-flex flex-wrap sm:flex-nowrap gap-4 shadow-lg ">
        <img
          src={book.coverImg}
          alt="capa do livro"
          className="rounded-lg sm:h-40 w-auto"
        />

        <div className="flex flex-col justify-between w-full">
          <div>
            <h3 className="font-extrabold text-xl">{book.title}</h3>
            <p className="text-zinc-500 font-medium tracking-wide">
              {book.author}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Link
              to={`/profile/edit-book/${book.id}`}
              className="flex-1 rounded-lg cursor-pointer px-10 py-2 text-center border font-bold border-zinc-300 hover:bg-zinc-200/80 transition-all duration-200 ease-linear"
            >
              Editar
            </Link>

            <button
              onClick={handleModal}
              className="rounded-lg cursor-pointer px-10 py-2 text-center flex-1 border font-bold border-red-400 text-red-500 hover:bg-red-200/80 transition-all duration-200 ease-linear"
            >
              Deletar
            </button>
          </div>
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
    </>
  );
};

export default MyBookPreview;
