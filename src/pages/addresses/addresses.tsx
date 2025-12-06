import { Button } from "@/components/ui/button";
import AddressCard from "./address-card";
import { useState } from "react";
import NewAddress from "./new-address";
import ShowComponent from "@/components/show-component";

const addresses = [
  {
    id: "8f02032a-8458-47ec-a407-9d5faa606e10",
    userId: "c98075dd-b09a-4c12-ba97-34aa67e9ebc6",
    number: 125,
    street: "Rua das Flores",
    complement: "Apto 45",
    neighborhood: "Jardim das Acácias",
    city: "São Paulo",
    state: "SP",
    zipCode: "01234-567",
    phone: "(11) 98765-4321",
    recipientName: "João Silva",
    cpfOrCnpj: "123.456.789-09",
  },
  {
    id: "d3e8e7fe-232d-454a-b6cf-cbbf631e4820",
    userId: "c98075dd-b09a-4c12-ba97-34aa67e9ebc6",
    number: 123,
    street: "Rua das Flores 22",
    complement: "Apto 45",
    neighborhood: "Jardim das Acácias",
    city: "São Paulo",
    state: "SP",
    zipCode: "01234-567",
    phone: "(11) 98765-4321",
    recipientName: "João Silva",
    cpfOrCnpj: "123.456.789-09",
  },
];

const Addresses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between py-2">
        <h2 className="text-3xl font-semibold font-primary">Endereços</h2>

        <Button
          onClick={() => setIsModalOpen(true)}
          className="text-lg py-6 px-10 rounded-2xl font-semibold hover:cursor-pointer shadow-lg shadow-black/10 hover:shadow-black/30  transition-all duration-300 font-secondary bg-private-secondary/90 hover:bg-private-secondary "
        >
          Criar endereço
        </Button>
      </div>

      <div className="py-5 flex flex-col gap-5">
        {addresses.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </div>

      <ShowComponent when={isModalOpen}>
        <NewAddress setIsModalOpen={setIsModalOpen} />
      </ShowComponent>
    </div>
  );
};

export default Addresses;
