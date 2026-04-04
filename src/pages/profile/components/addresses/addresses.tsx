import { Button } from "@/components/ui/button";
import AddressCard from "./address-card";
import { useState } from "react";
import AddressForm from "./address-form";
import ShowComponent from "@/components/show-component";
import useGetAllAddress from "@/hooks/address/get-all-address";
import Loading from "@/components/loading";
import type { UserAddress } from "@/schemas/address";
import PrimaryButton from "@/components/primary-button";
import { Plus } from "lucide-react";

const Addresses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState<UserAddress | null>(null);

  const { data: addresses, isLoading } = useGetAllAddress();

  return (
    <div className=" h-screen ">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between font-extrabold tracking-wide bg-white font-secondary text-2xl p-5">
        <h2>Endereços</h2>

        <PrimaryButton
          onClick={() => setIsModalOpen(true)}
          className="py-2 px-5"
        >
          <Plus />
          <p>Criar endereço</p>
        </PrimaryButton>
      </div>
      <ShowComponent when={isLoading}>
        <div className="py-10">
          <Loading />
        </div>
      </ShowComponent>
      <ShowComponent when={!isLoading}>
        <div className="p-5 flex gap-5">
          {addresses &&
            addresses.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                setAddressToEdit={setAddressToEdit}
                setIsModalOpen={setIsModalOpen}
              />
            ))}
        </div>
      </ShowComponent>
      <ShowComponent when={isModalOpen}>
        <AddressForm
          setIsModalOpen={setIsModalOpen}
          addressToEdit={addressToEdit}
          setAddressToEdit={setAddressToEdit}
        />
      </ShowComponent>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="sm:hidden w-full text-lg py-6 px-10 rounded-2xl font-semibold hover:cursor-pointer shadow-lg shadow-black/10 hover:shadow-black/30  transition-all duration-300 font-secondary bg-private-secondary/90 hover:bg-private-secondary "
      >
        Criar endereço
      </Button>
    </div>
  );
};

export default Addresses;
