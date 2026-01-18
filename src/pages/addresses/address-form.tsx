import ErrorMessage from "@/components/error-message";
import ShowComponent from "@/components/show-component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import useAddressForm from "@/hooks/address/address-form";
import useCreateAddress from "@/hooks/address/create-address";
import useEditAddress from "@/hooks/address/edit-address";
import useGetCep from "@/hooks/address/get-cep";
import type { UserAddress, UserAddressBody } from "@/schemas/address";
import { Loader2, Search, X } from "lucide-react";
import { useEffect, useRef, type Dispatch } from "react";
import { toast } from "react-toastify";

interface AddressFormProps {
  setIsModalOpen: Dispatch<boolean>;
  addressToEdit: UserAddress | null;
  setAddressToEdit: Dispatch<UserAddress | null>;
}

const AddressForm = ({
  setIsModalOpen,
  addressToEdit,
  setAddressToEdit,
}: AddressFormProps) => {
  const form = useRef<HTMLFormElement | null>(null);
  const div = useRef<HTMLDivElement | null>(null);

  const { mutate: mutateGetCep, isPending } = useGetCep();

  const { mutate: createAddress, isPending: isCreateLoading } =
    useCreateAddress();

  const { mutate: editAddress, isPending: isEditLoading } = useEditAddress();

  const closeModal = () => {
    setIsModalOpen(false);
    setAddressToEdit(null);
  };

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useAddressForm();

  const getCep = () => {
    const cepField = getValues("zipCode");

    if (cepField) {
      mutateGetCep(cepField, {
        onSuccess: (data) => {
          setValue("street", data.logradouro, { shouldValidate: true });
          setValue("neighborhood", data.bairro, { shouldValidate: true });
          setValue("state", data.estado, { shouldValidate: true });
          setValue("city", data.localidade, { shouldValidate: true });
        },

        onError: () => {
          setValue("street", "", { shouldValidate: true });
          setValue("neighborhood", "", { shouldValidate: true });
          setValue("state", "", { shouldValidate: true });
          setValue("city", "", { shouldValidate: true });
        },
      });
    }
  };

  const handleSubmitClick = (data: UserAddressBody) => {
    const zipCode = data.zipCode.replace(/\D/g, "");
    const cpfOrCnpj = data.cpfOrCnpj.replace(/\D/g, "");
    const phone = data.phone.replace(/\D/g, "");

    if (addressToEdit) {
      editAddress(
        {
          body: { ...data, zipCode, cpfOrCnpj, phone },
          id: addressToEdit.id!,
        },
        {
          onSuccess: () => {
            toast.success("Endereço editado com sucesso.");

            closeModal();
          },
        }
      );

      return;
    }

    createAddress(
      { ...data, zipCode, cpfOrCnpj, phone },
      {
        onSuccess: () => {
          toast.success("Endereço criado com sucesso.");

          closeModal();
        },
      }
    );
  };

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).contains(form.current)) {
        closeModal();
      }
    };

    div.current?.addEventListener("click", handleOutClick);

    return () => {
      div.current?.removeEventListener("click", handleOutClick);
    };
  }, []);

  useEffect(() => {
    if (addressToEdit) reset(addressToEdit);
  }, [addressToEdit]);

  return (
    <>
      <div
        ref={div}
        className="fixed w-screen h-[1200px] top-0 left-0 bg-black/40 z-10"
      />
      <div className="w-full max-w-screen min-h-screen absolute top-0 left-0 flex justify-center items-center p-5">
        <form
          ref={form}
          onSubmit={handleSubmit(handleSubmitClick)}
          className="bg-white z-20 p-5 rounded-2xl space-y-3 lg:w-[600px]"
        >
          <div className="flex justify-between">
            <h2 className="text-xl sm:text-2xl font-primary font-semibold">
              Novo Endereço
            </h2>

            <Button
              variant={"ghost"}
              type="button"
              onClick={closeModal}
              className="hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-200"
            >
              <X strokeWidth={4} />
            </Button>
          </div>

          <div className="flex flex-col gap-1 p-4 rounded-lg border-2 border-black/20">
            <h3 className="font-bold text-base text-zinc-500">Endereço</h3>

            <div className="">
              <p className="font-semibold text-md sm:text-lg">
                Cep <span className="text-red-500 font-bold text-base">*</span>
              </p>

              <div className="flex gap-2 items-center flex-wrap">
                <InputGroup className="sm:max-w-52 border-zinc-700">
                  <InputGroupInput
                    {...register("zipCode")}
                    inputMode="numeric"
                    maxLength={9}
                    placeholder="Busque seu CEP"
                    className="md:text-base font-semibold placeholder:text-base placeholder:font-semibold"
                  />
                  <InputGroupAddon
                    align="inline-end"
                    className="w-fit p-0 pr-2 py-1"
                  >
                    <InputGroupButton
                      variant="default"
                      onClick={getCep}
                      size="sm"
                      className="cursor-pointer"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <Search />
                      )}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>

                <p className="text-zinc-400 font-bold text-sm ml-2">
                  Busque seu CEP para preencher os campos
                </p>
              </div>

              <ShowComponent when={errors.zipCode !== undefined}>
                <ErrorMessage>{errors.zipCode?.message}</ErrorMessage>
              </ShowComponent>
            </div>

            <label className="flex flex-col gap-1  ">
              <p className="font-semibold text-md sm:text-lg">Logradouro</p>

              <Input
                {...register("street")}
                disabled
                className="font-secondary md:text-md font-semibold"
                placeholder="Ex: Avenida Almeida"
              />

              <ShowComponent when={errors.street !== undefined}>
                <ErrorMessage>{errors.street?.message}</ErrorMessage>
              </ShowComponent>
            </label>

            <div className="flex gap-4 flex-wrap">
              <label className="flex-1 space-y-1 min-w-20">
                <p className="font-semibold text-md sm:text-lg">
                  Número
                  <span className="text-red-500 font-bold text-base">*</span>
                </p>

                <Input
                  {...register("number")}
                  className="font-secondary md:text-md font-semibold"
                  placeholder="Ex: 1234"
                />

                <ShowComponent when={errors.number !== undefined}>
                  <ErrorMessage>{errors.number?.message}</ErrorMessage>
                </ShowComponent>
              </label>

              <label className="space-y-1 flex-1 min-w-46">
                <p className="font-semibold text-md sm:text-lg">Bairro</p>

                <Input
                  {...register("neighborhood")}
                  disabled
                  className="font-secondary md:text-md font-semibold"
                  placeholder="Ex: Setor Norte"
                />

                <ShowComponent when={errors.neighborhood !== undefined}>
                  <ErrorMessage>{errors.neighborhood?.message}</ErrorMessage>
                </ShowComponent>
              </label>
            </div>

            <label className="space-y-1 flex-1">
              <p className="font-semibold text-md sm:text-lg text-nowrap">
                Complemento (opcional)
              </p>

              <Input
                {...register("complement")}
                className="font-secondary md:text-md font-semibold"
                placeholder="Ex: Casa 2"
              />

              <ShowComponent when={errors.complement !== undefined}>
                <ErrorMessage>{errors.complement?.message}</ErrorMessage>
              </ShowComponent>
            </label>

            <div className="flex gap-4 ">
              <label className="space-y-1 flex-1">
                <p className="font-semibold text-md sm:text-lg text-nowrap">
                  Cidade
                </p>

                <Input
                  {...register("city")}
                  disabled
                  className="font-secondary md:text-md font-semibold"
                  placeholder="Ex: Brasília"
                />

                <ShowComponent when={errors.city !== undefined}>
                  <ErrorMessage>{errors.city?.message}</ErrorMessage>
                </ShowComponent>
              </label>

              <label className="space-y-1 flex-1">
                <p className="font-semibold text-md sm:text-lg text-nowrap">
                  Estado
                </p>

                <Input
                  {...register("state")}
                  disabled
                  className="font-secondary md:text-md font-semibold"
                  placeholder="Ex: Distrito Federal"
                />

                <ShowComponent when={errors.state !== undefined}>
                  <ErrorMessage>{errors.state?.message}</ErrorMessage>
                </ShowComponent>
              </label>
            </div>
          </div>

          <div className="p-4 rounded-lg border-2 border-black/20">
            <h3 className="font-bold text-base text-zinc-500 ">
              Quem vai receber
            </h3>

            <label className="space-y-1 flex-1">
              <p className="font-semibold text-md sm:text-lg text-nowrap">
                Nome <span className="text-red-500 font-bold text-base">*</span>
              </p>

              <Input
                {...register("recipientName")}
                className="font-secondary md:text-md font-semibold"
                placeholder="Ex: Maria"
              />

              <ShowComponent when={errors.recipientName !== undefined}>
                <ErrorMessage>{errors.recipientName?.message}</ErrorMessage>
              </ShowComponent>
            </label>

            <div className="flex gap-4 mt-2 flex-wrap">
              <label className="space-y-1 flex-1 min-w-36">
                <p className="font-semibold text-md sm:text-lg text-nowrap">
                  CPF
                  <span className="text-red-500 font-bold text-base">*</span>
                </p>

                <Input
                  {...register("cpfOrCnpj")}
                  className="font-secondary md:text-md font-semibold"
                  placeholder="000.000.000-00"
                />

                <ShowComponent when={errors.cpfOrCnpj !== undefined}>
                  <ErrorMessage>{errors.cpfOrCnpj?.message}</ErrorMessage>
                </ShowComponent>
              </label>

              <label className="space-y-1 flex-1 min-w-36">
                <p className="font-semibold text-md sm:text-lg text-nowrap">
                  Telefone
                  <span className="text-red-500 font-bold text-base">*</span>
                </p>

                <Input
                  {...register("phone")}
                  className="font-secondary md:text-md font-semibold"
                  placeholder="(61) 9 9999-9999"
                />

                <ShowComponent when={errors.phone !== undefined}>
                  <ErrorMessage>{errors.phone?.message}</ErrorMessage>
                </ShowComponent>
              </label>
            </div>
          </div>

          <Button
            disabled={isCreateLoading || isEditLoading}
            className="py-5 text-xl w-full cursor-pointer"
          >
            {isCreateLoading || isEditLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Criar"
            )}
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddressForm;
