import ShowComponent from "../show-component";
import type { User } from "@/@types/user";
import Button from "../button";

interface CartSideBarProps {
  setIsOpen: React.Dispatch<boolean>;
  navigateTo: (route: string) => void;
  user: User | null;
}

const CartSideBar = ({ user, navigateTo }: CartSideBarProps) => {
  return (
    <>
      <div className="space-y-5">
        <ShowComponent when={!!user}>logado</ShowComponent>

        <ShowComponent when={!user}>
          <Button onClick={() => navigateTo("/login")}>Fazer Login</Button>
        </ShowComponent>
      </div>
    </>
  );
};

export default CartSideBar;
