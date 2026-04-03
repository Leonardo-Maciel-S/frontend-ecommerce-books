import { Minus, Plus } from "lucide-react";

interface InputQuantityProps {
  defaultQuantity: number;
  btnNextFn: () => void;
  btnPrevFn: () => void;
}

const InputQuantity = ({
  defaultQuantity = 1,
  btnNextFn,
  btnPrevFn,
}: InputQuantityProps) => {
  return (
    <div className="bg-[#EEEBE9] rounded-xl overflow-hidden flex items-center py-1 w-28">
      <button
        className="px-2 text-zinc-500 hover:text-primary cursor-pointer"
        onClick={btnNextFn}
      >
        <Minus />
      </button>

      <span className="flex-1 text-center font-bold">{defaultQuantity}</span>

      <button
        className="px-2 text-zinc-500 hover:text-primary cursor-pointer"
        onClick={btnPrevFn}
      >
        <Plus />
      </button>
    </div>
  );
};

export default InputQuantity;
