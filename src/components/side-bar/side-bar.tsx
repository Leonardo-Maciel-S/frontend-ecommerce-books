import { useEffect, useRef } from "react";
import PrimaryButton from "../primary-button";
import { X } from "lucide-react";
import useGetAllItemCart from "@/hooks/cart/use-get-all-item-cart";
import CartSideBar from "./cart-side-bar";
import type { User } from "@/@types/user";
interface SideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
  navigateTo: (route: string) => void;
  user: User | null;
}

const SideBar = ({ isOpen, setIsOpen, navigateTo, user }: SideBarProps) => {
  const sideBar = useRef<HTMLDivElement>(null);

  const body = document.querySelector("body");

  const { data } = useGetAllItemCart();

  const qtyItemsInCart = data?.cartItems.length;

  const closeBar = () => {
    setIsOpen(false);
    body?.classList.remove("noScroll");
  };

  useEffect(() => {
    if (isOpen) {
      body?.classList.add("noScroll");
    }

    const handleClick = (e: Event) => {
      if (
        sideBar.current &&
        !sideBar.current.contains(e.target as HTMLDivElement)
      ) {
        closeBar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={`w-screen h-screen z-20 bg-black/40 backdrop-blur-xs fixed right-0 top-0 transition-all duration-300 ease-in ${!isOpen && "hidden"}`}
    >
      <div
        ref={sideBar}
        className={`flex flex-col justify-between gap-5 py-8 px-8 w-full sm:w-[450px] h-screen fixed md:-right-[450px] top-0 shadow-2xl shadow-black/5 bg-background z-20 transition-all delay-100 duration-300 ease-linear ${isOpen && "md:-translate-x-[450px]"} ${!isOpen && "hidden "}`}
      >
        <div className="flex items-start justify-between  ">
          <div className="">
            <h3 className="font-bold font-primary lg:text-2xl tracking-wide">
              "CARRINHO"
            </h3>

            <p className="text-sm text-zinc-500 font-secondary font-semibold">
              {qtyItemsInCart || 0} items no carrinho
            </p>
          </div>

          <PrimaryButton
            onClick={closeBar}
            variant="outline"
            size="sm"
            className="border-none font-xl text-zinc-400 hover:text-red-500"
          >
            <X />
          </PrimaryButton>
        </div>

        <div className="flex flex-1 min-h-0 flex-col">
          <CartSideBar
            user={user}
            navigateTo={navigateTo}
            closeBar={closeBar}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
