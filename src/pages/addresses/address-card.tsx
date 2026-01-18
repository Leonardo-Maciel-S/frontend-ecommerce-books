import { Button } from "@/components/ui/button";
import type { UserAddress } from "@/schemas/address";
import { Pen } from "lucide-react";
import type { Dispatch } from "react";

interface AddressCardProps {
  address: UserAddress;
  setAddressToEdit: Dispatch<UserAddress>;
  setIsModalOpen: Dispatch<boolean>;
}

const AddressCard = ({
  address,
  setAddressToEdit,
  setIsModalOpen,
}: AddressCardProps) => {
  const handleEditClick = () => {
    setIsModalOpen(true);
    setAddressToEdit(address);
  };

  return (
    <div className="bg-white/30 p-5 rounded-lg shadow-lg shadow-black/10 flex justify-between items-start hover:bg-white/60 ">
      <div>
        <h3 className="font-primary font-bold text-lg md:text-xl">
          {`${address.street} - ${address.number}  ${
            address.complement && "- " + address.complement
          }`}
        </h3>

        <p className="font-medium text-lg text-zinc-800">
          {address.neighborhood}
        </p>

        <p className="font-medium text-lg">
          {`Cep: ${address.zipCode} - ${address.state} - ${address.city}`}
        </p>

        <p className="text-lg font-semibold text-zinc-400">{`${address.recipientName} - ${address.phone}`}</p>
      </div>

      <Button
        className="cursor-pointer hover:bg-private-secondary bg-private-secondary shadow-lg shadow-black/10 hover:shadow-black/30 hover:scale-110 transition-all duration-300"
        onClick={handleEditClick}
      >
        <Pen />
      </Button>
    </div>
  );
};

export default AddressCard;
