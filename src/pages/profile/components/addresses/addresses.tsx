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
    <div className="min-h-screen flex flex-col pb-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between font-extrabold tracking-wide bg-white font-secondary text-2xl p-5">
        <h2>Endereços</h2>

        <PrimaryButton
          onClick={() => setIsModalOpen(true)}
          className="py-2 px-5 hidden md:flex items-center"
        >
          <Plus />
          <p>Criar endereço</p>
        </PrimaryButton>
      </div>

      <div className="h-full  flex-1">
        <ShowComponent when={isLoading}>
          <div className="py-10">
            <Loading />
          </div>
        </ShowComponent>

        <ShowComponent when={!isLoading}>
          <div className="p-5 max-h-full flex flex-wrap gap-5">
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
      </div>

      <div className="px-4">
        <PrimaryButton
          onClick={() => setIsModalOpen(true)}
          className="py-2 px-5 md:hidden w-full"
        >
          <Plus />
          <p>Criar endereço</p>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Addresses;
