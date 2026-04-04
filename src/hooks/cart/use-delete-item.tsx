import { queryClient } from "@/main";
import { cartService } from "@/services/cart";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useDeleteItem = (id: string | undefined) => {
  return useMutation({
    mutationKey: ["delete-item-cart", id],
    mutationFn: async () => {
      if (!id) return null;

      try {
        const response = await cartService.deleteItemCart(id);

        return response;
      } catch (error) {
        toast.error(error as string);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart-items"],
      });
    },
  });
};

export default useDeleteItem;
