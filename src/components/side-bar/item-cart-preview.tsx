import type { bookInCart } from "@/@types/books";
import InputQuantity from "../input-quantity";
import type { ItemCart } from "@/@types/item-cart";
import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";
import { Trash2 } from "lucide-react";
import useIncrementAndDecreaseItem from "@/hooks/cart/use-increment-and-decrease-item";
import useDeleteItem from "@/hooks/cart/use-delete-item";

interface ItemCartPreviewProps {
  item: {
    cartItem: ItemCart;
    book: bookInCart;
  };
}

const ItemCartPreview = ({ item }: ItemCartPreviewProps) => {
  const { incrementItem, decreaseItem } = useIncrementAndDecreaseItem(
    item.cartItem.id,
    item.cartItem.quantity,
  );

  const { mutateAsync, isPending } = useDeleteItem(item.cartItem.id);

  return (
    <div className="flex gap-5 w-full">
      <img
        src={item.book.coverImg}
        alt=""
        className="w-28 max-h-40 object-fil rounded-md shadow shadow-black/10"
      />
      <div className="flex flex-col justify-between flex-1 gap-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="font-primary font-semibold text-xl italic ">
              {item.book.title}
            </h3>
            <p className="text-sm font-secondary text-zinc-600 font-light tracking-wide">
              {item.book.autor}
            </p>
          </div>

          <button
            onClick={() => mutateAsync()}
            disabled={isPending}
            className="disabled:text-zinc-300 flex p-2 items-center justify-center w-min rounded-lg not-disabled:hover:bg-zinc-50 text-zinc-400 not-disabled:hover:text-primary cursor-pointer "
          >
            <Trash2 size={20} className="" />
          </button>
        </div>

        <div className="flex gap-2 flex-wrap-reverse w-full items-center justify-between">
          <InputQuantity
            defaultQuantity={item.cartItem.quantity}
            btnNextFn={incrementItem.mutate}
            btnPrevFn={decreaseItem.mutate}
            prevLoad={decreaseItem.isPending}
            nextLoad={incrementItem.isPending}
          />

          <p className="text-lg font-bold">
            {convertPriceInCentsToReal(
              item.book.priceInCents * item.cartItem.quantity,
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCartPreview;
