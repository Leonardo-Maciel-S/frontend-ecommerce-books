import { cartService } from "@/services/cart";
import { useQuery } from "@tanstack/react-query";
import useGetUserAuth from "../user/use-get-user-auth";

const useGetAllItemCart = () => {
  const { user } = useGetUserAuth();

  return useQuery({
    queryKey: ["cart-items", user],
    queryFn: async () => {
      const response = await cartService.getAllItemCart();

      return response;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetAllItemCart;
