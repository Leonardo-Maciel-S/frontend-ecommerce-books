import useGetUserAuth from "@/hooks/user/use-get-user-auth";
import { useEffect, useRef, type ReactNode } from "react";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
  children: ReactNode;
}

const SideBar = ({ isOpen, setIsOpen, children }: SideBarProps) => {
  const sideBar = useRef<HTMLDivElement>(null);

  const { user } = useGetUserAuth();

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (
        sideBar.current &&
        !sideBar.current.contains(e.target as HTMLDivElement)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, setIsOpen]);

  return (
    <div
      ref={sideBar}
      className={`w-[300px] h-screen fixed right-0 top-0 rounded-tl-4xl rounded-bl-4xl shadow-2xl shadow-black  bg-white z-20 ${
        isOpen ? "translate-x-0" : "translate-x-[300px]"
      }`}
    >
      <div className="border-b-2 p-5 pb-2 border-zinc-300">
        <h3 className="font-semibold font-primary text-lg">
          {user ? `Óla, ${user.name}` : "Faça login"}
        </h3>
      </div>

      <div className="p-4 flex flex-col justify-between h-[93%] ">
        {children}
      </div>
    </div>
  );
};

export default SideBar;
