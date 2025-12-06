import { useEffect, useRef, type Dispatch } from "react";

interface NewAddressProps {
  setIsModalOpen: Dispatch<boolean>;
}

const NewAddress = ({ setIsModalOpen }: NewAddressProps) => {
  const form = useRef<HTMLFormElement | null>(null);
  const div = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).contains(form.current)) {
        setIsModalOpen(false);
      }
    };

    div.current?.addEventListener("click", handleOutClick);

    return () => {
      div.current?.removeEventListener("click", handleOutClick);
    };
  }, []);

  return (
    <>
      <div
        ref={div}
        className="absolute w-screen h-screen flex justify-center items-center top-0 left-0  bg-black/40"
      />

      <form
        ref={form}
        className="z-20 bg-white absolute top-1/2 left-1/2 -translate-1/2"
      >
        <h2>Criar Endereço</h2>

        <div></div>
      </form>
    </>
  );
};

export default NewAddress;
