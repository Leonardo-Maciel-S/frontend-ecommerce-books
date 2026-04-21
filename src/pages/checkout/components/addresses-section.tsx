import PrimaryButton from "@/components/primary-button";
import ShowComponent from "@/components/show-component";
import useGetAllAddress from "@/hooks/address/get-all-address";
import useGetCart from "@/hooks/cart/use-get-cart";
import useSelectDefaultCartAddress from "@/hooks/cart/use-select-default-cart-address";
import AddressForm from "@/pages/profile/components/addresses/address-form";
import { Modal, Typography, Box } from "@mui/material";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import AddressSectionCard from "./address-section-card";

const AddressSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openNewAddress, setOpenNewAddress] = useState(false);

  const { data: cartResponse } = useGetCart();
  const { data } = useGetAllAddress();
  const { mutateAsync, isPending } = useSelectDefaultCartAddress();

  const cartUserAddressId = cartResponse?.cart.userAddressId;

  const defaultAddress = data?.find(
    (address) => address.id === cartUserAddressId,
  );

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleSelectAddress = async (id?: string) => {
    await mutateAsync(id).then(() => {
      handleOpenModal();
    });
  };

  return (
    <>
      <div>
        <div className="font-primary flex items-center justify-between pb-3 border-b border-primary/10 ">
          <h2 className="font-medium text-xl">Endereço de Entrega</h2>
        </div>

        <div className="py-8">
          <ShowComponent when={!!defaultAddress}>
            <div className="bg-[#F3F2F1] p-8 flex gap-5 shadow rounded-md shadow-black/10 flex-wrap justify-between">
              <AddressSectionCard address={defaultAddress} />

              <button
                onClick={handleOpenModal}
                className="transition-all duration-200 ease-linear border border-primary hover:bg-primary hover:text-white cursor-pointer rounded-2xl py-2 text-sm text-primary/90 h-min px-5 font-secondary font-semibold flex-1 md:flex-none"
              >
                Trocar Endereço
              </button>
            </div>
          </ShowComponent>

          <ShowComponent when={!cartUserAddressId}>
            <div className="bg-[#F3F2F1] p-8 flex items-center gap-5 shadow rounded-md shadow-black/10">
              <p className="flex-1">
                Endereço padrão ainda não salvo, escolha um ou cadastre outro.
              </p>

              <button
                onClick={handleOpenModal}
                className="transition-all duration-200 ease-linear border border-primary hover:bg-primary hover:text-white cursor-pointer rounded-2xl py-2 text-sm text-primary/90 h-min px-5 font-secondary font-semibold"
              >
                Ver endereços
              </button>
            </div>
          </ShowComponent>
        </div>
      </div>

      <Modal
        open={openModal}
        onClose={handleOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <Box className="bg-white m-auto p-6 rounded-md">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="flex items-center  justify-between"
          >
            <span className="font-primary font-medium text-2xl">
              Escolha um endereço
            </span>

            <ShowComponent when={isPending}>
              <span className="font-primary font-medium text-2xl">
                <Loader2 className="animate-spin text-primary" />
              </span>
            </ShowComponent>
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="space-y-3"
          >
            {data?.map((address) => (
              <div
                key={address.id}
                className={`bg-[#F3F2F1] md:min-w-[500px] p-8 flex justify-between gap-5 shadow rounded-md shadow-black/10 ${cartUserAddressId === address.id && "border-primary border-2"} `}
              >
                <AddressSectionCard address={address} />

                <ShowComponent when={cartUserAddressId !== address.id}>
                  <button
                    onClick={() => {
                      handleSelectAddress(address.id);
                    }}
                    disabled={isPending}
                    className="transition-all duration-200 ease-linear border not-disabled:border-primary not-disabled:hover:bg-primary not-disabled:hover:text-white cursor-pointer rounded-2xl py-2 text-sm text-primary/90 disabled:text-zinc-400 h-min px-5 font-secondary font-semibold min-w-30 flex justify-center"
                  >
                    Selecionar
                  </button>
                </ShowComponent>
              </div>
            ))}

            <PrimaryButton
              size="sm"
              className="mx-auto px-10"
              onClick={() => setOpenNewAddress(true)}
            >
              Criar um novo
            </PrimaryButton>
          </Typography>

          <Modal
            open={openNewAddress}
            onClose={() => setOpenNewAddress(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ width: 400 }}>
              <AddressForm
                setIsModalOpen={setOpenNewAddress}
                addressToEdit={null}
                setAddressToEdit={() => null}
              />
            </Box>
          </Modal>
        </Box>
      </Modal>
    </>
  );
};

export default AddressSection;
