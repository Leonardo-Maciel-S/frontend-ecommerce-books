import { queryClient } from "@/main";
import type { UserAddressBody } from "@/schemas/address";
import { addressService } from "@/services/address";
import { useMutation } from "@tanstack/react-query";

const useEditAddress = () => {
  const mutation = useMutation({
    mutationKey: ["edit-address"],
    mutationFn: async (data: { body: UserAddressBody; id: string }) => {
      const address = await addressService.editAddress({
        body: data.body,
        id: data.id,
      });

      return address;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all-addresses"],
      });
    },
  });

  return { ...mutation };
};

export default useEditAddress;
