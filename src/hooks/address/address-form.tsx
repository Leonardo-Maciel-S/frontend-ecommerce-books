import { userAddressSchema } from "@/schemas/address";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const useAddressForm = () => {
  return useForm({
    resolver: yupResolver(userAddressSchema),
  });
};

export default useAddressForm;
