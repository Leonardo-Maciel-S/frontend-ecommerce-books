import { addressService } from "@/services/address";
import { useQuery } from "@tanstack/react-query";

const useGetAddressById = (id: string) => {
  return useQuery({
    queryKey: [`address/${id}`],
    queryFn: async () => {
      const response = await addressService.getAddressById(id);

      if (response?.address) {
        return response.address;
      }

      return null;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetAddressById;
