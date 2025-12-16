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
import useGetCep from "@/hooks/address/get-cep";
import type { UserAddressBody } from "@/schemas/address";
import { Loader2, Search } from "lucide-react";
import { useEffect, useRef, type Dispatch } from "react";

interface NewAddressProps {
  setIsModalOpen: Dispatch<boolean>;
}

const NewAddress = ({ setIsModalOpen }: NewAddressProps) => {
  const form = useRef<HTMLFormElement | null>(null);
  const div = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useAddressForm();

  const { mutate: mutateGetCep, isPending } = useGetCep();

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

  const createAddress = (data: UserAddressBody) => {
    console.log(data);
    // const cleanCep = data.zipCode.replace(/\D/g, "");
    // const cleanCpf = data.cpfOrCnpj.replace(/\D/g, "");
    // const cleanPhone = data.phone.replace(/\D/g, "");
  };

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).contains(form.current)) {
        setIsModalOpen(false);
      }
    };

    div.current?.addEventListener("click", handleOutClick);

    return () => {
      div.current?.removeEventListener("click", handleOutClick);
    };
  }, []);

  return (
    <>
      <div
        ref={div}
        className="fixed w-screen h-[1200px] top-0 left-0 bg-black/40 z-10"
      />
      <div className="w-full max-w-screen min-h-screen absolute top-0 left-0 flex justify-center items-center py-10">
        <form
          ref={form}
          onSubmit={handleSubmit(createAddress)}
          className="bg-white z-20 p-5 rounded-2xl space-y-3 lg:w-[600px]"
        >
          <h2 className="text-3xl font-primary font-semibold">Novo Endereço</h2>

          <div className="flex flex-col gap-1 p-4 rounded-lg border-2 border-black/20">
            <h3 className="font-bold text-base text-zinc-500">Endereço</h3>

            <div className="">
              <p className="font-semibold text-lg">
                Cep <span className="text-red-500 font-bold text-base">*</span>
              </p>

              <div className="flex gap-2 items-center flex-wrap">
                <InputGroup className="max-w-52 border-zinc-700">
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
              <p className="font-semibold text-lg">Logradouro</p>

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

            <div className="flex gap-4 ">
              <label className="space-y-1 min-w-40">
                <p className="font-semibold text-lg">
                  Número{" "}
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
                <p className="font-semibold text-lg">Bairro</p>

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
              <p className="font-semibold text-lg text-nowrap">
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
                <p className="font-semibold text-lg text-nowrap">Cidade</p>

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
                <p className="font-semibold text-lg text-nowrap">Estado</p>

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
              <p className="font-semibold text-lg text-nowrap">
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

            <div className="flex gap-4 mt-2">
              <label className="space-y-1 flex-1">
                <p className="font-semibold text-lg text-nowrap">
                  CPF{" "}
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

              <label className="space-y-1 flex-1">
                <p className="font-semibold text-lg text-nowrap">
                  Telefone{" "}
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

          <Button className="py-5 text-xl w-full">Criar</Button>
        </form>
      </div>
    </>
  );
};

export default NewAddress;
