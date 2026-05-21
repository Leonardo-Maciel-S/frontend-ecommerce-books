import { Handbag, User } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import SideBar from "../side-bar/side-bar";
import useGetUserAuth from "@/hooks/user/use-get-user-auth";
import useGetAllItemCart from "@/hooks/cart/use-get-all-item-cart";

const HomeBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const { user, navigate } = useGetUserAuth();

  const { data } = useGetAllItemCart();

  const openSideBar = () => setIsSideBarOpen(true);

  const openCartBar = () => {
    openSideBar();
  };

  const navigateTo = (route: string) => {
    navigate(route);
    setIsSideBarOpen(false);
  };

  const navigateToProfile = () => {
    if (!user) {
      navigateTo("/login");
      return;
    }

    navigateTo(`/profile/my-books`);
  };

  return (
    <>
      <nav className="border border-primary/10 w-screen bg-background backdrop-brightness-">
        <div className="container mx-auto px-10 flex justify-between items-center py-5 ">
          <Link
            to="/"
            className="text-2xl md:text-4xl font-semibold cursor-pointer font-primary text-primary italic"
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
              className="group relative hover:text-white cursor-pointer rounded-md"
            >
              {data && data?.cartItems.length > 0 && (
                <div className="absolute -right-2 -bottom-2 rounded-full bg-primary size-6 flex items-center justify-center">
                  <p className="text-[14px] text-white font-semibold">
                    {data?.cartItems.length}
                  </p>
                </div>
              )}
              <Handbag
                strokeWidth={2}
                className="group-hover:text-primary size-8 text-zinc-500 transition-all duration-100"
              />
            </button>

            <button
              onClick={navigateToProfile}
              className="group hover:text-white p-2 cursor-pointer transition-all duration-100 rounded-md"
            >
              <User
                strokeWidth={2}
                className="group-hover:text-primary size-8 text-zinc-500 transition-all duration-100"
              />
            </button>
          </div>
        </div>
      </nav>

      <SideBar
        user={user}
        isOpen={isSideBarOpen}
        setIsOpen={setIsSideBarOpen}
        navigateTo={navigateTo}
        cartItemsResponse={data}
      />
    </>
  );
};

export default HomeBar;
