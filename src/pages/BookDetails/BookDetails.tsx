import { Box, Rating } from "@mui/material";

import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";
import { Link, useParams } from "react-router";
import PreviewButton from "@/components/preview/preview-button";
import useGetById from "@/hooks/books/use-get-by-id";
import Loading from "@/components/loading";
import ShowComponent from "@/components/show-component";
import CommentList from "./comment/comment-list";
import { bookStore } from "@/store/books";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AddComment from "./comment/add-comment";
import { useContext } from "react";
import { AuthContext } from "@/context/auth";
import useGetAllCommentByBookId from "@/hooks/comment/get-all-by-book-id";

const BookDetails = () => {
  const { id } = useParams();

  const { data: book, isLoading } = useGetById(id);

  const { books } = bookStore();

  const context = useContext(AuthContext);

  const { data: commentsResponse } = useGetAllCommentByBookId(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full space-y-10 py-4 min-h-[400px]">
      <ShowComponent when={!book}>
        <h1 className="text-center mt-5 text-2xl font-secondary font-semibold">
          Livro não encontrado
        </h1>
      </ShowComponent>

      <ShowComponent when={!!book}>
        <div className="flex gap-8 justify-center sm:justify-start flex-wrap ">
          <img
            src={book?.coverImg}
            alt=""
            className="w-full sm:w-70 lg:w-96 max-w-96 object-fill rounded-lg shadow-lg shadow-black/30 cursor-pointer transition-all duration-200"
          />

          <div className="flex-1 p-5 flex flex-col gap-3 justify-between">
            <div className="flex flex-col gap-3">
              <div className="space-y-1">
                <p className="font-secondary font-normal tracking-[1px] text-sm text-gray-600 ">
                  {book?.author}
                </p>
                <h2 className="font-bold text-2xl font-primary text-private-secondary ">
                  {book?.title}
                </h2>
                <Box component="fieldset" borderColor="transparent">
                  <Rating
                    name="read-only"
                    value={book?.evaluation}
                    readOnly
                    size="small"
                  />
                </Box>

                <p className="font-medium font-secondary text-gray-600 overflow-clip text-start italic">
                  {book?.synopsis}
                </p>
              </div>

              <p className="font-bold text-3xl">
                {convertPriceInCentsToReal(book?.priceInCents!)}
              </p>
            </div>

            <div className="max-w-70 flex flex-col gap-3">
              <PreviewButton>Comprar</PreviewButton>

              <PreviewButton>Adicionar ao carrinho </PreviewButton>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="text-2xl font-primary font-semibold">
            Ultimas postagens.
          </h3>

          <ShowComponent when={!!book}>
            <div className="p-5 rounded-2xl ">
              <Carousel
                className="w-full "
                opts={{
                  align: "center",
                }}
              >
                <CarouselPrevious />

                <CarouselContent className="p-3 -ml-4 bg-white/50 rounded-2xl w-60 ">
                  {books.map((book) => (
                    <CarouselItem key={book.id} className="pl-4">
                      <Link to={`/book-details/${book.id}`}>
                        <div className="p-3 bg-white/80 h-full  space-y-3 rounded-lg shadow-lg shadow-black/5">
                          <img
                            src={book?.coverImg}
                            alt=""
                            className="w-30 object-fill cursor-pointer transition-all duration-200 mx-auto"
                          />

                          <p className="font-semibold">{book.title}</p>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselNext />
              </Carousel>
            </div>
          </ShowComponent>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-primary font-semibold">Avaliações</h3>

          {context?.user && (
            <AddComment
              userId={context?.user.id}
              bookId={book?.id}
              username={context.user.name}
            />
          )}

          <CommentList bookComments={commentsResponse?.comments} />
        </div>
      </ShowComponent>
    </div>
  );
};

export default BookDetails;
