import AddressCard from "./address-card";

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
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold text-private-secondary">
        Endereços
      </h2>

      <div className="py-5 flex flex-col gap-5">
        {addresses.map((address) => (
          <AddressCard address={address} />
        ))}
      </div>
    </div>
  );
};

export default Addresses;
