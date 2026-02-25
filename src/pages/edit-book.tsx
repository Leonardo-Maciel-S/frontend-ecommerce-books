import ErrorMessage from "@/components/error-message";
import ShowComponent from "@/components/show-component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useEditBook from "@/hooks/books/use-edit-book";
import useFindBookById from "@/hooks/books/use-find-book-by-id";

import { useParams } from "react-router";

const EditBook = () => {
  const { id } = useParams();

  const { book } = useFindBookById(id);

  const {
    register,
    formState: { errors },
    handleSubmit,
    isPending,
    editBook,
    imgUrl,
    setImgUrl,
  } = useEditBook(book);

  return (
    <div className="h-full py-10 flex">
      <form
        onSubmit={handleSubmit(editBook)}
        className="min-w-[300px] w-1/3   mx-auto p-5 rounded-2xl shadow-lg shadow-zinc-500/50 space-y-2 bg-white/30"
      >
        <h2 className="text-xl font-semibold font-primary text-center">
          Livro
        </h2>

        <div className="space-y-3">
          {imgUrl && (
            <img
              src={imgUrl}
              alt=""
              className="rounded-2xl shadow-lg shadow-black/10 my-4 mx-auto"
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

            {!imgUrl && (
              <p className="mt-2 font-primary italic text-zinc-600 font-semibold">
                Acesse esse{" "}
                <a
                  href="https://br.pinterest.com/search/pins/?q=capa%20de%20livros&rs=typed"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>link</strong>
                </a>{" "}
                clique na capa que gostou, então clique com o botão direito e
                copie a endereço da imagem e veja se vai aparecer o preview.
              </p>
            )}
          </div>

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

          <Button
            className="text-lg py-5 font-semibold w-full cursor-pointer hover:bg-red-700 disabled:bg-red-400"
            type="submit"
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
