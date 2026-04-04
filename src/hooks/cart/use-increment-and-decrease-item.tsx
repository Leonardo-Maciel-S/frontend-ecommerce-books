import { queryClient } from "@/main";
import { cartService } from "@/services/cart";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useIncrementAndDecreaseItem = (
  id: string | undefined,
  quantity: number,
) => {
  const incrementMutation = useMutation({
    mutationKey: ["increment-item", id, quantity],
    mutationFn: async () => {
      try {
        const response = await cartService.incrementItem(id);

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

  const decreaseMutation = useMutation({
    mutationKey: ["decrease-item", id, quantity],
    mutationFn: async () => {
      try {
        const response = await cartService.decreaseItem(id);

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

  return {
    incrementItem: { ...incrementMutation },
    decreaseItem: { ...decreaseMutation },
  };
};

export default useIncrementAndDecreaseItem;
