import { Button } from "@/components/ui/button";
import type { UserAddress } from "@/schemas/address";
import { Pen } from "lucide-react";

const AddressCard = ({ address }: { address: UserAddress }) => {
  return (
    <div className="bg-white/30 p-5 rounded-lg shadow-lg shadow-black/5 flex justify-between items-start ">
      <div>
        <h3 className="font-primary font-bold text-xl">
          {`${address.street} - ${address.number} - ${address.complement}`}
        </h3>

        <p className="font-medium text-lg text-zinc-800">
          {address.neighborhood}
        </p>

        <p className="font-medium text-lg">
          {`Cep: ${address.zipCode} - ${address.state} - ${address.city}`}
        </p>

        <p className="text-lg font-semibold text-zinc-400">{`${address.recipientName} - ${address.phone}`}</p>
      </div>

      <Button className="cursor-pointer hover:bg-private-secondary bg-private-secondary shadow-lg shadow-black/10 hover:shadow-black/30 hover:scale-110 transition-all duration-300">
        <Pen />
      </Button>
    </div>
  );
};

export default AddressCard;
