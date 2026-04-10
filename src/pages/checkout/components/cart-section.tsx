import BookCheckoutPreview from "./book-checkout-preview";
import type { ItemCartResponse } from "@/@types/item-cart";

const CartSection = ({ data }: { data?: ItemCartResponse }) => {
  return (
    <div>
      <div className="font-primary flex items-center justify-between pb-3 border-b border-primary/10">
        <h2 className="font-medium text-xl">Itens no Pedido</h2>

        <p className="uppercase tracking-wider font-primary text-xs text-zinc-500">
          itens selecionados
        </p>
      </div>

      <div className="space-y-8 py-8">
        {data?.cartItems.map((item) => (
          <BookCheckoutPreview
            key={item.book.id}
            book={item.book}
            itemId={item.cartItem.id}
            quantity={item.cartItem.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default CartSection;
