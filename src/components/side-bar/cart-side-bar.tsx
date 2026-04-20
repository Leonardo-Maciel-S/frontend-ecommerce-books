import ShowComponent from "../show-component";
import type { User } from "@/@types/user";
import { Loader2 } from "lucide-react";
import ItemCartPreview from "./item-cart-preview";
import useGetAllItemCart from "@/hooks/cart/use-get-all-item-cart";
import Button from "../button";
import PrimaryButton from "../primary-button";
import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";

interface CartSideBarProps {
  navigateTo: (route: string) => void;
  user: User | null;
  closeBar: () => void;
}

const CartSideBar = ({ user, navigateTo, closeBar }: CartSideBarProps) => {
  const { data, isLoading, isPending } = useGetAllItemCart();

  return (
    <>
      <ShowComponent when={!user}>
        <Button onClick={() => navigateTo("/login")}>Fazer Login</Button>
      </ShowComponent>

      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        <div className="flex-1 min-h-0">
          <ShowComponent when={!!user && (isLoading || isPending)}>
            <div className="w-full flex justify-center">
              <Loader2 className="animate-spin" />
            </div>
          </ShowComponent>

          <ShowComponent when={data && data?.cartItems.length > 0}>
            <div className="flex h-full min-h-0 flex-col gap-5 overflow-y-auto border-b-2 border-primary/20 py-2 pr-2">
              {data?.cartItems.map((item) => (
                <ItemCartPreview key={item.cartItem.id} item={item} />
              ))}
            </div>
          </ShowComponent>
        </div>

        <div className="w-full shrink-0 space-y-5 border-t border-primary/20 pt-6">
          {data && (
            <div className="flex justify-between items-center ">
              <p className="text-zinc-400 font-primary font-medium tracking-wider">
                SUBTOTAL:
              </p>
              <p className="font-primary text-orange-700 text-2xl font-extrabold italic">
                {convertPriceInCentsToReal(data.subtotal)}
              </p>
            </div>
          )}

          {user && (
            <PrimaryButton
              onClick={() => {
                navigateTo("/checkout");
                closeBar();
              }}
              className="w-full"
            >
              Continuar
            </PrimaryButton>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSideBar;
