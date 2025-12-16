import type { UserAddressBody } from "@/schemas/address";
import { addressService } from "@/services/address";
import { useMutation } from "@tanstack/react-query";

const useCreateAddress = () => {
  const mutation = useMutation({
    mutationKey: ["create-address"],
    mutationFn: async (data: UserAddressBody) => {
      const address = await addressService.createAddress(data);

      return address;
    },
  });

  return { ...mutation };
};

export default useCreateAddress;
