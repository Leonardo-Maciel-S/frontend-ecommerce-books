import { Button } from "@/components/ui/button";
import AddressCard from "./address-card";
import { useState } from "react";
import AddressForm from "./address-form";
import ShowComponent from "@/components/show-component";
import useGetAllAddress from "@/hooks/address/get-all-address";
import Loading from "@/components/loading";
import type { UserAddress } from "@/schemas/address";

const Addresses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState<UserAddress | null>(null);

  const { data: addresses, isLoading } = useGetAllAddress();

  return (
    <div className="lg:mt-10 overflow-hidden h-full mb-4">
      <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between py-2">
        <h2 className="text-3xl font-semibold font-primary">Endereços</h2>

        <Button
          onClick={() => setIsModalOpen(true)}
          className="hidden lg:flex text-lg py-6 px-10 rounded-2xl font-semibold hover:cursor-pointer shadow-lg shadow-black/10 hover:shadow-black/30  transition-all duration-300 font-secondary bg-private-secondary/90 hover:bg-private-secondary "
        >
          Criar endereço
        </Button>
      </div>

      <ShowComponent when={isLoading}>
        <Loading />
      </ShowComponent>

      <ShowComponent when={!isLoading}>
        <div className="py-5 flex flex-col gap-5">
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
        className="lg:hidden w-full text-lg py-6 px-10 rounded-2xl font-semibold hover:cursor-pointer shadow-lg shadow-black/10 hover:shadow-black/30  transition-all duration-300 font-secondary bg-private-secondary/90 hover:bg-private-secondary "
      >
        Criar endereço
      </Button>
    </div>
  );
};

export default Addresses;
