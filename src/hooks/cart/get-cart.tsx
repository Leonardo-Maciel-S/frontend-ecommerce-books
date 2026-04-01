import { cartService } from "@/services/cart";
import { useQuery } from "@tanstack/react-query";

const useGetCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await cartService.getCart();

      console.log(response);

      return response;
    },
  });
};

export default useGetCart;
