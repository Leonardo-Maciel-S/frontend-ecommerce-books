import type { UserAddress } from "@/schemas/address";
import { MapPin } from "lucide-react";

interface AddressSectionCardProps {
  address?: UserAddress;
}

const AddressSectionCard = ({ address }: AddressSectionCardProps) => {
  return (
    <div className="flex gap-3 items-start">
      <div className="bg-primary/15 h-min p-3 rounded-lg">
        <MapPin className="text-primary" />
      </div>

      <div className="font-primary text-zinc-600 flex-1 ">
        <p className="font-semibold text-black">
          {address?.street} - {address?.number}
        </p>
        <p>{address?.neighborhood}</p>
        <p>
          {address?.city} - {address?.state}
        </p>
        <p className="capitalize">
          <strong>{address?.recipientName} </strong> - {address?.zipCode}
        </p>
      </div>
    </div>
  );
};

export default AddressSectionCard;
