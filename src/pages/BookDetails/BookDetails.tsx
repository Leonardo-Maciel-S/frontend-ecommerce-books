import ShowComponent from "@/components/show-component";
import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";
import { Box, Rating } from "@mui/material";

import AddComment from "./comment/add-comment";
import CommentList from "./comment/comment-list";
import { Link, useNavigate, useParams } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth";
import useGetAllBooks from "@/hooks/books/use-get-all-book";
import useGetBookById from "@/hooks/books/use-get-by-id";
import PrimaryButton from "@/components/primary-button";
import { Loader2, ShoppingCart } from "lucide-react";
import BookDetailsSkeleton from "@/components/skeletons/book-details-skeleton";
import useAddItemCart from "@/hooks/cart/use-add-item-cart";

const BookDetails = () => {
  const { id } = useParams();
  const context = useContext(AuthContext);

  const [showAddComment, setShowAddComment] = useState(false);

  const handleModal = () => {
    setShowAddComment(!showAddComment);
  };

  const navigate = useNavigate();

  const { data: book, isLoading, isError } = useGetBookById(id);
  const { data, isLoading: loading } = useGetAllBooks();
  const { mutate: addItem, isPending: addItemLoading } = useAddItemCart(id);

  if (isError) {
    navigate(-1);
  }

  return (
    <>
      <div className="w-full space-y-10 py-4 min-h-[400px]">
        <ShowComponent when={isLoading || loading}>
          <BookDetailsSkeleton />
        </ShowComponent>

        <ShowComponent when={!isLoading && !loading}>
          <div className="flex gap-x-8 gap-y-0 justify-center sm:justify-start flex-wrap ">
            <img
              src={book?.coverImg}
              alt=""
              id="cover"
              className="w-full sm:w-70 lg:w-96 object-fill rounded-lg shadow-lg shadow-black/40 cursor-pointer transition-all duration-200"
            />

            <div className="flex-1 py-5 flex flex-col gap-3 justify-between ">
              <div className="flex flex-col gap-3">
                <div className="space-y-1">
                  <h2 className="font-bold text-3xl lg:text-4xl font-secondary text-private-secondary">
                    {book?.title}
                  </h2>

                  <p className="font-secondary font-semibold tracking-[1px] text-md  text-primary ">
                    {book?.author}
                  </p>
                  <Box component="fieldset" borderColor="transparent">
                    <Rating
                      name="read-only"
                      value={book?.evaluation}
                      readOnly
                      size="small"
                    />
                  </Box>

                  <p className="font-medium font-secondary text-gray-500 tracking-wider overflow-clip text-start text-wrap text-sm ">
                    {book?.synopsis}
                  </p>
                </div>

                <div className="text-3xl border-y py-4 border-primary/15 ">
                  <p className="font-bold md:font-extrabold">
                    {book?.priceInCents
                      ? convertPriceInCentsToReal(book?.priceInCents!)
                      : ""}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 w-full flex-wrap ">
                <PrimaryButton
                  onClick={() => addItem()}
                  disabled={addItemLoading}
                  className="flex-10 md:flex-none min-w-[300px]"
                >
                  {addItemLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <ShoppingCart strokeWidth="3" />
                  )}

                  <p>Adicionar ao carrinho</p>
                </PrimaryButton>

                <PrimaryButton
                  variant="outline"
                  className="px-5 flex-1 md:flex-none min-w-48"
                >
                  Comprar agora
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="text-2xl font-secondary font-semibold">
              Ultimas postagens
            </h3>

            <ShowComponent when={!!data?.books}>
              <div className="p-5 pb-0 rounded-2xl ">
                <Carousel
                  className="w-full"
                  opts={{
                    align: "start",
                  }}
                >
                  <CarouselPrevious />

                  <CarouselContent className="p-3 -ml-3 rounded-2xl w-60 ">
                    {data?.books?.map((carouselBook) => {
                      if (book?.id !== carouselBook.id) {
                        return (
                          <CarouselItem key={carouselBook.id} className="pl-4">
                            <div className="p-3 h-full space-y-1">
                              <Link
                                to={`/book-details/${carouselBook.id}`}
                                className="block"
                              >
                                <img
                                  src={carouselBook.coverImg}
                                  alt=""
                                  className="hover:shadow-lg h-[250px] shadow-zinc-500/30 rounded-lg cursor-pointer transition-all duration-200 "
                                />
                              </Link>

                              <div>
                                <p className="font-bold font-secondary">
                                  {carouselBook.title}
                                </p>
                                <p className="text-xs font-secondary font-medium tracking-wider text-zinc-500">
                                  {carouselBook.author}
                                </p>
                              </div>
                              <p className="font-extrabold text-primary">
                                {convertPriceInCentsToReal(
                                  carouselBook.priceInCents,
                                )}
                              </p>
                            </div>
                          </CarouselItem>
                        );
                      }
                    })}
                  </CarouselContent>

                  <CarouselNext />
                </Carousel>
              </div>
            </ShowComponent>
          </div>

          <div className="space-y-3 border-t border-primary/15 pt-8">
            <div className="flex items-center justify-between py-2 flex-wrap gap-3">
              <div className="space-y-1">
                <h3 className="text-2xl font-secondary font-semibold">
                  Avaliações
                </h3>
                {!context?.user && (
                  <p className="font-bold text-base italic text-zinc-500">
                    Faça login para fazer uma avaliação.
                  </p>
                )}
              </div>

              {context?.user && (
                <PrimaryButton
                  variant="secondary"
                  className="text-md flex-1 md:flex-none min-w-[300px]"
                  onClick={handleModal}
                >
                  {showAddComment ? "Cancelar" : "Adicionar Comentário"}
                </PrimaryButton>
              )}
            </div>

            <ShowComponent when={showAddComment}>
              <AddComment
                userId={context?.user?.id}
                bookId={book?.id}
                username={context?.user?.name}
                handleModal={handleModal}
              />
            </ShowComponent>

            <CommentList id={id!} />
          </div>
        </ShowComponent>
      </div>
    </>
  );
};

export default BookDetails;
