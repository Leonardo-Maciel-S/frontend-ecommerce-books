import { addressService } from "@/services/address";
import { useQuery } from "@tanstack/react-query";

const useGetAllAddress = () => {
  return useQuery({
    queryKey: ["all-addresses"],
    queryFn: async () => {
      const response = await addressService.getAllAddress();

      if (response?.addresses) {
        return response.addresses;
      }

      return [];
    },
  });
};

export default useGetAllAddress;
