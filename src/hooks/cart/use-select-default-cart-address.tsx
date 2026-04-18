import { queryClient } from "@/main";
import { cartService } from "@/services/cart";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useSelectDefaultCartAddress = () => {
  return useMutation({
    mutationKey: ["default-address"],
    mutationFn: async (id?: string) => {
      if (!id) return null;

      try {
        const response = await cartService.selectDefaultCartAddress(id);

        toast.success("Endereço padrão adicionado.");

        return response;
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
};

export default useSelectDefaultCartAddress;
