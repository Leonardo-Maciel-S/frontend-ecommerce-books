import ShowComponent from "../show-component";
import type { User } from "@/@types/user";
import Button from "../button";
import { Loader2 } from "lucide-react";
import { useLogout } from "@/hooks/user/use-logout";
import useGetAllItemCart from "@/hooks/cart/use-get-all-item-cart";

interface CartSideBarProps {
  setIsOpen: React.Dispatch<boolean>;
  navigateTo: (route: string) => void;
  user: User | null;
}

const CartSideBar = ({ user, navigateTo, setIsOpen }: CartSideBarProps) => {
  const { data, isLoading, isPending } = useGetAllItemCart();

  const { mutate } = useLogout();

  const logout = () => {
    setIsOpen(false);
    mutate();
  };

  return (
    <>
      <div className="space-y-5 flex flex-col justify-between h-full">
        <div>
          <ShowComponent when={!user}>
            <Button onClick={() => navigateTo("/login")}>Fazer Login</Button>
          </ShowComponent>

          <ShowComponent when={!!user && (isLoading || isPending)}>
            <div className="w-full flex justify-center">
              <Loader2 className="animate-spin" />
            </div>
          </ShowComponent>

          <ShowComponent when={data && data?.cartItems.length > 0}>
            {data?.cartItems.map((item) => (
              <div key={item.cartItem.id}>{item.book.title}</div>
            ))}
          </ShowComponent>
        </div>

        <ShowComponent when={!!user}>
          <button
            onClick={() => logout()}
            className="p-4 bg-red-500 rounded-2xl cursor-pointer font-bold text-white hover:bg-red-600 w-full"
          >
            Sair
          </button>
        </ShowComponent>
      </div>
    </>
  );
};

export default CartSideBar;
