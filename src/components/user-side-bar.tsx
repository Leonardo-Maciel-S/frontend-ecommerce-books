import ShowComponent from "./show-component";
import { useLogout } from "@/hooks/user/use-logout";
import useGetUserAuth from "@/hooks/user/use-get-user-auth";
import { Link } from "react-router";
import { BookMarked, BookOpenText, MapPin, NotebookPen } from "lucide-react";
import ProfileButton from "@/pages/profile/components/profile-button";

const UserSideBar = () => {
  const { user } = useGetUserAuth();

  const { mutate } = useLogout();

  const logout = () => {
    mutate();
  };

  return (
    <div className="bg-white h-screen px-5 pb-8 flex justify-between flex-col">
      <div>
        <div className="pl-5 pr-16 py-10">
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

            <ProfileButton to={"./my-books"}>
              <BookMarked />
              <p>Meus Livros</p>
            </ProfileButton>

            <ProfileButton to={"./my-addresses"}>
              <MapPin />
              <p>Endereços</p>
            </ProfileButton>

            <ProfileButton to={"./create-book"}>
              <NotebookPen />
              <p>Criar Livro</p>
            </ProfileButton>
          </ShowComponent>

          <ShowComponent when={!user}>
            <ProfileButton to={"/login"}>Fazer Login</ProfileButton>
          </ShowComponent>
        </div>
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
  );
};

export default UserSideBar;
