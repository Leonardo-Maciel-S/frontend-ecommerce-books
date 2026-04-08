import ErrorMessage from "@/components/error-message";
import PrimaryButton from "@/components/primary-button";
import ShowComponent from "@/components/show-component";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Popover,
} from "@/components/ui/popover";
import useEditBook from "@/hooks/books/use-edit-book";
import useFindBookById from "@/hooks/books/use-find-book-by-id";
import {
  BookImage,
  BookText,
  BookType,
  CircleQuestionMark,
  DollarSign,
  UserPen,
} from "lucide-react";

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
    <section className="h-screen w-full overflow-x-hidden flex flex-col gap-5 lg:items-center">
      <h2 className="w-full font-extrabold tracking-wide bg-white font-secondary text-xl md:text-2xl p-3 md:px-5 py-6">
        Editar livro
      </h2>

      <form
        onSubmit={handleSubmit(editBook)}
        className="mx-5 md:mx-12 mb-10 w-fit h-max lg:min-w-[500px] p-5 rounded-2xl shadow-lg shadow-zinc-500/50 space-y-3 bg-white"
      >
        <h2 className="lg:text-2xl font-bold tracking-wider font-primary text-center text-primary">
          Livro
        </h2>

        <div className={`grid ${imgUrl && "lg:grid-cols-2"} gap-5 items-start`}>
          {imgUrl && (
            <img
              src={imgUrl}
              alt=""
              className="rounded-2xl mx-auto max-h-[600px] border "
            />
          )}

          <div className="flex flex-col justify-between h-full gap-3 w-full">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2  ">
                <div className="flex flex-col gap-2 ">
                  <InputGroup className="h-12 bg-background">
                    <InputGroupInput
                      {...register("coverImg")}
                      type="text"
                      onChange={(e) => setImgUrl(e.target.value)}
                      className="font-secondary text-zinc-600 md:text-md font-semibold"
                      placeholder="URL da capa"
                    />
                    <InputGroupAddon>
                      <BookImage className="text-zinc-400 text-4xl size-5" />
                    </InputGroupAddon>

                    {!imgUrl && (
                      <Popover>
                        <PopoverTrigger asChild>
                          <InputGroupAddon align={"inline-end"}>
                            <InputGroupButton
                              variant="secondary"
                              size="icon-sm"
                              className="cursor-pointer"
                            >
                              <CircleQuestionMark className="text-zinc-400 text-4xl size-5" />
                            </InputGroupButton>
                          </InputGroupAddon>
                        </PopoverTrigger>

                        <PopoverContent className="bg-background">
                          <PopoverHeader>
                            <PopoverTitle className="font-secondary text-md">
                              Como pegar a url da capa?
                            </PopoverTitle>
                            <PopoverDescription className="mt-2 text-smd font-secondary italic text-zinc-600 font-semibold px-2">
                              Acesse esse{" "}
                              <a
                                href="https://br.pinterest.com/search/pins/?q=capa%20de%20livros&rs=typed"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <strong>link</strong>
                              </a>{" "}
                              clique na capa que gostou, então clique com o
                              botão direito e copie a endereço da imagem e veja
                              se vai aparecer o preview.
                            </PopoverDescription>
                          </PopoverHeader>
                        </PopoverContent>
                      </Popover>
                    )}
                  </InputGroup>

                  <ShowComponent when={errors.coverImg !== undefined}>
                    <ErrorMessage>{errors.coverImg?.message}</ErrorMessage>
                  </ShowComponent>
                </div>
              </div>

              <div className="flex flex-col gap-2 ">
                <InputGroup className="h-12 bg-background">
                  <InputGroupInput
                    {...register("title")}
                    type="text"
                    className="font-secondary text-zinc-600 md:text-md font-semibold"
                    placeholder="Título"
                  />
                  <InputGroupAddon>
                    <BookType className="text-zinc-400 text-4xl size-5" />
                  </InputGroupAddon>
                </InputGroup>

                <ShowComponent when={errors.title !== undefined}>
                  <ErrorMessage>{errors.title?.message}</ErrorMessage>
                </ShowComponent>
              </div>

              <div className="flex flex-col gap-2 ">
                <InputGroup className="h-12 bg-background">
                  <InputGroupInput
                    {...register("author")}
                    type="text"
                    className="font-secondary text-zinc-600 md:text-md font-semibold"
                    placeholder="Autor"
                  />
                  <InputGroupAddon>
                    <UserPen className="text-zinc-400 text-4xl size-5" />
                  </InputGroupAddon>
                </InputGroup>

                <ShowComponent when={errors.author !== undefined}>
                  <ErrorMessage>{errors.author?.message}</ErrorMessage>
                </ShowComponent>
              </div>

              <div className="flex flex-col gap-2 ">
                <InputGroup className="h-12 bg-background flex items-start">
                  <InputGroupTextarea
                    {...register("synopsis")}
                    className="font-secondary text-zinc-600 h-28 md:text-md font-semibold resize-none placeholder:flex placeholder:items-center"
                    placeholder="Sinopse"
                  />

                  <InputGroupAddon className="mt-2">
                    <BookText className="text-zinc-400 text-4xl size-5" />
                  </InputGroupAddon>
                </InputGroup>

                <ShowComponent when={errors.synopsis !== undefined}>
                  <ErrorMessage>{errors.synopsis?.message}</ErrorMessage>
                </ShowComponent>
              </div>

              <div className="flex flex-col gap-2 ">
                <InputGroup className="h-12 bg-background">
                  <InputGroupInput
                    {...register("priceInCents")}
                    type="number"
                    step="0.01"
                    min={0}
                    className="font-secondary text-zinc-600 md:text-md font-semibold"
                    placeholder="Preço"
                  />
                  <InputGroupAddon>
                    <DollarSign className="text-zinc-400 text-4xl size-5" />
                  </InputGroupAddon>
                </InputGroup>

                <ShowComponent when={errors.priceInCents !== undefined}>
                  <ErrorMessage>{errors.priceInCents?.message}</ErrorMessage>
                </ShowComponent>
              </div>
            </div>

            <PrimaryButton
              className="text-lg  font-semibold w-full"
              onClick={() => setImgUrl("")}
              disabled={isPending || !book}
            >
              Salvar
            </PrimaryButton>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditBook;
