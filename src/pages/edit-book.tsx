import ErrorMessage from "@/components/error-message";
import ShowComponent from "@/components/show-component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useEditBook from "@/hooks/books/use-edit-book";
import { bookStore } from "@/store/books";
import { useEffect, useState } from "react";

import { useParams } from "react-router";

const EditBook = () => {
  const { id } = useParams();

  const { books } = bookStore();

  const book = books.find((data) => data.id === id);

  const {
    register,
    formState: { errors },
    handleSubmit,
    isPending,
    editBook,
  } = useEditBook(book);

  const [imgUrl, setImgUrl] = useState(book?.coverImg);

  useEffect(() => {
    setImgUrl(book?.coverImg);
  }, [book]);

  return (
    <div className="h-full py-10 flex">
      <form
        onSubmit={handleSubmit(editBook)}
        className="min-w-[300px] w-1/3   mx-auto p-5 rounded-2xl shadow-lg shadow-zinc-500/50 space-y-2"
      >
        <h2 className="text-xl font-semibold font-primary text-center">
          Livro
        </h2>

        <div className="space-y-3">
          <div className="flex flex-col gap-0  ">
            <Input
              {...register("title")}
              type="text"
              className="font-secondary md:text-md font-semibold"
              placeholder="Título"
            />

            <ShowComponent when={errors.title !== undefined}>
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            </ShowComponent>
          </div>

          <div className="flex flex-col gap-0  ">
            <Input
              {...register("author")}
              type="text"
              className="font-secondary md:text-md font-semibold"
              placeholder="Autor"
            />

            <ShowComponent when={errors.author !== undefined}>
              <ErrorMessage>{errors.author?.message}</ErrorMessage>
            </ShowComponent>
          </div>

          <div className="flex flex-col gap-0  ">
            <Textarea
              {...register("synopsis")}
              className="font-secondary h-28 md:text-md font-semibold resize-none"
              placeholder="Sinopse"
            />

            <ShowComponent when={errors.synopsis !== undefined}>
              <ErrorMessage>{errors.synopsis?.message}</ErrorMessage>
            </ShowComponent>
          </div>

          <div className="flex flex-col gap-0  ">
            <Input
              {...register("priceInCents")}
              type="number"
              step="0.01"
              className="font-secondary md:text-md font-semibold"
              placeholder="Preço"
            />

            <ShowComponent when={errors.priceInCents !== undefined}>
              <ErrorMessage>{errors.priceInCents?.message}</ErrorMessage>
            </ShowComponent>
          </div>

          {imgUrl && (
            <img
              src={imgUrl}
              alt=""
              className="rounded-2xl shadow-xl shadow-black/50 my-4 mx-auto"
            />
          )}

          <div className="flex flex-col gap-0  ">
            <Input
              {...register("coverImg")}
              type="text"
              onChange={(e) => setImgUrl(e.target.value)}
              className="font-secondary md:text-md font-semibold"
              placeholder="URL da capa"
            />

            <ShowComponent when={errors.coverImg !== undefined}>
              <ErrorMessage>{errors.coverImg?.message}</ErrorMessage>
            </ShowComponent>
          </div>

          <Button
            className="text-lg py-5 font-semibold w-full cursor-pointer hover:bg-red-700 disabled:bg-red-400"
            onClick={() => setImgUrl("")}
            disabled={isPending || !book}
          >
            Editar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
