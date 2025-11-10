import { useEffect, useRef } from "react";
import Button from "../button";

interface SideBarProps {
  isOpen: boolean;
  isProfileBar: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

const SideBar = ({ isOpen, isProfileBar, setIsOpen }: SideBarProps) => {
  const sideBar = useRef<HTMLDivElement>(null);

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
      className={`w-[300px] h-screen fixed right-0 top-0 rounded-tl-4xl rounded-bl-4xl shadow-2xl shadow-black  bg-white z-10 ${
        isOpen ? "translate-x-0" : "translate-x-[300px]"
      }`}
    >
      <div className="border-b-2 p-5 pb-2 border-zinc-300">
        <h3 className="font-semibold font-primary text-lg">Óla, Leonardo</h3>
      </div>

      <div className="p-4 flex flex-col justify-between h-[93%] ">
        <div className="space-y-5">
          {isProfileBar && (
            <>
              <Button>Editar Conta</Button>
              <Button>Criar Livro</Button>
            </>
          )}
        </div>

        <button className="p-4 bg-red-500 rounded-2xl cursor-pointer font-bold text-white hover:bg-red-600 w-full">
          Sair
        </button>
      </div>
    </div>
  );
};

export default SideBar;
