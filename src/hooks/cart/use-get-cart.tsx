import { cartService } from "@/services/cart";
import { useQuery } from "@tanstack/react-query";

const useGetCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await cartService.getCart();

      return response;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetCart;
