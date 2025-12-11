import { userAddressSchema } from "@/schemas/address";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const useCreateAddress = () => {
  const form = useForm({
    resolver: yupResolver(userAddressSchema),
  });

  return { ...form };
};

export default useCreateAddress;
