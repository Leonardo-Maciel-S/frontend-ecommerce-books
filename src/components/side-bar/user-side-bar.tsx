import ShowComponent from "../show-component";
import type { User } from "@/@types/user";
import { useLogout } from "@/hooks/use-logout";
import Button from "../button";

interface UserSideBarProps {
  setIsOpen: React.Dispatch<boolean>;
  navigateTo: (route: string) => void;
  user: User | null;
}

const UserSideBar = ({ user, setIsOpen, navigateTo }: UserSideBarProps) => {
  const { mutate } = useLogout();

  const logout = () => {
    setIsOpen(false);
    mutate();
  };

  return (
    <>
      <div className="space-y-5">
        <ShowComponent when={!!user}>
          <Button>Editar Conta</Button>
          <Button onClick={() => navigateTo("/create-book")}>
            Criar Livro
          </Button>
        </ShowComponent>

        <ShowComponent when={!user}>
          <Button onClick={() => navigateTo("/login")}>Fazer Login</Button>
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
    </>
  );
};

export default UserSideBar;
