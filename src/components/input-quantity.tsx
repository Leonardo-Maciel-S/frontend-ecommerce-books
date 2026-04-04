import { Minus, Plus } from "lucide-react";

interface InputQuantityProps {
  defaultQuantity: number;
  btnNextFn: () => void;
  btnPrevFn: () => void;
  prevLoad?: boolean;
  nextLoad?: boolean;
}

const InputQuantity = ({
  defaultQuantity = 1,
  btnNextFn,
  btnPrevFn,
  prevLoad = false,
  nextLoad = false,
}: InputQuantityProps) => {
  return (
    <div className="bg-[#EEEBE9] rounded-xl overflow-hidden flex items-center py-1 w-28">
      <button
        className="px-2 text-zinc-500 not-disabled:hover:text-primary cursor-pointer disabled:text-zinc-300"
        onClick={btnPrevFn}
        disabled={defaultQuantity <= 1 || prevLoad}
      >
        <Minus />
      </button>

      <span className="flex-1 text-center font-bold">{defaultQuantity}</span>

      <button
        className="px-2 text-zinc-500 hover:text-primary cursor-pointer disabled:text-zinc-300"
        onClick={btnNextFn}
        disabled={nextLoad}
      >
        <Plus />
      </button>
    </div>
  );
};

export default InputQuantity;
