import { cepService } from "@/services/cep/search";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useGetCep = () => {
  const mutation = useMutation({
    mutationKey: ["cep"],
    mutationFn: async (cep: string) => {
      const cleanCep = cep.replace(/\D/g, "");

      if (!cleanCep || cleanCep.length < 8) {
        throw new Error("CEP Inválido");
      }

      try {
        const cepInfo = await cepService.search(cep);

        if (cepInfo) {
          toast.success("Cep encontrado");
          return cepInfo;
        }
      } catch (error) {
        toast.error("Cep não encontrado.");
        throw new Error();
      }
    },
  });

  return {
    ...mutation,
  };
};

export default useGetCep;
