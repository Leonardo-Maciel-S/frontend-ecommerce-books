import { Handbag, Search, User } from "lucide-react";
import ButtonWithMarkBook from "./button-with-mark-book";
import { Link } from "react-router";
import { useState } from "react";
import useGetUserAuth from "@/hooks/use-get-user-auth";
import UserSideBar from "../side-bar/user-side-bar";
import SideBar from "../side-bar/side-bar";
import CartSideBar from "../side-bar/cart-side-bar";

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
      <nav className="flex justify-between items-center py-5">
        <Link
          to="/"
          className="text-4xl font-semibold cursor-pointer font-primary"
        >
          Bookstore
        </Link>

        <div className="flex justify-between gap-8">
          <ButtonWithMarkBook to="/">BOOKS</ButtonWithMarkBook>
          <ButtonWithMarkBook to="/">AUTHORS</ButtonWithMarkBook>
          <ButtonWithMarkBook to="/">CATEGORIES</ButtonWithMarkBook>
        </div>

        <div className="flex justify-between items-center gap-5 ">
          <button
            className="hover:bg-primary-light p-2 cursor-pointer transition-all duration-100 rounded-md"
            onClick={openProfileBar}
          >
            <User />
          </button>

          <Link
            to=""
            className="hover:bg-primary-light p-2 cursor-pointer transition-all duration-100 rounded-md"
          >
            <Search />
          </Link>

          <button
            onClick={openCartBar}
            className="hover:bg-primary-light p-2 cursor-pointer transition-all duration-100 rounded-md"
          >
            <Handbag />
          </button>
        </div>
      </nav>

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
