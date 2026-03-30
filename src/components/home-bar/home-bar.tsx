import { Handbag, User } from "lucide-react";
// import ButtonWithMarkBook from "./button-with-mark-book";
import { Link } from "react-router";
import { useState } from "react";
import UserSideBar from "../side-bar/user-side-bar";
import SideBar from "../side-bar/side-bar";
import CartSideBar from "../side-bar/cart-side-bar";
import useGetUserAuth from "@/hooks/user/use-get-user-auth";

const HomeBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isProfileBar, setIsProfileBar] = useState(false);

  const { user, navigate } = useGetUserAuth();

  const openSideBar = () => setIsSideBarOpen(true);

  const openProfileBar = () => {
    setIsProfileBar(true);
    openSideBar();
  };

  const openCartBar = () => {
    openSideBar();
    setIsProfileBar(false);
  };

  const navigateTo = (route: string) => {
    navigate(route);
    setIsSideBarOpen(false);
  };

  return (
    <>
      <nav className="border border-primary/10 w-screen bg-background backdrop-brightness-">
        <div className="container mx-auto px-10 flex justify-between items-center py-5 ">
          <Link
            to="/"
            className="text-4xl font-semibold cursor-pointer font-primary text-primary italic"
          >
            Bookstore
          </Link>

          {/* <div className="flex justify-between gap-8">
          <ButtonWithMarkBook to="/">BOOKS</ButtonWithMarkBook>
          <ButtonWithMarkBook to="/">AUTHORS</ButtonWithMarkBook>
          <ButtonWithMarkBook to="/">CATEGORIES</ButtonWithMarkBook>
        </div> */}

          <div className="flex justify-between items-center gap-5 ">
            <button
              onClick={openCartBar}
              className="group hover:text-white cursor-pointer rounded-md"
            >
              <Handbag className="group-hover:text-primary text-zinc-500 transition-all duration-100" />
            </button>
            <button
              className="group hover:text-white p-2 cursor-pointer transition-all duration-100 rounded-md"
              onClick={openProfileBar}
            >
              <User className="group-hover:text-primary text-zinc-500 transition-all duration-100" />
            </button>
          </div>
        </div>
      </nav>
      z
      <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}>
        {isProfileBar ? (
          <UserSideBar
            user={user}
            setIsOpen={setIsSideBarOpen}
            navigateTo={navigateTo}
          />
        ) : (
          <CartSideBar
            user={user}
            setIsOpen={setIsSideBarOpen}
            navigateTo={navigateTo}
          />
        )}
      </SideBar>
    </>
  );
};

export default HomeBar;
