import { queryClient } from "@/main";
import { cartService } from "@/services/cart";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useAddItemCart = (id?: string) => {
  return useMutation({
    mutationKey: ["add-item-cart", id],
    mutationFn: async () => {
      if (!id) return null;

      try {
        const response = await cartService.addItemCart(id);

        toast.success("Produto adicionado ao carrinho.");

        return response;
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart-items"],
      });
    },
  });
};

export default useAddItemCart;
