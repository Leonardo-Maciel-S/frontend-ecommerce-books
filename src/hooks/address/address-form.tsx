import { userAddressSchema, type UserAddress } from "@/schemas/address";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const useAddressForm = (props?: { address: UserAddress }) => {
  const address = props && props.address;

  if (address) {
    return useForm({
      resolver: yupResolver(userAddressSchema),
      defaultValues: address,
    });
  }

  return useForm({
    resolver: yupResolver(userAddressSchema),
  });
};

export default useAddressForm;
