import ShowComponent from "./show-component";
import { useLogout } from "@/hooks/user/use-logout";
import useGetUserAuth from "@/hooks/user/use-get-user-auth";
import { Link } from "react-router";
import {
  BookMarked,
  BookOpenText,
  MapPin,
  Menu,
  NotebookPen,
  X,
} from "lucide-react";
import ProfileButton from "@/pages/profile/components/profile-button";

interface UserSideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

const UserSideBar = ({ isOpen, setIsOpen }: UserSideBarProps) => {
  const { user } = useGetUserAuth();

  const { mutate } = useLogout();

  const logout = () => {
    mutate();
  };

  return (
    <div
      className={`bg-white w-full md:w-auto px-3 md:px-5 md:pb-8 justify-between flex gap-2 flex-col ${isOpen && "px-5 h-screen flex-1 gap-5 pb-8"} transition-all duration-150 ease-linear `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden text-zinc-500 px-3 py-2 rounded-lg mt-5 bg-zinc-100/80 flex justify-center items-center w-min self-end absolute right-6`}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={`${isOpen ? "block w-[350px]" : "hidden"} md:block space-y-4 md:space-y-0 flex-1`}
      >
        <div className="pl-5 pr-10 lg:pr-16 py-5 md:py-10">
          <Link to="/">
            <button className="flex gap-2 items-center font-bold cursor-pointer font-secondary w-full">
              <BookOpenText className="text-primary text-2xl" strokeWidth={3} />
              <p className="text-2xl">Bookstore</p>
            </button>
          </Link>
        </div>

        <div className="space-y-4  ">
          <ShowComponent when={!!user}>
            {/* <Button>Editar Conta</Button> */}

            <ProfileButton to={"./my-books"} setIsOpen={setIsOpen}>
              <BookMarked />
              <p>Meus Livros</p>
            </ProfileButton>

            <ProfileButton to={"./my-addresses"} setIsOpen={setIsOpen}>
              <MapPin />
              <p>Endereços</p>
            </ProfileButton>

            <ProfileButton to={"./create-book"} setIsOpen={setIsOpen}>
              <NotebookPen />
              <p>Criar Livro</p>
            </ProfileButton>
          </ShowComponent>
        </div>
      </div>
      <ShowComponent when={!!user}>
        <button
          onClick={() => logout()}
          className={`${isOpen ? "block" : "hidden"} md:block p-4 bg-red-500 rounded-2xl cursor-pointer font-bold text-white hover:bg-red-600 w-full justify-self-end`}
        >
          Sair
        </button>
      </ShowComponent>
    </div>
  );
};

export default UserSideBar;
