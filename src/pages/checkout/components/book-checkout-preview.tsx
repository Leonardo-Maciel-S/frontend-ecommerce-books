import type { bookInCart } from "@/@types/books";
import useDeleteItem from "@/hooks/cart/use-delete-item";
import useIncrementAndDecreaseItem from "@/hooks/cart/use-increment-and-decrease-item";
import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";

interface BookCheckoutPreviewProps {
  book: bookInCart;
  quantity: number;
  itemId?: string;
}

const BookCheckoutPreview = ({
  book,
  quantity,
  itemId,
}: BookCheckoutPreviewProps) => {
  const { mutateAsync } = useDeleteItem(itemId);
  const { decreaseItem, incrementItem } = useIncrementAndDecreaseItem(
    itemId,
    quantity,
  );

  return (
    <div className="flex gap-6 items-start">
      <img
        src={book.coverImg}
        alt="foto da capa"
        className="h-40 w-28 rounded-md shadow-lg shadow-black/30"
      />

      <div className="flex-1 font-primary space-y-3 font-light">
        <div className="space-y-1">
          <h4 className="text-2xl italic text-zinc-800 font-medium ">
            {book.title}
          </h4>
          <p className="text-zinc-700 tracking-widest uppercase text-xs">
            {book.autor}
          </p>
        </div>

        <p className="text-zinc-800  tracking-widest text-sm">
          Quantidade: <strong>{quantity}</strong>
        </p>

        <div className="flex gap-2 items-baseline">
          <button
            onClick={() => decreaseItem.mutateAsync()}
            disabled={decreaseItem.isPending || quantity <= 1}
            className="w-min text-xs text-zinc-500 not-disabled:hover:text-primary cursor-pointer"
          >
            DIMINUIR
          </button>

          <span className="text-primary/50 font-bold stroke-3">|</span>

          <button
            onClick={() => incrementItem.mutateAsync()}
            disabled={incrementItem.isPending}
            className="w-min text-xs text-zinc-500 hover:text-primary cursor-pointer"
          >
            AUMENTAR
          </button>

          <span className="text-primary/50 font-bold stroke-3">|</span>

          <button
            onClick={() => mutateAsync()}
            className="w-min text-xs text-zinc-500 hover:text-primary cursor-pointer"
          >
            REMOVER
          </button>
        </div>
      </div>

      <p className="text-xl font-semibold text-primary font-primary">
        {convertPriceInCentsToReal(book.priceInCents * quantity)}
      </p>
    </div>
  );
};

export default BookCheckoutPreview;
