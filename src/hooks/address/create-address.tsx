import { addressService } from "@/services/address";
import { useMutation } from "@tanstack/react-query";

const useCreateAddress = () => {
  const mutation = useMutation({
    mutationKey: ["create-address"],
    mutationFn: async () => {
      const address = await addressService.createAddress();

      return address;
    },
  });

  return { ...mutation };
};

export default useCreateAddress;
