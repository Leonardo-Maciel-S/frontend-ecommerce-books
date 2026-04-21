import { type LucideIcon } from "lucide-react";

interface PaymentSectionCardProps {
  isSelect: boolean;
  setIsSelect: () => void;
  title: string;
  paragraph: string;
  icon: LucideIcon;
}

const PaymentSectionCard = ({
  isSelect,
  setIsSelect,
  paragraph,
  title,
  icon: Icon,
}: PaymentSectionCardProps) => {
  return (
    <button
      type="button"
      className={`flex-1 p-10 min-w-[200px] space-y-3 rounded-md border-2 shadow shadow-black/10 ${isSelect ? "bg-white/70 border-primary" : "bg-[#F3F2F1] border-primary/10 hover:border-primary/40"} cursor-pointer group transition-all duration-150 ease-in`}
      onClick={setIsSelect}
    >
      <div className="flex items-center justify-between">
        <Icon
          className={`${isSelect ? "text-primary stroke-3" : "text-black"} size-6 `}
        />

        {isSelect ? (
          <span className="text-primary size-4 border-primary border-4 rounded-full" />
        ) : (
          <span className="text-primary size-4 border-zinc-300 border-2 rounded-full" />
        )}
      </div>

      <div className="text-start font-primary space-y-1 ">
        <p className="capitalize font-bold text-lg">{title}</p>
        <p className="uppercase text-zinc-600 tracking-widest font-base text-xs">
          {paragraph}
        </p>
      </div>
    </button>
  );
};

export default PaymentSectionCard;
