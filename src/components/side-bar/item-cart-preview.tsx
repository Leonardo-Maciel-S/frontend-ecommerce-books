import type { bookInCart } from "@/@types/books";
import InputQuantity from "../input-quantity";
import type { ItemCart } from "@/@types/item-cart";
import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";
import { Trash2 } from "lucide-react";

interface ItemCartPreviewProps {
  item: {
    cartItem: ItemCart;
    book: bookInCart;
  };
}

const ItemCartPreview = ({ item }: ItemCartPreviewProps) => {
  return (
    <div className="flex gap-5">
      <img
        src={item.book.coverImg}
        alt=""
        className="w-28 max-h-40 object-fil rounded-md shadow shadow-black/10"
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <h3 className="font-primary font-semibold text-xl italic ">
            {item.book.title}
          </h3>
          <p className="text-sm font-secondary text-zinc-600 font-light tracking-wide">
            {item.book.autor}
          </p>
        </div>

        <InputQuantity
          defaultQuantity={item.cartItem.quantity}
          btnNextFn={() => {}}
          btnPrevFn={() => {}}
        />
      </div>

      <div className="flex flex-col justify-between items-start  gap-2 ">
        <button className="self-end flex p-2 items-center justify-center w-min  rounded-lg mx-auto hover:bg-zinc-50 text-zinc-400 hover:text-primary cursor-pointer">
          <Trash2 size={20} className="" />
        </button>

        <p className="text-lg font-bold">
          {convertPriceInCentsToReal(
            item.book.priceInCents * item.cartItem.quantity,
          )}
        </p>
      </div>
    </div>
  );
};

export default ItemCartPreview;
